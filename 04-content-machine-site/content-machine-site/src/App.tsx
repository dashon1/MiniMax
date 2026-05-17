import { useState } from 'react'
const VIO = '#7c3aed'
const VIO2 = '#6d28d9'
const PINK = '#ec4899'
const PINK2 = '#db2777'
const VIO_LIGHT = '#ede9fe'
const PINK_LIGHT = '#fdf2f8'
const BG = '#f8f7ff'
const BG2 = '#f0effe'
const BG3 = '#e9d5ff'
const DARK = '#1e1b4b'
const DARK2 = '#312e81'
const WHITE = '#ffffff'
const GRAY = '#6b7280'
const GRAY2 = '#4b5563'
const GRAY3 = '#d1d5db'
const files = [
  { n:'01_Quickstart_Guide.md', s:'8.2 KB', d:'The full system overview, batch vs drip workflow, and 5-platform cheat sheet' },
  { n:'02_Content_Batching_SOP.md', s:'9.1 KB', d:'Phase-by-phase SOP for your weekly 15–30 minute batch session' },
  { n:'03_Prompt_Frameworks.md', s:'18.4 KB', d:'12 copy-paste prompts: hooks, threads, posts, video scripts, captions' },
  { n:'04_Weekly_Content_Planner.md', s:'6.7 KB', d:'Ready-to-fill 7-day planner with performance tracking and next-week theming' },
  { n:'05_Repurposing_Checklist.md', s:'10.2 KB', d:'The 5-format repurposing system with platform-specific adaptation notes' },
]
const steps = [
  { s:'01', i:'🎯', t:'Pick Your Theme', d:'One topic for the whole week. Everything connects. No more random posts.' },
  { s:'02', i:'🤖', t:'Generate Hooks', d:'Run 2 prompt templates. Get 10 hooks. Keep your top 3 in 5 minutes.' },
  { s:'03', i:'✍️', t:'Expand Into Posts', d:'Turn each hook into a full post, thread, or video script using the prompt library.' },
  { s:'04', i:'📅', t:'Schedule and Done', d:'Fill the planner. Queue everything. Close the tab. You are done for the week.' },
]
const feat = [
  { i:'⚡', t:'First Batch in 15 Minutes', d:'Your first batch session takes 15–30 minutes. After that, 20 minutes a week keeps you fully stocked.' },
  { i:'📝', t:'12 Prompt Frameworks', d:'Hooks, threads, posts, video scripts, captions — copy-paste into ChatGPT, get platform-ready content out.' },
  { i:'🔁', t:'5-Format Repurposing', d:'One idea becomes a post, a thread, a carousel, a video script, and an email — automatically.' },
  { i:'📅', t:'Weekly Content Planner', d:'Fill it once. Know exactly what you are posting every day. Never face a blank screen on Monday morning.' },
  { i:'📊', t:'Platform Cheat Sheet', d:'Optimal lengths, formats, and posting frequency for Twitter/X, LinkedIn, Instagram, Facebook, and TikTok.' },
  { i:'🔄', t:'Batch Not Drip', d:'The system that consistent posters actually use. Once a week. Everything scheduled. No daily content anxiety.' },
]
const starter = ['Quickstart Guide + platform cheat sheet','Content Batching SOP (phase-by-phase)','12 Prompt Frameworks (all categories)','Weekly Content Planner template','5-Format Repurposing Checklist','48-hour email support']
const complete = ['Everything in Starter','Bonus: 20 viral hook templates','Bonus: 5 worked batch session examples','Repurposing flowchart (printable)','Priority 24h support']
const faqs = [
  { q:'Do I need to be a professional writer to use this?', a:'No. The prompts do the heavy lifting. You just need to know your topic and your audience. The prompts generate the actual words.' },
  { q:'How long does the weekly batch session actually take?', a:'15–30 minutes once you know the system. Week one may take 45 minutes as you learn the tools. After that, 20 minutes is the average.' },
  { q:'What if I miss a week or skip a session?', a:'You will have 7–14 pieces banked after a few sessions. One missed week is not a crisis if you have a buffer. Build the buffer in month one.' },
  { q:'Does this work for every type of creator?', a:'Works best for personal brands, coaches, consultants, makers, and thought leaders. B2B and technical creators also do well with it. Any niche where your expertise is the content.' },
  { q:'Do I need a paid ChatGPT account?', a:'Free tier works fine for all the prompts. Paid Plus can improve output quality but is not required.' },
  { q:'Is there a refund?', a:'Digital products are non-refundable once downloaded. If files are corrupted, contact us and we will resolve it immediately.' },
]
export default function App() {
  const [o, setO] = useState<number|null>(null)
  return (
    <div style={{background:BG,color:DARK,fontFamily:'Georgia,serif',minHeight:'100vh'}}>
      <nav style={{background:'rgba(248,247,255,0.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(124,58,237,0.12)',position:'sticky',top:0,zIndex:100}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'14px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:34,height:34,borderRadius:8,background:'linear-gradient(135deg,#7c3aed,#ec4899)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>⚡</div>
            <span style={{fontWeight:700,fontSize:18}}>Content Machine <span style={{color:VIO}}>AI</span></span>
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            {[['Inside','inside'],['How It Works','process'],['Pricing','pricing'],['FAQ','faq']].map(([l,id])=>(
              <a key={l} href={'#'+id} style={{color:GRAY,textDecoration:'none',fontSize:14,fontFamily:'system-ui,sans-serif'}}>{l}</a>
            ))}
            <a href="#pricing" style={{background:VIO,color:WHITE,padding:'8px 20px',borderRadius:8,textDecoration:'none',fontWeight:700,fontSize:14,fontFamily:'system-ui,sans-serif'}}>Get the Kit</a>
          </div>
        </div>
      </nav>
      <section style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px 60px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:VIO_LIGHT,border:'1px solid rgba(124,58,237,0.2)',borderRadius:100,padding:'6px 14px',marginBottom:24}}>
            <span style={{fontSize:14,color:VIO,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>⚡ 15-Minute Batch System</span>
          </div>
          <h1 style={{fontSize:48,fontWeight:900,lineHeight:1.1,letterSpacing:'-1.5px',marginBottom:20}}>One Sitting.<br/><span style={{color:VIO}}>One Week of Content.</span></h1>
          <p style={{fontSize:19,color:GRAY2,lineHeight:1.7,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Generate 7–14 pieces of content in 15–30 minutes. Batch your creation once a week. Schedule everything. Then stop thinking about content until next week.</p>
          <p style={{fontSize:14,color:GRAY,marginBottom:36,fontFamily:'system-ui,sans-serif'}}>For creators, coaches, and founders who are done treating content like a full-time job.</p>
          <a href="#pricing" style={{background:VIO,color:WHITE,padding:'14px 32px',borderRadius:10,textDecoration:'none',fontWeight:800,fontSize:16,display:'inline-block',boxShadow:'0 4px 20px rgba(124,58,237,0.3)'}}>Get Instant Access — From $27</a>
          <div style={{display:'flex',gap:24,marginTop:24,flexWrap:'wrap'}}>
            {['15-min first batch','12 prompt frameworks','7-day content planner','5-format repurposing'].map(b=>(
              <div key={b} style={{display:'flex',alignItems:'center',gap:6}}><span style={{color:VIO,fontSize:13}}>✓</span><span style={{color:GRAY,fontSize:13,fontFamily:'system-ui,sans-serif'}}>{b}</span></div>
            ))}
          </div>
        </div>
        <div style={{background:WHITE,borderRadius:20,padding:28,border:'1px solid rgba(124,58,237,0.2)',boxShadow:'0 8px 40px rgba(124,58,237,0.12)'}}>
          <div style={{marginBottom:16,fontSize:13,color:VIO,fontWeight:700,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px'}}>THIS WEEK'S CONTENT BATCH</div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {[{d:'Monday', p:'Hook #1 → Short Post', pl:'LinkedIn', c:VIO, done:true},{d:'Tuesday', p:'Hook #2 → Thread (5-post)', pl:'Twitter/X', c:PINK, done:true},{d:'Wednesday', p:'Hook #3 → Carousel outline', pl:'Instagram', c:VIO, done:true},{d:'Thursday', p:'Repurpose LinkedIn → Twitter', pl:'Twitter/X', c:PINK, done:false},{d:'Friday', p:'Newsletter angle from Thread', pl:'Email', c:'#f59e0b', done:false}].map(item=>(
              <div key={item.d} style={{background:BG,borderRadius:10,padding:'12px 16px',border:'1px solid rgba(124,58,237,0.08)',display:'flex',alignItems:'center',gap:12,opacity:item.done?1:0.65}}>
                <div style={{width:10,height:10,borderRadius:'50%',backgroundColor:item.c,flexShrink:0}}/>
                <div style={{flex:1}}><div style={{fontSize:11,color:item.c,fontWeight:700,fontFamily:'system-ui,sans-serif'}}>{item.d} — {item.pl}</div><div style={{fontSize:13,color:GRAY2,fontFamily:'system-ui,sans-serif'}}>{item.p}</div></div>
                {item.done && <div style={{fontSize:11,color:VIO,fontWeight:700,fontFamily:'system-ui,sans-serif'}}>✓</div>}
              </div>
            ))}
          </div>
          <div style={{marginTop:12,background:VIO_LIGHT,borderRadius:8,padding:'10px 14px',border:'1px solid rgba(124,58,237,0.15)'}}>
            <div style={{fontSize:12,color:VIO,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>Session complete in 23 minutes</div>
            <div style={{fontSize:12,color:GRAY,fontFamily:'system-ui,sans-serif'}}>7 pieces created. All scheduled. Done for the week.</div>
          </div>
        </div>
      </section>
      <section style={{borderTop:'1px solid rgba(124,58,237,0.08)',borderBottom:'1px solid rgba(124,58,237,0.08)',background:WHITE}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'20px 24px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:16}}>
          {[{s:'15 min',l:'Average first batch session'},{s:'7–14',l:'Pieces created per session'},{s:'12',l:'Prompt frameworks included'},{s:'5',l:'Platforms covered (Twitter to TikTok)'}].map(i=>(
            <div key={i.l} style={{textAlign:'center'}}><div style={{fontSize:28,fontWeight:900,color:VIO,fontFamily:'system-ui,sans-serif'}}>{i.s}</div><div style={{fontSize:12,color:GRAY,marginTop:4,fontFamily:'system-ui,sans-serif'}}>{i.l}</div></div>
          ))}
        </div>
      </section>
      <section id="inside" style={{background:WHITE,borderTop:'1px solid rgba(124,58,237,0.06)'}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
          <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px',color:DARK}}>5 Files. 12 Prompts. One System.</h2><p style={{color:GRAY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Everything you need to batch your content creation once a week — and actually stick to it.</p></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
            <div>
              {files.map((f,i)=>(
                <div key={f.n} style={{background:BG,borderRadius:12,padding:20,marginBottom:12,border:'1px solid rgba(124,58,237,0.1)',display:'flex',gap:16,alignItems:'flex-start'}}>
                  <div style={{width:40,height:40,borderRadius:8,background:VIO_LIGHT,border:'1px solid rgba(124,58,237,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:VIO,fontSize:14,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{String(i+1).padStart(2,'0')}</div>
                  <div><div style={{fontWeight:700,fontSize:14,marginBottom:4,fontFamily:'system-ui,sans-serif',color:DARK}}>{f.n}</div><div style={{color:GRAY,fontSize:12,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>{f.d}</div><div style={{color:VIO,fontSize:11,fontFamily:'system-ui,sans-serif'}}>{f.s}</div></div>
                </div>
              ))}
            </div>
            <div>
              <div style={{background:'linear-gradient(135deg,#1e1b4b,#312e81)',borderRadius:16,padding:32,border:'1px solid rgba(124,58,237,0.3)',marginBottom:24}}>
                <div style={{fontSize:13,color:PINK,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px',textTransform:'uppercase'}}>The System</div>
                <h3 style={{fontSize:24,fontWeight:900,marginBottom:16,color:WHITE}}>Old: Writing from scratch every single day</h3>
                <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}><div style={{flex:1,height:1,background:'rgba(255,255,255,0.2)'}}/><span style={{color:'rgba(255,255,255,0.5)',fontSize:18}}>→</span><div style={{flex:1,height:1,background:'rgba(255,255,255,0.2)'}}/></div>
                <h3 style={{fontSize:24,fontWeight:900,marginBottom:16,background:'linear-gradient(135deg,#a78bfa,#f472b6)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>New: Batch generate + systemize output</h3>
                <p style={{color:'rgba(255,255,255,0.7)',fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>One 30-minute session produces your entire week's content. The prompts generate the words. You make the final calls. You schedule everything. Done.</p>
              </div>
              {[{l:'Week 1',d:'Run your first batch. Build your first content buffer.'},{l:'Week 2',d:'Second batch. Start noticing which formats get the best response.'},{l:'Week 3',d:'Refine your hooks. Start repurposing intentionally.'},{l:'Ongoing',d:'20 minutes a week. Always ahead of schedule.'}].map((s,i)=>(
                <div key={s.l} style={{display:'flex',gap:12,marginBottom:14,alignItems:'flex-start'}}>
                  <div style={{width:28,height:28,borderRadius:'50%',background:VIO,color:WHITE,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:12,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{i+1}</div>
                  <div><div style={{fontWeight:700,fontSize:14,marginBottom:2,fontFamily:'system-ui,sans-serif',color:DARK}}>{s.l}</div><div style={{color:GRAY,fontSize:12,lineHeight:1.5,fontFamily:'system-ui,sans-serif'}}>{s.d}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="process" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px',textAlign:'center'}}>
        <h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px',color:DARK}}>From Blank Page to Full Week in 4 Steps</h2>
        <p style={{color:GRAY,fontSize:18,marginBottom:56,fontFamily:'system-ui,sans-serif'}}>The batch system that consistent posters actually use. 15 minutes to start. 20 to maintain.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:16}}>
          {steps.map(item=>(
            <div key={item.s} style={{background:BG2,borderRadius:16,padding:24,border:'1px solid rgba(124,58,237,0.1)',textAlign:'center'}}>
              <div style={{fontSize:32,marginBottom:12}}>{item.i}</div>
              <div style={{fontSize:12,color:VIO,fontWeight:700,marginBottom:8,fontFamily:'system-ui,sans-serif'}}>STEP {item.s}</div>
              <h3 style={{fontSize:15,fontWeight:800,marginBottom:8,color:DARK,fontFamily:'system-ui,sans-serif'}}>{item.t}</h3>
              <p style={{color:GRAY,fontSize:12,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{background:BG2,borderTop:'1px solid rgba(124,58,237,0.06)'}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
          <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,letterSpacing:'-1px',marginBottom:16,color:DARK}}>What the Kit Does for You</h2><p style={{color:GRAY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Six capabilities that replace daily content anxiety with a 20-minute weekly routine.</p></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
            {feat.map(f=>(
              <div key={f.t} style={{background:WHITE,borderRadius:14,padding:24,border:'1px solid rgba(124,58,237,0.1)'}}>
                <div style={{fontSize:28,marginBottom:12}}>{f.i}</div>
                <h3 style={{fontWeight:800,fontSize:15,marginBottom:8,color:DARK}}>{f.t}</h3>
                <p style={{color:GRAY,fontSize:13,lineHeight:1.6}}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px'}}>
        <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:44,fontWeight:900,letterSpacing:'-1.5px',marginBottom:16,color:DARK}}>Stop Paying for Content焦虑.</h2><p style={{color:GRAY,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Two tiers. One system. One week to never face a blank page again.</p></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,maxWidth:800,margin:'0 auto'}}>
          <div style={{background:WHITE,borderRadius:20,padding:36,border:'1px solid rgba(124,58,237,0.15)',boxShadow:'0 4px 20px rgba(124,58,237,0.06)'}}>
            <div style={{fontSize:13,color:GRAY,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Starter</div>
            <div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900,color:DARK}}>$27</span><span style={{color:GRAY,fontSize:15}}>one-time</span></div>
            <p style={{color:GRAY,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>The complete batch system. Run it once a week and never face a blank page Monday morning.</p>
            <ul style={{listStyle:'none',padding:0,marginBottom:32}}>{starter.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:VIO,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:DARK}}>{item}</span></li>))}</ul>
            <a href="https://agent-cdn.minimax.io/cdn_upload/20260515/401093546773143555/377264959930469/031445_1401/workspace/store/Product_04_Content_Machine_v1.0.zip" download style={{display:'block',textAlign:'center',background:VIO_LIGHT,color:VIO,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,border:'1px solid rgba(124,58,237,0.2)',fontFamily:'system-ui,sans-serif'}}>Get the Content Machine</a>
          </div>
          <div style={{background:'linear-gradient(135deg,#1e1b4b,#312e81)',borderRadius:20,padding:36,border:'2px solid rgba(124,58,237,0.5)',position:'relative',boxShadow:'0 8px 40px rgba(124,58,237,0.2)'}}>
            <div style={{position:'absolute',top:-14,left:24,background:'linear-gradient(135deg,#7c3aed,#ec4899)',color:WHITE,padding:'4px 14px',borderRadius:100,fontWeight:800,fontSize:12,fontFamily:'system-ui,sans-serif'}}>BEST FOR CREATORS</div>
            <div style={{fontSize:13,color:PINK,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Complete</div>
            <div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900,color:WHITE}}>$47</span><span style={{color:'rgba(255,255,255,0.5)',fontSize:15}}>one-time</span></div>
            <p style={{color:'rgba(255,255,255,0.7)',fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>Starter plus viral hook templates, worked batch examples, and the repurposing flowchart.</p>
            <ul style={{listStyle:'none',padding:0,marginBottom:32}}>{complete.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:PINK,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:WHITE}}>{item}</span></li>))}</ul>
            <a href="https://agent-cdn.minimax.io/cdn_upload/20260515/401093546773143555/377264959930469/031445_1401/workspace/store/Product_04_Content_Machine_v1.0.zip" download style={{display:'block',textAlign:'center',background:'linear-gradient(135deg,#7c3aed,#ec4899)',color:WHITE,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,fontFamily:'system-ui,sans-serif'}}>Get the Complete Kit</a>
          </div>
        </div>
        <p style={{textAlign:'center',color:GRAY,fontSize:13,marginTop:24,fontFamily:'system-ui,sans-serif'}}>Instant download. Files are yours to keep. No subscriptions. Build your content buffer and stop thinking about it.</p>
      </section>
      <section id="faq" style={{maxWidth:800,margin:'0 auto',padding:'0 24px 80px'}}>
        <div style={{textAlign:'center',marginBottom:48}}><h2 style={{fontSize:40,fontWeight:900,color:DARK}}>Questions. Answered.</h2></div>
        <div>{faqs.map((faq,i)=>(
          <div key={i} style={{borderBottom:'1px solid rgba(124,58,237,0.1)'}}>
            <button onClick={()=>setO(o===i?null:i)} style={{width:'100%',background:'none',border:'none',color:DARK,padding:'20px 0',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontSize:16,fontWeight:600,textAlign:'left',gap:16,fontFamily:'system-ui,sans-serif'}}>
              {faq.q}<span style={{color:VIO,fontSize:20,flexShrink:0}}>{o===i?'−':'+'}</span>
            </button>
            {o===i&&<div style={{paddingBottom:20,color:GRAY2,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>{faq.a}</div>}
          </div>
        ))}</div>
      </section>
      <section style={{background:'linear-gradient(135deg,#1e1b4b,#312e81)',borderTop:'1px solid rgba(124,58,237,0.06)',textAlign:'center',padding:'80px 24px'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <div style={{fontSize:48,marginBottom:20}}>⚡</div>
          <h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px',color:WHITE}}>Stop Creating Daily.<br/>Start Creating Weekly.</h2>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:18,lineHeight:1.6,marginBottom:40,fontFamily:'system-ui,sans-serif'}}>One 30-minute batch session. Everything scheduled. Your content done for the week — before most people have finished Monday's morning coffee.</p>
          <a href="#pricing" style={{background:'linear-gradient(135deg,#7c3aed,#ec4899)',color:WHITE,padding:'16px 40px',borderRadius:12,textDecoration:'none',fontWeight:900,fontSize:18,display:'inline-block',fontFamily:'system-ui,sans-serif',boxShadow:'0 4px 30px rgba(124,58,237,0.4)'}}>Get Instant Access — From $27</a>
          <p style={{color:'rgba(255,255,255,0.4)',fontSize:13,marginTop:16}}>One-time purchase. Instant download. No subscriptions.</p>
        </div>
      </section>
      <footer style={{borderTop:'1px solid rgba(124,58,237,0.05)',padding:'24px',textAlign:'center',color:GRAY,fontSize:12,fontFamily:'system-ui,sans-serif'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}><p>2026 AI Microtec. Personal use only. Not for resale.</p><p style={{marginTop:8}}>The 15-Minute Content Machine — Batch Generate. Systemize. Done.</p></div>
      </footer>
    </div>
  )
}