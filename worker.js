// SwingDesk AI - Cron direkt ueber gemeinsames KV (v3.0).
// KEIN HTTP-Aufruf zu pages.dev: verhindert Cloudflare 530 / CF 1016.
// Setze in diesem Worker: SWINGDESK_KV -> dieselbe KV-Namespace wie Pages,
// APP_SECRET -> exakt derselbe geheime Schluessel wie in swingdesk-direct.
// Die TradingView-Sitzung bleibt in KV verschluesselt. Keine Tokens im Code.
// SwingDesk AI v4 – Cloudflare Worker with secure, stateless OAuth + TradingView MCP.
// APP_SECRET must be configured as a Cloudflare encrypted secret before login.
const MCP_URL='https://mcp.tradingview.com/mcp';
const AUTH_COOKIE='sd_tv_oauth';
const PENDING_COOKIE='sd_tv_pending';
const MAX_COOKIE_AGE=60*60*24*14;
const cookieOptions='Secure; HttpOnly; SameSite=Lax; Path=/';

function response(text,status=200,contentType='text/plain; charset=utf-8',headers={}) {
  return new Response(text,{status,headers:{'Content-Type':contentType,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','X-Frame-Options':'DENY',...headers}});
}
function json(data,status=200,headers={}){return response(JSON.stringify(data),status,'application/json; charset=utf-8',headers)}
const errJson=(message,status=500)=>json({error:String(message?.message||message||'Unbekannter Fehler').slice(0,850)},status);
function getCookie(request,name){const text=request.headers.get('Cookie')||'';return text.split(';').map(s=>s.trim()).find(s=>s.startsWith(name+'='))?.slice(name.length+1)||''}
function setCookie(name,value,maxAge=MAX_COOKIE_AGE){return `${name}=${value}; Max-Age=${maxAge}; ${cookieOptions}`}
function clearCookie(name){return setCookie(name,'',0)}
const te=new TextEncoder(),td=new TextDecoder();
function b64u(arr){let b='';for(const c of arr)b+=String.fromCharCode(c);return btoa(b).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/g,'')}
function unb64(s){const str=atob(s.replace(/-/g,'+').replace(/_/g,'/')+'='.repeat((4-s.length%4)%4));return Uint8Array.from(str,c=>c.charCodeAt(0))}
async function keyFrom(secret){const key=await crypto.subtle.digest('SHA-256',te.encode(secret));return crypto.subtle.importKey('raw',key,'AES-GCM',false,['encrypt','decrypt'])}
async function seal(payload,secret){const iv=crypto.getRandomValues(new Uint8Array(12));const enc=await crypto.subtle.encrypt({name:'AES-GCM',iv},await keyFrom(secret),te.encode(JSON.stringify(payload)));return b64u(iv)+'.'+b64u(new Uint8Array(enc))}
async function unseal(token,secret){if(!secret||!token)return null;try{const [iv,data]=token.split('.');return JSON.parse(td.decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:unb64(iv)},await keyFrom(secret),unb64(data))))}catch{return null}}
// TradingView separates the MCP resource server from the OAuth authorization server.
// Keep discovery confined to TradingView hosts; do not allow untrusted metadata to trigger arbitrary fetches.
function safeHost(url){try{const u=new URL(url);return u.protocol==='https:'&&(u.hostname==='tradingview.com'||u.hostname.endsWith('.tradingview.com'))&&!u.username&&!u.password;}catch{return false}}
const UA='SwingDesk-AI/5.0 (private TradingView MCP client)';
async function fetchJson(url,options={}){
 if(!safeHost(url))throw Error('Blockierte externe OAuth-Adresse');
 const r=await fetch(url,{...options,headers:{'Accept':'application/json','User-Agent':UA,...(options.headers||{})},redirect:'follow'});
 const t=await r.text();let j;try{j=JSON.parse(t)}catch{throw Error(`HTTP ${r.status}: Server liefert kein JSON (${new URL(url).pathname})`)}
 if(!r.ok)throw Error(`HTTP ${r.status} bei ${new URL(url).pathname}: ${String(j.error_description||j.error||'Anfrage fehlgeschlagen').slice(0,120)}`);
 return j;
}
async function tryJson(url){try{return await fetchJson(url)}catch{return null}}
function metadataUrl(issuer,type){const u=new URL(issuer);const path=u.pathname.replace(/\/$/,'');return u.origin+'/.well-known/'+type+path}
async function discover(){
 const resourceUrls=['https://mcp.tradingview.com/.well-known/oauth-protected-resource/mcp','https://mcp.tradingview.com/.well-known/oauth-protected-resource'];
 let resource=null, resourceUrl=null;
 for(const url of resourceUrls){resource=await tryJson(url);if(resource?.authorization_servers?.length){resourceUrl=url;break}}
 // The fallback host is verified against real-world TradingView MCP OAuth clients.
 // This also handles incomplete beta resource metadata without guessing /authorize on the MCP host.
 const candidatesIssuers=[...(Array.isArray(resource?.authorization_servers)?resource.authorization_servers:[]),'https://www.tradingview.com'];
 const attempts=[];
 for(const issuer of [...new Set(candidatesIssuers)]){
   if(!safeHost(issuer))continue;
   const urls=[metadataUrl(issuer,'oauth-authorization-server'),new URL('/.well-known/oauth-authorization-server',issuer).href,metadataUrl(issuer,'openid-configuration'),new URL('/.well-known/openid-configuration',issuer).href];
   for(const url of [...new Set(urls)]){
      try{
        const meta=await fetchJson(url);
        if(meta?.authorization_endpoint&&meta?.token_endpoint&&safeHost(meta.authorization_endpoint)&&safeHost(meta.token_endpoint)){
          if(meta.registration_endpoint&&!safeHost(meta.registration_endpoint))throw Error('Unzulässige Registrierungsadresse');
          return {resource,meta,issuer,metadataUrl:url,resourceUrl};
        }
        attempts.push(`${new URL(url).host}${new URL(url).pathname}: unvollständige Metadaten`);
      }catch(e){attempts.push(`${new URL(url).host}${new URL(url).pathname}: ${String(e.message).slice(0,110)}`)}
   }
 }
 // No confidential tokens or user data enter this diagnostic.
 throw Error('TradingView OAuth-Metadaten nicht erreichbar. Diagnose: '+attempts.slice(0,5).join(' | '));
}
function publicClient(origin){return {client_id:origin+'/oauth-client-metadata.json',client_name:'SwingDesk AI Private',client_uri:origin,redirect_uris:[origin+'/auth/callback'],grant_types:['authorization_code','refresh_token'],response_types:['code'],token_endpoint_auth_method:'none',application_type:'web'} }
async function clientFor(meta,origin){
 const client=publicClient(origin);
 if(meta.client_id_metadata_document_supported===true)return {client_id:client.client_id,method:'metadata'};
 if(meta.registration_endpoint&&safeHost(meta.registration_endpoint)){
   const {client_id:unused,...registration}=client;
   const j=await fetchJson(meta.registration_endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(registration)});
   if(j.client_id)return {client_id:j.client_id,client_secret:j.client_secret||null,method:'dynamic_registration'};
 }
 throw Error('TradingView bietet diesem Client keine dynamische Registrierung oder Client-ID-Metadaten an. Verbindung über diese private Web-App ist derzeit nicht freigegeben.');
}
async function sha256(str){return crypto.subtle.digest('SHA-256',te.encode(str))}
function randomCode(n=32){return b64u(crypto.getRandomValues(new Uint8Array(n)))}
function tooLongCookie(name,value){if(value.length>3600)throw Error(`OAuth-Cookie ${name} ist zu groß. Diese Version benötigt dann eine KV-Speicherung.`)}
async function startAuth(request,env,origin){
 const {resource,meta}=await discover();
 const client=await clientFor(meta,origin);
 const verifier=randomCode(36),state=randomCode(24),challenge=b64u(new Uint8Array(await sha256(verifier)));
 const next={createdAt:Date.now(),state,verifier,client,token_endpoint:meta.token_endpoint,redirect_uri:origin+'/auth/callback',resource:MCP_URL};
 const pending=await seal(next,env.APP_SECRET);tooLongCookie('pending',pending);
 const u=new URL(meta.authorization_endpoint);u.searchParams.set('response_type','code');u.searchParams.set('client_id',client.client_id);u.searchParams.set('redirect_uri',next.redirect_uri);u.searchParams.set('code_challenge',challenge);u.searchParams.set('code_challenge_method','S256');u.searchParams.set('state',state);u.searchParams.set('resource',MCP_URL);
 // Providers advertise required scopes in protected-resource metadata. Never guess scopes.
 const advertised=resource?.scopes_supported||[];if(Array.isArray(advertised)){const scopes=advertised.filter(x=>/^(read[:._/-]|mcp$|mcp:tools$)|[:._/-]read$/i.test(String(x)));if(scopes.length)u.searchParams.set('scope',scopes.join(' '));}
 return response(null,302,'text/plain',{Location:u.href,'Set-Cookie':setCookie(PENDING_COOKIE,pending,600)});
}
async function tokenRequest(endpoint,params){
 if(!safeHost(endpoint))throw Error('Unsicherer Token-Endpunkt'); const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','Accept':'application/json','User-Agent':UA},body:new URLSearchParams(params).toString()});
 const t=await r.text();let j;try{j=JSON.parse(t)}catch{throw Error('TradingView OAuth-Tokenantwort unlesbar: '+t.slice(0,120))}
 if(!r.ok)throw Error('TradingView Tokenfehler '+r.status+': '+String(j.error_description||j.error||'Unbekannt').slice(0,200));return j;
}
async function finishAuth(request,env,origin){
 const url=new URL(request.url);if(url.searchParams.has('error'))return response('TradingView hat die Anmeldung nicht freigegeben: '+url.searchParams.get('error'),400);
 const pending=await unseal(getCookie(request,PENDING_COOKIE),env.APP_SECRET);
 if(!pending||Date.now()-pending.createdAt>600000||url.searchParams.get('state')!==pending.state||!url.searchParams.has('code'))return response('OAuth-Sitzung abgelaufen oder State stimmt nicht. Starte die Verbindung erneut über /auth/start.',400);
 if(pending.redirect_uri!==origin+'/auth/callback'||!safeHost(pending.token_endpoint))return response('Ungültige OAuth-Konfiguration.',403);
 const p={grant_type:'authorization_code',code:url.searchParams.get('code'),redirect_uri:pending.redirect_uri,client_id:pending.client.client_id,code_verifier:pending.verifier,resource:MCP_URL};
 if(pending.client.client_secret)p.client_secret=pending.client.client_secret;
 const t=await tokenRequest(pending.token_endpoint,p);
 if(!t.access_token)throw Error('TradingView hat kein Access-Token geliefert');
 const session={access_token:t.access_token,refresh_token:t.refresh_token,exp:Date.now()+Math.max(30,Number(t.expires_in||3600)-60)*1000,token_endpoint:pending.token_endpoint,client:pending.client};
 const sealed=await seal(session,env.APP_SECRET);tooLongCookie('session',sealed);
 const h=new Headers({Location:'/?connected=1','Cache-Control':'no-store'});h.append('Set-Cookie',setCookie(AUTH_COOKIE,sealed));h.append('Set-Cookie',clearCookie(PENDING_COOKIE));return new Response(null,{status:302,headers:h});
}
async function obtainSession(request,env){const cookie=getCookie(request,AUTH_COOKIE);let s=await unseal(cookie,env.APP_SECRET);if(!s?.access_token)return {session:null};
 if(s.exp&&Date.now()<s.exp)return {session:s};
 if(!s.refresh_token)return {session:null};
 try{const args={grant_type:'refresh_token',refresh_token:s.refresh_token,client_id:s.client.client_id,resource:MCP_URL};if(s.client.client_secret)args.client_secret=s.client.client_secret;
 const next=await tokenRequest(s.token_endpoint,args);if(!next.access_token)throw Error('Token ungültig');s={...s,access_token:next.access_token,refresh_token:next.refresh_token||s.refresh_token,exp:Date.now()+Math.max(30,Number(next.expires_in||3600)-60)*1000};const token=await seal(s,env.APP_SECRET);tooLongCookie('session',token);return {session:s,setCookie:setCookie(AUTH_COOKIE,token)};
 }catch{return {session:null,setCookie:clearCookie(AUTH_COOKIE)}}
}
function unwrap(raw){if(raw?.error)throw Error(raw.error.message||'MCP: Unbekannter Fehler');let v=raw?.result??raw;
 if(v?.isError)throw Error((v.content||[]).map(x=>x.text||'').join(' ').slice(0,250)||'TradingView meldet einen Fehler');
 if(v?.structuredContent){let s=v.structuredContent;if(s.result)s=s.result;return s}
 if(Array.isArray(v?.content)){const texts=v.content.filter(x=>x.type==='text').map(x=>x.text||'');if(texts.length){const combined=texts.join('\n');try{return JSON.parse(combined)}catch{try{return JSON.parse(texts[0])}catch{return {raw:combined}}}}}
 return v;
}
function parseRpc(t){
 try{return JSON.parse(t)}catch{}
 const messages=[];
 for(const block of t.split(/\r?\n\r?\n/)){const data=block.split(/\r?\n/).filter(line=>line.startsWith('data:')).map(line=>line.slice(5).trim()).join('\n');if(data&&data!=='[DONE]'){try{messages.push(JSON.parse(data))}catch{}}}
 return messages.findLast(x=>x?.result||x?.error)||messages.at(-1)||{error:{message:'Keine JSON-RPC-Antwort'}};
}
async function rpc(method,params,token,sessionId){
 const headers={'Content-Type':'application/json','Accept':'application/json, text/event-stream','Authorization':'Bearer '+token,'MCP-Protocol-Version':'2025-06-18'};
 if(sessionId)headers['Mcp-Session-Id']=sessionId;
 const r=await fetch(MCP_URL,{method:'POST',headers,body:JSON.stringify({jsonrpc:'2.0',id:Math.floor(Math.random()*1e9),method,params})});
 if(!r.ok)throw Error(`TradingView MCP HTTP ${r.status}: ${(await r.text()).slice(0,180)}`);
 return {payload:parseRpc(await r.text()),sessionId:r.headers.get('Mcp-Session-Id')||sessionId};
}
async function mcpCall(name,args,session){
 // Use one session per request; no cross-request Worker memory required.
 let sid=null;
 const init=await rpc('initialize',{protocolVersion:'2025-06-18',capabilities:{},clientInfo:{name:'SwingDesk AI Private',version:'11.0.0'}},session.access_token);
 sid=init.sessionId;if(init.payload.error)throw Error(init.payload.error.message||'MCP Initialize fehlgeschlagen');
 // MCP initialized notification has no id; must not expect a response.
 const headers={'Content-Type':'application/json','Accept':'application/json, text/event-stream','Authorization':'Bearer '+session.access_token,'MCP-Protocol-Version':'2025-06-18'};
 if(sid)headers['Mcp-Session-Id']=sid;
 try{await fetch(MCP_URL,{method:'POST',headers,body:JSON.stringify({jsonrpc:'2.0',method:'notifications/initialized'})})}catch{}
 const call=await rpc('tools/call',{name,arguments:args},session.access_token,sid);
 return unwrap(call.payload);
}
function deepArrays(obj,pred,max=4){const seen=new Set(),out=[];function walk(x,depth){if(depth>max||!x||typeof x!=='object'||seen.has(x))return;seen.add(x);if(Array.isArray(x)){if(x.some(pred))out.push(x);for(const y of x)walk(y,depth+1)}else{for(const v of Object.values(x))walk(v,depth+1)}}walk(obj,0);return out}
const FLAG_COLORS=['blue','green','orange','purple','cyan'];
function flagColor(value){if(value==null||value===false)return null;
 if(typeof value==='object'){for(const key of ['color','name','value','flag_color','flagColor','id']){const v=flagColor(value[key]);if(v)return v}return null}
 const s=String(value).toLowerCase().trim();if(!s)return null;
 if(/(^|[^a-z])(blue|blau)([^a-z]|$)/.test(s))return 'blue';
 if(/(^|[^a-z])(green|gruen|grün)([^a-z]|$)/.test(s))return 'green';
 if(/(^|[^a-z])(orange)([^a-z]|$)/.test(s))return 'orange';
 if(/(^|[^a-z])(purple|lila|violet|violett)([^a-z]|$)/.test(s))return 'purple';
 if(/(^|[^a-z])(cyan|turquoise|tuerkis|türkis|aqua|teal)([^a-z]|$)/.test(s))return 'cyan';
 return null;
}
function extractFlag(obj,section=''){
 if(!obj||typeof obj!=='object')return null;
 for(const key of ['flag_color','flagColor','flagged_color','flaggedColor','flag','flag_list_color','flagListColor','flags','flagged_list','flaggedList']){const raw=obj[key];const value=Array.isArray(raw)?raw[0]:raw;const color=flagColor(value);if(color)return color}
 if(obj.is_flagged_list||obj.isFlaggedList||obj.type==='flagged'||obj.list_type==='flagged'||obj.kind==='flagged'||obj.category==='flagged'){return flagColor(obj.color)||flagColor(obj.name)||flagColor(obj.title)||null}
 // A named dedicated colored list is a defensible clue, but regular section headings are not flags.
 if(section==='colored-list')return flagColor(obj.name)||flagColor(obj.title)||null;
 return null;
}
function logoUrl(obj){if(!obj||typeof obj!=='object')return null;
 const urls=[obj.logo_url,obj.logoUrl,...(Array.isArray(obj.logo_urls)?obj.logo_urls:[]),...(Array.isArray(obj.logo?.logo_urls)?obj.logo.logo_urls:[])];
 for(const url of urls){try{const u=new URL(url);if(u.protocol==='https:'&&u.hostname==='s3-symbol-logo.tradingview.com')return u.href}catch{}}
 const raw=obj.logoid||obj.logo_id||obj.logoId||obj.logo?.logoid||obj.logo?.id;
 if(typeof raw!=='string')return null;let id=raw.trim().replace(/\.svg$/i,'');if(!/^[A-Za-z0-9_/-]{1,100}$/.test(id)||id.includes('..')||id.startsWith('/'))return null;
 return 'https://s3-symbol-logo.tradingview.com/'+id+'.svg';
}
function listObjects(data){let arrays=deepArrays(data,x=>x&&typeof x==='object'&&!Array.isArray(x)&&(x.watchlist_id||x.id)&&(x.name||x.title),5);
 if(Array.isArray(data))arrays.unshift(data);
 const found=new Map();for(const arr of arrays)for(const x of arr){if(!x||typeof x!=='object')continue;const id=String(x.watchlist_id??x.id??'');const name=String(x.name??x.title??'');if(/^\d+$/.test(id)&&name)found.set(id,{id,name,flagColor:extractFlag(x),listType:String(x.type||x.list_type||x.kind||""),isFlagged:!!(x.is_flagged_list||x.isFlaggedList||String(x.type||x.list_type||x.kind||"").toLowerCase().includes("flag")||/flag(?:ged|ge|gen)?\b/i.test(name))})}
 return [...found.values()];}
const tickerRE=/^[A-Z0-9_.-]{1,24}:[A-Z0-9_.!/-]{1,32}$/i;
function companyObjects(data){
 const rows=new Map(), sectionNames=new Set(), seen=new Set();
 function norm(s){return String(s||'').replace(/^###\s*/,'').trim().slice(0,120)}
 function sectionHeader(s){return typeof s==='string'&&s.trim().startsWith('###')?norm(s):null}
 function add(sym,section,obj={}){
   if(!tickerRE.test(String(sym||'')))return;
   sym=String(sym).toUpperCase();const old=rows.get(sym)||{};
   rows.set(sym,{symbol:sym,section:norm(section)||'Ohne Abschnitt',flagColor:null,
    logoUrl:logoUrl(obj)||old.logoUrl||null,
    description:String(obj.description||obj.company_name||obj.company||obj.full_description||old.description||'').slice(0,120)});
 }
 function walk(v,section='',depth=0){
  if(depth>15||v==null)return;
  if(typeof v==='string'){
   const heading=sectionHeader(v);if(heading!==null){if(heading)sectionNames.add(heading);return heading}
   add(v,section);return;
  }
  if(typeof v!=='object'||seen.has(v))return;
  seen.add(v);
  if(Array.isArray(v)){
   let current=section;
   for(const item of v){
    const next=walk(item,current,depth+1);
    if(typeof next==='string')current=next;
   }
   return;
  }
  const candidate=typeof v.symbol==='string'?v.symbol:typeof v.ticker==='string'?v.ticker:typeof v.full_name==='string'?v.full_name:null;
  const heading=sectionHeader(candidate);
  if(heading!==null){if(heading)sectionNames.add(heading);return heading}
  const type=String(v.type||v.kind||v.row_type||'').toLowerCase();
  if(['section','header','divider','section_header'].includes(type)){
   const name=norm(v.name||v.title||v.label||v.section_name||'');
   if(name)sectionNames.add(name);
   return name||section;
  }
  const explicit=typeof v.section==='string'?v.section:v.section?.name||v.section_name||v.section_title||v.group_name||v.group?.name||null;
  const local=norm(explicit||section);
  if(explicit){if(local)sectionNames.add(local)}
  if(candidate&&tickerRE.test(candidate)){add(candidate,local,v);return}
  // Only treat a container's name as a section when the parent explicitly uses sections.
  for(const [key,val] of Object.entries(v)){
   if(['logo','logo_urls','flags','metadata','company','description','company_name','name','title','section','group','section_name','section_title','group_name','id','watchlist_id','read_only','flag_color'].includes(key))continue;
   if(key==='sections'&&Array.isArray(val)){
    for(const item of val){
     if(item&&typeof item==='object'&&!Array.isArray(item)){
      const name=norm(item.name||item.title||item.label||item.section_name||'');
      if(name)sectionNames.add(name);
      walk(item.symbols||item.items||item.entries||item.companies||[],name||local,depth+1);
     }else walk(item,local,depth+1)
    }
   } else if(Array.isArray(val)&&['symbols','items','entries','companies','assets','data','result','watchlist'].includes(key))walk(val,local,depth+1);
   else if(val&&typeof val==='object')walk(val,local,depth+1);
  }
 }
 walk(data);
 // raw string fallback, respecting ### section markers if MCP serializes a text response.
 if(!rows.size&&typeof data?.raw==='string'){
  let current='';for(const token of data.raw.split(/[\n,\s]+/)){
   const h=sectionHeader(token);if(h!==null){current=h;sectionNames.add(h)}else add(token,current)
  }
 }
 const result=[...rows.values()].slice(0,500);
 Object.defineProperty(result,'sectionNames',{value:[...sectionNames],enumerable:false});
 return result;
}
function newsObjects(data,symbol){const arrays=deepArrays(data,x=>x&&typeof x==='object'&&(x.title||x.headline),7);if(Array.isArray(data))arrays.unshift(data);const out=[];for(const arr of arrays){for(const n of arr){if(!n||!n.title&&!n.headline)continue;let link=String(n.link??n.url??'');try{if(!['https:','http:'].includes(new URL(link).protocol))link=''}catch{link=''}out.push({id:String(n.id||n.title||n.headline),title:String(n.title||n.headline).slice(0,300),published:Number(n.published||n.timestamp||0),provider:String(n.provider||'TradingView').slice(0,100),link,symbol})}if(out.length)break}
 return [...new Map(out.map(x=>[x.id,x])).values()].slice(0,12)}
function sameOrigin(request){const origin=request.headers.get('Origin');return !origin||origin===new URL(request.url).origin}
const pattern=/^[A-Z0-9_.-]{1,24}:[A-Z0-9_.!/-]{1,32}$/i;
function sectionRating(name){
 const n=String(name||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLocaleLowerCase('de-DE');
 if(n==='kauf'||n==='hot pick'||n==='hot picks')return 'green';
 if(n==='beobachten'||n==='neutral')return 'yellow';
 if(n==='weniger interessant'||n==='uninteressant')return 'red';
 return null;
}
async function priorityLists(session){
 const canonical=[['1 - H1','H1'],['2 - H4','H4'],['3 - Daily','Daily'],['4 - Weekly','Weekly'],['5 - Monthly','Monthly']];
 const exactKey=name=>String(name||'').trim().replace(/[\u2012-\u2015]/g,'-').replace(/\s*-\s*/g,' - ').toLowerCase();
 const listed=listObjects(await mcpCall('list_watchlists',{},session));
 const groupData=[],merged=new Map(),missing=[];
 for(const [name,group] of canonical){
  const matching=listed.filter(l=>exactKey(l.name)===name.toLowerCase());
  if(!matching.length){missing.push(name);continue}
  if(matching.length>1)throw Error('Mehrfacher Watchlist-Name: '+name);
  const list=matching[0];
  const raw=await mcpCall('get_watchlist',{watchlist_id:list.id},session);
  const entries=companyObjects(raw);
  groupData.push({name,group,id:list.id,count:entries.length,
   sectionNames:group==='H1'?entries.sectionNames:undefined,
   sectioned:group==='H1'?entries.filter(x=>x.section!=='Ohne Abschnitt').length:undefined});
  for(const item of entries){const existing=merged.get(item.symbol);
   const h1Attrs=group==='H1'?{h1Section:item.section==='Ohne Abschnitt'?null:item.section,h1Rating:sectionRating(item.section)}:{};
   if(!existing)merged.set(item.symbol,{symbol:item.symbol,description:item.description||'',logoUrl:item.logoUrl||null,groups:[group],...h1Attrs});
   else{existing.groups.push(group);if(!existing.description&&item.description)existing.description=item.description;if(!existing.logoUrl&&item.logoUrl)existing.logoUrl=item.logoUrl;if(group==='H1')Object.assign(existing,h1Attrs)}
  }
 }
 const h1Group=groupData.find(x=>x.group==='H1');
 return {source:'tradingview_mcp_named_watchlists',matched:groupData.length,groups:groupData,missing,assets:[...merged.values()],syncedAt:new Date().toISOString(),
  sectionInfo:!h1Group?{state:'missing_list',message:'Watchlist 1 - H1 nicht gefunden.'}:h1Group.sectioned>0?{state:'received',message:'Abschnittsinformationen übertragen.',sectionNames:h1Group.sectionNames,assigned:h1Group.sectioned}: {state:'not_received',message:'TradingView-MCP liefert derzeit keine zuordenbaren H1-Abschnitte.',sectionNames:h1Group.sectionNames||[],assigned:0}};
}
const KV_SESSION='v10:oauth_session';
const KV_RATINGS='v10:ratings';
const KV_SNAPSHOT='v10:snapshot';
const KV_STATE='v10:state';
function backgroundConfigured(env){return !!(env.SWINGDESK_KV&&env.SYNC_KEY&&env.SYNC_KEY.length>=32)}
async function safeEq(a,b){const x=new Uint8Array(await crypto.subtle.digest('SHA-256',te.encode(String(a||''))));const y=new Uint8Array(await crypto.subtle.digest('SHA-256',te.encode(String(b||''))));let diff=0;for(let i=0;i<x.length;i++)diff|=x[i]^y[i];return diff===0}
async function backgroundAuth(request,env,cron=false){if(!backgroundConfigured(env))return false;const got=cron?(request.headers.get('Authorization')||'').replace(/^Bearer\s+/i,''):request.headers.get('X-Swingdesk-Key');return await safeEq(got||'',env.SYNC_KEY)}
async function getSyncState(env){return await env.SWINGDESK_KV.get(KV_STATE,'json')||{enabled:false,lastSuccess:null,error:null}}
async function syncServer(env){let state=await getSyncState(env);if(!state.enabled)return {skipped:true};const encrypted=await env.SWINGDESK_KV.get(KV_SESSION);let s=await unseal(encrypted,env.APP_SECRET);if(!s?.access_token)throw Error('Keine gespeicherte TradingView-Autorisierung. In SwingDesk erneut aktivieren.');
 try{if(s.exp&&Date.now()>=s.exp){if(!s.refresh_token)throw Error('OAuth-Token abgelaufen und nicht erneuerbar. TradingView erneut verbinden.');const p={grant_type:'refresh_token',refresh_token:s.refresh_token,client_id:s.client.client_id,resource:MCP_URL};if(s.client.client_secret)p.client_secret=s.client.client_secret;const refreshed=await tokenRequest(s.token_endpoint,p);if(!refreshed.access_token)throw Error('TradingView hat die Erneuerung des Zugriffstokens abgelehnt.');s={...s,access_token:refreshed.access_token,refresh_token:refreshed.refresh_token||s.refresh_token,exp:Date.now()+Math.max(30,Number(refreshed.expires_in||3600)-60)*1000};await env.SWINGDESK_KV.put(KV_SESSION,await seal(s,env.APP_SECRET));}
 const snapshot=await priorityLists(s);if(snapshot.matched===0)throw Error('Keine der fünf regulären Watchlists gefunden.');await env.SWINGDESK_KV.put(KV_SNAPSHOT,JSON.stringify(snapshot));state={enabled:true,lastSuccess:snapshot.syncedAt,error:null,matched:snapshot.matched,count:snapshot.assets.length};await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(state));return {ok:true,lastSuccess:state.lastSuccess,matched:state.matched,count:state.count};}
 catch(e){state={...state,error:String(e.message||e).slice(0,220),lastAttempt:new Date().toISOString()};await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(state));throw e;}
}

// Dedicated, cron-only entrypoint. No public endpoint triggers a sync.
const CRON_VERSION = 'swingdesk-direct-kv-3.0';
export default {
  async fetch() {
    return Response.json({ service: 'SwingDesk Cron', version: CRON_VERSION, mode: 'shared-kv-direct', note: 'Synchronisierung nur per Cron-Trigger.' }, { headers: { 'Cache-Control': 'no-store' } });
  },
  async scheduled(event, env) {
    console.log({ stage: 'START', version: CRON_VERSION, cron: event?.cron || null });
    try {
      if (!env.SWINGDESK_KV || typeof env.SWINGDESK_KV.get !== 'function' || typeof env.SWINGDESK_KV.put !== 'function')
        throw new Error('KV_BINDING_MISSING: SWINGDESK_KV an swingdesk-private binden');
      if (typeof env.APP_SECRET !== 'string' || env.APP_SECRET.length < 32)
        throw new Error('APP_SECRET_MISSING_OR_TOO_SHORT: denselben Secret-Wert wie in swingdesk-direct hinterlegen');
      const result = await syncServer(env);
      if (result?.skipped) {
        console.log({ stage: 'SKIPPED', version: CRON_VERSION, reason: 'Hintergrundzugang nicht aktiviert' });
        return;
      }
      console.log({ stage: 'SUCCESS', version: CRON_VERSION, lastSuccess: result.lastSuccess || null, matched: result.matched || 0, count: result.count || 0 });
    } catch (error) {
      // No access/refresh tokens or credentials in logs.
      const reason = String(error?.message || error).slice(0, 260)
        .replace(/Bearer\s+[^\s]+/gi, 'Bearer [redacted]');
      console.error({ stage: 'FAILED', version: CRON_VERSION, reason });
      throw error;
    }
  }
};
