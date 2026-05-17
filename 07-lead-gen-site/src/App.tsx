import { useState } from "react"
const IND='#4338ca';const IND2='#3730a3';const IND3='#6366f1';const BG='#0b0b1a';const BG2='#111827';const BG3='#1e1b3a';const BG4='#2d2b5e';const W='#ffffff';const GY='#94a3b8';const GY2='#6b7280';const CY='#22d3ee';const CY2='#06b6d4';const AM='#fbbf24';const GR='#22c55e'
const files=[{n:'01_Quickstart_Guide.md',s:'5.2 KB',d:'Funnel overview, 4-stage system, and same-day deployment plan'},{n:'02_Funnel_Blueprint.md',s:'12.8 KB',d:'Complete stage-by-stage funnel with traffic sources, capture logic, nurture sequences'},{n:'03_AI_Qualification_Scripts.md',s:'15.1 KB',d:'8 AI scripts for qualifying, scoring, and routing leads automatically'},{n:'04_CRM_Automation_SOP.md',s:'10.2 KB',d:'Notion CRM setup, 5 automations, lead scoring, daily management routine'},{n:'05_Booking_Flow_Setup.md',s:'11.3 KB',d:'Calendly/Cal.com setup, confirmation emails, pre-call prep, Zapier triggers'}]
const stages=[{n:'01',i:'C',t:'Capture',d:'Landing page converts visitors to leads. Email exchange automated. CRM entry created instantly.',c:IND},{n:'02',i:'Q',t:'Qualify',d:'AI sequence asks 3 qualifying questions. Leads scored 0-25. Routing triggered automatically.',c:'#06b6d4'},{n:'03',i:'B',t:'Book',d:'Hot leads get booking link. One click. Meeting on your calendar within 24 hours.',c:AM},{n:'04',i:'N',t:'Nurture',d:'Warm leads enter 7-email nurture. Cold leads auto-escalate if they re-engage.',c:GR}]
const feat=[{i:'CAPTURE',t:'Automated Funnel Pages',d:'A lead capture funnel that runs itself. Landing page, email exchange, CRM entry — all connected and automated.'},{i:'QUALIFY',t:'AI Qualification Scripts',d:'8 conversational AI scripts that qualify leads via email. No chatbot required. Natural reply-based qualification.'},{i:'SCORE',t:'Lead Scoring System',d:'25-point scoring system. Hot / Warm / Cool / Cold routing. Never waste time on a lead that is not ready.'},{i:'BOOK',t:'One-Click Booking Flow',d:'Hot leads get a Calendly link. Booking confirmation, pre-call email, post-call follow-up — all automated.'},{i:'CRM',t:'Notion Lead Pipeline',d:'Complete Notion CRM with 5 automation Zaps. Hot leads view, overdue tasks, new leads tracker — all in one dashboard.'},{i:'NURTURE',t:'Sequenced Nurture Tracks',d:'Separate nurture sequences for Hot, Warm, Cool, and Cold leads. The right message to the right lead at the right time.'}]
const starter=['Quickstart Guide + Funnel Blueprint','AI Qualification Scripts (8 scripts + scoring)','CRM Automation SOP (5 Zaps fully mapped)','Booking Flow Setup Guide (Calendly + Zapier)','Notion CRM Template Structure','48-hour email support']
const complete=['Everything in Starter','Pre-built Zapier import bundle (all 5 Zaps)','Notion CRM Template (import-ready)','20 High-Converting Lead Magnet Ideas List','Priority 24h support']
const faqs=[{q:'How does the qualification work without a chatbot?',a:'It uses email. You send the qualification scripts as emails. Leads reply. You analyze responses with the scoring prompts and route accordingly. No chatbot required.'},{q:'Do I need paid tools for this?',a:'Free: Notion + Zapier free tier + Calendly free tier. Paid upgrades: Zapier Pro (0/month) when you exceed 100 tasks/month. Everything else works on free tiers.'},{q:'How fast can this be live?',a:'Same day. 2 hours for funnel pages. 1 hour for CRM and automations. 30 minutes for booking flow. Most people have it running by end of day.'},{q:'What if my leads do not reply to the qualification emails?',a:'Non-replies are still tracked. After 3 unanswered emails, move the lead to the Cool sequence. If they open 5 emails without replying, auto-escalate their score.'},{q:'Is this for B2B or B2C?',a:'This system works for both, but is strongest for B2B service businesses: coaches, consultants, agencies, freelancers with discovery calls in their sales process.'},{q:'Is there a refund?',a:'Digital products are non-refundable once downloaded. If files are corrupted, contact us and we will resolve it immediately.'}]
const stats=[{s:'Same Day',l:'Deployment time for full system'},{s:'8',l:'AI qualification scripts included'},{s:'25pt',l:'Lead scoring system (0-25 scale)'},{s:'$0',l:'Monthly cost on free tool tiers'}]
export default function App(){const[o,setO]=useState<number|null>(null);return(
<div style={{background:BG,color:W,fontFamily:'Georgia,serif',minHeight:'100vh'}}>
<nav style={{background:'rgba(11,11,26,0.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(99,102,241,0.12)',position:'sticky',top:0,zIndex:100}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'14px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div style={{display:'flex',alignItems:'center',gap:10}}>
<div style={{width:34,height:34,borderRadius:8,background:'linear-gradient(135deg,#4338ca,#6366f1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>F</div>
<span style={{fontWeight:700,fontSize:18}}>Lead Gen OS <span style={{color:IND3}}>AI</span></span>
</div>
<div style={{display:'flex',gap:32,alignItems:'center'}}>
{[['Inside','inside'],['System','system'],['Pricing','pricing'],['FAQ','faq']].map(([l,id])=>(
<a key={l} href={'#'+id} style={{color:GY,textDecoration:'none',fontSize:14,fontFamily:'system-ui,sans-serif'}}>{l}</a>))}
<a href="#pricing" style={{background:IND,color:W,padding:'8px 20px',borderRadius:8,textDecoration:'none',fontWeight:700,fontSize:14,fontFamily:'system-ui,sans-serif'}}>Get the Kit</a>
</div></div></nav>
<section style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px 60px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
<div>
<div style={{display:'inline-flex',alignItems:'center',gap:8,backgroundColor:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.25)',borderRadius:100,padding:'6px 14px',marginBottom:24}}>
<span style={{fontSize:14,color:IND3,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>CAPTURE QUALIFY BOOK AUTOMATICALLY</span>
</div>
<h1 style={{fontSize:48,fontWeight:900,lineHeight:1.1,letterSpacing:'-1.5px',marginBottom:20}}>Stop Chasing Leads.<br/><span style={{color:IND3}}>Let the Funnel Do It.</span></h1>
<p style={{fontSize:19,color:GY,lineHeight:1.7,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>An automated lead gen funnel that captures interest, qualifies prospects with AI, and books discovery calls — without you sending a single manual message.</p>
<p style={{fontSize:14,color:GY2,marginBottom:36,fontFamily:'system-ui,sans-serif'}}>For coaches, consultants, and agency owners who are done chasing cold leads.</p>
<a href="#pricing" style={{background:IND,color:W,padding:'14px 32px',borderRadius:10,textDecoration:'none',fontWeight:800,fontSize:16,display:'inline-block',boxShadow:'0 4px 20px rgba(67,56,202,0.3)'}}>Get Instant Access — From $27</a>
<div style={{display:'flex',gap:24,marginTop:24,flexWrap:'wrap'}}>
{['Same-day deployment','8 AI qualification scripts','5 CRM automations','Lead scoring system (0-25)'].map(b=>(
<div key={b} style={{display:'flex',alignItems:'center',gap:6}}><span style={{color:IND3,fontSize:13}}>✓</span><span style={{color:GY,fontSize:13,fontFamily:'system-ui,sans-serif'}}>{b}</span></div>))}
</div></div>
<div style={{backgroundColor:BG2,borderRadius:20,padding:28,border:'1px solid rgba(99,102,241,0.2)',boxShadow:'0 8px 40px rgba(67,56,202,0.1)'}}>
<div style={{marginBottom:16,fontSize:13,color:IND3,fontWeight:700,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px'}}>THE AUTOMATED LEAD GEN FUNNEL</div>
{[{l:'CAPTURE',c:IND,d:'Form submitted → CRM entry + welcome email (instant)'},{l:'QUALIFY',c:'#06b6d4',d:'AI sequence: 3 questions → 25-point score → routing'},{l:'HOT LEAD',c:AM,d:'Score 21+: Booking link sent within 1 hour'},{l:'WARM LEAD',c:'#a855f7',d:'Score 14-20: Nurture sequence + booking offer'},{l:'COOL LEAD',c:'#6b7280',d:'Score 8-13: 7-email sequence over 30 days'},{l:'COLD LEAD',c:'#374151',d:'Score 0-7: Low-touch newsletter. Auto-escalate if opens 5+.'}].map(p=>(
<div key={p.l} style={{display:'flex',gap:12,marginBottom:10}}>
<div style={{width:80,height:28,borderRadius:6,backgroundColor:p.c,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:11,color:W,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{p.l}</div>
<div style={{fontSize:12,color:GY,lineHeight:1.5,fontFamily:'system-ui,sans-serif'}}>{p.d}</div></div>))}
<div style={{marginTop:12,backgroundColor:'rgba(99,102,241,0.1)',borderRadius:8,padding:'10px 14px',border:'1px solid rgba(99,102,241,0.2)'}}>
<div style={{fontSize:12,color:IND3,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>Hot lead to booked call: under 24 hours</div>
<div style={{fontSize:12,color:GY2,fontFamily:'system-ui,sans-serif',marginTop:2}}>Fully automated after initial setup</div>
</div></div></section>
<section style={{borderTop:'1px solid rgba(99,102,241,0.08)',borderBottom:'1px solid rgba(99,102,241,0.08)',backgroundColor:BG2}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'20px 24px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:16}}>
{stats.map(i=>(
<div key={i.l} style={{textAlign:'center'}}><div style={{fontSize:28,fontWeight:900,color:IND3,fontFamily:'system-ui,sans-serif'}}>{i.s}</div><div style={{fontSize:12,color:GY,marginTop:4,fontFamily:'system-ui,sans-serif'}}>{i.l}</div></div>))}
</div></section>
<section id="inside" style={{backgroundColor:BG2,borderTop:'1px solid rgba(99,102,241,0.06)'}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>5 Files. 8 Scripts. 1 Complete Funnel.</h2><p style={{color:GY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Everything you need to build, launch, and run your automated lead gen funnel.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
<div>
{files.map((f,i)=>(
<div key={f.n} style={{backgroundColor:BG,borderRadius:12,padding:20,marginBottom:12,border:'1px solid rgba(99,102,241,0.08)',display:'flex',gap:16,alignItems:'flex-start'}}>
<div style={{width:40,height:40,borderRadius:8,backgroundColor:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:IND3,fontSize:14,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{String(i+1).padStart(2,'0')}</div>
<div><div style={{fontWeight:700,fontSize:14,marginBottom:4,fontFamily:'system-ui,sans-serif',color:W}}>{f.n}</div><div style={{color:GY,fontSize:12,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>{f.d}</div><div style={{color:IND3,fontSize:11,fontFamily:'system-ui,sans-serif'}}>{f.s}</div></div></div>))}
</div>
<div>
<div style={{background:'linear-gradient(135deg,#111827,#1e1b3a)',borderRadius:16,padding:32,border:'1px solid rgba(99,102,241,0.25)',marginBottom:24}}>
<div style={{fontSize:13,color:IND3,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px',textTransform:'uppercase'}}>The Transformation</div>
<h3 style={{fontSize:24,fontWeight:900,marginBottom:16,color:'#94a3b8'}}>Old: Manual outreach + wasted leads</h3>
<p style={{color:GY2,fontSize:15,lineHeight:1.7,marginBottom:16,fontFamily:'system-ui,sans-serif'}}>You send DMs, write cold emails, follow up three times, and chase leads who were never going to book anyway. You spend 3 hours a day on outreach and book one call.</p>
<div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}><div style={{flex:1,height:1,backgroundColor:'rgba(99,102,241,0.3)'}}/><span style={{color:IND3,fontSize:18}}>→</span><div style={{flex:1,height:1,backgroundColor:'rgba(99,102,241,0.3)'}}/></div>
<h3 style={{fontSize:24,fontWeight:900,color:IND3}}>New: Automated funnel that filters and books</h3>
<p style={{color:GY2,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>Leads come in automatically. AI qualifies them via email. Hot leads get a booking link. You show up to calls where the lead is already warm.</p>
</div>
<div style={{backgroundColor:BG,borderRadius:12,padding:20,border:'1px solid rgba(99,102,241,0.1)'}}>
<div style={{fontSize:13,color:IND3,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>YOUR DAY WITH THIS SYSTEM</div>
<p style={{color:GY,fontSize:14,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>Morning (5 min): Open Notion Hot Leads view. Any new hot leads? Send booking email. Done for the next 12 hours. Your funnel is running while you work on client delivery.</p>
</div></div></div></div></section>
<section id="system" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px',textAlign:'center'}}>
<h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>The 4-Stage Funnel That Runs Itself</h2>
<p style={{color:GY,fontSize:18,marginBottom:56,fontFamily:'system-ui,sans-serif'}}>From impression to booked call. Every stage automated. Every lead routed correctly.</p>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:12}}>
{stages.map(s=>(
<div key={s.n} style={{backgroundColor:BG2,borderRadius:16,padding:24,border:'1px solid rgba(99,102,241,0.1)',textAlign:'center'}}>
<div style={{width:40,height:40,borderRadius:'50%',backgroundColor:s.c,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:18,color:W,margin:'0 auto 12px',fontFamily:'system-ui,sans-serif'}}>{s.i}</div>
<div style={{fontSize:12,color:s.c,fontWeight:700,marginBottom:8,fontFamily:'system-ui,sans-serif'}}>STAGE {s.n}</div>
<h3 style={{fontSize:15,fontWeight:800,marginBottom:8,fontFamily:'system-ui,sans-serif',color:W}}>{s.t}</h3>
<p style={{color:GY,fontSize:12,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>{s.d}</p>
</div>))}
</div></section>
<section style={{backgroundColor:BG2,borderTop:'1px solid rgba(99,102,241,0.06)'}}>
<div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,letterSpacing:'-1px',marginBottom:16}}>What the System Does for You</h2><p style={{color:GY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Six capabilities that replace manual outreach with an automated lead generation machine.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
{feat.map(f=>(
<div key={f.t} style={{backgroundColor:BG,borderRadius:14,padding:24,border:'1px solid rgba(99,102,241,0.1)'}}>
<div style={{fontSize:11,color:IND3,fontWeight:700,marginBottom:8,fontFamily:'system-ui,sans-serif',letterSpacing:'1px'}}>{f.i}</div>
<h3 style={{fontWeight:800,fontSize:15,marginBottom:8,color:W}}>{f.t}</h3>
<p style={{color:GY,fontSize:13,lineHeight:1.6}}>{f.d}</p>
</div>))}
</div></div></section>
<section id="pricing" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px'}}>
<div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:44,fontWeight:900,letterSpacing:'-1.5px',marginBottom:16}}>One System. Two Tiers.</h2><p style={{color:GY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Build it in a day. Run it for the lifetime of your business.</p></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,maxWidth:800,margin:'0 auto'}}>
<div style={{backgroundColor:BG2,borderRadius:20,padding:36,border:'1px solid rgba(99,102,241,0.15)'}}>
<div style={{fontSize:13,color:GY,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Starter</div>
<div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900}}>$27</span><span style={{color:GY,fontSize:15}}>one-time</span></div>
<p style={{color:GY,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>The complete funnel system. 5 files, 8 AI scripts, 5 CRM automations. Build it today, run it forever.</p>
<ul style={{listStyle:'none',padding:0,marginBottom:32}}>{starter.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:IND3,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:W}}>{item}</span></li>))}</ul>
<a href="#" style={{display:'block',textAlign:'center',backgroundColor:'rgba(99,102,241,0.1)',color:IND3,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,border:'1px solid rgba(99,102,241,0.25)',fontFamily:'system-ui,sans-serif'}}>Get the Lead Gen Kit</a>
</div>
<div style={{backgroundColor:'rgba(99,102,241,0.08)',borderRadius:20,padding:36,border:'2px solid rgba(99,102,241,0.4)',position:'relative',boxShadow:'0 8px 40px rgba(67,56,202,0.15)'}}>
<div style={{position:'absolute',top:-14,left:24,backgroundColor:IND,color:W,padding:'4px 14px',borderRadius:100,fontWeight:800,fontSize:12,fontFamily:'system-ui,sans-serif'}}>BEST FOR AGENCIES</div>
<div style={{fontSize:13,color:IND3,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Complete</div>
<div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900,color:W}}>$47</span><span style={{color:GY2,fontSize:15}}>one-time</span></div>
<p style={{color:GY2,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>Starter plus the Zapier import bundle, Notion CRM template, and 20 lead magnet ideas.</p>
<ul style={{listStyle:'none',padding:0,marginBottom:32}}>{complete.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:IND3,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:W}}>{item}</span></li>))}</ul>
<a href="#" style={{display:'block',textAlign:'center',backgroundColor:IND,color:W,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,fontFamily:'system-ui,sans-serif'}}>Get the Complete System</a>
</div></div>
<p style={{textAlign:'center',color:GY,fontSize:13,marginTop:24,fontFamily:'system-ui,sans-serif'}}>Instant download. Files are yours to keep. No subscriptions.</p>
</section>
<section id="faq" style={{maxWidth:800,margin:'0 auto',padding:'0 24px 80px'}}>
<div style={{textAlign:'center',marginBottom:48}}><h2 style={{fontSize:40,fontWeight:900}}>Questions. Answered.</h2></div>
<div>{faqs.map((faq,i)=>(
<div key={i} style={{borderBottom:'1px solid rgba(99,102,241,0.1)'}}>
<button onClick={()=>setO(o===i?null:i)} style={{width:'100%',background:'none',border:'none',color:W,padding:'20px 0',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontSize:16,fontWeight:600,textAlign:'left',gap:16,fontFamily:'system-ui,sans-serif'}}>
{faq.q}<span style={{color:IND3,fontSize:20,flexShrink:0}}>{o===i?'−':'+'}</span>
</button>
{o===i&&<div style={{paddingBottom:20,color:GY,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>{faq.a}</div>}
</div>))}</div></section>
<section style={{background:'linear-gradient(135deg,#0b0b1a,#111827)',borderTop:'1px solid rgba(99,102,241,0.06)',textAlign:'center',padding:'80px 24px'}}>
<div style={{maxWidth:600,margin:'0 auto'}}>
<div style={{fontSize:48,marginBottom:20}}>F</div>
<h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px',color:W}}>Your Funnel Books Calls.<br/>You Just Show Up.</h2>
<p style={{color:GY,fontSize:18,lineHeight:1.6,marginBottom:40,fontFamily:'system-ui,sans-serif'}}>Same-day deployment. From "I need leads" to a fully automated funnel that captures, qualifies, and books discovery calls — without you lifting a finger on outreach.</p>
<a href="#pricing" style={{backgroundColor:IND,color:W,padding:'16px 40px',borderRadius:12,textDecoration:'none',fontWeight:900,fontSize:18,display:'inline-block',fontFamily:'system-ui,sans-serif',boxShadow:'0 4px 30px rgba(67,56,202,0.35)'}}>Get Instant Access — From $27</a>
<p style={{color:GY2,fontSize:13,marginTop:16}}>One-time purchase. Instant download. No subscriptions.</p>
</div></section>
<footer style={{borderTop:'1px solid rgba(99,102,241,0.05)',padding:'24px',textAlign:'center',color:GY,fontSize:12,fontFamily:'system-ui,sans-serif'}}>
<div style={{maxWidth:1100,margin:'0 auto'}}><p>2026 AI Microtec. Personal use only. Not for resale.</p><p style={{marginTop:8}}>Zero-to-Automated Lead Gen System — Capture, Qualify, and Book Calls Automatically</p></div>
</footer>
</div>)}
