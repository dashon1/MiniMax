import { useState } from 'react'
const G = '#16a34a'
const GD = '#14532d'
const AMBER = '#f59e0b'
const D = '#0a120a'
const D2 = '#111a11'
const D3 = '#162016'
const W = '#ffffff'
const GR = '#86efac'
const G2 = '#6b7280'
const files = [
  { n:'01_Inbox_Zero_Quickstart_Guide.md', s:'11.7 KB', d:'The complete setup manual plus daily routine guide' },
  { n:'02_Gmail_AI_Automation_SOP.md', s:'10.2 KB', d:'Step-by-step for building all 4 automations in Zapier' },
  { n:'03_Prompt_Pack.md', s:'12.5 KB', d:'24 prompts across 4 categories: drafting, triage, routing, follow-ups' },
  { n:'04_Labeling_Routing_System.md', s:'9.8 KB', d:'12-label architecture, auto-filters, and priority inbox setup' },
  { n:'05_Email_Templates.md', s:'18.4 KB', d:'47 templates: acknowledgment, scheduling, follow-up, decline, status' },
]
const feat = [
  { i:'📬', t:'Auto-Triage Labels', d:'Every email scored P1-P4 before you open your inbox. AI reads it, routes it, you decide.' },
  { i:'✍️', t:'Auto-Draft Replies', d:'Routine emails get a reply draft created. Review for 30 seconds, hit send.' },
  { i:'⭐', t:'VIP Escalation', d:'High-value senders get immediate priority treatment. No important emails buried.' },
  { i:'📋', t:'Daily Briefings', d:'Two times a day: one email that replaces your entire inbox scan. 8am and 5pm.' },
  { i:'🏷️', t:'12-Label System', d:'Complete label architecture. Color-coded. Visual scanning. Works with or without AI.' },
  { i:'🔗', t:'Works With Gmail + Zapier', d:'Free Zapier tier is enough. OpenAI API key required. No other tools needed.' },
]
const starter = ['Quickstart Guide (11-page)','Gmail AI Automation SOP (all 4 automations)','24-Prompt Pack (4 categories)','12-Label Architecture and Auto-Filters','Morning plus Evening Digest automation','48-hour email support']
const complete = ['Everything in Starter','47 Done-for-You Email Templates','Escalation Routing system','VIP sender configuration guide','Priority notification routing','72-hour phone support']
const faqs = [
  { q:'How long does setup take?', a:'45 minutes for the full system. Auto-triage and auto-draft alone take about 30 minutes.' },
  { q:'Do I need a paid Zapier account?', a:'Free Zapier tier (100 tasks/month) covers auto-draft and daily digest. Upgrade to paid ($20/month) for all 4 automations.' },
  { q:'Will AI send emails without my review?', a:'No. All drafts are created in your Gmail drafts folder. You review and press send.' },
  { q:'What happens to my emails?', a:'Emails stay in your Gmail. No emails are stored anywhere else.' },
  { q:'Does this work with other email providers?', a:'This kit is built for Gmail. Outlook/Yahoo require different Zapier triggers.' },
  { q:'Is there a refund?', a:'Digital products are non-refundable once downloaded. Contact us for corrupted files.' },
]
export default function App() {
  const [o, setO] = useState<number|null>(null)
  return (
    <div style={{background:D,color:W,fontFamily:'Georgia,serif',minHeight:'100vh'}}>
      <nav style={{background:'rgba(10,18,10,0.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(22,163,74,0.15)',position:'sticky',top:0,zIndex:100}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'14px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:34,height:34,borderRadius:8,backgroundColor:G,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>📬</div>
            <span style={{fontWeight:700,fontSize:18}}>Inbox Zero <span style={{color:G}}>AI</span></span>
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            {['Inside','How It Works','Pricing','FAQ'].map(l=>(
              <a key={l} href={'#'+l.toLowerCase()} style={{color:G2,textDecoration:'none',fontSize:14,fontFamily:'system-ui,sans-serif'}}>{l}</a>
            ))}
            <a href="#inside" style={{backgroundColor:G,color:W,padding:'8px 20px',borderRadius:8,textDecoration:'none',fontWeight:700,fontSize:14,fontFamily:'system-ui,sans-serif'}}>Get the Kit</a>
          </div>
        </div>
      </nav>
      <section style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px 60px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,backgroundColor:'rgba(22,163,74,0.1)',border:'1px solid rgba(22,163,74,0.3)',borderRadius:100,padding:'6px 14px',marginBottom:24}}>
            <span style={{fontSize:14,color:G,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>📬 Gmail + AI Automation</span>
          </div>
          <h1 style={{fontSize:48,fontWeight:900,lineHeight:1.1,letterSpacing:'-1.5px',marginBottom:20}}>Inbox Zero, <span style={{color:G}}>Every Single Day.</span></h1>
          <p style={{fontSize:19,color:G2,lineHeight:1.7,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>AI triages every email. AI drafts your replies. You review and send. Your inbox becomes a priority system instead of a to-do list.</p>
          <p style={{fontSize:14,color:G2,marginBottom:36,fontFamily:'system-ui,sans-serif'}}>For professionals who want to spend 15 minutes on email instead of 2.5 hours.</p>
          <a href="#pricing" style={{backgroundColor:G,color:W,padding:'14px 32px',borderRadius:10,textDecoration:'none',fontWeight:800,fontSize:16,display:'inline-block'}}>Get Instant Access — From $27</a>
          <div style={{display:'flex',gap:24,marginTop:24,flexWrap:'wrap'}}>
            {['45-min setup','4 automations','24 AI prompts','47 templates'].map(b=>(
              <div key={b} style={{display:'flex',alignItems:'center',gap:6}}><span style={{color:G,fontSize:13}}>✓</span><span style={{color:G2,fontSize:13,fontFamily:'system-ui,sans-serif'}}>{b}</span></div>
            ))}
          </div>
        </div>
        <div style={{backgroundColor:D2,borderRadius:20,padding:28,border:'1px solid rgba(22,163,74,0.25)',boxShadow:'0 0 80px rgba(22,163,74,0.1)'}}>
          <div style={{marginBottom:16,fontSize:13,color:G,fontWeight:700,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px'}}>YOUR MORNING BRIEFING — TODAY</div>
          {[{l:'P1 URGENT',c:'#ef4444',f:'Sarah Chen — Invoice question',a:'Reply today'},{l:'P2 IMPORTANT',c:AMBER,f:'Follow-ups needed',a:'Handle by noon'},{l:'P3 ROUTINE',c:'#22c55e',f:'Newsletters + updates',a:'Batch at 5pm'}].map(p=>(
            <div key={p.l} style={{backgroundColor:D3,borderRadius:10,padding:'12px 16px',marginBottom:10,border:'1px solid rgba(255,255,255,0.06)',display:'flex',alignItems:'center',gap:12}}>
              <div style={{width:10,height:10,borderRadius:'50%',backgroundColor:p.c,flexShrink:0}}/>
              <div style={{flex:1}}><div style={{fontSize:11,color:p.c,fontWeight:700,fontFamily:'system-ui,sans-serif'}}>{p.l}</div><div style={{fontSize:12,color:G2,fontFamily:'system-ui,sans-serif'}}>{p.f}</div></div>
              <div style={{fontSize:11,color:G2,fontFamily:'system-ui,sans-serif'}}>{p.a}</div>
            </div>
          ))}
          <div style={{backgroundColor:GD,borderRadius:8,padding:'12px 16px',border:'1px solid rgba(22,163,74,0.3)'}}>
            <div style={{fontSize:12,color:G,fontWeight:600,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>AI has drafted replies for P2 emails</div>
            <div style={{fontSize:12,color:G2,fontFamily:'system-ui,sans-serif'}}>3 drafts ready in your Gmail — review and send</div>
          </div>
        </div>
      </section>
      <section style={{borderTop:'1px solid rgba(22,163,74,0.08)',borderBottom:'1px solid rgba(22,163,74,0.08)',backgroundColor:D2}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'20px 24px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:16}}>
          {[{s:'2.5 hrs',l:'Average daily email time before AI'},{s:'15 min',l:'Daily email time with this system'},{s:'47',l:'Pre-written email templates included'},{s:'24',l:'Copy-paste AI prompts ready to run'}].map(i=>(
            <div key={i.l} style={{textAlign:'center'}}><div style={{fontSize:28,fontWeight:900,color:G,fontFamily:'system-ui,sans-serif'}}>{i.s}</div><div style={{fontSize:12,color:G2,marginTop:4,fontFamily:'system-ui,sans-serif'}}>{i.l}</div></div>
          ))}
        </div>
      </section>
      <section style={{maxWidth:850,margin:'0 auto',padding:'80px 24px',textAlign:'center'}}>
        <h2 style={{fontSize:38,fontWeight:900,marginBottom:24,letterSpacing:'-0.5px'}}>Your Inbox Is a Prison. Every Email Is an Interruption.</h2>
        <p style={{color:G2,fontSize:17,lineHeight:1.7,marginBottom:40,fontFamily:'system-ui,sans-serif'}}>80 emails a day. Every one requires a decision. Read it? Reply to it? File it? The mental load never stops. And the important ones get buried under the noise.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,textAlign:'left'}}>
          {[{e:'😩',t:'You check email first thing and lose 90 minutes before work starts'},{e:'📉',t:'Important messages from clients buried under 40 newsletters'},{e:'⏰',t:'You batch-process at 11pm because you could never keep up during the day'},{e:'🔁',t:'You write the same types of responses 30 times a week'}].map(i=>(
            <div key={i.t} style={{backgroundColor:D2,borderRadius:12,padding:20,border:'1px solid rgba(22,163,74,0.1)'}}><div style={{fontSize:26,marginBottom:10}}>{i.e}</div><div style={{color:G2,fontSize:14,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>{i.t}</div></div>
          ))}
        </div>
        <div style={{marginTop:36,backgroundColor:GD,borderRadius:16,padding:'28px',border:'1px solid rgba(22,163,74,0.3)'}}>
          <p style={{fontSize:20,color:W,fontWeight:700,marginBottom:8,fontFamily:'system-ui,sans-serif'}}>The fix: Split the funnel. Let AI handle triage and drafting.</p>
          <p style={{color:GR,fontSize:16,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>AI reads every email. AI labels it by priority. AI drafts a reply. You review for 30 seconds and hit send. Inbox Zero every day, starting today.</p>
        </div>
      </section>
      <section id="inside" style={{backgroundColor:D2,borderTop:'1px solid rgba(22,163,74,0.06)'}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
          <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>5 Files. 24 Prompts. 4 Automations.</h2><p style={{color:G2,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Everything you need to build and run your AI-powered inbox.</p></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
            <div>
              {files.map((f,i)=>(
                <div key={f.n} style={{backgroundColor:D,borderRadius:12,padding:20,marginBottom:12,border:'1px solid rgba(22,163,74,0.1)',display:'flex',gap:16,alignItems:'flex-start'}}>
                  <div style={{width:40,height:40,borderRadius:8,backgroundColor:'rgba(22,163,74,0.15)',border:'1px solid rgba(22,163,74,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:G,fontSize:14,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{String(i+1).padStart(2,'0')}</div>
                  <div><div style={{fontWeight:700,fontSize:14,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>{f.n}</div><div style={{color:G2,fontSize:12,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>{f.d}</div><div style={{color:G,fontSize:11,fontFamily:'system-ui,sans-serif'}}>{f.s}</div></div>
                </div>
              ))}
            </div>
            <div>
              <div style={{backgroundColor:D,borderRadius:16,padding:32,border:'1px solid rgba(22,163,74,0.2)',marginBottom:24}}>
                <div style={{fontSize:13,color:G,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px',textTransform:'uppercase'}}>How It Works</div>
                <h3 style={{fontSize:24,fontWeight:900,marginBottom:16}}>Your AI inbox in 4 systems</h3>
                <p style={{color:G2,fontSize:15,lineHeight:1.7,marginBottom:20,fontFamily:'system-ui,sans-serif'}}>The kit builds 4 automations that work together as a complete inbox management system. Start with one, add the rest whenever you are ready.</p>
                {[{n:'1',na:'Auto-Triage',d:'AI reads every email, scores it P1-P4, applies labels. You scan priorities in 60 seconds.'},{n:'2',na:'Auto-Draft',d:'P2 emails get a reply draft created automatically. You review, edit, send.'},{n:'3',na:'Escalation Routing',d:'VIP emails get starred and surfaced immediately.'},{n:'4',na:'Daily Digest',d:'Morning and evening briefings compile everything you need to know.'}].map(s=>(
                  <div key={s.n} style={{display:'flex',gap:12,marginBottom:14,alignItems:'flex-start'}}>
                    <div style={{width:28,height:28,borderRadius:'50%',backgroundColor:G,color:W,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{s.n}</div>
                    <div><div style={{fontWeight:700,fontSize:14,marginBottom:2,fontFamily:'system-ui,sans-serif'}}>{s.na}</div><div style={{color:G2,fontSize:12,lineHeight:1.5,fontFamily:'system-ui,sans-serif'}}>{s.d}</div></div>
                  </div>
                ))}
              </div>
              <div style={{backgroundColor:GD,borderRadius:16,padding:24,border:'1px solid rgba(22,163,74,0.25)'}}>
                <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}><span style={{fontSize:22}}>💡</span><span style={{fontWeight:800,fontSize:15,fontFamily:'system-ui,sans-serif'}}>Works with what you already have</span></div>
                <div style={{display:'flex',flexWrap:'wrap',gap:8}}>{['Gmail','Zapier (free tier)','OpenAI API','Google Sheets','Notion'].map(t=>(
                  <span key={t} style={{backgroundColor:D,borderRadius:6,padding:'4px 10px',fontSize:12,color:G2,border:'1px solid rgba(255,255,255,0.08)',fontFamily:'system-ui,sans-serif'}}>{t}</span>
                ))}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px',textAlign:'center'}}>
        <h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>From Download to Inbox Zero in 45 Minutes</h2>
        <p style={{color:G2,fontSize:18,marginBottom:56,fontFamily:'system-ui,sans-serif'}}>No technical knowledge required. If you can use Gmail, you can build this.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
          {[{s:'01',t:'Read the SOP',d:'The step-by-step guide tells you exactly which buttons to click. Open Zapier, follow the steps.',i:'📋'},{s:'02',t:'Paste the Prompts',d:'Copy the 24 prompts from the Prompt Pack. Paste them into Zapier. The AI does the rest.',i:'🧠'},{s:'03',t:'Set Your Labels',d:'Apply the 12-label system to Gmail. Your inbox becomes scannable in seconds.',i:'🏷️'}].map(item=>(
            <div key={item.s} style={{backgroundColor:D2,borderRadius:16,padding:32,border:'1px solid rgba(22,163,74,0.1)',textAlign:'left'}}>
              <div style={{fontSize:36,marginBottom:16}}>{item.i}</div>
              <div style={{fontSize:12,color:G,fontWeight:700,marginBottom:8,fontFamily:'system-ui,sans-serif'}}>STEP {item.s}</div>
              <h3 style={{fontSize:20,fontWeight:800,marginBottom:12}}>{item.t}</h3>
              <p style={{color:G2,fontSize:14,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{backgroundColor:D2,borderTop:'1px solid rgba(22,163,74,0.06)'}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
          <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,letterSpacing:'-1px',marginBottom:16}}>What the System Does</h2><p style={{color:G2,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Six capabilities that turn your inbox from chaos to clarity.</p></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
            {feat.map(f=>(
              <div key={f.t} style={{backgroundColor:D,borderRadius:14,padding:24,border:'1px solid rgba(22,163,74,0.15)'}}>
                <div style={{fontSize:28,marginBottom:12}}>{f.i}</div>
                <h3 style={{fontWeight:800,fontSize:16,marginBottom:8}}>{f.t}</h3>
                <p style={{color:G2,fontSize:13,lineHeight:1.6}}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px'}}>
        <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:44,fontWeight:900,letterSpacing:'-1.5px',marginBottom:16}}>Two Tiers, One Decision</h2><p style={{color:G2,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Start with the foundations, upgrade when you are ready.</p></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,maxWidth:800,margin:'0 auto'}}>
          <div style={{backgroundColor:D2,borderRadius:20,padding:36,border:'1px solid rgba(255,255,255,0.08)'}}>
            <div style={{fontSize:13,color:G2,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Starter</div>
            <div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900}}>$27</span><span style={{color:G2,fontSize:15}}>one-time</span></div>
            <p style={{color:G2,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>The complete system. Build all 4 automations and have AI handling your inbox.</p>
            <ul style={{listStyle:'none',padding:0,marginBottom:32}}>{starter.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:G,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:W}}>{item}</span></li>))}</ul>
            <a href="https://agent-cdn.minimax.io/cdn_upload/20260515/401093546773143555/377264959930469/030424_8b7e/workspace/store/Product_02_Inbox_Zero_AI_v1.0.zip" download style={{display:'block',textAlign:'center',backgroundColor:'rgba(22,163,74,0.1)',color:G,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,border:'1px solid rgba(22,163,74,0.3)',fontFamily:'system-ui,sans-serif'}}>Download the Starter Kit</a>
          </div>
          <div style={{backgroundColor:D,borderRadius:20,padding:36,border:'2px solid rgba(22,163,74,0.6)',position:'relative',boxShadow:'0 0 50px rgba(22,163,74,0.12)'}}>
            <div style={{position:'absolute',top:-14,left:24,backgroundColor:G,color:W,padding:'4px 14px',borderRadius:100,fontWeight:800,fontSize:12,fontFamily:'system-ui,sans-serif'}}>MOST POPULAR</div>
            <div style={{fontSize:13,color:G,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Complete</div>
            <div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900}}>$47</span><span style={{color:G2,fontSize:15}}>one-time</span></div>
            <p style={{color:G2,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>Everything in Starter plus the 47-template library and escalation routing.</p>
            <ul style={{listStyle:'none',padding:0,marginBottom:32}}>{complete.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:G,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:W}}>{item}</span></li>))}</ul>
            <a href="https://agent-cdn.minimax.io/cdn_upload/20260515/401093546773143555/377264959930469/030424_8b7e/workspace/store/Product_02_Inbox_Zero_AI_v1.0.zip" download style={{display:'block',textAlign:'center',backgroundColor:G,color:W,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,fontFamily:'system-ui,sans-serif'}}>Get the Complete Kit</a>
          </div>
        </div>
        <p style={{textAlign:'center',color:G2,fontSize:13,marginTop:24,fontFamily:'system-ui,sans-serif'}}>Instant download. Files are yours to keep. No subscriptions.</p>
      </section>
      <section id="faq" style={{maxWidth:800,margin:'0 auto',padding:'0 24px 80px'}}>
        <div style={{textAlign:'center',marginBottom:48}}><h2 style={{fontSize:40,fontWeight:900}}>Questions? Answered.</h2></div>
        <div>{faqs.map((faq,i)=>(
          <div key={i} style={{borderBottom:'1px solid rgba(22,163,74,0.1)'}}>
            <button onClick={()=>setO(o===i?null:i)} style={{width:'100%',background:'none',border:'none',color:W,padding:'20px 0',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontSize:16,fontWeight:600,textAlign:'left',gap:16,fontFamily:'system-ui,sans-serif'}}>
              {faq.q}<span style={{color:G,fontSize:20,flexShrink:0}}>{o===i?'-':'+'}</span>
            </button>
            {o===i&&<div style={{paddingBottom:20,color:G2,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>{faq.a}</div>}
          </div>
        ))}</div>
      </section>
      <section style={{backgroundColor:D2,borderTop:'1px solid rgba(22,163,74,0.06)',textAlign:'center',padding:'80px 24px'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <div style={{fontSize:48,marginBottom:20}}>📬</div>
          <h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>Your Inbox Is Waiting.<br/>Let us Fix It.</h2>
          <p style={{color:G2,fontSize:18,lineHeight:1.6,marginBottom:40,fontFamily:'system-ui,sans-serif'}}>Download the kit. Follow the SOP. Build your first automation in 45 minutes. Wake up tomorrow with a clean inbox.</p>
          <a href="#pricing" style={{backgroundColor:G,color:W,padding:'16px 40px',borderRadius:12,textDecoration:'none',fontWeight:900,fontSize:18,display:'inline-block',fontFamily:'system-ui,sans-serif'}}>Get Instant Access — From $27</a>
          <p style={{color:G2,fontSize:13,marginTop:16}}>One-time purchase. Instant download. No subscriptions.</p>
        </div>
      </section>
      <footer style={{borderTop:'1px solid rgba(22,163,74,0.05)',padding:'24px',textAlign:'center',color:G2,fontSize:12,fontFamily:'system-ui,sans-serif'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}><p>2026 AI Microtec. Personal use only. Not for resale.</p><p style={{marginTop:8}}>Inbox Zero AI System — Gmail + GPT Automation Kit</p></div>
      </footer>
    </div>
  )
}