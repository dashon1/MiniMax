import { useState } from 'react'
const SL='#0f172a';const SL2='#1e293b';const SL3='#334155';const CO='#f97316';const CO2='#ea580c';const COBG='#fff7ed';const W='#ffffff';const GY='#94a3b8';const GY2='#64748b';const GY3='#cbd5e1'
const inputs=[{n:'#1',i:'🎯',t:'Lead Capture',d:'Form submitted → CRM updated + welcome email sent + follow-up task created. Every lead gets in within 60 seconds.',c:CO},{n:'#2',i:'💼',t:'Client Delivery',d:'Payment received → Notion project created + onboarding tasks generated + kickoff scheduled. Client set up in 5 minutes.',c:'#14b8a6'},{n:'#3',i:'💰',t:'Finance Tracking',d:'Income logged to Google Sheets automatically. Monthly summary sent on the 1st.',c:'#22c55e'},{n:'#4',i:'📝',t:'Content System',d:'Published content logged to Notion + repurposing tasks created + social cross-posts triggered.',c:'#3b82f6'},{n:'#5',i:'💬',t:'Communication Engine',d:'Messages categorized: leads get instant replies, clients get flagged, press gets forwarded.',c:CO}]
const feat=[{i:'🧠',t:'5-Input Operations System',d:'Every operational input in your business is covered: leads, clients, money, content, and communication.'},{i:'⚡',t:'Full Architecture Map',d:'The complete system diagram showing every connection between tools. Build it once, understand it forever.'},{i:'🔌',t:'5 Automation SOPs',d:'Step-by-step setups for each automation. 10 minutes each. All tested. All Zapier-native.'},{i:'🛠️',t:'Tool Stack Breakdown',d:'Minimal stack (free) vs power stack. Every tool justified. No fluff subscriptions.'},{i:'📋',t:'5 Zapier Templates',d:'Pre-configured Zap bundles ready to import. Copy IDs, paste your credentials, and go live.'},{i:'📊',t:'Centralized Business Dashboard',d:'Your Notion dashboard shows your entire business at a glance in under 60 seconds each morning.'}]
const starter=['Quickstart Guide + Architecture Map','5 Automation SOPs (step-by-step)','Tool Stack Breakdown','5 Pre-Built Zapier Templates','48-hour email support']
const complete=['Everything in Starter','Pre-built Zapier import bundle (all 5 Zaps)','Minimal Stack Setup Guide (0 to full system)','Priority 24h support']
const faqs=[{q:'Do I need Zapier Pro to use this?',a:'The free Zapier tier handles 5 Zaps and 100 tasks per month. This system uses all 5 Zaps. Upgrade to Pro when you exceed 100 monthly tasks.'},{q:'Will this work with tools I already use?',a:'Yes. The architecture connects to any tool with a Zapier integration. Most modern SaaS tools qualify.'},{q:'How long does setup actually take?',a:'2-3 hours from scratch. Existing tools already set up: 45-60 minutes. Each automation takes 10 minutes to build and test.'},{q:'What if a Zap breaks?',a:'The automation map includes error handling and fallback steps. If something fails, you get an alert — nothing goes silent.'},{q:'Is this for a specific type of business?',a:'Best for service-based solo businesses: coaches, consultants, freelancers, and agency owners who use Notion. Product sellers benefit from the lead capture and finance automations.'},{q:'Is there a refund?',a:'Digital products are non-refundable once downloaded. If files are corrupted, contact us and we will resolve it immediately.'}]
const files=[{n:'01_Quickstart_Guide.md',s:'6.8 KB',d:'System overview, the 5 inputs framework, and setup plan'},{n:'02_System_Architecture_Map.md',s:'12.4 KB',d:'Full visual and written architecture of all 5 automations connected to Notion hub'},{n:'03_5_Automation_SOPs.md',s:'14.1 KB',d:'Step-by-step setup for each automation: trigger, filter, and action steps'},{n:'04_Tool_Stack_Breakdown.md',s:'10.2 KB',d:'Best free and paid tools for each function: minimal stack vs power stack'},{n:'05_Plug_and_Play_Templates.md',s:'12.6 KB',d:'5 Zapier import-ready templates with all step configurations pre-filled'}]
export default function App(){const[o,setO]=useState<number|null>(null);return(
<div style={{background:SL,color:W,fontFamily:'Georgia,serif',minHeight:'100vh'}}>
<nav style={{background:'rgba(15,23,42,0.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(249,115,22,0.12)',position:'sticky',top:0,zIndex:100}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'14px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div style={{display:'flex',alignItems:'center',gap:10}}>
<div style={{width:34,height:34,borderRadius:8,background:'linear-gradient(135deg,#f97316,#ea580c)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>⚡</div>
<span style={{fontWeight:700,fontSize:18}}>AI Ops OS <span style={{color:CO}}>AI</span></span>
</div>
<div style={{display:'flex',gap:32,alignItems:'center'}}>
{[['Inside','inside'],['System','system'],['Pricing','pricing'],['FAQ','faq']].map(([l,id])=>(
<a key={l} href={'#'+id} style={{color:GY,textDecoration:'none',fontSize:14,fontFamily:'system-ui,sans-serif'}}>{l}</a>))}
<a href="#pricing" style={{background:CO,color:W,padding:'8px 20px',borderRadius:8,textDecoration:'none',fontWeight:700,fontSize:14,fontFamily:'system-ui,sans-serif'}}>Get the Kit</a>
</div></div></nav>
<section style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px 60px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
<div>
<div style={{display:'inline-flex',alignItems:'center',gap:8,backgroundColor:'rgba(249,115,22,0.1)',border:'1px solid rgba(249,115,22,0.25)',borderRadius:100,padding:'6px 14px',marginBottom:24}}>
<span style={{fontSize:14,color:CO,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>5 Automations. 1 Operating System.</span>
</div>
<h1 style={{fontSize:48,fontWeight:900,lineHeight:1.1,letterSpacing:'-1.5px',marginBottom:20}}>Run Your Business<br/><span style={{color:CO}}>Without the Chaos.</span></h1>
<p style={{fontSize:19,color:GY,lineHeight:1.7,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>A unified operations system that connects all your tools and automates the 5 inputs that run your business. Build it once. Run it forever.</p>
<p style={{fontSize:14,color:GY2,marginBottom:36,fontFamily:'system-ui,sans-serif'}}>For solo operators who are done managing their business with scattered tabs and manual follow-ups.</p>
<a href="#pricing" style={{background:CO,color:W,padding:'14px 32px',borderRadius:10,textDecoration:'none',fontWeight:800,fontSize:16,display:'inline-block',boxShadow:'0 4px 20px rgba(249,115,22,0.3)'}}>Get Instant Access — From $27</a>
<div style={{display:'flex',gap:24,marginTop:24,flexWrap:'wrap'}}>
{['2-3 hour full setup','5 core automations','5 Zapier templates','Minimal stack from $0/month'].map(b=>(
<div key={b} style={{display:'flex',alignItems:'center',gap:6}}><span style={{color:CO,fontSize:13}}>✓</span><span style={{color:GY,fontSize:13,fontFamily:'system-ui,sans-serif'}}>{b}</span></div>))}
</div></div>
<div style={{backgroundColor:SL2,borderRadius:20,padding:28,border:'1px solid rgba(249,115,22,0.2)',boxShadow:'0 8px 40px rgba(249,115,22,0.1)'}}>
<div style={{marginBottom:16,fontSize:13,color:CO,fontWeight:700,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px'}}>THE 5 AUTOMATIONS — YOUR BUSINESS OS</div>
{inputs.map((p,i)=>(
<div key={p.n} style={{display:'flex',gap:12,alignItems:'flex-start',marginBottom:i<inputs.length-1?10:0}}>
<div style={{width:32,height:32,borderRadius:8,backgroundColor:p.c,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:11,color:W,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{p.n}</div>
<div style={{flex:1,paddingBottom:i<inputs.length-1?12:0}}>
<div style={{fontSize:13,fontWeight:700,marginBottom:2,color:W,fontFamily:'system-ui,sans-serif'}}>{p.t}</div>
<div style={{fontSize:12,color:GY,lineHeight:1.5,fontFamily:'system-ui,sans-serif'}}>{p.d}</div>
</div></div>))}
<div style={{marginTop:14,backgroundColor:COBG,borderRadius:8,padding:'10px 14px',border:'1px solid rgba(249,115,22,0.2)'}}>
<div style={{fontSize:12,color:CO,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>Central hub: Notion + Zapier</div>
<div style={{fontSize:12,color:GY2,fontFamily:'system-ui,sans-serif',marginTop:2}}>One dashboard. Your entire business at a glance.</div>
</div></div></section>
<section style={{borderTop:'1px solid rgba(249,115,22,0.08)',borderBottom:'1px solid rgba(249,115,22,0.08)',backgroundColor:SL2}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'20px 24px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:16}}>
{[{s:'5',l:'Core automations covering all business inputs'},{s:'2-3 hrs',l:'To build the complete system from scratch'},{s:'$0',l:'Monthly cost on the minimal tool stack'},{s:'5',l:'Pre-built Zapier templates ready to import'}].map(i=>(
<div key={i.l} style={{textAlign:'center'}}><div style={{fontSize:28,fontWeight:900,color:CO,fontFamily:'system-ui,sans-serif'}}>{i.s}</div><div style={{fontSize:12,color:GY,marginTop:4,fontFamily:'system-ui,sans-serif'}}>{i.l}</div></div>))}
</div></section>
<section id="inside" style={{backgroundColor:SL2,borderTop:'1px solid rgba(249,115,22,0.06)'}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>5 Files. 5 Automations. 1 Operating System.</h2><p style={{color:GY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Everything you need to build and run your AI Operations OS for a solo business.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
<div>
{files.map((f,i)=>(
<div key={f.n} style={{backgroundColor:SL,borderRadius:12,padding:20,marginBottom:12,border:'1px solid rgba(249,115,22,0.08)',display:'flex',gap:16,alignItems:'flex-start'}}>
<div style={{width:40,height:40,borderRadius:8,backgroundColor:'rgba(249,115,22,0.1)',border:'1px solid rgba(249,115,22,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:CO,fontSize:14,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{String(i+1).padStart(2,'0')}</div>
<div><div style={{fontWeight:700,fontSize:14,marginBottom:4,fontFamily:'system-ui,sans-serif',color:W}}>{f.n}</div><div style={{color:GY,fontSize:12,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>{f.d}</div><div style={{color:CO,fontSize:11,fontFamily:'system-ui,sans-serif'}}>{f.s}</div></div></div>))}
</div>
<div>
<div style={{background:COBG,borderRadius:16,padding:32,border:'1px solid rgba(249,115,22,0.2)',marginBottom:24}}>
<div style={{fontSize:13,color:CO2,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px',textTransform:'uppercase'}}>The Transformation</div>
<h3 style={{fontSize:24,fontWeight:900,marginBottom:16,color:SL}}>Old: Disconnected tools + manual work</h3>
<p style={{color:GY2,fontSize:15,lineHeight:1.7,marginBottom:16,fontFamily:'system-ui,sans-serif'}}>12 browser tabs open. Form responses manually pasted into Notion. The same follow-up email sent 3 times a week. Finance tracked in a spreadsheet from 2022.</p>
<div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}><div style={{flex:1,height:1,backgroundColor:'rgba(0,0,0,0.1)'}}/><span style={{color:CO2,fontSize:18}}>→</span><div style={{flex:1,height:1,backgroundColor:'rgba(0,0,0,0.1)'}}/></div>
<h3 style={{fontSize:24,fontWeight:900,color:CO2}}>New: Unified system handling 80% of ops</h3>
<p style={{color:GY2,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>One Zapier account. One Notion workspace. Everything connected. Everything automated. One dashboard instead of 12 tabs.</p>
</div>
<div style={{backgroundColor:SL,borderRadius:12,padding:20,border:'1px solid rgba(249,115,22,0.1)'}}>
<div style={{fontSize:13,color:CO,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>MORNING ROUTINE — 60 SECONDS</div>
<p style={{color:GY,fontSize:14,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>Open your Notion Business Dashboard. New leads? Active projects? Tasks due today? Finance summary? Done. You are now informed for the day.</p>
</div></div></div></div></section>
<section id="system" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px',textAlign:'center'}}>
<h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>The 5 Inputs That Run Your Business</h2>
<p style={{color:GY,fontSize:18,marginBottom:56,fontFamily:'system-ui,sans-serif'}}>Every solo business has 5 inputs. Each one automated, each one monitored, each one handled — without you.</p>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',gap:12}}>
{inputs.map(p=>(
<div key={p.n} style={{backgroundColor:SL2,borderRadius:16,padding:20,border:'1px solid rgba(249,115,22,0.1)',textAlign:'center'}}>
<div style={{fontSize:28,marginBottom:10}}>{p.i}</div>
<div style={{fontSize:12,color:p.c,fontWeight:700,marginBottom:8,fontFamily:'system-ui,sans-serif'}}>{p.n}</div>
<h3 style={{fontSize:14,fontWeight:800,marginBottom:8,fontFamily:'system-ui,sans-serif',color:W}}>{p.t}</h3>
<p style={{color:GY,fontSize:12,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>{p.d}</p>
</div>))}
</div></section>
<section style={{backgroundColor:SL2,borderTop:'1px solid rgba(249,115,22,0.06)'}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,letterSpacing:'-1px',marginBottom:16}}>What the System Does for You</h2><p style={{color:GY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Six capabilities that replace scattered tools and manual work with a unified operations OS.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
{feat.map(f=>(
<div key={f.t} style={{backgroundColor:SL,borderRadius:14,padding:24,border:'1px solid rgba(249,115,22,0.1)'}}>
<div style={{fontSize:28,marginBottom:12}}>{f.i}</div>
<h3 style={{fontWeight:800,fontSize:15,marginBottom:8,color:W}}>{f.t}</h3>
<p style={{color:GY,fontSize:13,lineHeight:1.6}}>{f.d}</p>
</div>))}
</div></div></section>
<section id="pricing" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:44,fontWeight:900,letterSpacing:'-1.5px',marginBottom:16}}>One System. Two Tiers.</h2><p style={{color:GY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Build it in 2-3 hours. Run it for the lifetime of your business.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,maxWidth:800,margin:'0 auto'}}>
<div style={{backgroundColor:SL2,borderRadius:20,padding:36,border:'1px solid rgba(249,115,22,0.15)'}}>
<div style={{fontSize:13,color:GY,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Starter</div>
<div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900}}>$27</span><span style={{color:GY,fontSize:15}}>one-time</span></div>
<p style={{color:GY,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>The complete AI Operations OS. Build all 5 automations. Wire your tools together. Run your business from one dashboard.</p>
<ul style={{listStyle:'none',padding:0,marginBottom:32}}>{starter.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:CO,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:W}}>{item}</span></li>))}</ul>
<a href="#" style={{display:'block',textAlign:'center',backgroundColor:'rgba(249,115,22,0.1)',color:CO,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,border:'1px solid rgba(249,115,22,0.25)',fontFamily:'system-ui,sans-serif'}}>Get the Ops OS Kit</a>
</div>
<div style={{backgroundColor:COBG,borderRadius:20,padding:36,border:'2px solid rgba(249,115,22,0.4)',position:'relative',boxShadow:'0 8px 40px rgba(249,115,22,0.15)'}}>
<div style={{position:'absolute',top:-14,left:24,backgroundColor:CO,color:W,padding:'4px 14px',borderRadius:100,fontWeight:800,fontSize:12,fontFamily:'system-ui,sans-serif'}}>COMPLETE SYSTEM</div>
<div style={{fontSize:13,color:CO2,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Complete</div>
<div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900,color:SL}}>$47</span><span style={{color:GY2,fontSize:15}}>one-time</span></div>
<p style={{color:GY2,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>Starter plus the Zapier import bundle and the Minimal Stack Setup Guide — from zero to full system today.</p>
<ul style={{listStyle:'none',padding:0,marginBottom:32}}>{complete.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:CO,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:SL}}>{item}</span></li>))}</ul>
<a href="#" style={{display:'block',textAlign:'center',backgroundColor:CO,color:W,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,fontFamily:'system-ui,sans-serif'}}>Get the Complete OS</a>
</div></div>
<p style={{textAlign:'center',color:GY,fontSize:13,marginTop:24,fontFamily:'system-ui,sans-serif'}}>Instant download. Files are yours to keep. Built once, runs forever.</p>
</section>
<section id="faq" style={{maxWidth:800,margin:'0 auto',padding:'0 24px 80px'}}>
<div style={{textAlign:'center',marginBottom:48}}><h2 style={{fontSize:40,fontWeight:900}}>Questions. Answered.</h2></div>
<div>{faqs.map((faq,i)=>(
<div key={i} style={{borderBottom:'1px solid rgba(249,115,22,0.1)'}}>
<button onClick={()=>setO(o===i?null:i)} style={{width:'100%',background:'none',border:'none',color:W,padding:'20px 0',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontSize:16,fontWeight:600,textAlign:'left',gap:16,fontFamily:'system-ui,sans-serif'}}>
{faq.q}<span style={{color:CO,fontSize:20,flexShrink:0}}>{o===i?'−':'+'}</span>
</button>
{o===i&&<div style={{paddingBottom:20,color:GY,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>{faq.a}</div>}
</div>))}</div></section>
<section style={{background:'linear-gradient(135deg,#0f172a,#1c1a0a)',borderTop:'1px solid rgba(249,115,22,0.06)',textAlign:'center',padding:'80px 24px'}}>
<div style={{maxWidth:600,margin:'0 auto'}}>
<div style={{fontSize:48,marginBottom:20}}>⚡</div>
<h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px',color:W}}>Your Business.<br/>Now Running Itself.</h2>
<p style={{color:GY,fontSize:18,lineHeight:1.6,marginBottom:40,fontFamily:'system-ui,sans-serif'}}>2-3 hours of setup. Then your entire solo business runs on 5 connected automations. You manage the output, not the input.</p>
<a href="#pricing" style={{backgroundColor:CO,color:W,padding:'16px 40px',borderRadius:12,textDecoration:'none',fontWeight:900,fontSize:18,display:'inline-block',fontFamily:'system-ui,sans-serif',boxShadow:'0 4px 30px rgba(249,115,22,0.35)'}}>Get Instant Access — From $27</a>
<p style={{color:GY2,fontSize:13,marginTop:16}}>One-time purchase. Instant download. No subscriptions.</p>
</div></section>
<footer style={{borderTop:'1px solid rgba(249,115,22,0.05)',padding:'24px',textAlign:'center',color:GY,fontSize:12,fontFamily:'system-ui,sans-serif'}}>
<div style={{maxWidth:1100,margin:'0 auto'}}><p>2026 AI Microtec. Personal use only. Not for resale.</p><p style={{marginTop:8}}>The AI Operations OS — Run Your Entire Solo Business with 5 Automations</p></div>
</footer>
</div>)}
