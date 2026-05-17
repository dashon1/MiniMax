import { useState } from 'react'
const TEAL='#0d9488';const TEAL2='#0f766e';const TEAL3='#14b8a6';const TEAL_BG='#f0fdfa';const DARK='#0f172a';const DARK2='#1e293b';const WHITE='#ffffff';const GRAY='#64748b';const GRAY2='#475569';const AMBER='#f59e0b'
const files=[{n:'01_Quickstart_Guide.md',s:'8.7 KB',d:'System overview, 5-phase workflow, and setup timeline'},{n:'02_Onboarding_Workflow_SOP.md',s:'10.2 KB',d:'Phase-by-phase setup: intake form, CRM, automations, test flow'},{n:'03_Email_Templates.md',s:'12.6 KB',d:'5 automated emails plus bonus post-kickoff check-in with send timing'},{n:'04_Notion_CRM_Setup.md',s:'8.1 KB',d:'Notion workspace structure, all database properties, views, and weekly review'},{n:'05_Automation_Map.md',s:'10.4 KB',d:'6 automations mapped: trigger, filter, action, visual flow diagram, fixes'}]
const phases=[{n:'01',i:'📝',t:'Contract Signed',d:'Confirmation email sent immediately. Client gets contract copy.',c:TEAL},{n:'02',i:'💳',t:'Deposit Received',d:'Intake form link sent instantly. CRM contact created automatically.',c:TEAL2},{n:'03',i:'📋',t:'Intake Complete',d:'Notion updated. Welcome sequence starts. You are notified.',c:TEAL3},{n:'04',i:'📅',t:'48h Before Kickoff',d:'Agenda and logistics email sent. Client arrives prepared.',c:TEAL},{n:'05',i:'🤝',t:'Kickoff Call',d:'The one human touchpoint you keep. Everything else runs itself.',c:AMBER}]
const feat=[{i:'⚡',t:'Set It in 45-60 Minutes',d:'One sitting to build the full automation. After that, every new client goes through it without you lifting a finger.'},{i:'📬',t:'5 Automated Emails',d:'Professional emails sent at exactly the right moment. Confirmation, intake, logistics, reminder, check-in.'},{i:'📊',t:'Notion CRM Built In',d:'Every client tracked from inquiry to delivery. Status, kickoff date, next step, deposit — all in one view.'},{i:'🔗',t:'Automation Map Included',d:'Visual automation diagrams for Zapier and Make. Triggers, filters, delays — all mapped. Just build it.'},{i:'✉️',t:'Email Sequences Ready',d:'Copy, paste, customize. Five templates with subject lines and send timing. No writing needed.'},{i:'🤝',t:'One Human Touchpoint',d:'You attend the kickoff call. That is the only thing you do manually. Everything else runs on its own.'}]
const starter=['Quickstart Guide','Onboarding Workflow SOP (all 5 phases)','5 Automated Email Templates + bonus check-in','Notion CRM Setup Blueprint','Automation Map (6 automations fully mapped)','48-hour email support']
const complete=['Everything in Starter','Pre-built Zapier import template','7 additional templates: NDA, scope doc, project brief','Priority 24h support']
const faqs=[{q:'Do I need Zapier or Make?',a:'Yes — the kit works with both. Zapier free tier handles approximately 20-30 new clients per month. If you onboard more than that, you are on a paid plan anyway.'},{q:'Will this work with my existing CRM?',a:'The Notion blueprint is the default, but the automation logic transfers to HubSpot, Pipedrive, or any CRM with webhook support.'},{q:'What if a client does not complete the intake form?',a:'Automation 4 sends a reminder 24 hours after the intake form is sent. If still not complete after 48 hours, you get a task in Notion to follow up manually.'},{q:'Is this for freelancers or agencies?',a:'Both. Freelancers use the simplified version. Agencies can expand the Notion structure to include team members, client tiers, and multiple project stages.'},{q:'What if I need to reschedule a kickoff?',a:'The calendar automation triggers on your calendar events. Move the call and the system sends updated reminders based on the new time automatically.'},{q:'Is there a refund?',a:'Digital products are non-refundable once downloaded. If files are corrupted, contact us and we will resolve it immediately.'}]
export default function App(){const[o,setO]=useState<number|null>(null);return(
<div style={{background:DARK,color:WHITE,fontFamily:'Georgia,serif',minHeight:'100vh'}}>
<nav style={{background:'rgba(15,23,42,0.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(20,184,166,0.12)',position:'sticky',top:0,zIndex:100}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'14px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div style={{display:'flex',alignItems:'center',gap:10}}>
<div style={{width:34,height:34,borderRadius:8,background:'linear-gradient(135deg,#0d9488,#14b8a6)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>🤝</div>
<span style={{fontWeight:700,fontSize:18}}>Onboarding Autopilot <span style={{color:TEAL3}}>AI</span></span>
</div>
<div style={{display:'flex',gap:32,alignItems:'center'}}>
{[['Inside','inside'],['How It Works','process'],['Pricing','pricing'],['FAQ','faq']].map(([l,id])=>(
<a key={l} href={'#'+id} style={{color:GRAY,textDecoration:'none',fontSize:14,fontFamily:'system-ui,sans-serif'}}>{l}</a>))}
<a href="#pricing" style={{background:TEAL,color:WHITE,padding:'8px 20px',borderRadius:8,textDecoration:'none',fontWeight:700,fontSize:14,fontFamily:'system-ui,sans-serif'}}>Get the Kit</a>
</div></div></nav>
<section style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px 60px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
<div>
<div style={{display:'inline-flex',alignItems:'center',gap:8,backgroundColor:'rgba(20,184,166,0.1)',border:'1px solid rgba(20,184,166,0.25)',borderRadius:100,padding:'6px 14px',marginBottom:24}}>
<span style={{fontSize:14,color:TEAL3,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>🤝 Automated Client Experience</span>
</div>
<h1 style={{fontSize:48,fontWeight:900,lineHeight:1.1,letterSpacing:'-1.5px',marginBottom:20}}>Onboard Clients.<br/><span style={{color:TEAL3}}>Without Lifting a Finger.</span></h1>
<p style={{fontSize:19,color:GRAY,lineHeight:1.7,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Automated onboarding that runs from contract signing to kickoff call — without you being involved in a single manual step after setup.</p>
<p style={{fontSize:14,color:GRAY2,marginBottom:36,fontFamily:'system-ui,sans-serif'}}>For freelancers, coaches, and agency owners who want a polished client experience at scale.</p>
<a href="#pricing" style={{background:TEAL,color:WHITE,padding:'14px 32px',borderRadius:10,textDecoration:'none',fontWeight:800,fontSize:16,display:'inline-block',boxShadow:'0 4px 20px rgba(13,148,136,0.3)'}}>Get Instant Access — From $27</a>
<div style={{display:'flex',gap:24,marginTop:24,flexWrap:'wrap'}}>
{['45-60 min setup','5 automated emails','6 automations mapped','Notion CRM included'].map(b=>(
<div key={b} style={{display:'flex',alignItems:'center',gap:6}}><span style={{color:TEAL3,fontSize:13}}>✓</span><span style={{color:GRAY,fontSize:13,fontFamily:'system-ui,sans-serif'}}>{b}</span></div>))}
</div></div>
<div style={{backgroundColor:DARK2,borderRadius:20,padding:28,border:'1px solid rgba(20,184,166,0.2)',boxShadow:'0 8px 40px rgba(13,148,136,0.1)'}}>
<div style={{marginBottom:16,fontSize:13,color:TEAL3,fontWeight:700,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px'}}>CLIENT ONBOARDING PIPELINE — ACTIVE</div>
{phases.map((p,i)=>(
<div key={p.n} style={{display:'flex',gap:12,alignItems:'flex-start',marginBottom:i<phases.length-1?10:0}}>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0}}>
<div style={{width:32,height:32,borderRadius:'50%',backgroundColor:p.c,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:12,color:WHITE}}>{p.i}</div>
{i<phases.length-1&&<div style={{width:2,height:20,backgroundColor:'rgba(20,184,166,0.2)'}}/>}
</div>
<div style={{flex:1,paddingBottom:i<phases.length-1?12:0}}>
<div style={{fontSize:13,color:TEAL3,fontWeight:700,fontFamily:'system-ui,sans-serif',marginBottom:2}}>{p.n} — {p.t}</div>
<div style={{fontSize:12,color:GRAY,fontFamily:'system-ui,sans-serif',lineHeight:1.5}}>{p.d}</div>
</div></div>))}
<div style={{marginTop:14,backgroundColor:TEAL_BG,borderRadius:8,padding:'10px 14px',border:'1px solid rgba(20,184,166,0.2)'}}>
<div style={{fontSize:12,color:TEAL3,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>Your only manual step: the kickoff call</div>
<div style={{fontSize:12,color:GRAY,fontFamily:'system-ui,sans-serif',marginTop:2}}>Everything else runs itself after setup</div>
</div></div></section>
<section style={{borderTop:'1px solid rgba(20,184,166,0.08)',borderBottom:'1px solid rgba(20,184,166,0.08)',backgroundColor:DARK2}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'20px 24px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:16}}>
{[{s:'5',l:'Automated emails in the sequence'},{s:'6',l:'Automations fully mapped and ready'},{s:'45 min',l:'Setup time for the complete system'},{s:'1',l:'Manual step per client (the kickoff call)'}].map(i=>(
<div key={i.l} style={{textAlign:'center'}}><div style={{fontSize:28,fontWeight:900,color:TEAL3,fontFamily:'system-ui,sans-serif'}}>{i.s}</div><div style={{fontSize:12,color:GRAY,marginTop:4,fontFamily:'system-ui,sans-serif'}}>{i.l}</div></div>))}
</div></section>
<section id="inside" style={{backgroundColor:DARK2,borderTop:'1px solid rgba(20,184,166,0.06)'}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>5 Files. 5 Phases. 1 Automated System.</h2><p style={{color:GRAY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Everything you need to build, test, and run your automated onboarding pipeline.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
<div>
{files.map((f,i)=>(
<div key={f.n} style={{backgroundColor:DARK,borderRadius:12,padding:20,marginBottom:12,border:'1px solid rgba(20,184,166,0.08)',display:'flex',gap:16,alignItems:'flex-start'}}>
<div style={{width:40,height:40,borderRadius:8,backgroundColor:'rgba(20,184,166,0.12)',border:'1px solid rgba(20,184,166,0.25)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:TEAL3,fontSize:14,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{String(i+1).padStart(2,'0')}</div>
<div><div style={{fontWeight:700,fontSize:14,marginBottom:4,fontFamily:'system-ui,sans-serif',color:WHITE}}>{f.n}</div><div style={{color:GRAY,fontSize:12,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>{f.d}</div><div style={{color:TEAL3,fontSize:11,fontFamily:'system-ui,sans-serif'}}>{f.s}</div></div></div>))}
</div>
<div>
<div style={{backgroundColor:TEAL_BG,borderRadius:16,padding:32,border:'1px solid rgba(20,184,166,0.25)',marginBottom:24}}>
<div style={{fontSize:13,color:TEAL,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px',textTransform:'uppercase'}}>The Transformation</div>
<h3 style={{fontSize:24,fontWeight:900,marginBottom:16,color:DARK}}>Old: Manual onboarding chaos</h3>
<p style={{color:GRAY2,fontSize:15,lineHeight:1.7,marginBottom:16,fontFamily:'system-ui,sans-serif'}}>Confirmation emails sent from your phone. Intake forms lost in your inbox. Notion pages created manually. Kickoff agendas written at 11pm before a call.</p>
<div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}><div style={{flex:1,height:1,backgroundColor:'rgba(0,0,0,0.1)'}}/><span style={{color:TEAL,fontSize:18}}>→</span><div style={{flex:1,height:1,backgroundColor:'rgba(0,0,0,0.1)'}}/></div>
<h3 style={{fontSize:24,fontWeight:900,color:TEAL}}>New: Automated, polished client experience</h3>
<p style={{color:GRAY2,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>Client signs. System fires everything. You attend one kickoff call. Client feels premium from day zero.</p>
</div>
<div style={{backgroundColor:DARK,borderRadius:12,padding:20,border:'1px solid rgba(20,184,166,0.1)'}}>
<div style={{fontSize:13,color:TEAL3,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>YOUR WEEKLY HABIT — 5 MINUTES</div>
<p style={{color:GRAY,fontSize:14,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>Every Monday: open Notion, check This Week's Kickoffs and Needs Follow-Up. Clear overdue actions. Your pipeline runs itself the rest of the week.</p>
</div>
</div></div></div></section>
<section id="process" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px',textAlign:'center'}}>
<h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>The 5-Phase Onboarding System</h2>
<p style={{color:GRAY,fontSize:18,marginBottom:56,fontFamily:'system-ui,sans-serif'}}>From signed contract to kickoff call — what runs automatically at every stage.</p>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',gap:12}}>
{phases.map(p=>(
<div key={p.n} style={{backgroundColor:DARK2,borderRadius:16,padding:20,border:'1px solid rgba(20,184,166,0.1)',textAlign:'center'}}>
<div style={{fontSize:28,marginBottom:10}}>{p.i}</div>
<div style={{fontSize:12,color:p.c,fontWeight:700,marginBottom:8,fontFamily:'system-ui,sans-serif'}}>PHASE {p.n}</div>
<h3 style={{fontSize:14,fontWeight:800,marginBottom:8,fontFamily:'system-ui,sans-serif',color:WHITE}}>{p.t}</h3>
<p style={{color:GRAY,fontSize:12,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>{p.d}</p>
</div>))}
</div></section>
<section style={{backgroundColor:DARK2,borderTop:'1px solid rgba(20,184,166,0.06)'}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,letterSpacing:'-1px',marginBottom:16}}>What the System Does for You</h2><p style={{color:GRAY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Six capabilities that turn onboarding from administrative burden into a competitive advantage.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
{feat.map(f=>(
<div key={f.t} style={{backgroundColor:DARK,borderRadius:14,padding:24,border:'1px solid rgba(20,184,166,0.1)'}}>
<div style={{fontSize:28,marginBottom:12}}>{f.i}</div>
<h3 style={{fontWeight:800,fontSize:15,marginBottom:8,color:WHITE}}>{f.t}</h3>
<p style={{color:GRAY,fontSize:13,lineHeight:1.6}}>{f.d}</p>
</div>))}
</div></div></section>
<section id="pricing" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:44,fontWeight:900,letterSpacing:'-1.5px',marginBottom:16}}>One Decision. Two Tiers.</h2><p style={{color:GRAY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Build it once. Run it forever. Your onboarding becomes an asset, not a task.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,maxWidth:800,margin:'0 auto'}}>
<div style={{backgroundColor:DARK2,borderRadius:20,padding:36,border:'1px solid rgba(20,184,166,0.15)'}}>
<div style={{fontSize:13,color:GRAY,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Starter</div>
<div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900}}>$27</span><span style={{color:GRAY,fontSize:15}}>one-time</span></div>
<p style={{color:GRAY,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>The complete automation system. Build it once in 45-60 minutes. It runs for every client after that.</p>
<ul style={{listStyle:'none',padding:0,marginBottom:32}}>{starter.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:TEAL3,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:WHITE}}>{item}</span></li>))}</ul>
<a href="https://agent-cdn.minimax.io/cdn_upload/20260515/401093546773143555/377264959930469/032836_264b/workspace/store/Product_05_Onboarding_Autopilot_v1.0.zip" download style={{display:'block',textAlign:'center',backgroundColor:'rgba(20,184,166,0.1)',color:TEAL3,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,border:'1px solid rgba(20,184,166,0.25)',fontFamily:'system-ui,sans-serif'}}>Get the Onboarding Kit</a>
</div>
<div style={{backgroundColor:TEAL_BG,borderRadius:20,padding:36,border:'2px solid rgba(20,184,166,0.4)',position:'relative',boxShadow:'0 8px 40px rgba(13,148,136,0.15)'}}>
<div style={{position:'absolute',top:-14,left:24,backgroundColor:TEAL,color:WHITE,padding:'4px 14px',borderRadius:100,fontWeight:800,fontSize:12,fontFamily:'system-ui,sans-serif'}}>BEST FOR AGENCIES</div>
<div style={{fontSize:13,color:TEAL,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Complete</div>
<div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900,color:DARK}}>$47</span><span style={{color:GRAY2,fontSize:15}}>one-time</span></div>
<p style={{color:GRAY2,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>Starter plus the Zapier import template, scope document, NDA, and project brief.</p>
<ul style={{listStyle:'none',padding:0,marginBottom:32}}>{complete.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:TEAL,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:DARK}}>{item}</span></li>))}</ul>
<a href="https://agent-cdn.minimax.io/cdn_upload/20260515/401093546773143555/377264959930469/032836_264b/workspace/store/Product_05_Onboarding_Autopilot_v1.0.zip" download style={{display:'block',textAlign:'center',backgroundColor:TEAL,color:WHITE,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,fontFamily:'system-ui,sans-serif'}}>Get the Complete Kit</a>
</div></div>
<p style={{textAlign:'center',color:GRAY,fontSize:13,marginTop:24,fontFamily:'system-ui,sans-serif'}}>Instant download. Files are yours to keep. No subscriptions. Set it once, run it forever.</p>
</section>
<section id="faq" style={{maxWidth:800,margin:'0 auto',padding:'0 24px 80px'}}>
<div style={{textAlign:'center',marginBottom:48}}><h2 style={{fontSize:40,fontWeight:900}}>Questions. Answered.</h2></div>
<div>{faqs.map((faq,i)=>(
<div key={i} style={{borderBottom:'1px solid rgba(20,184,166,0.1)'}}>
<button onClick={()=>setO(o===i?null:i)} style={{width:'100%',background:'none',border:'none',color:WHITE,padding:'20px 0',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontSize:16,fontWeight:600,textAlign:'left',gap:16,fontFamily:'system-ui,sans-serif'}}>
{faq.q}<span style={{color:TEAL3,fontSize:20,flexShrink:0}}>{o===i?'−':'+'}</span>
</button>
{o===i&&<div style={{paddingBottom:20,color:GRAY,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>{faq.a}</div>}
</div>))}</div></section>
<section style={{background:'linear-gradient(135deg,#0f172a,#1e3a3a)',borderTop:'1px solid rgba(20,184,166,0.06)',textAlign:'center',padding:'80px 24px'}}>
<div style={{maxWidth:600,margin:'0 auto'}}>
<div style={{fontSize:48,marginBottom:20}}>🤝</div>
<h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px',color:WHITE}}>Your Best Client Experience<br/>Starts Before the First Call.</h2>
<p style={{color:GRAY,fontSize:18,lineHeight:1.6,marginBottom:40,fontFamily:'system-ui,sans-serif'}}>45-60 minutes of setup. Every client after that gets a polished, automated onboarding experience automatically. You just show up to the kickoff call.</p>
<a href="#pricing" style={{backgroundColor:TEAL,color:WHITE,padding:'16px 40px',borderRadius:12,textDecoration:'none',fontWeight:900,fontSize:18,display:'inline-block',fontFamily:'system-ui,sans-serif',boxShadow:'0 4px 30px rgba(13,148,136,0.35)'}}>Get Instant Access — From $27</a>
<p style={{color:GRAY2,fontSize:13,marginTop:16}}>One-time purchase. Instant download. No subscriptions.</p>
</div></section>
<footer style={{borderTop:'1px solid rgba(20,184,166,0.05)',padding:'24px',textAlign:'center',color:GRAY,fontSize:12,fontFamily:'system-ui,sans-serif'}}>
<div style={{maxWidth:1100,margin:'0 auto'}}><p>2026 AI Microtec. Personal use only. Not for resale.</p><p style={{marginTop:8}}>Client Onboarding on Autopilot — Set It Once, Run Forever</p></div>
</footer>
</div>)}