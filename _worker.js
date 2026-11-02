const UI_HTML="<!DOCTYPE html>\n\n<html lang=\"de\"><head><meta charset=\"utf-8\"/><meta content=\"width=device-width,initial-scale=1,viewport-fit=cover\" name=\"viewport\"/><meta content=\"#0e1826\" name=\"theme-color\"/><meta content=\"yes\" name=\"apple-mobile-web-app-capable\"/><meta content=\"EGE Financial Markets Analyse Tool\" name=\"apple-mobile-web-app-title\"/><meta name=\"application-name\" content=\"EGE Financial Markets Analyse Tool\"/><meta name=\"description\" content=\"EGE Financial Markets Analyse Tool – TradingView Watchlists, Analyse und Synchronisierungsstatus.\"/><title>EGE – Financial Markets Analyse Tool</title><style>\n:root{--bg:#f3f6f9;--ink:#152333;--sub:#6e8191;--accent:#11b39c;--dark:#0d1825;--line:#e1e7ec;--light:#e7f9f4}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;font-size:14px}button,input,select{font:inherit}a{color:inherit}button{border:0;cursor:pointer}header{background:var(--dark);color:white;padding:22px 21px 18px}header .brand{font-size:20px;font-weight:900;letter-spacing:-.6px}header .brand em{color:#52d8bb;font-style:normal}header p{color:#a7b6c5;margin:8px 0 0;font-size:12px;line-height:1.5}nav{display:flex;gap:7px;overflow:auto;padding:10px 14px;background:var(--dark)}nav button{flex-shrink:0;background:#1b3040;color:#c7dce5;padding:10px 14px;border-radius:10px;font-weight:700;font-size:12px}nav button.active{background:#22b99f;color:#062b2a}main{max-width:1024px;margin:auto;padding:16px 14px 110px}.card{background:white;border:1px solid var(--line);border-radius:16px;padding:18px;margin:13px 0;box-shadow:0 7px 24px #132f4510}.card h2{font-size:18px;margin:0 0 9px;letter-spacing:-.3px}.card h3{font-size:14px;margin:4px 0 11px}.card p{line-height:1.65;color:var(--sub);margin:8px 0}.row{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}.muted{color:var(--sub)}.small{font-size:12px;line-height:1.6}.badge{display:inline-block;font-size:11px;font-weight:800;padding:7px 10px;border-radius:7px;background:#f0f2f5;color:#5f7080}.badge.ok{background:var(--light);color:#137a69}.badge.warn{background:#fff1dc;color:#a16617}.badge.bad{background:#fae7e7;color:#b64545}.btn{display:inline-block;background:var(--accent);color:#052d2b;font-weight:800;padding:12px 16px;border-radius:10px;text-decoration:none;text-align:center}.btn.alt{background:#ecf3f5;color:#23465a}.btn.dark{background:#1d3342;color:#eff}.btn:disabled{opacity:.5}.actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}select,input{background:#fbfcfd;border:1px solid #dbe4eb;border-radius:9px;padding:12px;max-width:100%;width:100%;color:var(--ink)}label{font-size:12px;font-weight:800;display:block;margin:13px 0 6px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.stat{background:#f1f8f7;padding:14px;border-radius:12px}.stat b{display:block;font-size:23px;margin-top:4px}.item{padding:13px 0;border-bottom:1px solid var(--line)}.item:last-child{border:0}.ticker{font-weight:850;font-size:14px}.item small{color:var(--sub);display:block;margin-top:5px}.note{background:#fff7eb;padding:12px 14px;border:1px solid #f2dfbc;border-radius:10px;color:#92661f;font-size:12px;line-height:1.65}.notice{background:#e8f7f4;border-radius:10px;padding:12px 14px;color:#1c6c63;font-size:12px;line-height:1.6}.empty{padding:21px 0;text-align:center;color:var(--sub)}.hidden{display:none!important}.tabs{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px}.tabs button{padding:8px 11px;border-radius:8px;background:#eaf0f4;color:#456; font-weight:700}.tabs button.sel{background:#133a40;color:white}#briefText{white-space:pre-wrap;font-size:14px;line-height:1.85;color:#30475a}.tf-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:5px;margin-top:11px}.tf{font-size:11px;padding:8px 3px;text-align:center;background:#edf2f5;border-radius:7px}.tf.bull{background:#d6f4e7;color:#087858}.tf.bear{background:#fae4e2;color:#b84141}.kicker{font-size:10px;color:#5f98a1;font-weight:900;letter-spacing:1px;text-transform:uppercase}.log{color:#5f778b;white-space:pre-wrap;overflow-wrap:anywhere;font-size:11px}.spinner{display:inline-block;width:12px;height:12px;border:2px solid #acc;border-top-color:#099;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}footer{color:#79909e;text-align:center;font-size:11px;padding:30px 8px}#topmsg{padding:9px 15px;background:#fff4df;color:#835c17;font-size:12px;display:none}.details summary{cursor:pointer;font-weight:700;color:#32796f}.headline{padding:9px 0;border-bottom:1px solid #e8edef}.headline a{color:#246b78;text-decoration:underline;text-underline-offset:2px}.headmeta{color:#8b9aa7;font-size:11px;margin-top:3px}.tf-grid{display:grid!important}body.theme-dark{--bg:#0b1420;--ink:#e8f0f7;--sub:#9fb0c0;--accent:#48d4ba;--dark:#071019;--line:#263546;--light:#143d32}body.theme-dark .card{background:#111c28;box-shadow:none}body.theme-dark nav button{background:#173040;color:#d7e7ef}body.theme-dark nav button.active{background:#2bc6ac;color:#062524}body.theme-dark .stat{background:#10222c}body.theme-dark select,body.theme-dark input{background:#0f1823;border-color:#2a3c4d;color:var(--ink)}body.theme-dark .badge{background:#1a2734;color:#b9cad8}body.theme-dark .badge.ok{background:#12372f;color:#7ee1c7}body.theme-dark .badge.warn{background:#3b2c12;color:#f2c06a}body.theme-dark .badge.bad{background:#431b1b;color:#f0a3a3}body.theme-dark .note{background:#33260f;border-color:#5b4317;color:#f4c977}body.theme-dark .notice{background:#0e2c28;color:#9ce0d6}body.theme-dark .flagsInfo,body.theme-dark .h1SectionStatus,body.theme-dark .status-tile,body.theme-dark .syncPanel{background:#101b27;border-color:#2a3b4c;color:var(--ink)}body.theme-dark .sectionBadge{background:#21303e;color:#d7e3ec}body.theme-dark .list-tag,body.theme-dark .tabs button,body.theme-dark .filterBtns button,body.theme-dark .ratingFilter button{background:#162531;color:#d9e6ef;border-color:#294051}body.theme-dark .filterBtns button.sel,body.theme-dark .ratingFilter button.sel,body.theme-dark .tabs button.sel{background:#2bc6ac;color:#062a29}body.theme-dark footer{color:#9fb0c0}body.theme-dark .companyLogo{background:#182530;border-color:#304150}body.theme-dark .flagBadge{border-color:#334555}body.theme-dark .item{border-bottom-color:#243443}body.theme-dark .data-status,body.theme-dark .muted,body.theme-dark .subtle,body.theme-dark .small,body.theme-dark .companyName,body.theme-dark .mini,body.theme-dark .headmeta{color:#9fb0c0}body.theme-dark #topmsg{background:#423114;color:#f3cf82}body.theme-dark .btn.alt{background:#1b2a37;color:#e5eef5}body.theme-dark .btn.dark{background:#101b27;color:#e5eef5}body.theme-dark .headline{border-bottom-color:#243443}body.theme-dark .row span,body.theme-dark label,body.theme-dark h1,body.theme-dark h2,body.theme-dark h3,body.theme-dark b,body.theme-dark strong{color:var(--ink)}body.theme-dark .syncDot{filter:saturate(1.05)}@media(min-width:740px){header{padding:26px max(calc((100vw - 1000px)/2),24px)}main{padding-top:20px}.grid{grid-template-columns:repeat(4,1fr)}}\n\n.analysis-trends{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:5px;margin:12px 0}.analysis-trend{padding:11px 3px;text-align:center;border-radius:10px;background:#e9eef3;color:#657384;font-size:10px;font-weight:800}.analysis-trend strong{display:block;font-size:12px;margin-top:5px}.analysis-trend.bull{background:#d6f4e7;color:#087858}.analysis-trend.bear{background:#fae4e2;color:#b84141}.analysis-trend.neutral{background:#edf0f5;color:#596c7a}body.theme-dark .analysis-trend.bull{background:#103d31;color:#79e5b5}body.theme-dark .analysis-trend.bear{background:#431f25;color:#ff9b9b}body.theme-dark .analysis-trend.neutral{background:#233240;color:#b8c9d6}\n/* Flagged groups and company logos */\n.flags{display:flex;gap:7px;overflow-x:auto;padding:12px 0 8px;scrollbar-width:thin}\n.flags button{white-space:nowrap;border:1px solid #dce6e9;background:#f3f6f8;color:#39566a;border-radius:11px;padding:10px 12px;font-weight:800;font-size:12px}\n.flags button.sel{background:#132f3d;color:#fff;border-color:#132f3d}\n.flagDot{font-size:18px;vertical-align:-2px;font-weight:900;margin-right:4px}\n.company{display:flex;align-items:center;gap:11px;min-width:0;flex:1}\n.companyLogo{height:39px;width:39px;flex:0 0 39px;border-radius:50%;border:1px solid #e5e9ee;background:#f4f7f8;display:flex;align-items:center;justify-content:center;font-weight:900;color:#507084;object-fit:contain}\n.companyName{font-size:12px;color:#698294;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:235px}\n.flagBadge{border:1px solid #e4e9ed;padding:5px 8px;border-radius:8px;font-weight:800;font-size:11px;white-space:nowrap}\n.flagsInfo{background:#f1f7fb;border:1px solid #dce9f1;border-radius:10px;padding:12px;margin-top:10px;font-size:12px;line-height:1.6;color:#416277}\n.smallSelect{width:auto;max-width:190px;font-size:11px;padding:7px;border-radius:7px}\n.item .row{flex-wrap:nowrap}.mini{font-size:10px;color:#8294a1}\n@media(max-width:390px){.companyName{max-width:165px}.flagBadge{font-size:10px;padding:5px}}\n.domainRow{margin:10px 0 2px}.domainRow input{width:100%;max-width:255px;font-size:12px;padding:8px;border:1px solid #dce4ea;border-radius:8px}.smartLogo{padding:2px;object-fit:contain}.logoSearch{font-size:11px;display:inline-block;margin:2px 0 8px;color:#227d8d;text-decoration:underline}.note a{font-weight:700}\n:root{--light:#e9f8f4} .updated{display:flex;gap:7px;align-items:center;color:#597282;font-size:12px;padding-top:8px}.updated .dot{height:8px;width:8px;border-radius:99px;background:#17b39b}.updated.warning .dot{background:#e7a035}.list-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #edf1f4}.list-row:last-child{border-bottom:0}.list-tag{display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;background:#e9f2f5;color:#204f63;padding:6px 10px;border-radius:8px;min-width:90px}.subtle{font-size:11px;color:#8293a2}.filterBtns{display:flex;gap:6px;overflow:auto;padding:9px 0}.filterBtns button{white-space:nowrap;border:1px solid #dce6e9;background:#f3f6f8;color:#39566a;border-radius:11px;padding:10px 12px;font-weight:800;font-size:12px}.filterBtns button.sel{background:#132f3d;color:#fff;border-color:#132f3d}.big-connection{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}.companyLogo{object-fit:contain}.data-status{font-size:12px;color:#627b8c;margin:10px 0 3px;line-height:1.6}.watchMissing{color:#ac6b13}\n/* v10: user-defined flags, distinct from TradingView timeframes */\n.ratingFilter{display:flex;gap:6px;overflow:auto;padding:9px 0}.ratingFilter button{white-space:nowrap;background:#f1f5f7;border-radius:10px;color:#41596b;padding:9px 11px;font-weight:750}.ratingFilter button.sel{background:#183241;color:white}\n.ratingSelect{font-size:12px;max-width:175px;width:auto;padding:8px;border-radius:9px;font-weight:750}\n.ratingBar{display:flex;gap:7px;align-items:center;justify-content:space-between;margin-top:9px;flex-wrap:wrap}\n.ratingInfo{font-size:12px;color:#697c8b}.syncPanel{background:#f2f9f7;border:1px solid #cce8df;border-radius:11px;padding:13px;margin:11px 0}.syncPanel p{margin:4px 0}.syncPanel input{margin:8px 0}.syncDot{width:8px;height:8px;border-radius:100%;display:inline-block;background:#efb045;margin-right:5px}.syncDot.on{background:#0bac81}\n.ratingMark{font-size:13px;padding:5px 8px;border-radius:9px;font-weight:800}.ratingMark.red{color:#9e3232;background:#ffe4e4}.ratingMark.yellow{color:#8a6400;background:#fff4bc}.ratingMark.green{color:#08734d;background:#dcf7e9}\n\n.h1SectionStatus{padding:12px;border:1px solid #dce7ee;border-radius:11px;font-size:12px;line-height:1.6;background:#f1f7fa;margin:12px 0}.sectionBadge{font-weight:800;font-size:12px;display:inline-block;border-radius:8px;padding:6px 9px;background:#e8eff3;color:#536d80}.sectionBadge.green{color:#147148;background:#e4f7ed}.sectionBadge.yellow{color:#896708;background:#fff2c8}.sectionBadge.red{color:#a63838;background:#fde5e5}\n\n/* v12: independent server and browser last-success timestamps */\n.status-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px;margin:16px 0 10px}\n.status-tile{border:1px solid var(--line);background:#f8fafb;border-radius:12px;padding:14px;min-width:0}\n.status-name{font-size:12px;font-weight:850;color:#3b5364;display:flex;align-items:center;gap:7px;line-height:1.4}\n.status-dot{display:inline-block;flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:#94a3b3}\n.status-dot.ok{background:#159c76}.status-dot.warn{background:#d99529}.status-dot.bad{background:#c95050}\n.status-time{display:block;margin:9px 0 5px;font-size:16px;font-weight:850;line-height:1.35;color:var(--ink);font-variant-numeric:tabular-nums;overflow-wrap:anywhere}\n.status-desc{font-size:11px!important;line-height:1.55!important;margin:0!important;color:var(--sub)!important;overflow-wrap:anywhere}\n@media(max-width:550px){.status-grid{grid-template-columns:1fr}.status-tile{padding:12px}}\n\n/* EGE branding: compact, accessible, iPhone responsive; does not touch app logic. */\nheader .brand.brand-ege{display:flex;align-items:center;gap:11px;min-width:0;letter-spacing:0}\n.brand-ege .ege-monogram{display:inline-flex;align-items:center;justify-content:center;flex:0 0 55px;height:55px;border-radius:13px;background:linear-gradient(145deg,#38d5b9,#119c8f);color:#072d32;font-size:20px;font-weight:950;letter-spacing:-.8px;box-shadow:0 3px 16px #091a252c}\n.brand-ege .ege-wordmark{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1 1 auto;line-height:1.1}\n.brand-ege .ege-wordmark-top{font-size:clamp(14px,3.9vw,19px);font-weight:850;letter-spacing:-.25px;color:#f6fbff;white-space:nowrap}\n.brand-ege .ege-wordmark-bottom{font-size:clamp(14px,3.9vw,19px);font-weight:900;letter-spacing:.25px;color:#65e1ce;white-space:nowrap}\n.brand-ege .ege-version{align-self:flex-start;color:#92a8b9;font-size:10px;font-weight:650;flex:0 0 auto;white-space:nowrap;margin-top:2px}\n@media(max-width:375px){header{padding-left:15px;padding-right:15px}header .brand.brand-ege{gap:8px}.brand-ege .ege-monogram{flex-basis:49px;height:49px;font-size:17px}.brand-ege .ege-wordmark-top,.brand-ege .ege-wordmark-bottom{font-size:14px}}\n\n/* External headline feeds */\n#briefText{color:var(--ink);white-space:pre-wrap;line-height:1.75}\n.macro-group{margin:14px 0 18px;border-top:1px solid var(--line);padding-top:11px}\n.macro-group h3{font-size:13px;margin:0 0 4px}\n.news-entry{padding:10px 0;border-bottom:1px solid var(--line);line-height:1.5}\n.news-entry:last-child{border-bottom:0}\n.news-entry a{color:#137c84;font-weight:720;text-decoration:none}\n.news-entry a:focus-visible{text-decoration:underline;outline:2px solid var(--accent)}\n.news-entry .headmeta{margin-top:5px;color:var(--sub);font-size:11px}\nbody.theme-dark .news-entry a{color:#63ddc8}\nbody.theme-dark .news-entry{border-color:var(--line)}\nbody.theme-dark #briefText{color:#e3ecf4}\n\n/* EGE 12.5 – mobile briefing redesign */\n#p-briefing .brief-hero{background:linear-gradient(135deg,#0c2c3b,#12504a);color:#fff;border:0;box-shadow:0 12px 32px #072a3426}\n#p-briefing .brief-hero h2{font-size:21px;letter-spacing:-.5px;color:#fff}\n#p-briefing .brief-hero p{color:#c5e8e2}\n.brief-caps{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}.brief-caps span{font-weight:700;font-size:11px;border-radius:99px;padding:6px 10px;background:#ffffff20;color:#e7f9f5}\n#p-briefing .brief-hero label{color:#d8f3ed}\n#p-briefing .brief-hero select{border:1px solid #57958d;background:#f8fffd;color:#13323c}\n#p-briefing .brief-action{width:100%;font-size:15px;padding:14px;border-radius:14px}\n.voice-panel{border:1px solid var(--line);background:var(--bg);border-radius:15px;padding:12px;margin-top:12px}\n.voice-settings{display:grid;grid-template-columns:minmax(0,1fr) 95px;gap:10px;align-items:end}\n.voice-panel label{margin-top:6px}\n.voice-panel select{font-size:12px;padding:10px}\n.voice-panel .actions{margin-top:10px}\n.voice-panel .actions .btn{flex:1;min-width:100px}\n.brief-section{background:var(--bg);border-radius:14px;border:1px solid var(--line);margin:10px 0;padding:10px 12px}\n.brief-section summary{font-weight:800;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:10px}\n.brief-section summary::-webkit-details-marker{display:none}\n.brief-section summary:after{content:'⌄';font-size:17px;color:var(--sub)}\n.brief-section[open] summary:after{content:'⌃'}\n.news-entry{padding:11px 0;border-bottom:1px solid var(--line);line-height:1.55}\n.news-entry:last-child{border-bottom:0}\n.news-entry .news-title{font-weight:750;line-height:1.45;font-size:13px}\n.news-entry .news-summary{color:var(--sub);margin:6px 0 4px;font-size:12px;line-height:1.65}\n.news-entry .news-meta{font-size:11px;color:var(--sub);margin-top:5px}\n.news-entry .translation-flag{font-size:10px;font-weight:750;color:#228c81;margin-top:4px}\n#briefText{white-space:pre-wrap;line-height:1.8;font-size:13px;color:var(--ink);max-height:480px;overflow:auto}\n.compact-intro{font-size:12px!important;line-height:1.55!important}\nbody.theme-dark .brief-section,body.theme-dark .voice-panel{background:#0b1723;border-color:#294053}\nbody.theme-dark #briefText{color:#e3edf4}\nbody.theme-dark .news-entry .news-summary,body.theme-dark .news-entry .news-meta{color:#afc0ce}\nbody.theme-dark .news-entry .translation-flag{color:#78dac2}\nbody.theme-dark #p-briefing .brief-hero{background:linear-gradient(135deg,#102b3d,#164c45)}\n@media(max-width:400px){.voice-settings{grid-template-columns:minmax(0,1fr) 88px}}\n\n/* v12.9 Combined briefing composer */\n.brief-config-grid{display:grid;grid-template-columns:1fr;gap:11px;margin:15px 0 12px}\n.brief-config-block{min-width:0;padding:14px;border-radius:15px;border:1px solid #ffffff38;background:#ffffff12}\n.brief-choice-head{display:flex!important;align-items:flex-start;gap:10px;cursor:pointer;margin:0 0 11px!important;line-height:1.35;font-size:14px!important}\n.brief-choice-head input{width:21px;height:21px;flex:0 0 21px;accent-color:#69d5b7;margin:0}\n.brief-choice-head strong{display:block;font-size:14px;color:white}\n.brief-choice-head small{display:block;color:#c5e8e2;font-size:11px;font-weight:500;margin-top:3px}\n.macro-chip-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}\n.macro-topic{display:flex!important;gap:7px;align-items:center;min-height:42px;margin:0!important;font-size:11px!important;font-weight:750!important;border-radius:11px;padding:10px 9px;border:1px solid #60988e;background:#f2faf8;color:#254e48!important;line-height:1.3;cursor:pointer}\n.macro-topic input{flex:0 0 15px;width:15px;height:15px;accent-color:#008a78;margin:0}\n.macro-topic:has(input:not(:checked)){background:transparent;border-color:#ffffff48;color:#bfd6d2!important;opacity:.76}\n.brief-choice-info{font-size:11px!important;line-height:1.5!important;margin:8px 0 0!important;color:#c4dfd8!important}\n#briefStockOptions label:not(.brief-choice-head){margin:10px 0 5px;color:#d8f3ed}\n#briefStockOptions select{font-weight:650}\n#briefH1Options{padding:7px 0 0}\n#briefStockOptions.is-inactive,#macroTopicChips.is-inactive{opacity:.46;pointer-events:none}\n#p-briefing .brief-macro-details{border-color:#55948a;background:#102f38;margin-top:14px}\n#p-briefing .brief-macro-details summary{color:#f0fdf8}\n#p-briefing .brief-macro-details .news-entry .news-summary,#p-briefing .brief-macro-details .news-entry .news-meta{color:#c2d9d4}\n#p-briefing .brief-macro-details .news-entry .news-title{color:#e7f8f5}\n#p-briefing .brief-macro-details .badge{color:#244b49;background:#def6ef}\nbody.theme-dark .macro-topic{background:#153b38;border-color:#4e7c78;color:#dbf6ed!important}\nbody.theme-dark .macro-topic:has(input:not(:checked)){background:transparent;border-color:#465e63;color:#bdd1d5!important}\n@media(min-width:720px){.brief-config-grid{grid-template-columns:1fr 1fr;align-items:start}.macro-chip-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media(max-width:350px){.macro-chip-grid{grid-template-columns:1fr}}\n\n/* EGE v12.9 - voice and company search */\n.company-search-card{border-color:#a9dfd5!important;background:linear-gradient(145deg,#ffffff 0%,#f0faf7 100%)!important}\n.company-search-card h2{margin-bottom:0}\n.company-search-controls{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:9px;align-items:stretch;margin-top:8px}\n.company-search-controls select{min-width:0}\n.company-search-controls .btn{white-space:nowrap;align-self:stretch}\n.voice-note{margin-top:10px!important;font-size:11px!important}\nbody.theme-dark .company-search-card{background:linear-gradient(140deg,#102c32 0%,#111c28 100%)!important;border-color:#2e655f!important}\nbody.theme-dark .company-search-card .badge{background:#1d4140;color:#9ef2d7}\nbody.theme-dark .voice-note{color:#a4b7c3!important}\n@media(max-width:525px){.company-search-controls{grid-template-columns:1fr}.company-search-controls .btn{width:100%}}\n\n/* Settings accordions – visually consistent in both color schemes */\n.settings-card{padding:0 18px;overflow:hidden}\n.settings-fold>summary{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:60px;padding:17px 0;cursor:pointer;list-style:none;color:var(--ink);font-size:16px;font-weight:800;line-height:1.35;touch-action:manipulation}\n.settings-fold>summary::-webkit-details-marker{display:none}\n.settings-fold>summary::after{content:\"\";display:block;width:9px;height:9px;flex:0 0 9px;border-right:2px solid var(--sub);border-bottom:2px solid var(--sub);transform:rotate(45deg);transition:transform .18s ease;margin-right:5px}\n.settings-fold[open]>summary::after{transform:rotate(225deg)}\n.settings-fold>summary:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}\n.settings-fold-body{border-top:1px solid var(--line);padding:5px 0 19px}\n.settings-fold-body>p:first-child{margin-top:13px}\n.diagnostics-card .settings-fold>summary{font-size:15px}\n.diagnostics-card .settings-fold>summary::after{border-color:var(--sub)}\n.diagnostics-card pre{margin-top:14px}\n@media(prefers-reduced-motion:reduce){.settings-fold>summary::after{transition:none}}\n\n/* v13.5 - independent, explicit manual refresh actions on both status cards */\n.manual-sync-btn{display:block;width:100%;margin-top:11px;padding:11px 12px;min-height:42px;font-size:12px;font-weight:800;border-radius:11px}\n.manual-sync-btn:disabled{opacity:.57;cursor:wait}\n.manual-sync-feedback{font-size:11px;line-height:1.5;color:var(--sub);margin-top:7px;min-height:0;overflow-wrap:anywhere}\n.manual-sync-feedback:empty{display:none}\n/* Einmalige manuelle Aufhebung des internen Vier-Stunden-Abstands. */\n.once-override{display:flex;align-items:center;gap:10px;margin:11px 0 0;cursor:pointer;font-size:11px;font-weight:750;line-height:1.4;color:var(--ink)}\n.once-override input{appearance:none;-webkit-appearance:none;width:43px!important;min-width:43px;height:25px;margin:0;padding:0;border:1px solid #9bafbe;background:#a6b6c2;border-radius:50px;position:relative;cursor:pointer;flex:0 0 43px}\n.once-override input:before{content:\"\";position:absolute;top:2px;left:2px;width:19px;height:19px;border-radius:50%;background:#fff;transition:transform .15s;box-shadow:0 1px 3px #0002}\n.once-override input:checked{background:var(--accent);border-color:var(--accent)}\n.once-override input:checked:before{transform:translateX(18px)}\n.once-override input:focus-visible{outline:2px solid var(--accent);outline-offset:3px}\n.once-override input:disabled{opacity:.5;cursor:wait}\n.next-server-at{font-size:11px;line-height:1.5;color:var(--sub);margin:7px 0 0;overflow-wrap:anywhere}\nbody.theme-dark .once-override input:not(:checked){background:#405263;border-color:#526779}\n@media(prefers-reduced-motion:reduce){.once-override input:before{transition:none}}\n.manual-sync-feedback.good{color:#138064}.manual-sync-feedback.warn{color:#ae6b13}.manual-sync-feedback.bad{color:#cc5050}\nbody.theme-dark .manual-sync-feedback.good{color:#58d1a7}\nbody.theme-dark .manual-sync-feedback.warn{color:#ffc26b}\n\n.analysis-choose{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:14px 0}.analysis-choose label{display:block;font-size:12px;font-weight:700;margin-bottom:6px}.analysis-choose input,.analysis-choose select{width:100%;box-sizing:border-box;background:var(--bg);color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:12px;min-height:44px}.analysis-results{margin-top:12px}.analysis-result-row{padding:13px 12px;border:1px solid var(--line);border-radius:12px;margin:8px 0;background:var(--bg)}.analysis-result-row h3{margin:0 0 8px}.analysis-result-row p{margin:4px 0;line-height:1.5}.analysis-caution{font-size:12px;padding:12px;background:var(--bg);border-radius:10px;margin-top:10px}.analysis-kpis{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0}.analysis-kpis span{border:1px solid var(--line);border-radius:8px;padding:5px 7px;font-size:12px}.analysis-choose input:focus-visible,.analysis-choose select:focus-visible{outline:2px solid var(--accent)}@media(max-width:540px){.analysis-choose{grid-template-columns:1fr}}\n</style></head><body><header><div class=\"brand brand-ege\" aria-label=\"EGE – Financial Markets Analyse Tool\"><span class=\"ege-monogram\" aria-hidden=\"true\">EGE</span><span class=\"ege-wordmark\"><span class=\"ege-wordmark-top\">Financial Markets</span><span class=\"ege-wordmark-bottom\">Analyse Tool</span></span><span class=\"ege-version\">v13.5</span></div><p>Long-only · JD ZigZag × Stochastic RSI · Monats- bis Stundenchart</p></header>\n<nav><button class=\"active\" data-tab=\"dashboard\">Dashboard</button><button data-tab=\"watchlist\">Watchlist</button><button data-tab=\"briefing\">Briefing</button><button data-tab=\"settings\">Einstellungen</button></nav><div id=\"topmsg\"></div><main>\n<section id=\"p-dashboard\"><div class=\"card\"><div class=\"big-connection\"><h2>Dein Trading-Terminal</h2><span class=\"badge\" id=\"connection\">Status wird geladen</span></div><p>Deine fünf regulären TradingView-Watchlists bestimmen die Priorität. Die H1-Bewertung wird aus den TradingView-Abschnitten Kauf / Beobachten / Weniger interessant übernommen, sofern die offizielle Schnittstelle sie liefert.</p><div class=\"grid\"><div class=\"stat\">Aktien<b id=\"c-assets\">0</b></div><div class=\"stat\">H1-Kandidaten<b id=\"c-h1\">0</b></div><div class=\"stat\">News<b id=\"c-news\">0</b></div></div><div class=\"status-grid\" aria-label=\"Synchronisierungsstatus\"><div class=\"status-tile\"><div class=\"status-name\"><span class=\"status-dot\" data-server-dot></span>Server-Synchronisierung</div><strong class=\"status-time\" data-server-time>Wird geprüft…</strong><p class=\"status-desc\" data-server-info>Letzter erfolgreicher Cloudflare-Abgleich mit TradingView.</p><label class=\"once-override\"><input type=\"checkbox\" role=\"switch\" data-once-override aria-label=\"Einmalig Vier-Stunden-Abstand für nächsten manuellen Abgleich übergehen\"><span>4-Stunden-Schutz einmalig übergehen</span></label><button type=\"button\" class=\"btn alt manual-sync-btn\" data-manual-server>Server jetzt synchronisieren</button><div class=\"next-server-at\" data-next-sync aria-live=\"polite\">Prüfe nächsten regulären Abruf…</div><div class=\"manual-sync-feedback\" data-manual-server-feedback aria-live=\"polite\"></div><div class=\"server-repair hidden\" data-repair-container><p class=\"small\">Der Server-Zugang muss erneut mit deiner TradingView-Anmeldung verknüpft werden.</p><button type=\"button\" class=\"btn alt repair-session-btn\" data-repair-session>TradingView-Serverzugang reparieren</button><div class=\"manual-sync-feedback\" data-repair-feedback aria-live=\"polite\"></div></div></div><div class=\"status-tile\"><div class=\"status-name\"><span class=\"status-dot\" data-app-dot></span>App-Aktualisierung</div><strong class=\"status-time\" data-app-time>Noch kein Datenabruf</strong><p class=\"status-desc\" data-app-info>Letzter erfolgreicher Abruf in diesem Browser.</p><button type=\"button\" class=\"btn alt manual-sync-btn\" data-manual-app>App jetzt aktualisieren</button><div class=\"manual-sync-feedback\" data-manual-app-feedback aria-live=\"polite\"></div></div></div><div class=\"updated\"><span class=\"dot\"></span><span id=\"syncInfo\">Prüfe die Verbindung…</span></div><div class=\"actions\"><button class=\"btn\" id=\"goWatch\">Watchlists ansehen</button><button class=\"btn alt\" id=\"goBrief\">Morgenbriefing</button></div></div><div class=\"card\"><h3>H1 · Höchste Priorität</h3><p>Diese Werte liegen in deiner TradingView-Watchlist „1 - H1“.</p><div id=\"focusItems\"></div></div></section>\n<section class=\"hidden\" id=\"p-watchlist\"><div class=\"card\"><div class=\"big-connection\"><h2>TradingView-Watchlists</h2><span class=\"badge\" id=\"syncState\">Prüfe…</span></div><p>Aktuelle Aktien direkt aus deinen fünf regulären TradingView-Listen. Verschiebungen in TradingView werden beim nächsten zulässigen Abgleich übernommen.</p><div id=\"groupCounters\"></div><div class=\"data-status\" id=\"syncNotice\">Verbindung wird geprüft…</div><div class=\"subtle\" id=\"syncStatusSmall\"></div><div class=\"note\"><b>Hinweis:</b>Der Cron-Worker prüft alle fünf Minuten, ob ein Abgleich ansteht. Der reguläre Abstand beträgt vier Stunden. Mit dem einmaligen Schalter kannst du einen manuellen Versuch vorziehen; TradingView-Sperren bleiben unverändert. Die externen Nachrichten werden unabhängig davon geladen.</div></div><div class=\"card\" id=\"analysisLab\"><div class=\"row\"><h2>🔬 Chartanalyse – Prüflabor</h2><span class=\"badge warn\">Testmodus · keine Verschiebungen</span></div><p>Prüfe eine Aktie auf Monthly, Weekly, Daily, H4 und H1. Stochastic RSI und interne Pivot-Brüche sind zunächst eine <strong>unverbindliche Analyse-Vorschau</strong> – der Originalindikator <strong>Zero Lag ZigZag JD</strong> ist noch nicht kalibriert.</p>\n<div class=\"analysis-choose\"><div><label for=\"analysisSymbol\">Aktie aus Watchlist</label><select id=\"analysisSymbol\"><option value=\"\">Lade Watchlists …</option></select></div><div><label for=\"analysisCustom\">Oder Ticker manuell eingeben</label><input id=\"analysisCustom\" placeholder=\"NASDAQ:AMD\" autocapitalize=\"characters\" spellcheck=\"false\" autocomplete=\"off\"/></div></div>\n<div class=\"actions\"><button class=\"btn alt\" id=\"analyseRun\" type=\"button\">Eine Aktie analysieren</button></div><label class=\"once-override\"><input type=\"checkbox\" id=\"analysisOnceOverride\" role=\"switch\"><span>Labor: Vier-Stunden-Schutz einmalig übergehen</span></label><div class=\"small subtle\">Gilt nur für den nächsten Laborabruf. Nach dessen Start beginnt die Vier-Stunden-Frist neu. TradingView-Sperren bleiben bestehen.</div><div class=\"small subtle\">Maximal ein neuer Analyseabruf alle vier Stunden, zusätzlich zum regulären Watchlist-Abgleich. Pro Aktie bis zu fünf TradingView-Kerzenabrufe. Bereits gespeicherte Ergebnisse werden ohne neue MCP-Anfragen geladen.</div><div class=\"note\" style=\"margin-top:16px\"><b>Marktdaten-Diagnose · Automatischer Abruf</b><p class=\"small\">Automatische Datenquellenwahl mit Yahoo-Fallback. Maximal bedeutet die größte von der jeweiligen API in einem Abruf gelieferte Historie; noch kein dauerhaftes Datenarchiv. Keine Änderungen an Watchlists oder Labor-Trends.</p><p class=\"small\"><b>Datenquelle und Historientiefe werden automatisch ermittelt.</b> Es wird die maximal verfügbare Historie je API-Abruf angefordert; bei Sperren wird automatisch auf Yahoo Finance gewechselt.</p><div class=\"grid\"><div><label for=\"tdSymbol\">Markt</label><select id=\"tdSymbol\"><option value=\"AAPL\">Apple · AAPL</option><option value=\"DB1\">Deutsche Börse · DB1</option><option value=\"SPX\">S&amp;P 500 · SPX</option><option value=\"XAU/USD\">Gold Spot · XAU/USD</option><option value=\"BTC/USD\">Bitcoin · BTC/USD</option><option value=\"XLK\">Technologie-Sektor · XLK</option></select></div><div><label for=\"tdInterval\">Timeframe</label><select id=\"tdInterval\"><option value=\"1h\">H1</option><option value=\"4h\">H4</option><option value=\"1day\">Daily</option><option value=\"1week\">Weekly</option><option value=\"1month\">Monthly</option></select></div></div><div class=\"actions\"><button type=\"button\" class=\"btn alt\" id=\"tdTestBtn\">Datenzugriff prüfen</button></div><div class=\"small\" id=\"tdTestResult\" aria-live=\"polite\">Noch kein Test durchgeführt.</div></div><div id=\"analyseFeedback\" class=\"manual-sync-feedback\" aria-live=\"polite\"></div><div id=\"analyseResults\" class=\"analysis-results\"></div></div><div class=\"card\"><div class=\"row\"><h2>Aktien &amp; Prioritäten</h2><span class=\"badge\" id=\"watchCount\">0 Werte</span></div><div class=\"h1SectionStatus\" id=\"sectionState\">Abschnitts-Synchronisierung wird geprüft…</div><div class=\"filterBtns\" id=\"groupTabs\"></div><div class=\"ratingFilter\" id=\"ratingTabs\"></div><div class=\"hidden\"><label for=\"groupFilter\">Liste anzeigen</label><select id=\"groupFilter\"><option>Alle</option></select></div><div class=\"empty\" id=\"assetItems\">Watchlists werden geladen…</div></div></section>\n<section class=\"hidden\" id=\"p-briefing\">\n<div class=\"card brief-hero\"><h2>🎧 Dein Morgenbriefing</h2><p class=\"compact-intro\">Stelle dein persönliches Audio-Briefing zusammen. Makroregionen und Watchlist-Nachrichten sind kombinierbar – und werden gemeinsam vorgelesen.</p>\n<div class=\"brief-caps\"><span>🌍 Makro</span><span>🏢 Watchlist</span><span>🇩🇪 Deutsch</span></div>\n<div class=\"brief-config-grid\">\n<div class=\"brief-config-block\"><label class=\"brief-choice-head\" for=\"briefMacroEnabled\"><input type=\"checkbox\" id=\"briefMacroEnabled\" checked><span><strong>🌍 Makronachrichten</strong><small>Wähle die Themen, die du hören möchtest.</small></span></label>\n<div id=\"macroTopicChips\" class=\"macro-chip-grid\" aria-label=\"Makro-Themen auswählen\"></div>\n<p class=\"brief-choice-info\" id=\"macroSelectionInfo\">Alle sechs Themen ausgewählt</p></div>\n<div class=\"brief-config-block\"><label class=\"brief-choice-head\" for=\"briefStockEnabled\"><input type=\"checkbox\" id=\"briefStockEnabled\" checked><span><strong>📈 Unternehmensnachrichten</strong><small>Werte aus deinen TradingView-Watchlists</small></span></label>\n<div id=\"briefStockOptions\"><label for=\"briefScope\">Watchlist für das Briefing</label><select id=\"briefScope\"><option>H1</option><option>H4</option><option>Daily</option><option>Weekly</option><option>Monthly</option><option>Alle</option><option value=\"Makro\">Nur Makro (ohne Aktien)</option></select>\n<div id=\"briefH1Options\"><label for=\"briefH1Filter\">H1-Priorität eingrenzen</label><select id=\"briefH1Filter\"><option value=\"all\">Alle H1 – priorisiert</option><option value=\"green\">🟢 Kauf / Hot Picks</option><option value=\"yellow\">🟡 Beobachten</option><option value=\"red\">🔴 Weniger interessant</option><option value=\"unknown\">⚪ Ohne Zuordnung</option></select><p class=\"brief-choice-info\" id=\"briefH1Info\">Sortierung: Kauf → Beobachten → Weniger interessant → ohne Zuordnung</p></div></div></div>\n</div>\n<div class=\"actions\"><button class=\"btn brief-action\" id=\"newsBtn\">Morgenbriefing zusammenstellen</button></div>\n<p class=\"small\" id=\"newsStatus\">Deutschsprachige Quellen bevorzugt; fremdsprachige Artikel werden übersetzt, soweit Cloudflare AI verfügbar ist. Kein TradingView-Nachrichtenabruf.</p>\n<details class=\"brief-section brief-macro-details\"><summary>🌐 Makromeldungen ansehen <span class=\"badge\" id=\"macroCount\">0 Meldungen</span></summary><p class=\"brief-choice-info\" id=\"macroStatus\">Noch keine Makronachrichten geladen.</p><div id=\"macroItems\" class=\"muted small\">Bitte zuerst Morgenbriefing zusammenstellen.</div></details>\n</div>\n<div class=\"card\"><div class=\"row\"><h2>🔊 Hörbriefing</h2><span class=\"badge\" id=\"briefCount\">Bereit</span></div><p class=\"compact-intro\">Die ausgewählten Makrothemen und Firmenmeldungen werden mit ihren verfügbaren Kurztexten auf Deutsch vorgelesen.</p>\n<div class=\"voice-panel\"><div class=\"voice-settings\"><div><label for=\"voiceRate\">Sprechtempo</label><select id=\"voiceRate\"><option value=\"0.88\">Ruhig</option><option value=\"0.96\" selected>Normal</option><option value=\"1.06\">Zügig</option></select></div></div><div class=\"actions\"><button class=\"btn\" id=\"speakBtn\">▶ Briefing hören</button><button class=\"btn alt\" id=\"stopBtn\">■ Stoppen</button></div><p class=\"small\" id=\"voiceStatus\" role=\"status\">Bereit zum Vorlesen auf Deutsch.</p></div>\n<details class=\"brief-section\"><summary>📝 Gesprochenen Text anzeigen</summary><div class=\"muted\" id=\"briefText\">Noch kein Briefing erstellt.</div></details></div>\n<div class=\"card\"><details class=\"brief-section\" open><summary>🏢 Unternehmensnachrichten</summary><p class=\"compact-intro\">Watchlist-Unternehmen, mit Quelle, Kurzinhalt und deutscher Übersetzung soweit verfügbar.</p><div class=\"muted small\" id=\"newsItems\">Noch keine Unternehmensnachrichten geladen.</div></details></div>\n<div class=\"card company-search-card\" aria-label=\"Einzelaktie recherchieren\"><div class=\"row\"><h2>🔎 Einzelaktie recherchieren</h2><span class=\"badge\">Direktsuche</span></div><p class=\"compact-intro\">Wähle eine Watchlist-Aktie, um aktuelle externe Unternehmensnachrichten gezielt zu laden.</p><label for=\"newsSingleAsset\">Aktie auswählen</label><div class=\"company-search-controls\"><select id=\"newsSingleAsset\"><option value=\"\">Erst Watchlist laden</option></select><button class=\"btn\" id=\"companyNewsBtn\">Nachrichten suchen</button></div><p class=\"small\" id=\"singleCompanyStatus\" role=\"status\"></p><div id=\"singleCompanyItems\"></div></div>\n</section>\n<section class=\"hidden\" id=\"p-settings\"><div class=\"card settings-card\"><details class=\"settings-fold\"><summary><span class=\"settings-fold-title\">Darstellung</span></summary><div class=\"settings-fold-body\"><p>Du kannst die Oberfläche jederzeit zwischen Hellmodus und Dark Mode umschalten.</p><div class=\"row\"><span>Farbschema</span><span class=\"badge\" id=\"themeState\">Hellmodus aktiv</span></div><div class=\"actions\"><button class=\"btn alt\" id=\"toggleTheme\">Dark Mode aktivieren</button></div><p class=\"small\">Die Auswahl wird nur in diesem Browser gespeichert.</p></div></details></div><div class=\"card settings-card\"><details class=\"settings-fold\"><summary><span class=\"settings-fold-title\">TradingView-Direktverbindung</span></summary><div class=\"settings-fold-body\"><p>Offizielle TradingView-MCP-Schnittstelle. Die Anmeldung erfolgt direkt bei TradingView.</p><div class=\"row\"><span>OAuth-Verbindung</span><span class=\"badge\" id=\"connectStatus\">Prüfen…</span></div><div class=\"actions\"><a class=\"btn\" href=\"/auth/start\">Mit TradingView anmelden</a><button class=\"btn alt\" id=\"logoutBtn\">Abmelden</button></div><p class=\"small\" id=\"authDetails\"></p></div></details></div><div class=\"card settings-card diagnostics-card\"><details class=\"details settings-fold\"><summary class=\"settings-fold-title\">Verbindungsdiagnose</summary><pre class=\"log\" id=\"diagnostics\">Noch nicht geprüft.</pre><div class=\"actions\"><button class=\"btn alt\" id=\"diagBtn\">Diagnose starten</button></div></details></div><div class=\"card settings-card\" id=\"backgroundSetup\"><details class=\"settings-fold\"><summary><span class=\"settings-fold-title\">Automatischer Hintergrundabgleich</span></summary><div class=\"settings-fold-body\"><p>Die fünf regulären TradingView-Watchlists werden serverseitig abgeglichen – auch bei geschlossener iPhone-App. Der reguläre Mindestabstand beträgt vier Stunden. Für einen einzelnen manuellen Abgleich kannst du diesen Abstand gezielt übergehen; eine TradingView-Sperre wird dadurch nicht aufgehoben. Die Einrichtung benötigt einen separaten Cron-Worker, KV-Speicher und einen geheimen SYNC_KEY.</p><div class=\"syncPanel\"><div><span class=\"syncDot\" id=\"bgDot\"></span><b id=\"bgStatus\">Noch nicht eingerichtet</b></div><p class=\"small\" id=\"bgDetails\">Deine TradingView-Anmeldung wird erst nach deiner ausdrücklichen Aktivierung verschlüsselt im Cloudflare-KV gespeichert.</p></div><div class=\"note hidden\" id=\"quotaNotice\"><b>TradingView-Zugriff eingeschränkt.</b> Die automatische Synchronisierung wurde gestoppt, damit keine weiteren MCP-Aufrufe erfolgen. Nach Freigabe durch TradingView kannst du sie manuell fortsetzen.<div class=\"actions\"><button class=\"btn alt\" id=\"resumeBg\">Nach Freigabe fortsetzen</button></div></div><label for=\"syncKey\">SYNC_KEY (nur zur einmaligen Einrichtung)</label><input autocomplete=\"off\" id=\"syncKey\" placeholder=\"Geheimen Schlüssel aus Cloudflare eingeben\" type=\"password\"/><div class=\"actions\"><button class=\"btn\" id=\"enableBg\">Hintergrundabgleich aktivieren</button><button class=\"btn alt\" id=\"disableBg\">Hintergrundabgleich deaktivieren</button><button class=\"btn alt\" id=\"checkBg\">Konfiguration prüfen</button></div><p class=\"small\" id=\"checkBgResult\" role=\"status\"></p><p class=\"small\">Dieser Schlüssel ist nicht dein TradingView-Passwort. Er muss als Cloudflare-Secret in Pages und im Cron-Worker identisch hinterlegt werden. H1-Abschnitte werden über TradingView ausgelesen, sofern die MCP-Schnittstelle sie überträgt.</p></div></details></div><div class=\"card settings-card\"><details class=\"settings-fold\"><summary><span class=\"settings-fold-title\">Funktionsumfang</span></summary><div class=\"settings-fold-body\"><p>✓ Fünf benannte Watchlists automatisch abrufen<br/>✓ Börsenkürzel und verfügbare Unternehmenslogos<br/>✓ Wirtschafts- und Unternehmensnachrichten aus externen Newsfeeds · Makro unabhängig von Watchlists<br/>✓ Welt-Makrobriefing und Unternehmensüberschriften auf Deutsch vorlesen<br/>✓ Hintergrundabgleich über Cloudflare (sofern von TradingView erlaubt); Status oben beachten<br/>◐ Vorläufige Stoch-RSI-/Pivot-Analyse im Prüflabor; exakte JD-ZigZag-Kalibrierung noch erforderlich</p><div class=\"note\">Cloudflare benötigt den bereits eingerichteten <b>APP_SECRET</b>. Für den normalen Abgleich müssen deine fünf Listen exakt „1 - H1“, „2 - H4“, „3 - Daily“, „4 - Weekly“ und „5 - Monthly“ heißen.</div></div></details></div></section>\n<footer>EGE – Financial Markets Analyse Tool v13.5 · H1-Ampel nur aus TradingView-Abschnitten, soweit von MCP geliefert · Kein automatisches Kaufsignal</footer></main><script>const $=id=>document.getElementById(id);\nconst TF=['M','W','D','H4','H1'];\nconst GROUPS=['H1','H4','Daily','Weekly','Monthly'];\nconst TF_LISTS=[['1 - H1','H1'],['2 - H4','H4'],['3 - Daily','Daily'],['4 - Weekly','Weekly'],['5 - Monthly','Monthly']];\nconst MACRO_STORE='ege_v124_macro_news', MACRO_DATE_STORE='ege_v124_macro_date';\nconst STORE='sd3_assets', NEWS_STORE='sd3_news', LAST_STORE='sd3_last', APP_FETCH_STORE='sd12_last_successful_app_fetch', APP_SOURCE_STORE='sd12_app_fetch_source', THEME_STORE='ege_theme_mode';\nconst DIRECT_ATTEMPT_STORE='ege_v134_last_tv_direct_attempt';const DIRECT_MIN_MS=4*60*60*1000;\nlet lastDirectAttempt=0;try{lastDirectAttempt=Number(localStorage.getItem(DIRECT_ATTEMPT_STORE)||0)||0}catch{}\nlet assets=[],news=[],macroNews=[],macroFetchedAt='',connected=false,lastSync='',lastChecked='',lastAppFetch='',lastAppSource='',serverSyncState=null,serverStatusError='',groupsStatus=[],missing=[],loading=false,currentFilter='Alle',ratingFilter='all',syncError='',syncTimer=null,logoLoading=false,bgEnabled=false,bgWorking=false,bgError='',sectionInfo={state:'pending'},themeMode='light';let syncKey='';try{syncKey=localStorage.getItem('sd10_sync_key')||'';themeMode=localStorage.getItem(THEME_STORE)||'light'}catch{}\ntry {assets=JSON.parse(localStorage.getItem(STORE)||'[]');news=JSON.parse(localStorage.getItem(NEWS_STORE)||'[]');lastSync=localStorage.getItem(LAST_STORE)||'';lastAppFetch=localStorage.getItem(APP_FETCH_STORE)||'';lastAppSource=localStorage.getItem(APP_SOURCE_STORE)||''}catch{}\ntry{macroNews=JSON.parse(localStorage.getItem(MACRO_STORE)||'[]');macroFetchedAt=localStorage.getItem(MACRO_DATE_STORE)||'';news=news.filter(n=>n&&n.provider!=='TradingView'&&n.sourceType==='external')}catch{macroNews=[];news=[]}\n// Migrating from v13.3: its last direct load serves as the initial cooldown anchor.\nif(!lastDirectAttempt&&lastAppSource==='direct'&&validMigrationTime(lastAppFetch)){lastDirectAttempt=Date.parse(lastAppFetch);try{localStorage.setItem(DIRECT_ATTEMPT_STORE,String(lastDirectAttempt))}catch{}}\nfunction validMigrationTime(value){return typeof value==='string'&&Number.isFinite(Date.parse(value))} \n// The former color-based data is intentionally not classified. Sync replaces the list memberships.\nassets=assets.map(a=>({...a,groups: Array.isArray(a.groups)?a.groups.filter(g=>GROUPS.includes(g)):[]}));\nconst esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));\nconst save=()=>{try{localStorage.setItem(STORE,JSON.stringify(assets));localStorage.setItem(NEWS_STORE,JSON.stringify(news));localStorage.setItem(MACRO_STORE,JSON.stringify(macroNews));localStorage.setItem(MACRO_DATE_STORE,macroFetchedAt);localStorage.setItem(LAST_STORE,lastSync);localStorage.setItem(APP_FETCH_STORE,lastAppFetch);localStorage.setItem(APP_SOURCE_STORE,lastAppSource)}catch{}};\nfunction show(tab){document.querySelectorAll('section[id^=\"p-\"]').forEach(e=>e.classList.toggle('hidden',e.id!=='p-'+tab));document.querySelectorAll('nav button').forEach(e=>e.classList.toggle('active',e.dataset.tab===tab));window.scrollTo(0,0)}\ndocument.querySelectorAll('nav button').forEach(b=>b.onclick=()=>show(b.dataset.tab));\nfunction applyTheme(mode){themeMode=mode==='dark'?'dark':'light';document.body.classList.toggle('theme-dark',themeMode==='dark');const badge=$('themeState');if(badge){badge.textContent=themeMode==='dark'?'Dark Mode aktiv':'Hellmodus aktiv';badge.className='badge '+(themeMode==='dark'?'ok':'')}const btn=$('toggleTheme');if(btn)btn.textContent=themeMode==='dark'?'Hellmodus aktivieren':'Dark Mode aktivieren';try{localStorage.setItem(THEME_STORE,themeMode)}catch{}}\nfunction msg(t){$('topmsg').style.display='block';$('topmsg').textContent=t;setTimeout(()=>$('topmsg').style.display='none',8500)}\nasync function api(url,opts){let r=await fetch(url,{credentials:'same-origin',cache:'no-store',...(opts||{})});const body=await r.text();let data;try{data=JSON.parse(body)}catch{throw Error(body.slice(0,220)||'Keine JSON-Antwort')}if(!r.ok)throw Error(data.error||('HTTP '+r.status));return data}\nfunction state(a,tf){const s=a.signals?.[tf]||{};return s.zigzag==='bull'&&s.stoch==='bull'?'bull':s.zigzag==='bear'&&s.stoch==='bear'?'bear':'unknown'}\nfunction ready(a){return TF.every(tf=>state(a,tf)==='bull')}\nfunction ratingOf(a){return ['red','yellow','green'].includes(a.h1Rating)?a.h1Rating:'unknown'}\nfunction ratingText(c){return c==='red'?'🔴 Weniger interessant':c==='green'?'🟢 Kauf / Hot Pick':c==='yellow'?'🟡 Beobachten':'⚪ Nicht zugeordnet'}\nfunction memberships(a){return Array.isArray(a.groups)?a.groups:[]}\nfunction groupOf(a){return GROUPS.find(g=>memberships(a).includes(g))||'Ohne Liste'}\nfunction validDomain(value){let s=String(value||'').trim().toLowerCase().replace(/^https?:\\/\\//,'').replace(/^www\\./,'').split('/')[0];return /^[a-z0-9](?:[a-z0-9.-]{0,250}[a-z0-9])?\\.[a-z]{2,24}$/.test(s)&&!s.includes('..')?s:''}\nfunction isTrustedLogo(url){try{const x=new URL(url);return x.protocol==='https:'&&['s3-symbol-logo.tradingview.com','img.anylogo.dev','www.google.com'].includes(x.hostname)}catch{return false}}\nfunction logoOptions(a){const [exchange,ticker]=String(a.symbol||'').split(':');const domain=validDomain(a.companyDomain);const options=[];if(domain)options.push('https://img.anylogo.dev/'+domain+'?size=64');if(a.logoUrl&&isTrustedLogo(a.logoUrl))options.push(a.logoUrl);if(!domain&&['NASDAQ','NYSE','AMEX','NYSEARCA'].includes(exchange)&&/^[A-Z.]{1,10}$/.test(ticker||''))options.push('https://img.anylogo.dev/ticker/'+encodeURIComponent(ticker)+'?size=64');if(domain)options.push('https://www.google.com/s2/favicons?domain='+encodeURIComponent(domain)+'&sz=64');return [...new Set(options)]}\nfunction logoHtml(a){const ticker=(a.symbol||'').split(':').pop();const choices=logoOptions(a);const initial=esc(ticker.slice(0,2));return choices.length?`<img class=\"companyLogo smartLogo\" data-fallbacks=\"${esc(JSON.stringify(choices))}\" data-next=\"1\" src=\"${esc(choices[0])}\" loading=\"lazy\" alt=\"Logo ${esc(a.description||ticker)}\"><span class=\"companyLogo\" style=\"display:none\">${initial}</span>`:`<span class=\"companyLogo\">${initial}</span>`}\nfunction companyHtml(a){return `<div class=\"company\">${logoHtml(a)}<div style=\"min-width:0\"><div class=\"ticker\">${esc(a.symbol)}</div><div class=\"companyName\">${esc(a.description||'Unternehmensname nicht verfügbar')}</div><small>${memberships(a).map(esc).join(' · ')||'Noch keiner der fünf Listen zugeordnet'}</small></div></div>`}\nfunction bindLogoFallbacks(){document.querySelectorAll('img.smartLogo').forEach(img=>{img.onerror=()=>{let all=[];try{all=JSON.parse(img.dataset.fallbacks||'[]')}catch{}const i=Number(img.dataset.next||1);if(i<all.length){img.dataset.next=String(i+1);img.src=all[i]}else{img.style.display='none';if(img.nextElementSibling)img.nextElementSibling.style.display='flex'}}})}\nfunction validTimestamp(value){if(typeof value!=='string'||!value)return null;const dt=new Date(value);return Number.isFinite(dt.getTime())?dt:null}\nfunction localStamp(value){const dt=validTimestamp(value);return dt?new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(dt)+' Uhr':'Noch kein erfolgreicher Abgleich'}\nfunction fillSyncStatus(selector,text){document.querySelectorAll(selector).forEach(el=>{el.textContent=text})}\nfunction setDots(selector,kind){document.querySelectorAll(selector).forEach(el=>{el.className='status-dot'+(kind?' '+kind:'')})}\nfunction nextServerTimeMessage(s){\n if(!s?.enabled)return 'Kein regulärer Abgleich geplant: Hintergrundabgleich deaktiviert.';\n if(s.quotaBlocked)return 'TradingView-Zugriff pausiert. Der Ausnahmeschalter hebt diese Sperre nicht auf.';\n const from=Date.parse(s.lastAttempt||'')||Date.parse(s.lastSuccess||'')||0;\n if(!from)return 'Noch kein Synchronisierungsversuch registriert – regulärer Abruf sofort möglich.';\n const next=from+4*60*60*1000,wait=next-Date.now();\n if(wait<=0)return 'Vier-Stunden-Frist abgelaufen – regulärer Abruf wieder möglich.';\n const mins=Math.ceil(wait/60000),hrs=Math.floor(mins/60),rest=mins%60;\n return 'Nächster regulärer Abruf: '+localStamp(new Date(next).toISOString())+' · verbleibend '+(hrs?hrs+' Std. ':'')+rest+' Min.';\n}\nfunction resetOverrideSwitches(){document.querySelectorAll('[data-once-override]').forEach(sw=>{sw.checked=false;sw.disabled=false})}\nfunction renderSyncCards(){\n fillSyncStatus('[data-next-sync]',nextServerTimeMessage(serverSyncState));\n const s=serverSyncState;const stamp=validTimestamp(s?.lastSuccess);const appStamp=validTimestamp(lastAppFetch);const hasError=!!(s?.error||serverStatusError);\n let serverTime='Noch kein erfolgreicher Abgleich';let serverInfo='Cloudflare-Cron: Abruf höchstens alle 4 Stunden.';let serverKind='';\n if(!syncKey){serverTime='Nicht geprüft';serverInfo='Hintergrundstatus auf diesem Gerät nicht verfügbar (SYNC_KEY fehlt).';}\n else if(!s){serverTime='Nicht erreichbar';serverInfo='Server-Status konnte nicht abgefragt werden'+(serverStatusError?': '+serverStatusError:'')+'.';serverKind='warn';}\n else if(!s.enabled){serverTime='Deaktiviert';serverInfo='Server-Abgleich ist aktuell ausgeschaltet.';serverKind='warn';}\n else {\n   if(stamp){serverTime=localStamp(s.lastSuccess);serverInfo='TradingView → Cloudflare KV · '+(s.matched!=null?String(s.matched)+'/5 Listen · ':'')+(s.count!=null?String(s.count)+' Werte · ':'')+'Abstand mindestens 4 Std.';serverKind=Date.now()-stamp.getTime()>4.5*60*60*1000?'warn':'ok';}\n   if(hasError){serverKind='bad';serverInfo=(s.quotaBlocked?'TradingView hat MCP-Anfragen eingeschränkt. Abrufe zum Schutz des Kontos pausiert. ':'Letzter Serverfehler: ')+(!s.quotaBlocked?String(s.error||serverStatusError).slice(0,170):'')+(stamp?' · Letzter Erfolg bleibt oben sichtbar.':'');}\n }\n fillSyncStatus('[data-server-time]',serverTime);fillSyncStatus('[data-server-info]',serverInfo);setDots('[data-server-dot]',serverKind);\n const tokenNeedsRepair=/refresh token|tokenfehler|oauth-token|autorisierung/i.test(String(s?.error||''));\n document.querySelectorAll('[data-repair-container]').forEach(el=>el.classList.toggle('hidden',!tokenNeedsRepair));\n fillSyncStatus('[data-app-time]',appStamp?localStamp(lastAppFetch):'Noch kein Datenabruf');\n fillSyncStatus('[data-app-info]',appStamp?'Watchlist-Daten erfolgreich geladen · '+(lastAppSource==='snapshot'?'aus Cloudflare KV':'direkt von TradingView')+'.':'Zeit wird nach dem ersten erfolgreichen Laden erfasst.');\n setDots('[data-app-dot]',appStamp?(Date.now()-appStamp.getTime()>12*60*1000?'warn':'ok'):'');\n}\nfunction setSyncStatus(){const p=lastSync?'Datenstand der geladenen Watchlists: '+localStamp(lastSync):'Noch keine Watchlist-Daten geladen';$('syncInfo').textContent=p;$('syncState').textContent=loading?'Synchronisiert…':syncError?'Synchronisierung fehlgeschlagen':lastSync?'Daten geladen':'Noch keine Daten';$('syncState').className='badge '+(syncError?'bad':lastSync?'ok':'warn');$('syncNotice').textContent=syncError?'Fehler beim letzten Versuch: '+syncError:loading?'Die App prüft den Server-Snapshot. Direkte TradingView-Abrufe frühestens alle 4 Stunden.':lastSync?'Der Server-Abgleich und das Laden in dieser App werden getrennt protokolliert.':'Nach deiner TradingView-Anmeldung beginnt der Abgleich automatisch.';$('syncNotice').className='data-status';$('syncStatusSmall').textContent=lastChecked?'Letzter Prüfversuch: '+new Date(lastChecked).toLocaleTimeString('de-DE')+' · Server-Snapshot-Prüfung: 2 Minuten':'Server-Snapshot-Prüfung: 2 Minuten; direkte TradingView-Abrufe begrenzt'}\nfunction render(){const counters=Object.fromEntries(GROUPS.map(g=>[g,assets.filter(a=>memberships(a).includes(g)).length]));$('c-assets').textContent=assets.length;$('c-h1').textContent=counters.H1;$('c-news').textContent=news.length;$('watchCount').textContent=assets.length+' Werte';setSyncStatus();renderSyncCards();\n$('groupCounters').innerHTML=TF_LISTS.map(([name,g])=>`<div class=\"list-row\"><div><span class=\"list-tag\">${esc(name)}</span><span class=\"subtle\" style=\"margin-left:6px\">${missing.includes(name)?'Liste fehlt in TradingView':'Über TradingView synchronisiert'}</span></div><b>${counters[g]}</b></div>`).join('');\n$('groupTabs').innerHTML=['Alle',...GROUPS].map(g=>`<button class=\"${currentFilter===g?'sel':''}\" data-group=\"${esc(g)}\">${esc(g)} <span style=\"opacity:.7\">${g==='Alle'?assets.length:counters[g]}</span></button>`).join('');document.querySelectorAll('[data-group]').forEach(b=>b.onclick=()=>{currentFilter=b.dataset.group;render()});\n$('groupFilter').innerHTML=['Alle',...GROUPS].map(g=>`<option ${g===currentFilter?'selected':''}>${esc(g)}</option>`).join('');\n$('ratingTabs').style.display=currentFilter==='H1'?'flex':'none';if(currentFilter!=='H1')ratingFilter='all';$('sectionState').textContent=sectionInfo.state==='received'?'H1-Abschnitte aus TradingView: '+(sectionInfo.sectionNames||[]).join(' · ')+(sectionInfo.assigned!=null?' · '+sectionInfo.assigned+' Aktien zugeordnet':''):sectionInfo.state==='not_received'?'H1-Abschnitte werden von TradingView-MCP nicht übermittelt oder konnten nicht erkannt werden. Die Bewertung bleibt offen.':sectionInfo.state==='missing_list'?'1 - H1 nicht gefunden.':'Prüfe TradingView-Abschnitte…';\n$('sectionState').style.display=currentFilter==='H1'?'block':'none';\n$('ratingTabs').innerHTML=[['all','Alle H1-Werte'],['green','🟢 Kauf'],['yellow','🟡 Beobachten'],['red','🔴 Weniger interessant'],['unknown','⚪ Ohne Abschnitt']].map(([key,label])=>`<button data-rating-filter=\"${key}\" class=\"${ratingFilter===key?'sel':''}\">${label}</button>`).join('');document.querySelectorAll('[data-rating-filter]').forEach(b=>b.onclick=()=>{ratingFilter=b.dataset.ratingFilter;render()});\nconst chosen=assets.filter(a=>(currentFilter==='Alle'||memberships(a).includes(currentFilter))&&(currentFilter!=='H1'||ratingFilter==='all'||ratingOf(a)===ratingFilter));$('assetItems').innerHTML=chosen.length?chosen.map(a=>`<div class=\"item\"><div class=\"row\">${companyHtml(a)}</div>${(memberships(a).includes('H1')&&(currentFilter==='Alle'||currentFilter==='H1'))?`<div class=\"ratingBar\"><span class=\"ratingInfo\">H1-Abschnitt aus TradingView</span><span class=\"sectionBadge ${ratingOf(a)}\">${esc(ratingText(ratingOf(a)))}${a.h1Section?' · '+esc(a.h1Section):''}</span></div>`:''}</div>`).join(''):'<div class=\"empty\">In dieser TradingView-Watchlist liegen aktuell keine Aktien.</div>';\n\nconst h1=assets.filter(a=>memberships(a).includes('H1')).sort((a,b)=>({green:0,yellow:1,red:2,unknown:3}[ratingOf(a)]-({green:0,yellow:1,red:2,unknown:3}[ratingOf(b)]))).slice(0,8);$('focusItems').innerHTML=h1.length?h1.map(a=>`<div class=\"item row\">${companyHtml(a)}<span class=\"sectionBadge ${ratingOf(a)}\">${ratingText(ratingOf(a))}</span></div>`).join(''):'<div class=\"empty\">Noch keine Werte in 1 - H1.</div>';\nconst labSelect=$('analysisSymbol'),labPrev=labSelect.value;labSelect.innerHTML=assets.map(a=>`<option value=\"${esc(a.symbol)}\">${esc(a.description||a.symbol)} (${esc(a.symbol)})</option>`).join('')||'<option value=\"\">Keine Aktien geladen</option>';if(assets.some(a=>a.symbol===labPrev))labSelect.value=labPrev;\nconst select=$('newsSingleAsset'),selected=select.value;select.innerHTML=assets.map(a=>`<option value=\"${esc(a.symbol)}\">${esc(a.description||a.symbol)} (${esc(a.symbol)})</option>`).join('')||'<option value=\"\">Keine Aktien vorhanden</option>';if(assets.some(a=>a.symbol===selected))select.value=selected;renderMacro();bindLogoFallbacks();}\nasync function getStatus(){try{const x=await api('/api/status');connected=Boolean(x.connected);$('connection').textContent=connected?'TRADINGVIEW VERBUNDEN':'TV-LOGIN ERFORDERLICH';$('connection').className='badge '+(connected?'ok':'warn');$('connectStatus').textContent=connected?'Verbunden':'Nicht verbunden';$('connectStatus').className='badge '+(connected?'ok':'warn');$('authDetails').textContent=x.configured?'Cloudflare-Backend bereit. Browser-OAuth: '+(connected?'autorisiert':'Anmeldung erforderlich. Hintergrunddaten können dennoch verfügbar sein.'):'APP_SECRET fehlt in Cloudflare.';\n$('syncKey').value=syncKey;\nlet gotCache=false;if(syncKey){try{const s=await secureApi('/api/background/status');serverStatusError='';bgEnabled=!!s.enabled;bgWorking=!!s.enabled;applyBackgroundStatus(s);if(s.enabled){const snap=await secureApi('/api/background/snapshot');if(snap.snapshot){updateAssets(snap.snapshot,'snapshot');gotCache=true;}}}catch(e){bgError=e.message;serverStatusError=e.message;serverSyncState=null;applyBackgroundStatus({enabled:false,error:e.message},true)}}\nif(!gotCache&&connected&&!serverSyncState?.quotaBlocked)await autoSync(true);else render();if(location.search.includes('connected=1')){history.replaceState(null,'',location.pathname);show('settings');}}catch(e){connected=false;syncError=e.message;render();msg('Backend: '+e.message)}}\nfunction updateAssets(result,source=\"direct\",allowLogoLookup=true){if(!result.groups||!Array.isArray(result.assets))throw Error('Antwortformat ungültig');if(result.matched===0)throw Error('Keine der fünf Listen gefunden. Prüfe 1 - H1 bis 5 - Monthly.');const previous=new Map(assets.map(a=>[a.symbol,a]));const fresh=[];for(const item of result.assets){const old=previous.get(item.symbol)||{};fresh.push({...old,...item,groups:item.groups||[],h1Section:item.h1Section??null,h1Rating:item.h1Rating??null,companyDomain:old.companyDomain||'',description:item.description||old.description||'',logoUrl:item.logoUrl||old.logoUrl||null,signals:old.signals||{},logoChecked:Boolean(item.logoUrl||old.logoChecked)})}assets=fresh;groupsStatus=result.groups;missing=result.missing||[];sectionInfo=result.sectionInfo||{state:'not_received'};lastSync=result.syncedAt||lastSync;lastAppFetch=new Date().toISOString();lastAppSource=source;save();render();/* Kein automatischer MCP-Logoabruf; vorhandene bzw. externe Logos bleiben erhalten. */}\nasync function autoSync(force=false){if(loading||(!connected&&!bgEnabled)||(!force&&document.hidden))return;loading=true;lastChecked=new Date().toISOString();syncError='';setSyncStatus();try{if(bgEnabled&&syncKey){const j=await secureApi('/api/background/snapshot');if(j.status)applyBackgroundStatus(j.status);if(j.snapshot){updateAssets(j.snapshot,\"snapshot\");applyBackgroundStatus(j.status||{enabled:true});return}if(j.status?.quotaBlocked)throw Error('TradingView-MCP-Limit erreicht; automatische Abrufe pausiert.')}if(!connected)throw Error('Keine TradingView-Browser-Anmeldung und kein Hintergrund-Snapshot verfügbar');\n const left=DIRECT_MIN_MS-(Date.now()-lastDirectAttempt);\n if(left>0){\n   if(!assets.length)syncError='Noch kein Cloudflare-Snapshot. Der nächste direkte TradingView-Versuch ist in '+Math.ceil(left/60000)+' Minuten zulässig.';\n   render();return;\n }\n lastDirectAttempt=Date.now();try{localStorage.setItem(DIRECT_ATTEMPT_STORE,String(lastDirectAttempt))}catch{}\n updateAssets(await api('/api/priority-lists'),'direct')}catch(e){syncError=e.message;render();if(force)msg('TradingView-Abgleich: '+e.message)}finally{loading=false;setSyncStatus()}}\n// Deliberately independent controls: app refresh only reads KV, server refresh uses syncServer quota checks.\nfunction manualActionState(which,busy,message='',kind=''){\n document.querySelectorAll(which==='server'?'[data-manual-server]':'[data-manual-app]').forEach(btn=>{btn.disabled=busy;btn.textContent=busy?(which==='server'?'Server-Abgleich läuft…':'App lädt Daten…'):(which==='server'?'Server jetzt synchronisieren':'App jetzt aktualisieren')});\n document.querySelectorAll(which==='server'?'[data-manual-server-feedback]':'[data-manual-app-feedback]').forEach(el=>{el.textContent=message;el.className='manual-sync-feedback'+(kind?' '+kind:'')});\n}\nlet serverManualBusy=false,appManualBusy=false;\ndocument.querySelectorAll('[data-once-override]').forEach(sw=>sw.addEventListener('change',()=>{\n document.querySelectorAll('[data-once-override]').forEach(other=>{if(other!==sw)other.checked=sw.checked});\n}));\nasync function manualAppRefresh(){\n if(appManualBusy)return false;\n if(!syncKey){manualActionState('app',false,'SYNC_KEY fehlt. Bitte unter Einstellungen → Hintergrundabgleich hinterlegen.','warn');return false}\n appManualBusy=true;manualActionState('app',true,'Lese Cloudflare-Snapshot – ohne TradingView-Abfrage.');\n try{\n   const data=await secureApi('/api/background/snapshot');\n   if(data.status)applyBackgroundStatus(data.status);\n   if(!data.snapshot){\n     manualActionState('app',false,assets.length?'Noch kein Cloudflare-Snapshot gespeichert. Deine '+assets.length+' direkt geladenen Aktien bleiben sichtbar (Stand '+localStamp(lastSync)+'). Bitte den Serverzugang reparieren und anschließend synchronisieren.':'Noch kein Cloudflare-Snapshot vorhanden. Bitte den Serverzugang reparieren und synchronisieren.','warn');\n     return false;\n   }\n   updateAssets(data.snapshot,'snapshot',false);\n   manualActionState('app',false,'Aktualisiert: '+localStamp(lastAppFetch)+' · Kurs-/Watchlist-Stand: '+localStamp(lastSync),'good');\n   return true;\n }catch(e){manualActionState('app',false,'App-Aktualisierung fehlgeschlagen: '+e.message,'bad');return false}\n finally{appManualBusy=false}\n}\nasync function manualServerRefresh(){\n if(serverManualBusy)return;\n const ignoreCooldownOnce=Array.from(document.querySelectorAll('[data-once-override]')).some(sw=>sw.checked);\n if(!syncKey){resetOverrideSwitches();manualActionState('server',false,'SYNC_KEY fehlt. Bitte unter Einstellungen → Hintergrundabgleich hinterlegen.','warn');return}\n serverManualBusy=true;\n document.querySelectorAll('[data-once-override]').forEach(sw=>sw.disabled=true);\n manualActionState('server',true,ignoreCooldownOnce?'Prüfe einmalige Ausnahme und TradingView-Freigabe…':'Prüfe 4-Stunden-Abstand und TradingView-Freigabe…');\n try{\n   const result=await secureApi('/api/background/manual-run',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ignoreCooldownOnce})});\n   if(result.status)applyBackgroundStatus(result.status);\n   if(result.skipped){\n     let message='Server-Abgleich nicht ausgeführt.';\n     if(result.reason==='minimum_interval')message='4-Stunden-Schutz aktiv. Nächster zulässiger Versuch: '+localStamp(result.nextAttempt)+'.';\n     else if(result.reason==='TRADINGVIEW_QUOTA_BLOCKED')message='TradingView-MCP-Zugriff pausiert. Nach bestätigter Freigabe unter Einstellungen fortsetzen.';\n     else if(result.reason==='disabled')message='Hintergrundabgleich ist deaktiviert. Bitte zuerst in Einstellungen aktivieren.';\n     manualActionState('server',false,message,'warn');return;\n   }\n   if(!result.ok)throw Error(result.error||'Server meldet keinen erfolgreichen Abgleich.');\n   manualActionState('server',false,'TradingView erfolgreich abgeglichen: '+localStamp(result.lastSuccess)+' · '+result.count+' Aktien.'+(result.manualOverrideUsed?' Einmalige Ausnahme verbraucht; Frist neu gestartet.':''),'good');\n   // A successful server refresh should be immediately reflected in the browser, too.\n   await manualAppRefresh();\n }catch(e){\n   manualActionState('server',false,'Server-Abgleich fehlgeschlagen: '+e.message,'bad');\n   try{const status=await secureApi('/api/background/status');applyBackgroundStatus(status)}catch{}\n }finally{serverManualBusy=false;resetOverrideSwitches();renderSyncCards()}\n}\ndocument.querySelectorAll('[data-manual-server]').forEach(b=>b.addEventListener('click',manualServerRefresh));\ndocument.querySelectorAll('[data-manual-app]').forEach(b=>b.addEventListener('click',manualAppRefresh));\ndocument.querySelectorAll('[data-repair-session]').forEach(btn=>btn.addEventListener('click',async()=>{\n const feedback=message=>document.querySelectorAll('[data-repair-feedback]').forEach(el=>{el.textContent=message;el.className='manual-sync-feedback'});\n if(!syncKey){feedback('SYNC_KEY fehlt. Bitte zuerst in den Einstellungen hinterlegen.');return}\n if(!connected){feedback('Bitte zuerst unter TradingView-Direktverbindung erneut anmelden.');return}\n document.querySelectorAll('[data-repair-session]').forEach(b=>b.disabled=true);\n feedback('Prüfe und erneuere die TradingView-Autorisierung…');\n try{const result=await secureApi('/api/background/relink',{method:'POST'});\n   applyBackgroundStatus(result.status);feedback('Serverzugang erneuert. Du kannst jetzt synchronisieren; die Vier-Stunden-Frist gilt weiterhin.');\n   msg('TradingView-Serverzugang erfolgreich repariert.');\n }catch(e){feedback('Reparatur fehlgeschlagen: '+e.message)}\n finally{document.querySelectorAll('[data-repair-session]').forEach(b=>b.disabled=false)}\n}));\nasync function secureApi(path,opts={}){if(!syncKey)throw Error('SYNC_KEY fehlt');return api(path,{...opts,headers:{...(opts.headers||{}),'X-Swingdesk-Key':syncKey}})}\nfunction analysisNumber(n){return Number.isFinite(n)?new Intl.NumberFormat('de-DE',{maximumFractionDigits:3}).format(n):'–'}\nfunction analysisDate(s){return s?new Date(s).toLocaleString('de-DE',{timeZone:'Europe/Berlin',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}):'–'}\nfunction analysisHtml(data){const labels=[['Monthly','Monatschart'],['Weekly','Wochenchart'],['Daily','Tageschart'],['H4','Vier-Stunden-Chart'],['H1','Stundenchart']];\n let result=`<div class=\"analysis-caution\"><b>${esc(data.symbol)} · ${analysisDate(data.time)}</b> ${data.cached?'(Zwischenspeicher)':'(Neu abgerufen)'}<p>Zero Lag ZigZag JD (10/50/2), Stochastic RSI 14/14/3/3 mit 20/80. CHoCH und externe Swing-Bestätigungen sind noch im historischen Abgleich; keine automatischen Watchlist-Änderungen.</p></div>`;\n result+=`<div class=\"analysis-trends\" aria-label=\"Trendübersicht nach Timeframe\">`+labels.map(([k])=>{const t=data.frames?.[k]||{},dir=t.externalTrend==='bull'?'bull':t.externalTrend==='bear'?'bear':'neutral';const label=dir==='bull'?'▲ Bullish':dir==='bear'?'▼ Bearish':'— Offen';return `<div class=\"analysis-trend ${dir}\">${k}<strong>${label}</strong></div>`}).join('')+`</div><p class=\"small subtle\">Externer Trend aus JD-Struktur; „Offen“ bedeutet noch nicht zuverlässig bestimmbar. Vorläufige Laborberechnung.</p>`;\n for(const [k,title] of labels){const t=data.frames?.[k]||{};result+=`<div class=\"analysis-result-row\"><h3>${title}</h3>`;\n if(t.state!=='preview'){result+=`<p>${esc(t.message||'Keine Daten verfügbar.')}</p></div>`;continue}\n result+=`<div class=\"analysis-kpis\"><span>Schlusskurs: <b>${analysisNumber(t.lastClose)}</b></span><span>Stoch RSI K: <b>${analysisNumber(t.k)}</b></span><span>D: <b>${analysisNumber(t.d)}</b></span></div>`;\n\n result+=`<p>${t.events?.length?'Letzte mögliche Doppelbestätigung: '+esc(t.events.at(-1).kind)+' bei '+analysisNumber(t.events.at(-1).level)+' ('+analysisDate(t.events.at(-1).date)+')':'Keine übereinstimmenden Pivot-/Stoch-RSI-Brüche in den vorhandenen abgeschlossenen Kerzen gefunden.'}</p>`;\n result+=`</div>`;\n }\n return result+`<div class=\"analysis-caution\"><b>Watchlist-Einordnung:</b> noch nicht freigegeben. Kein automatisches Verschieben, kein Entfernen aus „6 - Einordnung“ aufgrund dieser Vorschau.</div>`;\n}\nlet analyseBusy=false;\n$('analyseRun').addEventListener('click',async()=>{\n if(analyseBusy)return;const symbol=($('analysisCustom').value.trim()||$('analysisSymbol').value||'').toUpperCase();const feedback=$('analyseFeedback');\n if(!/^[A-Z0-9_.-]{1,24}:[A-Z0-9_.!/-]{1,32}$/.test(symbol)){feedback.textContent='Bitte einen vollständigen Börsenticker eingeben, zum Beispiel NASDAQ:AMD.';return}\n if(!connected){feedback.textContent='Bitte zuerst TradingView unter Einstellungen verbinden.';return}\n if(!syncKey){feedback.textContent='Bitte SYNC_KEY unter Einstellungen → Hintergrundabgleich hinterlegen.';return}\n analyseBusy=true;$('analyseRun').disabled=true;feedback.textContent='Lade fünf Zeiteinheiten. Das kann einen Moment dauern …';$('analyseResults').innerHTML='';\n try{const data=await secureApi('/api/analysis/preview?symbol='+encodeURIComponent(symbol)+($('analysisOnceOverride').checked?'&once=1':''));$('analyseResults').innerHTML=analysisHtml(data);if(data.overrideConsumed)$('analysisOnceOverride').checked=false;feedback.textContent=data.cached?'Analyse aus dem Zwischenspeicher geladen.':'Analyse-Vorschau geladen. TradingView-MCP-Abfragen: '+data.calls+'.';}\n catch(e){feedback.textContent='Analyse derzeit nicht möglich: '+e.message}\n finally{analyseBusy=false;$('analyseRun').disabled=false}\n});\nfunction applyBackgroundStatus(s,unreachable=false){if(!unreachable){serverSyncState=s;serverStatusError='';}bgEnabled=!!s.enabled;const blocked=!!s.quotaBlocked;const good=bgEnabled&&!s.error&&!blocked;const dot=$('bgDot');if(dot)dot.className='syncDot'+(good?' on':'');$('bgStatus').textContent=blocked?'Wegen TradingView-Limit pausiert':bgEnabled?'Hintergrundabgleich eingerichtet':'Noch nicht aktiviert';const warning=$('quotaNotice');if(warning)warning.classList.toggle('hidden',!blocked);$('bgDetails').textContent=blocked?'TradingView schränkt MCP-Anfragen derzeit ein. Weitere automatische Anfragen sind pausiert. Die zuletzt gespeicherten Daten bleiben verfügbar.':s.lastSuccess?'Letzte Server-Aktualisierung: '+new Date(s.lastSuccess).toLocaleString('de-DE')+(s.error?' · Problem: '+s.error:''):s.error?'Fehler: '+s.error:'Nach der Aktivierung startet der Cron-Worker den Abgleich mit einem Mindestabstand von 4 Stunden.';const note=$('syncStatusSmall');if(note)note.textContent=bgEnabled?'Cloudflare-Cron: höchstens alle 4 Stunden; bei TradingView-Limit pausiert':'App prüft lokale/Cloudflare-Daten alle 2 Minuten; TradingView-Direktabrufe begrenzt';renderSyncCards()}\n$('checkBg').onclick=async()=>{const area=$('checkBgResult');area.textContent='Prüfung läuft…';try{const result=await api('/api/background/check',{method:'POST',headers:{'X-Swingdesk-Key':$('syncKey').value.trim()}});const check=(v)=>v?'OK':'FEHLT';area.textContent='KV-Binding: '+check(result.kvBound)+' · SYNC_KEY auf Cloudflare: '+check(result.syncKeyConfigured)+' · Eingegebener Schlüssel stimmt überein: '+(result.keyMatches?'JA':'NEIN')+(result.note?' · '+result.note:'');}catch(e){area.textContent='Diagnose fehlgeschlagen: '+e.message}};\n$('enableBg').onclick=async()=>{syncKey=$('syncKey').value.trim();if(!syncKey)return msg('Zuerst SYNC_KEY eingeben.');if(!connected)return msg('Für die erste Aktivierung musst du im selben Browser bei TradingView angemeldet sein.');$('enableBg').disabled=true;try{const x=await secureApi('/api/background/enable',{method:'POST'});localStorage.setItem('sd10_sync_key',syncKey);applyBackgroundStatus(x);msg('Hintergrundzugang aktiviert. Die Server-Statusanzeige zeigt den letzten erfolgreichen Cron-Abgleich.');}catch(e){msg('Aktivierung fehlgeschlagen: '+e.message)}finally{$('enableBg').disabled=false}};\n$('resumeBg').onclick=async()=>{if(!confirm('Hast du von TradingView die Freigabe zur erneuten MCP-Nutzung erhalten? Der nächste Cron-Lauf versucht dann erneut zu synchronisieren.'))return;try{const x=await secureApi('/api/background/resume',{method:'POST'});applyBackgroundStatus(x);msg('Synchronisierung wieder freigegeben. Der nächste planmäßige Cron-Aufruf prüft die Verbindung.')}catch(e){msg('Wiederaufnahme fehlgeschlagen: '+e.message)}};\n$('disableBg').onclick=async()=>{if(!syncKey)return msg('SYNC_KEY eingeben.');if(!confirm('Hintergrundzugang und auf dem Server gespeicherte TradingView-Autorisierung löschen?'))return;try{await secureApi('/api/background/disable',{method:'POST'});bgEnabled=false;localStorage.removeItem('sd10_sync_key');syncKey='';$('syncKey').value='';applyBackgroundStatus({enabled:false});msg('Hintergrundabgleich deaktiviert.')}catch(e){msg(e.message)}};\nasync function loadMissingLogos(){if(logoLoading||!connected)return;const lacking=assets.filter(a=>!a.logoUrl&&!a.logoChecked).slice(0,3);if(!lacking.length)return;logoLoading=true;for(const a of lacking){try{let x=await api('/api/logo?symbol='+encodeURIComponent(a.symbol));a.logoChecked=true;if(x.logoUrl&&isTrustedLogo(x.logoUrl))a.logoUrl=x.logoUrl;if(x.description&&!a.description)a.description=x.description;}catch(e){a.logoChecked=true}save();}logoLoading=false;render()}\n$('groupFilter').onchange=()=>{currentFilter=$('groupFilter').value;render()};$('goWatch').onclick=()=>show('watchlist');$('goBrief').onclick=()=>show('briefing');$('toggleTheme').onclick=()=>applyTheme(themeMode==='dark'?'light':'dark');\n$('logoutBtn').onclick=async()=>{if(!confirm('TradingView-Anmeldung dieses Browsers beenden?'))return;await api('/auth/logout',{method:'POST'});location.reload()};\n$('diagBtn').onclick=async()=>{try{$('diagnostics').textContent=JSON.stringify(await api('/api/diagnostics'),null,2)}catch(e){$('diagnostics').textContent=e.message}};\nconst MACRO_REGIONS=['Weltmärkte','USA & Nordamerika','Europa','Asien & Pazifik','Schwellenländer','Zinsen & Geldpolitik'];\nconst newsDate=x=>{const d=new Date(x);return Number.isFinite(d.getTime())?new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin',day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}).format(d):'Datum unbekannt'};\nfunction germanReady(n){return n.language==='de'||n.translationStatus==='original_de'||n.translationStatus==='translated'}\nfunction germanTitle(n){return n.titleDe||n.title||'Ohne Titel'}\nfunction germanSummary(n){return n.summaryDe||((n.language==='de'||n.translationStatus==='original_de')?n.summary:'')||''}\nfunction newsItemHtml(n,showTicker){\n const title=esc(germanTitle(n)),link=String(n.link||'');let safe='';try{const u=new URL(link);if(['https:','http:'].includes(u.protocol))safe=u.href}catch{}\n const linked=safe?`<a href=\"${esc(safe)}\" target=\"_blank\" rel=\"noopener noreferrer\">${title}</a>`:title;\n const summary=germanSummary(n),notice=!germanReady(n)?'<div class=\"translation-flag\">Originalsprache – deutsche Übersetzung derzeit nicht verfügbar; wird nicht vorgelesen.</div>':n.translationStatus==='translated'?'<div class=\"translation-flag\">Automatisch ins Deutsche übersetzt</div>':'';\n return `<div class=\"news-entry\">${showTicker?'<b>'+esc(n.symbol||'')+'</b> · ':''}<div class=\"news-title\">${linked}</div>${summary?'<div class=\"news-summary\">'+esc(summary)+'</div>':'<div class=\"news-summary\">Kein verlässlicher Artikel-Kurztext verfügbar.</div>'}<div class=\"news-meta\">${esc(n.provider||'Quelle unbekannt')} · ${esc(newsDate(n.published))}</div>${notice}</div>`\n}\nconst BRIEF_PREFS='ege_brief_v126';\nconst H1_FILTERS=[['all','Alle H1 – priorisiert'],['green','🟢 Kauf / Hot Picks'],['yellow','🟡 Beobachten'],['red','🔴 Weniger interessant'],['unknown','⚪ Ohne Zuordnung']];\nlet macroSelected=new Set(MACRO_REGIONS),lastBriefContext=null;\ntry{const p=JSON.parse(localStorage.getItem(BRIEF_PREFS)||'{}');if(Array.isArray(p.regions))macroSelected=new Set(p.regions.filter(x=>MACRO_REGIONS.includes(x)));if(typeof p.macroEnabled==='boolean')$('briefMacroEnabled').checked=p.macroEnabled;if(typeof p.stocksEnabled==='boolean')$('briefStockEnabled').checked=p.stocksEnabled;if(['H1','H4','Daily','Weekly','Monthly','Alle','Makro'].includes(p.scope))$('briefScope').value=p.scope;if(H1_FILTERS.some(x=>x[0]===p.h1))$('briefH1Filter').value=p.h1}catch{}\nfunction storeBriefPrefs(){try{localStorage.setItem(BRIEF_PREFS,JSON.stringify({regions:[...macroSelected],macroEnabled:$('briefMacroEnabled').checked,stocksEnabled:$('briefStockEnabled').checked,scope:$('briefScope').value,h1:$('briefH1Filter').value}))}catch{}}\nfunction renderMacroChips(){const labels={'Weltmärkte':'🌐 Weltmärkte','USA & Nordamerika':'🇺🇸 USA','Europa':'🇪🇺 Europa','Asien & Pazifik':'🌏 Asien','Schwellenländer':'🌍 Emerging Markets','Zinsen & Geldpolitik':'🏦 Zinsen & Geldpolitik'};\n $('macroTopicChips').innerHTML=MACRO_REGIONS.map(r=>`<label class=\"macro-topic\"><input type=\"checkbox\" data-macro-topic=\"${esc(r)}\" ${macroSelected.has(r)?'checked':''}><span>${esc(labels[r]||r)}</span></label>`).join('');}\nfunction macroTopics(){return MACRO_REGIONS.filter(r=>macroSelected.has(r))}\nfunction refreshBriefChoices(){const makro=$('briefMacroEnabled').checked,stocks=$('briefStockEnabled').checked&&$('briefScope').value!=='Makro';$('macroTopicChips').classList.toggle('is-inactive',!makro);$('macroTopicChips').querySelectorAll('input').forEach(x=>x.disabled=!makro);$('briefStockOptions').classList.toggle('is-inactive',!stocks);$('briefScope').disabled=!$('briefStockEnabled').checked;$('briefH1Options').classList.toggle('hidden',!stocks||$('briefScope').value!=='H1');$('briefH1Filter').disabled=!stocks||$('briefScope').value!=='H1';$('briefH1Info').textContent=$('briefH1Filter').value==='all'?'Reihenfolge: 🟢 Kauf → 🟡 Beobachten → 🔴 Weniger interessant → ⚪ Ohne Zuordnung':'Es werden nur Werte aus der gewählten H1-Kategorie berücksichtigt.';\n const n=macroTopics().length;$('macroSelectionInfo').textContent=!makro?'Makronachrichten ausgeschaltet':n+' von '+MACRO_REGIONS.length+' Makrothemen für die Sprachausgabe ausgewählt';$('newsBtn').disabled=!((makro&&n>0)||stocks);storeBriefPrefs()}\nfunction invalidateBrief(){lastBriefContext=null;$('briefText').textContent='Auswahl geändert. Bitte Morgenbriefing erneut zusammenstellen.';$('briefCount').textContent='Auswahl geändert';if('speechSynthesis'in window){ttsStopped=true;ttsQueue=[];speechSynthesis.cancel()}}\nfunction renderMacro(){const active=macroTopics();const items=macroNews.filter(x=>active.includes(x.region));$('macroCount').textContent=items.length+' / '+macroNews.length+' Meldungen';const groups=MACRO_REGIONS.map(region=>({region,items:items.filter(x=>x.region===region)})).filter(g=>g.items.length);\n $('macroItems').innerHTML=groups.length?groups.map((g,i)=>`<details class=\"brief-section\" ${i===0?'open':''}><summary>${esc(g.region)} <span class=\"badge\">${g.items.length}</span></summary>${g.items.map(x=>newsItemHtml(x,false)).join('')}</details>`).join(''):'<div class=\"empty\">Für diese Auswahl liegen keine gespeicherten Makromeldungen vor.</div>';if(macroFetchedAt)$('macroStatus').textContent='Zuletzt geladen: '+newsDate(macroFetchedAt)+' · öffentliche Feeds / Nachrichtensuche.'}\nfunction refreshMacroSelections(){refreshBriefChoices();renderMacro();if(lastBriefContext)makeBrief(lastBriefContext.chosen,lastBriefContext.received,lastBriefContext.scope);}\n$('macroTopicChips').onchange=e=>{const input=e.target.closest('input[data-macro-topic]');if(!input)return;const key=input.dataset.macroTopic;input.checked?macroSelected.add(key):macroSelected.delete(key);refreshMacroSelections()};\n$('briefMacroEnabled').onchange=refreshMacroSelections;\n$('briefStockEnabled').onchange=()=>{if($('briefStockEnabled').checked&&$('briefScope').value==='Makro')$('briefScope').value='H1';refreshBriefChoices();invalidateBrief()};\n$('briefScope').onchange=()=>{if($('briefScope').value==='Makro'){$('briefStockEnabled').checked=false;$('briefMacroEnabled').checked=true;}else $('briefStockEnabled').checked=true;refreshBriefChoices();invalidateBrief()};\n$('briefH1Filter').onchange=()=>{refreshBriefChoices();invalidateBrief()};\nrenderMacroChips();refreshBriefChoices();\nasync function loadMacroNews(){if(!syncKey)throw Error('Bitte in Einstellungen den vorhandenen SYNC_KEY hinterlegen; die Nachrichten selbst benötigen kein TradingView-Login.');const response=await secureApi('/api/news/macro');if(!Array.isArray(response.news))throw Error('Ungültige Makro-Antwort');macroNews=response.news;macroFetchedAt=response.fetchedAt||new Date().toISOString();save();renderMacro();$('macroStatus').textContent=macroNews.length+' Makromeldungen · '+(response.feedErrors||0)+' nicht erreichbare Quellen · Stand '+newsDate(macroFetchedAt);return response}\nasync function loadCompanyNews(a){const r=await secureApi('/api/news/company?symbol='+encodeURIComponent(a.symbol)+'&name='+encodeURIComponent(a.description||''));if(!Array.isArray(r.news))throw Error('Ungültige News-Antwort');return r.news.map(n=>({...n,symbol:a.symbol,sourceType:'external'}))}\nfunction prioritizedStockSelection(scope){const filter=$('briefH1Filter').value;\n let selected=assets.filter(a=>(scope==='Alle'||memberships(a).includes(scope))&&(scope!=='H1'||filter==='all'||ratingOf(a)===filter));\n const ranks={green:0,yellow:1,red:2,unknown:3};return selected.sort((a,b)=>{const ga=GROUPS.findIndex(g=>memberships(a).includes(g)),gb=GROUPS.findIndex(g=>memberships(b).includes(g));const prioA=ga<0?9:ga,prioB=gb<0?9:gb;if(prioA!==prioB)return prioA-prioB;if(prioA===0)return ranks[ratingOf(a)]-ranks[ratingOf(b)]||String(a.symbol).localeCompare(String(b.symbol));return String(a.symbol).localeCompare(String(b.symbol))})}\n$('newsBtn').onclick=async()=>{const scope=$('briefScope').value;const doMacro=$('briefMacroEnabled').checked&&macroSelected.size>0,doStocks=$('briefStockEnabled').checked&&scope!=='Makro';if(!doMacro&&!doStocks)return msg('Bitte Makrothemen oder Unternehmensnachrichten aktivieren.');const selected=doStocks?prioritizedStockSelection(scope):[];const chosen=selected.slice(0,16);let received=[],errors=[];const btn=$('newsBtn');btn.disabled=true;lastBriefContext=null;$('newsStatus').textContent='Deine ausgewählten Nachrichten werden geladen…';try{if(doMacro){try{await loadMacroNews()}catch(e){errors.push('Makro: '+e.message)}}if(chosen.length&&!syncKey)errors.push('SYNC_KEY fehlt – Unternehmensnews nicht abrufbar.');else{let next=0;const worker=async()=>{while(next<chosen.length){const a=chosen[next++];try{const results=await loadCompanyNews(a);received.push(...results.slice(0,4));$('newsStatus').textContent='Unternehmensnews: '+next+'/'+chosen.length+' Aktien geprüft'}catch(e){errors.push(a.symbol+': '+e.message)}}};await Promise.all(Array.from({length:Math.min(4,chosen.length)},worker))}if(received.length){const key=x=>x.link||x.id;const seen=new Set();news=[...received,...news].filter(n=>{const k=key(n);if(seen.has(k))return false;seen.add(k);return true}).slice(0,200);save()}makeBrief(chosen,received,scope);$('newsStatus').textContent=(doMacro?macroNews.filter(n=>macroSelected.has(n.region)).length+' ausgewählte Makromeldungen · ':'')+(doStocks?received.length+' Aktienmeldungen · ':'')+errors.length+' Abruffehler'+(doStocks&&selected.length>16?' · die ersten 16 von '+selected.length+' Aktien geprüft':'');render();if(errors.length)msg(errors.join(' | ').slice(0,260))}finally{btn.disabled=false;refreshBriefChoices()}};\n$('companyNewsBtn').onclick=async()=>{const asset=assets.find(a=>a.symbol===$('newsSingleAsset').value);if(!asset)return msg('Bitte eine Aktie auswählen');const b=$('companyNewsBtn');b.disabled=true;$('singleCompanyStatus').textContent='Suche Nachrichten für '+asset.symbol+'…';try{const results=await loadCompanyNews(asset);$('singleCompanyItems').innerHTML=results.length?results.map(n=>newsItemHtml(n,true)).join(''):'<p class=\"muted\">Keine aktuellen, eindeutig zugeordneten Meldungen gefunden.</p>';$('singleCompanyStatus').textContent=results.length+' Meldungen zu '+asset.symbol+' · Quellen von externen Anbietern';if(results.length){news=[...results,...news].slice(0,200);save();render()}}catch(e){$('singleCompanyStatus').textContent='Abruf fehlgeschlagen: '+e.message}finally{b.disabled=false}};\nfunction articleSpeech(n){\n if(!germanReady(n))return '';\n let title=germanTitle(n).replace(/\\s+/g,' ').trim().replace(/[.!?]+$/,'');\n let summary=germanSummary(n).replace(/\\s+/g,' ').trim();\n if(!summary)return title+'. Die Quelle liefert hierzu keinen gesicherten Kurztext.';\n if(summary.toLowerCase()===title.toLowerCase())return title+'. Die Quelle liefert keinen zusätzlichen Kurztext.';\n return title+'. Hintergrund aus dem veröffentlichten Kurztext: '+summary.replace(/[.!?]+$/,'')+'.';\n}\nfunction makeBrief(chosen,received,scope){\n lastBriefContext={chosen:[...chosen],received:[...received],scope};\n const includeMacro=$('briefMacroEnabled').checked&&macroSelected.size>0;\n const includeStocks=$('briefStockEnabled').checked&&scope!=='Makro';\n let now=new Date().toLocaleString('de-DE',{timeZone:'Europe/Berlin',dateStyle:'full',timeStyle:'short'});\n let t='EGE Financial Markets. Dein persönliches Morgenbriefing vom '+now+'.\\n\\n';let spoken=0;\n if(includeMacro){t+='Teil eins: Internationale Märkte und Wirtschaft.\\n';let macroSpoken=0;\n  for(const region of MACRO_REGIONS.filter(x=>macroSelected.has(x))){const items=macroNews.filter(n=>n.region===region&&germanReady(n)).slice(0,2);\n   if(items.length){t+='\\n'+region+'.\\n';for(const n of items){t+='• '+articleSpeech(n)+' Quelle: '+n.provider+'.\\n';spoken++;macroSpoken++}}}\n  if(!macroSpoken)t+='Keine verfügbaren deutschen Kurzmeldungen zu den ausgewählten Makrothemen.\\n';\n }\n if(includeStocks){t+='\\n'+(includeMacro?'Teil zwei: ':'')+'Unternehmensnachrichten. Watchlist '+scope+(scope==='H1'?' – '+$('briefH1Filter').selectedOptions[0].text:'')+'.\\n';let covered=0;let lastRating='';\n  for(const a of chosen){const ns=received.filter(n=>n.symbol===a.symbol&&germanReady(n)).slice(0,2);if(!ns.length)continue;\n   if(memberships(a).includes('H1')){const r=ratingOf(a);if(lastRating!==r){t+='\\nH1-Priorität: '+({green:'Kauf',yellow:'Beobachten',red:'Weniger interessant',unknown:'Ohne Zuordnung'}[r]||'Ohne Zuordnung')+'.\\n';lastRating=r}}\n   covered++;t+='\\n'+(a.description||a.symbol)+'.\\n';for(const n of ns){t+='• '+articleSpeech(n)+' Quelle: '+n.provider+'.\\n';spoken++}}\n  if(!covered)t+='Keine zugeordneten Firmenmeldungen mit deutschem Kurztext verfügbar.\\n';\n }\n if(!includeMacro&&!includeStocks)t+='Keine Nachrichtenbereiche ausgewählt.\\n';\n t+='\\nDie Angaben beruhen auf veröffentlichten Kurztexten und stellen keine Handelssignale dar.';\n $('briefText').textContent=t;$('briefCount').textContent=spoken+' Meldungen';\n $('newsItems').innerHTML=includeStocks&&received.length?received.map(n=>newsItemHtml(n,true)).join(''):'<div class=\"empty\">'+(includeStocks?'Keine aktuellen Unternehmensmeldungen für diese Auswahl.':'Unternehmensnachrichten für dieses Briefing deaktiviert.')+'</div>';\n}\nconst VOICE_RATE_KEY='ege_voice_rate';let ttsQueue=[],ttsStopped=false,ttsGeneration=0;\nfunction allGermanVoices(){return ('speechSynthesis' in window)?speechSynthesis.getVoices().filter(v=>/^de([_-]|$)/i.test(v.lang)):[]}\nfunction preferredGermanVoice(){const voices=allGermanVoices();return voices.find(v=>/anna/i.test(v.name))||voices.find(v=>v.default)||voices[0]||null}\ntry{const rate=localStorage.getItem(VOICE_RATE_KEY);if(['0.88','0.96','1.06'].includes(rate))$('voiceRate').value=rate}catch{}\n$('voiceRate').onchange=()=>{try{localStorage.setItem(VOICE_RATE_KEY,$('voiceRate').value)}catch{}};\nfunction makeUtterance(chunk){const u=new SpeechSynthesisUtterance(chunk);u.lang='de-DE';u.rate=Number($('voiceRate').value)||.96;u.pitch=.98;const voice=preferredGermanVoice();if(voice)u.voice=voice;return u}\nfunction stopSpeaking(){ttsStopped=true;ttsGeneration++;ttsQueue=[];if('speechSynthesis'in window)speechSynthesis.cancel()}\nfunction speakNext(generation){if(ttsStopped||generation!==ttsGeneration)return;\n if(!ttsQueue.length){$('voiceStatus').textContent='Briefing beendet.';return}\n const u=makeUtterance(ttsQueue.shift());u.onend=()=>{if(!ttsStopped&&generation===ttsGeneration)speakNext(generation)};\n u.onerror=e=>{if(!ttsStopped&&generation===ttsGeneration)$('voiceStatus').textContent='Vorlesen unterbrochen: '+(e.error||'unbekannt')};\n speechSynthesis.speak(u);\n}\nfunction voiceChunks(s){const sentences=s.replace(/\\n+/g,'. ').match(/[^.!?]+[.!?]*/g)||[s];const chunks=[];let part='';for(const p of sentences){if(part.length+p.length>350&&part){chunks.push(part);part=''}part+=p+' ';if(part.length>440){chunks.push(part);part=''}}if(part.trim())chunks.push(part);return chunks}\n$('speakBtn').onclick=()=>{if(!('speechSynthesis'in window))return msg('Sprachausgabe auf diesem Gerät nicht verfügbar');\n const t=$('briefText').textContent;if(!t||t.startsWith('Noch kein'))return msg('Bitte zuerst Morgenbriefing zusammenstellen');\n stopSpeaking();ttsQueue=voiceChunks(t);ttsStopped=false;const generation=ttsGeneration;\n $('voiceStatus').textContent='Briefing wird mit '+(preferredGermanVoice()?.name||'der deutschen Systemstimme')+' vorgelesen …';speakNext(generation)};\n$('stopBtn').onclick=()=>{stopSpeaking();$('voiceStatus').textContent='Vorlesen gestoppt.'};\n\nconst tdTestBtn=$('tdTestBtn');if(tdTestBtn)tdTestBtn.onclick=async()=>{const output=$('tdTestResult');tdTestBtn.disabled=true;output.textContent='Prüfe Datenzugriff …';try{const params=new URLSearchParams({symbol:$('tdSymbol').value,interval:$('tdInterval').value,provider:'auto',count:'max'});const r=await fetch('/api/marketdata/diagnose?'+params.toString(),{credentials:'same-origin'});const d=await r.json();output.textContent=(d.ok?'✓ Verfügbar':'✕ Nicht verfügbar')+' · '+(d.symbol||'')+' · '+(d.interval||'')+' · '+(d.bars||0)+' Kerzen · '+(d.first||'–')+' bis '+(d.last||'–')+(d.source?' · '+d.source:'')+(d.requested==='max'?' · maximal verfügbar (je API-Grenze)':'')+(d.message?' · '+d.message:'')+(d.code?' (Code '+d.code+')':'');}catch(e){output.textContent='Test fehlgeschlagen: '+String(e.message||e)}finally{tdTestBtn.disabled=false}};\napplyTheme(themeMode);render();getStatus();\nsyncTimer=setInterval(()=>{renderSyncCards();if((connected||bgEnabled)&&!document.hidden)autoSync()},120000);\ndocument.addEventListener('visibilitychange',()=>{if(!document.hidden&&(connected||bgEnabled))autoSync()});\nwindow.addEventListener('focus',()=>{if((connected||bgEnabled)&&(!lastChecked||Date.now()-new Date(lastChecked).getTime()>30000))autoSync()});</script></body></html>";
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
const UA='EGE-Markets/13.4 (private TradingView MCP client)';
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
function publicClient(origin){return {client_id:origin+'/oauth-client-metadata.json',client_name:'EGE Financial Markets Analyse Tool',client_uri:origin,redirect_uris:[origin+'/auth/callback'],grant_types:['authorization_code','refresh_token'],response_types:['code'],token_endpoint_auth_method:'none',application_type:'web'} }
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
// The browser cookie proves which grant the visitor owns. If the same grant is
// linked to background sync, KV is the canonical rotating OAuth token store.
// A different OAuth login must never inherit a token from that KV entry.
async function obtainSession(request,env){
 const cookie=getCookie(request,AUTH_COOKIE);let s=await unseal(cookie,env.APP_SECRET);
 if(!s?.access_token)return {session:null};
 let canonical=false,changed=false;
 if(s.syncGrantId&&env.SWINGDESK_KV?.get){
  const stored=await unseal(await env.SWINGDESK_KV.get(KV_SESSION),env.APP_SECRET);
  if(stored?.syncGrantId===s.syncGrantId&&stored?.client?.client_id===s.client?.client_id){
   canonical=true;
   if(stored.access_token!==s.access_token||stored.refresh_token!==s.refresh_token||stored.exp!==s.exp){s=stored;changed=true;}
  }
 }
 if(s.exp&&Date.now()<s.exp){
  if(changed){const token=await seal(s,env.APP_SECRET);tooLongCookie('session',token);return {session:s,setCookie:setCookie(AUTH_COOKIE,token)}}
  return {session:s};
 }
 if(!s.refresh_token)return {session:null};
 try{
  const args={grant_type:'refresh_token',refresh_token:s.refresh_token,client_id:s.client.client_id,resource:MCP_URL};
  if(s.client.client_secret)args.client_secret=s.client.client_secret;
  const next=await tokenRequest(s.token_endpoint,args);if(!next.access_token)throw Error('Token ungültig');
  s={...s,access_token:next.access_token,refresh_token:next.refresh_token||s.refresh_token,exp:Date.now()+Math.max(30,Number(next.expires_in||3600)-60)*1000};
  const token=await seal(s,env.APP_SECRET);tooLongCookie('session',token);
  if(canonical&&env.SWINGDESK_KV?.put)await env.SWINGDESK_KV.put(KV_SESSION,token);
  return {session:s,setCookie:setCookie(AUTH_COOKIE,token)};
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
 const init=await rpc('initialize',{protocolVersion:'2025-06-18',capabilities:{},clientInfo:{name:'EGE Financial Markets Analyse Tool',version:'11.0.0'}},session.access_token);
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
// Exact canonical names allow users to write "6-Einordnung" or "6 - Einordnung".
function watchlistKey(name){return String(name||'').trim().replace(/[\u2012-\u2015]/g,'-').replace(/\s*-\s*/g,' - ').toLowerCase()}
// The sixth list is read ONLY by the scheduled backend. It must never appear in visible assets.
async function priorityLists(session,includeIntake=false){
 const canonical=[['1 - H1','H1'],['2 - H4','H4'],['3 - Daily','Daily'],['4 - Weekly','Weekly'],['5 - Monthly','Monthly']];
 const exactKey=watchlistKey;
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
 const result={source:'tradingview_mcp_named_watchlists',matched:groupData.length,groups:groupData,missing,assets:[...merged.values()],syncedAt:new Date().toISOString(),
  sectionInfo:!h1Group?{state:'missing_list',message:'Watchlist 1 - H1 nicht gefunden.'}:h1Group.sectioned>0?{state:'received',message:'Abschnittsinformationen übertragen.',sectionNames:h1Group.sectionNames,assigned:h1Group.sectioned}: {state:'not_received',message:'TradingView-MCP liefert derzeit keine zuordenbaren H1-Abschnitte.',sectionNames:h1Group.sectionNames||[],assigned:0}};
 if(includeIntake){
  const matches=listed.filter(l=>exactKey(l.name)==='6 - einordnung');
  if(matches.length>1){result.intake={found:false,error:'Mehrfacher Name 6 - Einordnung'};}
  else if(!matches.length){result.intake={found:false,error:'TradingView-Eingangsliste 6 - Einordnung nicht gefunden'};}
  else{
   try{
    const entries=companyObjects(await mcpCall('get_watchlist',{watchlist_id:matches[0].id},session));
    result.intake={found:true,listId:matches[0].id,items:entries.map(x=>({symbol:x.symbol,description:x.description||''}))};
   }catch(e){
    // Quota violations must still stop all TradingView activity; preserve last good KV snapshot.
    if(isMcpQuotaError(e.message))throw e;
    result.intake={found:false,error:'Eingangsliste nicht lesbar: '+String(e.message||e).slice(0,150)};
   }
  }
 }
 return result;
}
const KV_SESSION='v10:oauth_session';
const KV_RATINGS='v10:ratings';
const KV_SNAPSHOT='v10:snapshot';
const KV_STATE='v10:state';
const KV_INTAKE='ege:watchlist:intake:v1';
// Deterministic stage selection. Called only once the per-timeframe trend engine is validated.
// Each predecessor must be a VERIFIED bullish external trend, otherwise no promotion.
function targetWatchlistFromTrends(t){
 const steps=[['Monthly','Monthly'],['Weekly','Weekly'],['Daily','Daily'],['H4','H4']];
 for(const [tf,destination] of steps){
  const trend=String(t?.[tf]||'').toLowerCase();
  if(trend==='bear')return {status:'classified',group:destination,reason:tf+' extern nicht bullish'};
  if(trend!=='bull')return {status:'pending',group:null,reason:tf+' extern nicht verifiziert'};
 }
 return {status:'classified',group:'H1',reason:'Monthly, Weekly, Daily und H4 extern bullish'};
}

// Complete only verified placements. This workflow is intentionally independent of
// the still-unimplemented trend engine. The engine may call moveClassifiedToWatchlist
// only after its indicators and timeframe classification have been validated.
const MAX_INTAKE_CLEANUP_PER_SYNC=12;
function confirmedDestination(snapshot,symbol){
 const asset=(snapshot?.assets||[]).find(a=>a.symbol===symbol);
 return asset&&Array.isArray(asset.groups)&&asset.groups.length===1?asset.groups[0]:null;
}
// Future classification entry point: add -> verify destination -> remove -> verify intake.
// On any failure, the source remains in 6 - Einordnung (or the next cron heals a duplicate).
async function moveClassifiedToWatchlist(session,intake,snapshot,symbol,group){
 symbol=String(symbol||'').toUpperCase();
 if(!tickerRE.test(symbol))throw Error('Einordnung: ungueltiges Symbol');
 if(!intake?.found||!intake.listId||!intake.items?.some(x=>x.symbol===symbol))throw Error('Einordnung: Symbol nicht in Eingangsliste');
 const destination=(snapshot.groups||[]).find(g=>g.group===group);
 if(!destination||!['Monthly','Weekly','Daily','H4','H1'].includes(group))throw Error('Einordnung: ungueltige Zielliste');
 // Do not silently move an asset already assigned to a different or multiple watchlist(s).
 const present=(snapshot.assets||[]).find(x=>x.symbol===symbol);
 if(present?.groups?.length&&!(present.groups.length===1&&present.groups[0]===group))throw Error('Einordnung: bereits abweichend einsortiert');
 if(!present){
  await mcpCall('add_to_watchlist',{watchlist_id:destination.id,symbols:[symbol]},session);
  const updated=companyObjects(await mcpCall('get_watchlist',{watchlist_id:destination.id},session));
  if(!updated.some(x=>x.symbol===symbol))return {ok:false,stage:'destination_unconfirmed',intakeRetained:true};
 }
 // Never remove the source before a confirmed destination read-back (above) or
 // a verified, freshly loaded snapshot of the target list (existing member).
 await mcpCall('remove_from_watchlist',{watchlist_id:intake.listId,symbols:[symbol]},session);
 const after=companyObjects(await mcpCall('get_watchlist',{watchlist_id:intake.listId},session));
 return {ok:!after.some(x=>x.symbol===symbol),stage:'intake_verification',intakeRetained:after.some(x=>x.symbol===symbol)};
}
// The 4-hour backend scan already loaded each target watchlist. Any symbol in the
// hidden intake AND in exactly one visible target can be safely removed from intake.
// Never move or drop symbols that have not passed the real indicator analysis.
async function cleanupAlreadyPlacedIntake(session,intake,snapshot){
 const report={attempted:0,removed:0,error:null,skippedAmbiguous:0};
 if(!intake?.found||!intake.listId||!Array.isArray(intake.items)||!intake.items.length)return {intake,report};
 const eligible=[];
 for(const x of intake.items){
  const matches=(snapshot.assets||[]).find(a=>a.symbol===x.symbol)?.groups||[];
  if(matches.length>1)report.skippedAmbiguous++;
  else if(matches.length===1&&eligible.length<MAX_INTAKE_CLEANUP_PER_SYNC)eligible.push(x.symbol);
 }
 if(!eligible.length)return {intake,report};
 report.attempted=eligible.length;
 let writeFailed=null;
 try{
  await mcpCall('remove_from_watchlist',{watchlist_id:intake.listId,symbols:eligible},session);
 }catch(e){
  if(isMcpQuotaError(e.message))throw e;
  writeFailed=String(e.message||e).slice(0,180);
 }
 // An independent read-back, NOT the write response, decides what is completed.
 try{
  const after=companyObjects(await mcpCall('get_watchlist',{watchlist_id:intake.listId},session));
  const stillThere=new Set(after.map(x=>x.symbol));
  report.removed=eligible.filter(s=>!stillThere.has(s)).length;
  // Use actual post-removal source contents; preserve description and firstSeen through storeIntake.
  const original=new Map(intake.items.map(x=>[x.symbol,x]));
  const items=after.map(x=>({symbol:x.symbol,description:x.description||original.get(x.symbol)?.description||''}));
  if(writeFailed)report.error='Teilweise fehlgeschlagen: '+writeFailed;
  return {intake:{...intake,items},report};
 }catch(e){
  if(isMcpQuotaError(e.message))throw e;
  report.error='Nachpruefung nicht moeglich: '+String(e.message||e).slice(0,160);
  return {intake,report}; // never declare success on uncertain read-back
 }
}
async function storeIntake(env,intake,snapshot,cleanupReport=null){
 const prev=await env.SWINGDESK_KV.get(KV_INTAKE,'json')||{queue:[]};
 if(!intake?.found){
  const current={...prev,listFound:false,readError:intake?.error||'Keine Eingangsliste',checkedAt:new Date().toISOString()};
  await env.SWINGDESK_KV.put(KV_INTAKE,JSON.stringify(current));
  return {found:false,count:prev.queue?.length||0};
 }
 const old=new Map((prev.queue||[]).map(x=>[x.symbol,x]));
 const visible=new Set(snapshot.assets.map(x=>x.symbol));
 const queue=intake.items.map(x=>({symbol:x.symbol,description:x.description,firstSeen:old.get(x.symbol)?.firstSeen||new Date().toISOString(),
  status:visible.has(x.symbol)?'bereits_in_sichtbarer_liste':'analyse_ausstehend'}));
 const state={listFound:true,listId:intake.listId,checkedAt:new Date().toISOString(),queue,analysisEnabled:false,writeEnabled:false,cleanupEnabled:true,lastCleanup:cleanupReport?{at:new Date().toISOString(),...cleanupReport}:prev.lastCleanup||null,readError:null};
 await env.SWINGDESK_KV.put(KV_INTAKE,JSON.stringify(state));
 return {found:true,count:queue.length};
}
function backgroundConfigured(env){return !!(env.SWINGDESK_KV&&env.SYNC_KEY&&env.SYNC_KEY.length>=32)}
async function safeEq(a,b){const x=new Uint8Array(await crypto.subtle.digest('SHA-256',te.encode(String(a||''))));const y=new Uint8Array(await crypto.subtle.digest('SHA-256',te.encode(String(b||''))));let diff=0;for(let i=0;i<x.length;i++)diff|=x[i]^y[i];return diff===0}
async function backgroundAuth(request,env,cron=false){if(!backgroundConfigured(env))return false;const got=cron?(request.headers.get('Authorization')||'').replace(/^Bearer\s+/i,''):request.headers.get('X-Swingdesk-Key');return await safeEq(got||'',env.SYNC_KEY)}
const MIN_MCP_SYNC_INTERVAL_MS=4*60*60*1000;
function isMcpQuotaError(message){return /TOOL_QUOTA_EXCEEDED|ToolQuotaPlugin|MCP usage has raised suspicion|tool call quota exceeded/i.test(String(message||''))}
async function getSyncState(env){const state=await env.SWINGDESK_KV.get(KV_STATE,'json')||{enabled:false,lastSuccess:null,error:null};if(!state.quotaBlocked&&isMcpQuotaError(state.error)){state.quotaBlocked=true;state.quotaBlockedAt=new Date().toISOString();await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(state))}return state}
async function syncServer(env,{manualOverride=false}={}){let state=await getSyncState(env);if(!state.enabled)return {skipped:true,reason:'disabled'};if(state.quotaBlocked||isMcpQuotaError(state.error)){if(!state.quotaBlocked){state={...state,quotaBlocked:true,quotaBlockedAt:new Date().toISOString()};await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(state))}return {skipped:true,reason:'TRADINGVIEW_QUOTA_BLOCKED',requiresManualResume:true};}
 const since=Date.parse(state.lastAttempt||'')||Date.parse(state.lastSuccess||'')||0;
 if(since&&Date.now()-since<MIN_MCP_SYNC_INTERVAL_MS&&!manualOverride)return {skipped:true,reason:'minimum_interval',nextAttempt:new Date(since+MIN_MCP_SYNC_INTERVAL_MS).toISOString()};
 // No persistent override flag: only this authenticated, explicit manual request can skip the local cooldown.
 const attemptStartedAt=new Date().toISOString();state={...state,lastAttempt:attemptStartedAt};await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(state));const encrypted=await env.SWINGDESK_KV.get(KV_SESSION);let s=await unseal(encrypted,env.APP_SECRET);if(!s?.access_token)throw Error('Keine gespeicherte TradingView-Autorisierung. Im EGE Financial Markets Analyse Tool erneut aktivieren.');
 try{if(s.exp&&Date.now()>=s.exp){if(!s.refresh_token)throw Error('OAuth-Token abgelaufen und nicht erneuerbar. TradingView erneut verbinden.');const p={grant_type:'refresh_token',refresh_token:s.refresh_token,client_id:s.client.client_id,resource:MCP_URL};if(s.client.client_secret)p.client_secret=s.client.client_secret;const refreshed=await tokenRequest(s.token_endpoint,p);if(!refreshed.access_token)throw Error('TradingView hat die Erneuerung des Zugriffstokens abgelehnt.');s={...s,access_token:refreshed.access_token,refresh_token:refreshed.refresh_token||s.refresh_token,exp:Date.now()+Math.max(30,Number(refreshed.expires_in||3600)-60)*1000};await env.SWINGDESK_KV.put(KV_SESSION,await seal(s,env.APP_SECRET));}
 const snapshot=await priorityLists(s,true);if(snapshot.matched===0)throw Error('Keine der fünf regulären Watchlists gefunden.');const intake=snapshot.intake;delete snapshot.intake;const cleaned=await cleanupAlreadyPlacedIntake(s,intake,snapshot);const intakeStatus=await storeIntake(env,cleaned.intake,snapshot,cleaned.report);await env.SWINGDESK_KV.put(KV_SNAPSHOT,JSON.stringify(snapshot));state={...state,enabled:true,lastAttempt:attemptStartedAt,lastSuccess:snapshot.syncedAt,error:null,quotaBlocked:false,quotaBlockedAt:null,matched:snapshot.matched,count:snapshot.assets.length};await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(state));return {ok:true,lastSuccess:state.lastSuccess,lastAttempt:state.lastAttempt,nextAttempt:new Date(Date.parse(attemptStartedAt)+MIN_MCP_SYNC_INTERVAL_MS).toISOString(),manualOverrideUsed:manualOverride,matched:state.matched,count:state.count,intakeFound:intakeStatus.found,intakePending:intakeStatus.count,intakeRemoved:cleaned.report.removed,intakeCleanupError:cleaned.report.error};}
 catch(e){const detail=String(e.message||e),blocked=isMcpQuotaError(detail);state={...state,error:blocked?'TradingView MCP: TOOL_QUOTA_EXCEEDED – weitere automatische Anfragen pausiert.':detail.slice(0,220),quotaBlocked:blocked,quotaBlockedAt:blocked?new Date().toISOString():null,lastAttempt:new Date().toISOString()};await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(state));if(blocked)return {skipped:true,reason:'TRADINGVIEW_QUOTA_BLOCKED',requiresManualResume:true};throw e;}
}

// Public headline metadata (headline, publisher, publication date and original link only).
// TradingView's MCP is deliberately NOT used for either corporate or macro news.
const EGE_NEWS_CACHE_PREFIX='ege:external-news:v2:';
const NEWS_FEED_TIMEOUT_MS=6500;
const EGE_TRANSLATION_MODEL='@cf/meta/m2m100-1.2b';
const MACRO_FEEDS=[
 {region:'Weltmärkte',provider:'n-tv',url:'https://www.n-tv.de/wirtschaft/rss'},
 {region:'Weltmärkte',provider:'tagesschau',url:'https://www.tagesschau.de/wirtschaft/weltwirtschaft/index~rss2.xml'},
 {region:'Weltmärkte',provider:'Bloomberg',url:'https://feeds.bloomberg.com/economics/news.rss'},
 {region:'Weltmärkte',provider:'Business Insider / Nachrichtensuche',query:'Weltwirtschaft Aktien Börsen Wirtschaft site:businessinsider.de'},
 {region:'USA & Nordamerika',provider:'Nachrichtensuche USA',query:'USA US Wirtschaft Inflation Federal Reserve Wall Street Konjunktur'},
 {region:'Europa',provider:'Nachrichtensuche Europa',query:'Europa Eurozone Wirtschaft EU Deutschland EZB Konjunktur'},
 {region:'Asien & Pazifik',provider:'Nachrichtensuche Asien',query:'China Japan Indien Asien Wirtschaft Aktienmarkt Konjunktur'},
 {region:'Schwellenländer',provider:'Nachrichtensuche Emerging Markets',query:'Brasilien Lateinamerika Afrika Indien Schwellenländer Wirtschaft Börse'},
 {region:'Zinsen & Geldpolitik',provider:'EZB',url:'https://www.ecb.europa.eu/rss/press.html'},
 {region:'Zinsen & Geldpolitik',provider:'US Federal Reserve',url:'https://www.federalreserve.gov/feeds/press_monetary.xml'}
];
function decodeXml(value){return String(value||'').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi,(_,a)=>{const special={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' '};if(a[0]==='#'){const cp=a[1].toLowerCase()==='x'?parseInt(a.slice(2),16):parseInt(a.slice(1),10);return cp>0&&cp<=0x10ffff?String.fromCodePoint(cp):''}return special[a.toLowerCase()]||' '}).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim()}
function xmlTag(src,name){const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');const m=src.match(new RegExp('<'+escaped+'(?:\\s[^>]*)?>([\\s\\S]*?)<\\/'+escaped+'\\s*>','i'));return m?decodeXml(m[1]):''}
function xmlRawTag(src,name){const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');const m=src.match(new RegExp('<'+escaped+'(?:\\s[^>]*)?>([\\s\\S]*?)<\\/'+escaped+'\\s*>','i'));return m?m[1]:''}
function hrefAllowed(raw){try{const u=new URL(raw);return (u.protocol==='https:'||u.protocol==='http:')?u.href:''}catch{return ''}}
function languageOf(text,defaultLang='de'){
 const t=' '+String(text||'').toLowerCase().replace(/[^a-zäöüß]+/g,' ')+' ';
 const en=(t.match(/\b(the|and|with|says|said|stocks|markets|shares|economy|from|after|will|expects|amid|report|rates|growth|earnings|profits|global)\b/g)||[]).length;
 const de=(t.match(/\b(der|die|das|und|mit|nach|für|von|bei|eine|einer|sind|aktien|wirtschaft|börse|markt|zinsen|konjunktur|unternehmen|deutschland)\b/g)||[]).length;
 if(en>=2&&en>de*1.5)return 'en';if(de>=2&&de>=en)return 'de';return defaultLang;
}
function parseFeedXml(xml,sourceName,limit=45,defaultLang='de'){
 const parts=[...xml.matchAll(/<(item|entry)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi)].slice(0,limit);const rows=[];
 for(const m of parts){const chunk=m[2],title=xmlTag(chunk,'title');if(!title)continue;
  let link=hrefAllowed(xmlTag(chunk,'link')||xmlTag(chunk,'guid'));
  if(!link){const href=chunk.match(/<link\b[^>]*\bhref\s*=\s*["']([^"']+)["']/i);link=hrefAllowed(href?decodeXml(href[1]):'')}
  if(!link)continue;
  const pub=xmlTag(chunk,'pubDate')||xmlTag(chunk,'published')||xmlTag(chunk,'updated')||xmlTag(chunk,'dc:date');
  const ts=Date.parse(pub),published=Number.isFinite(ts)?new Date(ts).toISOString():null;
  const provider=xmlTag(chunk,'source')||sourceName;
  let summary=xmlTag(chunk,'description')||xmlTag(chunk,'summary')||xmlTag(chunk,'content:encoded')||'';
  // Google News feeds often deliver lists of additional headlines, not an article abstract.
  const snippetIsList=/<(?:a|ul|li)\b/i.test(xmlRawTag(chunk,'description'))&&(/news.google.com|Nachrichtensuche/i.test(sourceName));
  if(snippetIsList||summary.toLowerCase().replace(/[^a-zäöüß]/g,'')===title.toLowerCase().replace(/[^a-zäöüß]/g,''))summary='';
  summary=summary.replace(/\s+/g,' ').trim().slice(0,420);
  const language=languageOf(title+' '+summary,defaultLang);
  rows.push({id:link,title:title.slice(0,240),summary,link,provider:provider.slice(0,70),published,language});
 }
 return rows;
}
function googleNewsFeed(q){return 'https://news.google.com/rss/search?q='+encodeURIComponent(q)+'&hl=de&gl=DE&ceid=DE:de'}
async function withNewsCache(env,key,seconds,loader){const kv=env.SWINGDESK_KV;let existing=null;try{existing=await kv.get(EGE_NEWS_CACHE_PREFIX+key,'json')}catch{}if(existing&&Array.isArray(existing.news))return {...existing,cached:true};const fresh=await loader();if(fresh.news?.length){try{await kv.put(EGE_NEWS_CACHE_PREFIX+key,JSON.stringify(fresh),{expirationTtl:seconds})}catch{}}return fresh}
async function downloadFeed(url,provider,env){const key='feed:'+Array.from(new TextEncoder().encode(url)).reduce((acc,c)=>((acc*33+c)>>>0),5381).toString(16);return withNewsCache(env,key,2700,async()=>{const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),NEWS_FEED_TIMEOUT_MS);try{const r=await fetch(url,{headers:{Accept:'application/rss+xml, application/atom+xml, text/xml, application/xml;q=0.9','User-Agent':'EGE-FinancialMarkets-PrivateRSSReader/12.4'},signal:controller.signal,redirect:'follow'});if(!r.ok)throw Error('Quelle antwortet HTTP '+r.status);const xml=(await r.text()).slice(0,1200000);if(!/(<rss|<feed|<rdf:RDF)/i.test(xml))throw Error('Quelle liefert keinen RSS/Atom-Feed');return {news:parseFeedXml(xml,provider,45,(/Bloomberg|Federal Reserve|EZB/i.test(provider)?'en':'de')),fetchedAt:new Date().toISOString()}}finally{clearTimeout(timeout)}})}

function newsGerman(x){return x.language==='de'||x.translationStatus==='translated'}
function hashNewsText(s){let h=2166136261;for(const c of String(s||'')){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return (h>>>0).toString(36)}
async function germanVersion(env,item){
 const x={...item};if(x.language==='de'){x.translationStatus='original_de';return x}
 const content=(x.title||'')+' | '+(x.summary||'');const cacheKey='ege:news-translation:v1:'+hashNewsText(content);
 try{const saved=await env.SWINGDESK_KV?.get(cacheKey,'json');if(saved?.titleDe){return {...x,titleDe:saved.titleDe,summaryDe:saved.summaryDe||'',translationStatus:'translated'}}}catch{}
 if(!env.AI||typeof env.AI.run!=='function'){x.translationStatus='requires_ai_binding';return x}
 try{
  const trans=async t=>{const r=await env.AI.run(EGE_TRANSLATION_MODEL,{text:t.slice(0,600),source_lang:'english',target_lang:'german'});const v=String(r?.translated_text||r?.translation||r?.result?.translated_text||'').trim();if(!v)throw Error('Leeres Übersetzungsergebnis');return v};
  const titleDe=await trans(x.title);const summaryDe=x.summary?await trans(x.summary):'';
  x.titleDe=titleDe;x.summaryDe=summaryDe;x.translationStatus='translated';
  try{await env.SWINGDESK_KV?.put(cacheKey,JSON.stringify({titleDe,summaryDe}),{expirationTtl:604800})}catch{}
  return x;
 }catch(e){x.translationStatus='translation_failed';return x}
}
async function germanBatch(env,items,maxTranslate=12){
 // German stories require no AI. Only translate selected items, not entire feeds.
 let count=0;const result=[];
 for(const item of items){if(item.language==='de'){result.push({...item,translationStatus:'original_de'});continue}
  if(count++>=maxTranslate){result.push({...item,translationStatus:'translation_deferred'});continue}
  result.push(await germanVersion(env,item));
 }
 return result;
}
function preferGermanNews(a,b){
 const fresh=x=>Date.now()-Date.parse(x.published||'')<72*3600000;
 const score=x=>(x.language==='de'&&fresh(x)?2:0);
 return score(b)-score(a)||Date.parse(b.published)-Date.parse(a.published);
}
function ageOk(x,days){if(!x.published)return false;const time=Date.parse(x.published);return Number.isFinite(time)&&time<=Date.now()+3600000&&Date.now()-time<days*86400000}
function uniqueNews(rows,max){const used=new Set(),out=[];for(const r of rows){const key=(r.title||'').toLocaleLowerCase('de').replace(/[^a-z\däöüß]+/g,' ').trim().slice(0,130);if(!key||used.has(key))continue;used.add(key);out.push(r);if(out.length>=max)break}return out}
function macroRelevant(x,region){if(region==='Zinsen & Geldpolitik')return true;if(region!=='Weltmärkte')return true;return /wirtschaft|börse|markt|zins|aktie|konjunktur|inflation|rezession|zoll|handel|ölpreis|goldpreis|währung|fed|ezb|bip|gdp|stocks|economy|trade|inflation|markets|tariff|business|jobs|bond|china|india/i.test(x.title)}
async function externalMacro(env){return withNewsCache(env,'macro:v3',2700,async()=>{const batches=await Promise.allSettled(MACRO_FEEDS.map(async feed=>{const data=await downloadFeed(feed.url||googleNewsFeed(feed.query),feed.provider,env);return data.news.filter(x=>ageOk(x,8)&&macroRelevant(x,feed.region)).map(x=>({...x,region:feed.region}))}));const all=[],errors=[];batches.forEach((r,i)=>r.status==='fulfilled'?all.push(...r.value):errors.push(MACRO_FEEDS[i].provider));const regions=['Weltmärkte','USA & Nordamerika','Europa','Asien & Pazifik','Schwellenländer','Zinsen & Geldpolitik'];const selected=[];for(const region of regions){const rows=uniqueNews(all.filter(x=>x.region===region).sort(preferGermanNews),5);selected.push(...rows)}if(!selected.length)throw Error('Makro-Quellen derzeit nicht erreichbar oder ohne aktuelle Meldungen.');const prepared=await germanBatch(env,selected,14);return {news:prepared,fetchedAt:new Date().toISOString(),feedErrors:errors.length,failedProviders:errors.slice(0,4),translationAvailable:!!env.AI,source:'external_rss_and_news_search'}})}
function companySearchName(raw,symbol){const input=String(raw||'').trim().replace(/[\p{Cc}<>"'`]/gu,'').replace(/\s+/g,' ').slice(0,90);const looksUseful=input.length>=3&&!/^(?:Aktie|Aktien|Security|Fund)$/i.test(input);return looksUseful?input:String(symbol||'').split(':').pop()}
function companyMatch(x,name,symbol){const fold=s=>String(s||'').toLocaleLowerCase('de').replace(/ß/g,'ss').normalize('NFKD').replace(/[\u0300-\u036f]/g,'');const title=fold(x.title);const tokens=fold(name).replace(/\b(inc\.?|corp\.?|corporation|technologies|technology|ag|se|plc|ltd\.?|incorporated|company|and|co\.?|holding|holdings|class|group|aktie|registered|the)\b/g,' ').split(/\s+/).filter(w=>w.length>=4);const ticker=String(symbol.split(':').pop()||'').toLowerCase();return tokens.some(w=>title.includes(w))||(ticker.length>=3&&new RegExp('(^|\\W)'+ticker.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'($|\\W)','i').test(title))}
async function externalCompany(env,symbol,rawName){const name=companySearchName(rawName,symbol);const key='company:v3:'+symbol.toLowerCase()+':'+name.toLocaleLowerCase('de').replace(/[^a-z0-9äöüß]/g,'').slice(0,50);return withNewsCache(env,key,3600,async()=>{const ticker=symbol.split(':').pop();const query=name===ticker?('"'+ticker+'" Aktie Börse Wirtschaft'):('"'+name+'" (Aktie OR Börse OR Quartalszahlen OR earnings OR stock)');const sources=[{url:googleNewsFeed(query),provider:'Nachrichtensuche'},{url:'https://www.n-tv.de/wirtschaft/rss',provider:'n-tv'},{url:'https://www.tagesschau.de/wirtschaft/unternehmen/index~rss2.xml',provider:'tagesschau'}];const results=await Promise.allSettled(sources.map(src=>downloadFeed(src.url,src.provider,env)));let ok=0;const list=[];for(const r of results)if(r.status==='fulfilled'){ok++;list.push(...r.value.news.filter(x=>ageOk(x,14)&&companyMatch(x,name,symbol)))}if(!ok)throw Error('Externe Nachrichtenquellen sind derzeit nicht erreichbar.');const news=uniqueNews(list.sort(preferGermanNews),8).map(x=>({...x,symbol,sourceType:'external'}));const prepared=await germanBatch(env,news,5);return {news:prepared,fetchedAt:new Date().toISOString(),providerErrors:sources.length-ok,translationAvailable:!!env.AI,source:'external_rss_and_news_search'}})}

// EGE v13.5: independent, uncalibrated exploratory engine.
// This is NOT a reproduction of the author's Zero Lag ZigZag JD.
const EGE_ANALYSIS_TIMEFRAMES=[['Monthly','M'],['Weekly','1W'],['Daily','1D'],['H4','4h'],['H1','1h']];
const EGE_ANALYSIS_MIN_MS=4*60*60*1000;
const EGE_ANALYSIS_STATE='ege:analysis:attempt:v1';
const EGE_ANALYSIS_CACHE='ege:analysis:preview:v1:';
function egeBars(raw){
 const seen=new Set();let arrays=[];
 function dive(v,d=0){if(d>8||!v||typeof v!=='object'||seen.has(v))return;seen.add(v);
  if(Array.isArray(v)){if(v.length&&v.some(x=>x&&typeof x==='object'&&('t'in x||'time'in x)&&('c'in x||'close'in x)))arrays.push(v);else for(const x of v)dive(x,d+1)}
  else for(const val of Object.values(v))dive(val,d+1);
 }
 if(typeof raw?.raw==='string'){try{dive(JSON.parse(raw.raw))}catch{}}dive(raw);
 const a=arrays.sort((x,y)=>y.length-x.length)[0]||[];
 const rows=a.map(v=>({t:Number(v.t??v.time),o:Number(v.o??v.open),h:Number(v.h??v.high),l:Number(v.l??v.low),c:Number(v.c??v.close),v:Number(v.v??v.volume??0)})).filter(x=>Number.isFinite(x.t)&&Number.isFinite(x.h)&&Number.isFinite(x.l)&&Number.isFinite(x.c)&&x.h>=x.l&&x.c>0);
 rows.forEach(b=>{if(b.t>1e12)b.t=Math.floor(b.t/1000)});
 return [...new Map(rows.map(x=>[x.t,x])).values()].sort((x,y)=>x.t-y.t).slice(-500);
}
function egeClosed(bar,interval,now=Date.now()){
 const start=bar.t*1000;let end;
 if(interval==='M'){let d=new Date(start);end=Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+1,1)}
 else end=start+({'1W':7*864e5,'1D':864e5,'4h':4*36e5,'1h':36e5}[interval]||0);
 // A fixed market data delay tolerance of 1 minute avoids processing the currently forming candle.
 return end+60e3<=now;
}
function egeRSI(close,n=14){const out=Array(close.length).fill(null);if(close.length<=n)return out;let gain=0,loss=0;
 for(let i=1;i<=n;i++){const d=close[i]-close[i-1];gain+=Math.max(0,d);loss+=Math.max(0,-d)}
 gain/=n;loss/=n;out[n]=loss===0?(gain===0?50:100):100-100/(1+gain/loss);
 for(let i=n+1;i<close.length;i++){const d=close[i]-close[i-1];gain=(gain*(n-1)+Math.max(0,d))/n;loss=(loss*(n-1)+Math.max(0,-d))/n;out[i]=loss===0?(gain===0?50:100):100-100/(1+gain/loss)}return out;
}
function egeSmaNullable(a,n){const out=Array(a.length).fill(null);for(let i=n-1;i<a.length;i++){const w=a.slice(i-n+1,i+1);if(w.every(Number.isFinite))out[i]=w.reduce((p,c)=>p+c,0)/n}return out}
function egeStochRSI(bars,rsiN=14,stochN=14,kN=3,dN=3){const rsi=egeRSI(bars.map(x=>x.c),rsiN);const stoch=Array(rsi.length).fill(null);
 for(let i=stochN-1;i<rsi.length;i++){const w=rsi.slice(i-stochN+1,i+1);if(!w.every(Number.isFinite))continue;const lo=Math.min(...w),hi=Math.max(...w);stoch[i]=hi===lo?50:(rsi[i]-lo)/(hi-lo)*100}
 const k=egeSmaNullable(stoch,kN),d=egeSmaNullable(k,dN);return {k,d,rsi};}
function egePivots(bars,left=3,right=3){const high=[],low=[];for(let i=left;i<bars.length-right;i++){
 const w=bars.slice(i-left,i+right+1);const h=bars[i].h,l=bars[i].l;
 if(w.every((x,j)=>j===left||x.h<h))high.push({i,t:bars[i].t,price:h});
 if(w.every((x,j)=>j===left||x.l>l))low.push({i,t:bars[i].t,price:l});
 }return {high,low};}
function egeEventCandidates(bars,pivots,stoch,window=3){let events=[];
 for(let i=20;i<bars.length;i++){
  const priorHigh=pivots.high.filter(x=>x.i+3<i).at(-1),priorLow=pivots.low.filter(x=>x.i+3<i).at(-1);
  const kRange=stoch.k.slice(Math.max(0,i-window),i+1).filter(Number.isFinite);
  if(priorHigh&&bars[i-1].c<=priorHigh.price&&bars[i].c>priorHigh.price&&kRange.some(k=>k>80))events.push({t:bars[i].t,kind:'internes Hoch gebrochen',direction:'up',level:priorHigh.price});
  if(priorLow&&bars[i-1].c>=priorLow.price&&bars[i].c<priorLow.price&&kRange.some(k=>k<20))events.push({t:bars[i].t,kind:'internes Tief gebrochen',direction:'down',level:priorLow.price});
 }return events.slice(-8);}
function egePivotTrend(piv){const hs=piv.high.slice(-2),ls=piv.low.slice(-2);if(hs.length<2||ls.length<2)return 'neutral';if(hs[1].price>hs[0].price&&ls[1].price>ls[0].price)return 'bull';if(hs[1].price<hs[0].price&&ls[1].price<ls[0].price)return 'bear';return 'neutral';}
// Port of the user-supplied Pine v4 Zero Lag ZigZag JD turning-point calculation.
// A plotted offset of -2 is intentionally NOT used for signal timestamps.
function egeJdZigZag(bars,length=10,phase=50,power=2){
 const ratio=phase < -100?.5:phase>100?2.5:phase/100+1.5;
 const beta=.45*(length-1)/(.45*(length-1)+2),alpha=Math.pow(beta,power);
 let e0=0,e1=0,e2=0,jma=0,previous=0,previousPrevious=0;
 const turns=[],values=[];
 for(let i=0;i<bars.length;i++){
  const b=bars[i],src=(b.o+b.h+b.l+b.c)/4;
  e0=(1-alpha)*src+alpha*e0;
  e1=(src-e0)*(1-beta)+beta*e1;
  e2=(e0+ratio*e1-jma)*Math.pow(1-alpha,2)+Math.pow(alpha,2)*e2;
  jma=e2+jma;values.push(jma);
  if(i>=2){
   const down=previous>previousPrevious&&!(jma>previous);
   const up=previous<previousPrevious&&!(jma<previous);
   if(down||up){const window=bars.slice(Math.max(0,i-4),i+1);
    const price=down?Math.max(...window.map(x=>x.h)):Math.min(...window.map(x=>x.l));
    turns.push({type:down?'high':'low',price,i,t:b.t,confirmedAt:b.t});
   }
  }
  previousPrevious=previous;previous=jma;
 }
 return {turns,values,settings:{source:'ohlc4',length,phase,power,extremumBars:5}};
}
// Laboratory implementation: JD turns are INTERNAL. Two independent paths
// can confirm an external swing: A) internal break + completed Stoch RSI
// excursion, B) close beyond the prior confirmed external opposite swing.
// Events are timestamped at detection, never at the back-painted swing bar.
function egeJdStructure(bars,zig,osc){
 const events=[],externalHighs=[],externalLows=[];
 let lowCandidate=null,highCandidate=null,protectedLH=null,protectedHL=null;
 let lowSeen=false,highSeen=false,upBreak=null,downBreak=null,trend='unverified';
 let ti=0,lastLowIndex=-1,lastHighIndex=-1,phase='unknown';
 function confirm(type,candidate,i,method,level){
  if(!candidate)return;
  if(type==='low'&&candidate.i<=lastLowIndex)return;
  if(type==='high'&&candidate.i<=lastHighIndex)return;
  const obj={...candidate,confirmedAt:bars[i].t,confirmationIndex:i,method,breakLevel:level};
  if(type==='low'){externalLows.push(obj);lastLowIndex=candidate.i;lowCandidate=null;lowSeen=false;upBreak=null;}
  else{externalHighs.push(obj);lastHighIndex=candidate.i;highCandidate=null;highSeen=false;downBreak=null;}
  events.push({direction:type==='low'?'up':'down',kind:type==='low'?'Externes Low bestätigt':'Externes High bestätigt',level:candidate.price,breakLevel:level,method,t:bars[i].t,swingTime:candidate.t});
 }
 for(let i=0;i<bars.length;i++){
  // JD turn detection is only available at turn.i, not at its plotted offset.
  while(ti<zig.turns.length&&zig.turns[ti].i<=i){
   const turn=zig.turns[ti++];
   if(turn.type==='low'){
    if(!lowCandidate||turn.price<lowCandidate.price||lowCandidate.i<=lastLowIndex)lowCandidate=turn;
    if(phase==='up')protectedHL=turn.price;
    else if(phase==='unknown')protectedHL=turn.price;
   }else{
    if(!highCandidate||turn.price>highCandidate.price||highCandidate.i<=lastHighIndex)highCandidate=turn;
    if(phase==='down')protectedLH=turn.price;
    else if(phase==='unknown')protectedLH=turn.price;
   }
  }
  const k=osc.k[i],close=bars[i].c,prev=i?bars[i-1].c:null;
  if(Number.isFinite(k)){
   if(k<=20){lowSeen=true;if(phase==='up')highSeen=false;}
   if(k>=80){highSeen=true;if(phase==='down'&&!upBreak)lowSeen=false;}
  }
  // CHoCH requires the opposing protected level of the CURRENT internal leg.
  // Do not label repeated same-direction BOS as a fresh CHoCH.
  const up=protectedLH!==null&&prev!==null&&prev<=protectedLH&&close>protectedLH;
  const down=protectedHL!==null&&prev!==null&&prev>=protectedHL&&close<protectedHL;
  if(up&&phase!=='up'){
   upBreak={i,level:protectedLH};phase='up';protectedHL=null;
   events.push({direction:'up',kind:'Bullisher interner CHoCH',level:protectedLH,t:bars[i].t});
  }else if(down&&phase!=='down'){
   downBreak={i,level:protectedHL};phase='down';protectedLH=null;
   events.push({direction:'down',kind:'Bearisher interner CHoCH',level:protectedHL,t:bars[i].t});
  }
  if(up)protectedLH=null;
  if(down)protectedHL=null;
  // A: independent confirmations, tied to the same candidate swing and direction.
  if(lowCandidate&&upBreak&&upBreak.i>=lowCandidate.i&&lowSeen&&Number.isFinite(k)&&k>=80)
   confirm('low',lowCandidate,i,'A: CHoCH + Stoch 20→80',upBreak.level);
  if(highCandidate&&downBreak&&downBreak.i>=highCandidate.i&&highSeen&&Number.isFinite(k)&&k<=20)
   confirm('high',highCandidate,i,'A: CHoCH + Stoch 80→20',downBreak.level);
  // B: break of a previously confirmed opposite external swing.
  const eh=externalHighs.at(-1),el=externalLows.at(-1);
  if(lowCandidate&&eh&&prev<=eh.price&&close>eh.price)confirm('low',lowCandidate,i,'B: Externes High gebrochen',eh.price);
  if(highCandidate&&el&&prev>=el.price&&close<el.price)confirm('high',highCandidate,i,'B: Externes Low gebrochen',el.price);
  // Conservative external bias: direct external level breaks or higher-low/lower-high reversal.
  const lastL=externalLows.at(-1),lastH=externalHighs.at(-1);
  if(lastH&&prev!==null&&prev<=lastH.price&&close>lastH.price)trend='bull';
  if(lastL&&prev!==null&&prev>=lastL.price&&close<lastL.price)trend='bear';
  if(externalLows.length>=2&&lastL&&externalLows.at(-2).price<lastL.price&&lastH&&prev!==null&&prev<=lastH.price&&close>lastH.price)trend='bull';
  if(externalHighs.length>=2&&lastH&&externalHighs.at(-2).price>lastH.price&&lastL&&prev!==null&&prev>=lastL.price&&close<lastL.price)trend='bear';
 }
 return {events,externalHighs,externalLows,externalTrend:trend,internalTrend:phase};
}
function egeAnalyseTimeframe(bars,interval){
 const closed=bars.filter(x=>egeClosed(x,interval));
 if(closed.length<65)return {state:'insufficient',count:closed.length,message:'Mindestens 65 abgeschlossene Kerzen benötigt.'};
 const osc=egeStochRSI(closed),zig=egeJdZigZag(closed),structure=egeJdStructure(closed,zig,osc);
 const last=closed.at(-1),k=osc.k.at(-1),d=osc.d.at(-1);
 const hi=zig.turns.filter(x=>x.type==='high').at(-1),lo=zig.turns.filter(x=>x.type==='low').at(-1);
 const recent=structure.events.slice(-5).map(x=>({...x,date:new Date(x.t*1000).toISOString()}));
 return {state:'preview',pivotTrend:structure.externalTrend==='unverified'?'neutral':structure.externalTrend,barCount:closed.length,lastClose:last.c,barTime:new Date(last.t*1000).toISOString(),
  k:Number.isFinite(k)?Number(k.toFixed(2)):null,d:Number.isFinite(d)?Number(d.toFixed(2)):null,
  recentPivotHigh:hi?{price:hi.price,date:new Date(hi.t*1000).toISOString()}:null,
  recentPivotLow:lo?{price:lo.price,date:new Date(lo.t*1000).toISOString()}:null,
  jdSettings:zig.settings,internalTurns:zig.turns.length,externalLows:structure.externalLows.slice(-3),externalHighs:structure.externalHighs.slice(-3),
  events:recent,preliminaryDirection:recent.at(-1)?.direction||'unknown',externalTrend:structure.externalTrend,internalTrend:structure.internalTrend,
  validation:'JD-JMA und zwei Bestätigungswege (A: interner Bruch + Stoch; B: externer Gegenpunkt-Bruch) im Prüflabor. Externe Trendwechsel noch nicht validiert. Keine automatische Watchlist-Verschiebung ohne Abgleich mit TradingView.'};
}

async function egeRunAnalysis(env,symbol,session,once=false){
 if(!env.SWINGDESK_KV||!session?.access_token)throw Error('TradingView-Verbindung oder Cloudflare KV fehlt.');
 const key=EGE_ANALYSIS_CACHE+symbol;const previous=await env.SWINGDESK_KV.get(key,'json');
 if(!once&&previous?.time&&Date.now()-Date.parse(previous.time)<EGE_ANALYSIS_MIN_MS)return {...previous,cached:true};
 const syncState=await getSyncState(env);
 if(syncState.quotaBlocked||isMcpQuotaError(syncState.error))throw Error('TradingView-MCP ist gesperrt; Analyse ist pausiert.');
 const attempt=await env.SWINGDESK_KV.get(EGE_ANALYSIS_STATE,'json');
 const from=Date.parse(attempt?.lastAttempt||'')||0;
 if(!once&&from&&Date.now()-from<EGE_ANALYSIS_MIN_MS)throw Error('Analyseabrufe sind auf einen neuen Wert alle vier Stunden begrenzt. Nächste Freigabe: '+new Date(from+EGE_ANALYSIS_MIN_MS).toLocaleString('de-DE',{timeZone:'Europe/Berlin'}));
 await env.SWINGDESK_KV.put(EGE_ANALYSIS_STATE,JSON.stringify({lastAttempt:new Date().toISOString(),symbol}));
 const frames={};let calls=0;for(const [label,interval] of EGE_ANALYSIS_TIMEFRAMES){
  try{const r=await mcpCall('get_ohlcv',{symbol,interval,count:300,summary:false},session);calls++;
   frames[label]=egeAnalyseTimeframe(egeBars(r),interval);
  }catch(e){const msg=String(e.message||e);if(isMcpQuotaError(msg)){
    const next={...syncState,quotaBlocked:true,quotaBlockedAt:new Date().toISOString(),error:'TradingView MCP: TOOL_QUOTA_EXCEEDED – weitere automatische Anfragen pausiert.'};await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(next));throw e;
   }frames[label]={state:'unavailable',message:msg.slice(0,140)};
  }
 }
 const result={symbol,time:new Date().toISOString(),cached:false,overrideConsumed:once,calls,frames,classification:{status:'pending',group:null,reason:'Externe Marktstruktur nicht validiert; keine Watchlist-Änderung.'},automaticWrites:false,
  note:'Zero Lag ZigZag JD (OHLC4/10/50/2) und Stoch RSI 14/14/3/3 mit Schwellen 20/80 im Prüflabor. Externe Trendklassifizierung noch nicht validiert; keine automatischen Watchlist-Schreibzugriffe.'};
 await env.SWINGDESK_KV.put(key,JSON.stringify(result),{expirationTtl:86400});
 return result;
}


// v13.9.7: optional D1 archive, intentionally independent of the 4h analysis lock.
const ARCHIVE_SYMBOLS={'AAPL':'AAPL','DB1':'DB1.DE','SPX':'^GSPC','XAU/USD':'GC=F','BTC/USD':'BTC-USD','XLK':'XLK'};
const ARCHIVE_INTERVALS={'1h':'60m','1day':'1d','1week':'1wk','1month':'1mo'};
// H4 is derived only for 24/7 BTC; exchange-session H4 requires separately validated session calendars.
const ARCHIVE_H4_CRYPTO=new Set(['BTC/USD']);
async function archiveWrite(env,symbol,interval,source,rows){
 if(!env.MARKET_DB)return {stored:0,enabled:false};
 let stored=0;
 for(let i=0;i<rows.length;i+=40){
  const batch=rows.slice(i,i+40).map(b=>env.MARKET_DB.prepare('INSERT INTO market_bars (symbol,interval,source,ts,open,high,low,close,volume,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?) ON CONFLICT(symbol,interval,source,ts) DO UPDATE SET open=excluded.open,high=excluded.high,low=excluded.low,close=excluded.close,volume=excluded.volume,updated_at=excluded.updated_at').bind(symbol,interval,source,b.ts,b.o,b.h,b.l,b.c,b.v??null,Date.now()));
  await env.MARKET_DB.batch(batch);stored+=batch.length;
 }
 return {stored,enabled:true};
}
function cryptoH4(rows){
 const groups=new Map();
 for(const b of rows){const start=Math.floor(b.ts/14400)*14400;let g=groups.get(start);
  if(!g){g={ts:start,o:b.o,h:b.h,l:b.l,c:b.c,v:0,n:0};groups.set(start,g)}
  g.h=Math.max(g.h,b.h);g.l=Math.min(g.l,b.l);g.c=b.c;g.v+=(b.v||0);g.n++;
 }
 // Never store incomplete H4 candles as confirmed OHLC bars.
 return [...groups.values()].filter(g=>g.n===4).map(({n,...bar})=>bar).sort((a,b)=>a.ts-b.ts);
}
// Validate requested timeframe against actual candle timestamps before any D1 writes.
function archiveValidateTimeframe(rows,interval,providerInterval){
 if(providerInterval&&providerInterval!==ARCHIVE_INTERVALS[interval])return 'Yahoo meldet anderes Zeitintervall: '+providerInterval;
 if(rows.length<3)return 'Zu wenige Kerzen zur Zeitrahmenvalidierung';
 const times=rows.map(x=>x.ts);
 for(let i=1;i<times.length;i++)if(times[i]<=times[i-1])return 'Zeitstempel nicht streng aufsteigend';
 const gaps=[];for(let i=1;i<times.length;i++)gaps.push(times[i]-times[i-1]);
 const sorted=[...gaps].sort((a,b)=>a-b),median=sorted[Math.floor(sorted.length/2)];
 const bounds={'1h':[3500,3700],'1day':[20*3600,4*86400],'1week':[4*86400,11*86400],'1month':[24*86400,35*86400]};
 const [lo,hi]=bounds[interval];
 if(median<lo||median>hi)return 'Unplausibler medianer Kerzenabstand '+median+'s für '+interval;
 const minShare={'1h':.6,'1day':.55,'1week':.65,'1month':.7}[interval];
 if(gaps.filter(x=>x>=lo&&x<=hi).length/gaps.length<minShare)return 'Zu viele Zeitabstände außerhalb des erwarteten Zeitrahmens';
 return null;
}
async function archiveFetch(request,env,u){
 if(!sameOrigin(request))return errJson('Fremder Origin blockiert',403);
 if(!env.MARKET_DB)return json({ok:false,configured:false,message:'D1 Binding MARKET_DB fehlt'},503);
 const symbol=u.searchParams.get('symbol')||'DB1',interval=u.searchParams.get('interval')||'1day';
 if(!(symbol in ARCHIVE_SYMBOLS)||!(interval in ARCHIVE_INTERVALS))return errJson('Ungültige Archivparameter',400);
 const source='Yahoo Finance (inoffiziell)',ticker=ARCHIVE_SYMBOLS[symbol];
 const endpoint=new URL('https://query1.finance.yahoo.com/v8/finance/chart/'+encodeURIComponent(ticker));
 // Avoid Yahoo's automatic coarser candle aggregation for range=max.
 const archiveRanges={'1h':'730d','1day':'2y','1week':'5y','1month':'10y'};
 endpoint.searchParams.set('interval',ARCHIVE_INTERVALS[interval]);endpoint.searchParams.set('range',archiveRanges[interval]);
 const r=await fetch(endpoint.toString(),{headers:{Accept:'application/json','User-Agent':'Mozilla/5.0 EGEFinancialMarkets/1.0'},signal:AbortSignal.timeout(20000)});
 if(!r.ok)return json({ok:false,source,status:r.status,message:'Marktdatenanbieter nicht verfügbar'},502);
 const data=await r.json(),res=data?.chart?.result?.[0],q=res?.indicators?.quote?.[0]||{},ts=res?.timestamp||[];
 const bars=[];
 for(let i=0;i<ts.length;i++){
  const [o,h,l,c]=[q.open?.[i],q.high?.[i],q.low?.[i],q.close?.[i]];
  if([o,h,l,c].every(Number.isFinite))bars.push({ts:ts[i],o,h,l,c,v:Number.isFinite(q.volume?.[i])?q.volume[i]:null});
 }
 if(!bars.length)return json({ok:false,source,message:'Keine gültigen OHLC-Kerzen geliefert'},502);
 const validationError=archiveValidateTimeframe(bars,interval,res?.meta?.dataGranularity);
 if(validationError)return json({ok:false,source,symbol,interval,received:bars.length,message:'Archivimport blockiert: '+validationError},422,{'Cache-Control':'no-store'});
 const result=await archiveWrite(env,symbol,interval,source,bars);
 let h4=null;
 if(interval==='1h'&&ARCHIVE_H4_CRYPTO.has(symbol)){const derived=cryptoH4(bars);const saved=await archiveWrite(env,symbol,'4h',source+' · H1→H4 UTC',derived);h4={received:derived.length,stored:saved.stored,method:'UTC 4h, nur vollständige 4x H1-Kerzen'};}
 return json({ok:true,symbol,interval,source,received:bars.length,stored:result.stored,h4,first:new Date(bars[0].ts*1000).toISOString(),last:new Date(bars.at(-1).ts*1000).toISOString(),note:'Archiv-Snapshot, keine garantierte vollständige Historie; Futures/Spot und Börsenplätze nicht vermischen'},200,{'Cache-Control':'no-store'});
}
async function handle(request,env){const u=new URL(request.url),path=u.pathname,origin=u.origin;
 if(path==='/oauth-client-metadata.json')return json(publicClient(origin));
 if(path==='/'||path==='/index.html')return response(UI_HTML,200,'text/html; charset=utf-8',{'Content-Security-Policy':"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; img-src 'self' data: https://s3-symbol-logo.tradingview.com https://img.anylogo.dev https://www.google.com; base-uri 'none'; form-action 'self'; frame-ancestors 'none'"});
 if(path==='/favicon.ico')return response(null,204);
 if(path==='/health')return json({ok:true,version:'13.7-lab' ,configured:!!env.APP_SECRET});
 if(!env.APP_SECRET||env.APP_SECRET.length<32)return errJson('Cloudflare APP_SECRET fehlt oder ist zu kurz (mind. 32 zufällige Zeichen). Lege die Variable unter Worker → Settings → Variables and Secrets an.',503);
 if(path==='/api/marketdata/archive/status'&&request.method==='GET'){
  if(!sameOrigin(request))return errJson('Fremder Origin blockiert',403);
  if(!env.MARKET_DB)return json({configured:false,message:'D1 Binding MARKET_DB fehlt'},503);
  const rows=await env.MARKET_DB.prepare('SELECT symbol,interval,source,COUNT(*) AS bars,MIN(ts) AS first_ts,MAX(ts) AS last_ts FROM market_bars GROUP BY symbol,interval,source ORDER BY symbol,interval').all();
  return json({configured:true,series:rows.results||[],note:'Gespeicherte Snapshots; Vollständigkeit nicht garantiert. H4 nur für BTC/USD aus vollständigen H1-Gruppen (UTC). Andere H4-Märkte benötigen validierte Sitzungszeiten.'},200,{'Cache-Control':'no-store'});
 }
 if(path==='/api/marketdata/archive/load'&&request.method==='POST'){
  // Requires the already configured private synchronization credential; no public write endpoint.
  if(!await backgroundAuth(request,env))return errJson('Archiv-Abruf benötigt SYNC_KEY',403);
  return archiveFetch(request,env,u);
 }
 if(path==='/api/marketdata/diagnose'&&request.method==='GET'){
  if(!sameOrigin(request))return errJson('Fremder Origin blockiert',403);
  const symbol=u.searchParams.get('symbol')||'';
  const interval=u.searchParams.get('interval')||'';
  const provider=u.searchParams.get('provider')||'twelve';
  const requestedCount=u.searchParams.get('count')||'max';
  const isMax=requestedCount==='max';
  const count=isMax?5000:Number(requestedCount);
  if(!['AAPL','DB1','SPX','XAU/USD','BTC/USD','XLK'].includes(symbol)||!['1h','4h','1day','1week','1month'].includes(interval)||!['auto','twelve','yahoo'].includes(provider)||!(isMax||[30,100,500,1000].includes(count)))return errJson('Ungültige Testparameter',400);
  if((provider==='twelve'||provider==='auto')&&env.TWELVE_DATA_API_KEY){
   if(!env.TWELVE_DATA_API_KEY&&provider==='twelve')return errJson('TWELVE_DATA_API_KEY fehlt',503);
   try{
    const endpoint=new URL('https://api.twelvedata.com/time_series');
    endpoint.searchParams.set('symbol',symbol);endpoint.searchParams.set('interval',interval);endpoint.searchParams.set('outputsize',String(count));endpoint.searchParams.set('apikey',env.TWELVE_DATA_API_KEY);
    const r=await fetch(endpoint.toString(),{headers:{'Accept':'application/json'},signal:AbortSignal.timeout(12000)});
    const data=await r.json();const values=Array.isArray(data.values)?data.values:[];
    const ok=r.ok&&data.status!=='error'&&values.length>0;
    if(provider==='auto'&&!ok){ /* Fallback to Yahoo below */ }else return json({ok,source:'Twelve Data',symbol,interval,requested:isMax?'max':count,bars:values.length,first:values.at(-1)?.datetime||null,last:values[0]?.datetime||null,code:ok?null:(data.code||r.status),message:ok?'Test erfolgreich':String(data.message||'Kein Datenzugriff').slice(0,180)},200,{'Cache-Control':'no-store'});
   }catch(e){if(provider!=='auto')return json({ok:false,source:'Twelve Data',symbol,interval,bars:0,message:String(e.message||e).slice(0,160)},200,{'Cache-Control':'no-store'});}
  }
  // Yahoo chart is an unofficial public endpoint. It may reject server-side requests.
  // Mapping is deliberately explicit to avoid silently mixing spot, ETF and exchange data.
  const yahooSymbols={'AAPL':'AAPL','DB1':'DB1.DE','SPX':'^GSPC','XAU/USD':'GC=F','BTC/USD':'BTC-USD','XLK':'XLK'};
  if(interval==='4h')return json({ok:false,source:'Yahoo Finance',symbol,interval,bars:0,message:'H4 wird von dieser Quelle nicht direkt geliefert. H4-Aggregation aus H1 folgt nach Prüfung der Börsensitzungen.'},200,{'Cache-Control':'no-store'});
  const yfIntervals={'1h':'60m','1day':'1d','1week':'1wk','1month':'1mo'};
  const ranges={'1h':'730d','1day':'max','1week':'max','1month':'max'}; // Yahoo enforces its own intraday history window
  const ticker=yahooSymbols[symbol];
  try{
   const endpoint=new URL('https://query1.finance.yahoo.com/v8/finance/chart/'+encodeURIComponent(ticker));
   endpoint.searchParams.set('interval',yfIntervals[interval]);endpoint.searchParams.set('range',ranges[interval]);
   const r=await fetch(endpoint.toString(),{headers:{'Accept':'application/json','User-Agent':'Mozilla/5.0 EGEFinancialMarkets/1.0'},signal:AbortSignal.timeout(12000)});
   if(!r.ok)return json({ok:false,source:'Yahoo Finance',symbol,ticker,interval,bars:0,code:r.status,message:'Yahoo-HTTP-Fehler '+r.status+' (inoffizielle Schnittstelle möglicherweise gesperrt)'},200,{'Cache-Control':'no-store'});
   const payload=await r.json();const result=payload?.chart?.result?.[0];const stamps=result?.timestamp||[];
   const quotes=result?.indicators?.quote?.[0]||{};
   const valid=stamps.map((t,i)=>({t,i})).filter(x=>Number.isFinite(quotes.open?.[x.i])&&Number.isFinite(quotes.high?.[x.i])&&Number.isFinite(quotes.low?.[x.i])&&Number.isFinite(quotes.close?.[x.i]));
   const chosen=isMax?valid:valid.slice(-count);const first=chosen[0]?.t,last=chosen.at(-1)?.t;
   const ok=chosen.length>0;
   return json({ok,source:'Yahoo Finance (inoffiziell)',symbol,ticker,interval,requested:isMax?'max':count,bars:chosen.length,first:first?new Date(first*1000).toISOString():null,last:last?new Date(last*1000).toISOString():null,code:ok?null:'NO_DATA',message:ok?(symbol==='XAU/USD'?'Gold-Future GC=F, NICHT Gold-Spot. ':symbol==='DB1'?'Xetra-Symbol DB1.DE; Kursabgleich erforderlich. ':'')+'Test erfolgreich':String(payload?.chart?.error?.description||'Keine OHLC-Kerzen verfügbar').slice(0,180)},200,{'Cache-Control':'no-store'});
  }catch(e){return json({ok:false,source:'Yahoo Finance',symbol,interval,bars:0,message:String(e.message||e).slice(0,160)},200,{'Cache-Control':'no-store'});}
 }
 if(path==='/api/marketdata/health'&&request.method==='GET'){
  if(!sameOrigin(request))return errJson('Fremder Origin blockiert',403);
  if(!env.TWELVE_DATA_API_KEY)return json({ok:false,provider:'Twelve Data',configured:false,message:'TWELVE_DATA_API_KEY fehlt in Cloudflare Production'},503,{'Cache-Control':'no-store'});
  try{
   const endpoint=new URL('https://api.twelvedata.com/time_series');
   endpoint.searchParams.set('symbol','AAPL');endpoint.searchParams.set('interval','1day');endpoint.searchParams.set('outputsize','2');endpoint.searchParams.set('apikey',env.TWELVE_DATA_API_KEY);
   const r=await fetch(endpoint.toString(),{headers:{'Accept':'application/json'},signal:AbortSignal.timeout(12000)});
   const payload=await r.json();
   const valid=r.ok&&payload.status!=='error'&&Array.isArray(payload.values)&&payload.values.length>0;
   return json({ok:valid,provider:'Twelve Data',configured:true,testSymbol:'AAPL',interval:'1day',bars:valid?payload.values.length:0,providerCode:valid?null:(payload.code||r.status),message:valid?'Verbindung erfolgreich':String(payload.message||'Datenabruf fehlgeschlagen').slice(0,240)},valid?200:502,{'Cache-Control':'no-store'});
  }catch(e){return json({ok:false,provider:'Twelve Data',configured:true,message:'Verbindungsfehler: '+String(e.message||e).slice(0,160)},502,{'Cache-Control':'no-store'});}
 }
 if(path==='/auth/start')return startAuth(request,env,origin);
 if(path==='/auth/callback')return finishAuth(request,env,origin);
 if(path==='/api/background/run'&&request.method==='POST'){
   if(!env.SWINGDESK_KV||typeof env.SWINGDESK_KV.get!=='function')return errJson('SWINGDESK_KV fehlt in Pages Production.',503);
   if(typeof env.SYNC_KEY!=='string'||env.SYNC_KEY.length<32)return errJson('SYNC_KEY fehlt oder ist zu kurz in Pages Production.',503);
   if(!await backgroundAuth(request,env,true))return errJson('Cron-Worker hat einen falschen SYNC_KEY gesendet.',403);
   const result=await syncServer(env);return json(result,200);
 }
 if(!sameOrigin(request))return errJson('Fremder Origin blockiert',403);
 if(path==='/api/news/macro'||path==='/api/news/company'){
   if(request.method!=='GET')return errJson('GET erforderlich',405);
   if(!env.SWINGDESK_KV||!env.SYNC_KEY||env.SYNC_KEY.length<32)return errJson('News-Backend: KV-Binding oder SYNC_KEY nicht eingerichtet',503);
   if(!await backgroundAuth(request,env))return errJson('News-Zugang: SYNC_KEY fehlt oder ist falsch',403);
   if(path==='/api/news/macro')return json(await externalMacro(env),200,{'Cache-Control':'private, no-store'});
   const symbol=String(u.searchParams.get('symbol')||'').toUpperCase();if(!pattern.test(symbol))return errJson('Ungültiger Ticker',400);
   const name=String(u.searchParams.get('name')||'');return json(await externalCompany(env,symbol,name),200,{'Cache-Control':'private, no-store'});
 }
 if(path==='/auth/logout'&&request.method==='POST')return json({ok:true},200,{'Set-Cookie':clearCookie(AUTH_COOKIE)});
 const {session,setCookie:nextCookie}=await obtainSession(request,env);
 if(path==='/api/status')return json({configured:true,connected:!!session,version:'13.7-lab' },200,nextCookie?{'Set-Cookie':nextCookie}:{});
 if(path==='/api/diagnostics'){
   try{const d=await discover();return json({metadata:true,authorization_server:d.issuer,metadata_endpoint:d.metadataUrl,resource_metadata_found:!!d.resourceUrl,registration:!!d.meta.registration_endpoint,client_id_metadata:!!d.meta.client_id_metadata_document_supported,authorized:!!session,version:'13.7-lab' ,note:'Keine Zugriffstoken werden ausgegeben.'})}catch(e){return json({metadata:false,error:String(e.message),authorized:!!session})}
 }
 if(path==='/api/background/check'&&request.method==='POST'){
   if(!session)return errJson('Bitte zuerst in diesem Browser mit TradingView verbinden',401);
   const kvBound=!!(env.SWINGDESK_KV&&typeof env.SWINGDESK_KV.get==='function'&&typeof env.SWINGDESK_KV.put==='function');
   const syncKeyConfigured=typeof env.SYNC_KEY==='string'&&env.SYNC_KEY.length>=32;
   const submitted=request.headers.get('X-Swingdesk-Key')||'';
   const keyMatches=syncKeyConfigured&&await safeEq(submitted,env.SYNC_KEY);
   return json({kvBound,syncKeyConfigured,keyMatches,version:'13.7-lab' ,note:!kvBound?'KV-Binding im aktiven Production Deployment prüfen':!syncKeyConfigured?'Secret SYNC_KEY (mindestens 32 Zeichen) im Pages-Production-Projekt prüfen':!keyMatches?'Schlüsselvergleich fehlgeschlagen':'Bereit zur Aktivierung.'});
 }
 if(path.startsWith('/api/background/')){
   if(!env.SWINGDESK_KV||typeof env.SWINGDESK_KV.get!=='function'||typeof env.SWINGDESK_KV.put!=='function')return errJson('KV-Binding SWINGDESK_KV ist im aktuellen Pages-Production-Deployment nicht verfügbar.',503);
   if(typeof env.SYNC_KEY!=='string'||env.SYNC_KEY.length<32)return errJson('Cloudflare Secret SYNC_KEY fehlt im aktuellen Pages-Production-Deployment oder ist kürzer als 32 Zeichen.',503);
   if(!await backgroundAuth(request,env))return errJson('Der eingegebene SYNC_KEY stimmt nicht mit dem Secret im Pages-Projekt überein.',403);
   const state=await getSyncState(env);
   if(path==='/api/background/manual-run'&&request.method==='POST'){
     // The one-time override is only honored on this same-origin, SYNC_KEY-authorized manual route.
     // TradingView quota blocks always take precedence; scheduled cron calls cannot override.
     const payload=await request.json().catch(()=>({}));
     const manualOverride=payload?.ignoreCooldownOnce===true;
     try{const result=await syncServer(env,{manualOverride});return json({...result,status:await getSyncState(env)},200,{'Cache-Control':'private, no-store'});}
     catch(e){return json({ok:false,reason:'sync_failed',error:String(e.message||e).slice(0,230),status:await getSyncState(env)},502,{'Cache-Control':'private, no-store'});}
   }
   if(path==='/api/background/status'&&request.method==='GET')return json({...state,configured:true});
   if(path==='/api/background/snapshot'&&request.method==='GET')return json({snapshot:await env.SWINGDESK_KV.get(KV_SNAPSHOT,'json'),ratings:await env.SWINGDESK_KV.get(KV_RATINGS,'json')||{},status:state});
   // Private, key-protected admin state; never requested by the visible watchlist or morning briefing.
   if(path==='/api/background/intake'&&request.method==='GET'){
      const intake=await env.SWINGDESK_KV.get(KV_INTAKE,'json');
      return json({configured:true,found:!!intake?.listFound,checkedAt:intake?.checkedAt||null,
       count:intake?.queue?.length||0,readError:intake?.readError||null,analysisEnabled:false,writeEnabled:false,cleanupEnabled:true,lastCleanup:intake?.lastCleanup||null});
   }
   if(path==='/api/background/relink'&&request.method==='POST'){
      if(!session?.refresh_token)return errJson('Bitte TradingView erneut verbinden. Kein erneuerbarer Browser-Token vorhanden.',409);
      let renewed;
      try{
       const args={grant_type:'refresh_token',refresh_token:session.refresh_token,client_id:session.client.client_id,resource:MCP_URL};
       if(session.client.client_secret)args.client_secret=session.client.client_secret;
       renewed=await tokenRequest(session.token_endpoint,args);
       if(!renewed.access_token)throw Error('Neuer Access-Token fehlt');
      }catch(e){return errJson('Browser-Token kann nicht erneuert werden. Bitte unter TradingView-Direktverbindung erneut anmelden; anschließend Hintergrundzugang reparieren. ('+String(e.message).slice(0,120)+')',409)}
      const linked={...session,access_token:renewed.access_token,refresh_token:renewed.refresh_token||session.refresh_token,exp:Date.now()+Math.max(30,Number(renewed.expires_in||3600)-60)*1000,syncGrantId:randomCode(24)};
      const token=await seal(linked,env.APP_SECRET);tooLongCookie('session',token);
      await env.SWINGDESK_KV.put(KV_SESSION,token);
      const next={...state,enabled:true,error:/refresh token|tokenfehler|OAuth-Token/i.test(state.error||'')?null:state.error};
      await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(next));
      return json({ok:true,notice:'Hintergrund-Autorisierung frisch erneuert und mit dem Browser verknüpft. Vier-Stunden-Frist bleibt bestehen.',status:next},200,{'Set-Cookie':setCookie(AUTH_COOKIE,token),'Cache-Control':'private, no-store'});
   }
   if(path==='/api/background/enable'&&request.method==='POST'){
      if(!session)return errJson('TradingView-Anmeldung im Browser erforderlich',401);
      if(!session.refresh_token)return errJson('TradingView hat keinen Refresh-Token für den Hintergrundabruf erteilt.',409);
      const linked={...session,syncGrantId:session.syncGrantId||randomCode(24)};
      const token=await seal(linked,env.APP_SECRET);tooLongCookie('session',token);
      await env.SWINGDESK_KV.put(KV_SESSION,token);
      if(state.quotaBlocked||isMcpQuotaError(state.error))return errJson('TradingView hat den MCP-Zugriff eingeschränkt. Erst nach Freigabe unter Einstellungen → Nach Freigabe fortsetzen.',409);const next={...state,enabled:true,error:null};await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(next));return json(next,200,{'Set-Cookie':setCookie(AUTH_COOKIE,token)});
   }
   if(path==='/api/background/resume'&&request.method==='POST'){
      if(!state.enabled)return errJson('Hintergrundabgleich ist nicht aktiviert.',409);
      if(!state.quotaBlocked&&!isMcpQuotaError(state.error))return json({...state,notice:'Kein MCP-Nutzungslimit aktiv.'});
      const next={...state,quotaBlocked:false,quotaBlockedAt:null,error:null,lastAttempt:null,enabled:true};
      await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify(next));return json({...next,notice:'Manuelle Wiederaufnahme nach TradingView-Freigabe. Nächster Cron-Aufruf höchstens alle 4 Stunden.'});
   }
   if(path==='/api/background/disable'&&request.method==='POST'){
      await env.SWINGDESK_KV.delete(KV_SESSION);await env.SWINGDESK_KV.delete(KV_SNAPSHOT);
      await env.SWINGDESK_KV.put(KV_STATE,JSON.stringify({enabled:false,lastSuccess:null,error:null}));return json({ok:true,enabled:false});
   }
   if(path==='/api/background/rating'&&request.method==='POST'){
      const data=await request.json().catch(()=>null);const symbol=String(data?.symbol||'').toUpperCase(),rating=data?.rating;
      if(!pattern.test(symbol)||!['red','yellow','green'].includes(rating))return errJson('Ungültige Bewertung',400);
      const ratings=await env.SWINGDESK_KV.get(KV_RATINGS,'json')||{};ratings[symbol]=rating;await env.SWINGDESK_KV.put(KV_RATINGS,JSON.stringify(ratings));return json({ok:true});
   }
   return errJson('Hintergrundroute nicht vorhanden',404);
 }
 if(!session)return errJson('TradingView nicht verbunden. Öffne Verbindung → Mit TradingView anmelden.',401);
 const addHeaders=nextCookie?{'Set-Cookie':nextCookie}:{};
 if(path==='/api/analysis/preview'&&request.method==='GET'){
  if(!await backgroundAuth(request,env))return errJson('Bitte SYNC_KEY unter Einstellungen hinterlegen.',403);
  const symbol=String(u.searchParams.get('symbol')||'').toUpperCase();
  if(!tickerRE.test(symbol))return errJson('Ungültiger Ticker. EXCHANGE:TICKER erforderlich.',400);
  try{return json(await egeRunAnalysis(env,symbol,session,u.searchParams.get('once')==='1'),200,{'Cache-Control':'private, no-store',...addHeaders})}
  catch(e){return errJson('Chartanalyse: '+String(e.message||e).slice(0,280),isMcpQuotaError(e.message)||/alle vier Stunden|MCP ist gesperrt/i.test(String(e.message||e))?429:502)}
 }
 if(path==='/api/sections-test'){
  const snapshot=await priorityLists(session);
  return json({source:'TradingView MCP get_watchlist',h1:snapshot.groups.find(x=>x.group==='H1')||null,sectionInfo:snapshot.sectionInfo,notice:'Keine Passwörter, Tokens oder Ticker enthalten.'},200,addHeaders);
 }
 if(path==='/api/lists')return json({lists:listObjects(await mcpCall('list_watchlists',{},session)).filter(x=>watchlistKey(x.name)!=='6 - einordnung')},200,addHeaders);
 if(path==='/api/watchlist'){
  const id=u.searchParams.get('id')||'';if(!/^\d+$/.test(id))return errJson('Ungültige Watchlist-ID',400);
  const raw=await mcpCall('get_watchlist',{watchlist_id:id},session);const a=companyObjects(raw);return json({assets:a,raw_preview:a.length?undefined:JSON.stringify(raw).slice(0,400)},200,addHeaders);
 }
 if(path==='/api/priority-lists')return json(await priorityLists(session),200,{'Cache-Control':'no-store',...addHeaders});
 if(path==='/api/logo'){
  const symbol=String(u.searchParams.get('symbol')||'').toUpperCase();if(!pattern.test(symbol))return errJson('Ungültiges Wertpapier',400);
  const [ex,ticker]=symbol.split(':');let found=null;
  for(const query of [symbol,ticker]){
   const raw=await mcpCall('search_symbols',{query},session);
   const arr=deepArrays(raw,x=>x&&typeof x==='object'&&(x.symbol||x.ticker||x.full_name||x.logoid),8).flat();if(Array.isArray(raw))arr.push(...raw);
   found=arr.find(x=>{if(!x||typeof x!=='object')return false;const name=String(x.symbol||x.full_name||x.ticker||'').toUpperCase();const exch=String(x.exchange||x.source||x.prefix||'').toUpperCase();return name===symbol||(name===ticker&&exch===ex)})||null;
   if(found&&logoUrl(found))break;
  }
  let url=found?logoUrl(found):null;
  // TradingView's screener can contain logoid on supported symbols. No fuzzy fallback without exchange check.
  if(!url){try{
   const extra=await mcpCall('get_symbol_data',{symbol,columns:['name','description','logoid']},session);
   const matches=deepArrays(extra,x=>x&&typeof x==='object'&&(x.logoid||x.logo_id),8).flat();
   const vals=[extra,extra?.data,extra?.data?.[0],...matches].filter(x=>x&&typeof x==='object');
   for(const obj of vals){const candidate=logoUrl(obj);if(candidate){url=candidate;break}}
  }catch{}}
  return json({symbol,logoUrl:url,description:String(found?.description||found?.company_name||'').slice(0,120)},200,addHeaders);
 }
 if(path==='/api/news'){
  const symbol=String(u.searchParams.get('symbol')||'').toUpperCase();if(!pattern.test(symbol))return errJson('Ungültiger Ticker',400);
  if(!await backgroundAuth(request,env))return errJson('News benötigt den eingerichteten SYNC_KEY (Verbindung).',403);return json(await externalCompany(env,symbol,String(u.searchParams.get('name')||'')),200,addHeaders);
 }
 if(path==='/api/bars'){
  const symbol=String(u.searchParams.get('symbol')||'').toUpperCase(),interval=u.searchParams.get('interval')||'1D';if(!pattern.test(symbol)||!['M','1W','1D','4h','1h'].includes(interval))return errJson('Ticker oder Timeframe ungültig',400);
  const data=await mcpCall('get_ohlcv',{symbol,interval,count:200},session);return json({data},200,addHeaders);
 }
 return errJson('Route nicht gefunden',404);
}
export default {async fetch(request,env){try{return await handle(request,env)}catch(e){return errJson(e,502)}}};
