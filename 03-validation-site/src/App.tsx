import { useState } from 'react'
const ORG = '#e85d04'
const ORG2 = '#c2410c'
const ORG_LIGHT = '#fff7ed'
const YEL = '#fbbf24'
const YEL_LIGHT = '#fef9c3'
const CHAR = '#1c1917'
const CHAR2 = '#292524'
const CHAR3 = '#3d3935'
const CREAM = '#fef3c7'
const CREAM2 = '#fffbeb'
const W = '#ffffff'
const G = '#78716c'
const G2 = '#d6d3d1'
const files = [
  { n:'01_Quickstart_Guide.md', s:'8.2 KB', d:'The full 60-minute validation workflow with phase-by-phase instructions' },
  { n:'02_Validation_Checklist.md', s:'7.4 KB', d:'20-question gate with scoring guide — minimum viable scores per section' },
  { n:'03_AI_Prompt_Scripts.md', s:'11.2 KB', d:'5 production-ready prompts: Reddit demand, Google autocomplete, competitor absence, Problem Reframer, Offer Stress Test' },
  { n:'04_Offer_Builder_Template.md', s:'8.6 KB', d:'8-section offer construction — persona, tiers, pricing, guarantee, unfair advantage' },
  { n:'05_Landing_Page_Copy.md', s:'13.1 KB', d:'13-section copy generator with 5 headline variations and full master AI prompt' },
]
const steps = [
  { s:'01', i:'🎯', t:'Run the Validation Checklist', d:'20 questions. 3 killer mistakes caught. No building before validating — score your idea in 20 minutes.' },
  { s:'02', i:'🤖', t:'Run the AI Demand Prompts', d:'Paste 5 prompt scripts into ChatGPT. Extract real demand signals: Reddit threads, search behavior, market gaps.' },
  { s:'03', i:'📋', t:'Build Your Offer', d:'Fill the 8-section Offer Builder. AI generates your complete pricing tier structure and product promise.' },
  { s:'04', i:'✍️', t:'Generate Your Landing Page Copy', d:'Feed your offer into the copy generator. Get 13 sections of ready-to-use landing page copy in 10 minutes.' },
]
const feat = [
  { i:'✅', t:'20-Question Validation Gate', d:'Catch the 3 killer mistakes before spending 6 months on a product nobody wants.' },
  { i:'🤖', t:'5 AI Demand Prompt Scripts', d:'Run these in ChatGPT to extract real market signals — not guesses — in under 30 minutes.' },
  { i:'📋', t:'8-Section Offer Builder', d:'Structured template that forces specificity on buyer, pricing, tiers, and differentiation.' },
  { i:'✍️', t:'13-Section Copy Generator', d:'Landing page, headlines, bullets, FAQ, CTA — all generated from your offer details.' },
  { i:'💰', t:'Pricing Tier Framework', d:'Impulse / Core / Premium / Signature — know exactly where your product should sit.' },
  { i:'⚡', t:'60-Minute Time-to-Result', d:'Structured workflow designed to take exactly 1 hour from idea to validated offer.' },
]
const starter = ['Quickstart Guide (full 60-min workflow)','Validation Checklist (20 questions + scoring)','5 AI Demand Prompt Scripts','8-Section Offer Builder Template','Landing Page Copy Generator','Email support (48h)']
const complete = ['Everything in Starter','Complete Landing Page Copy (all 13 sections)','5 worked examples from the prompts','Bonus: 20 Niche Ideas You Can Validate Today','Priority support (24h)']
const faqs = [
  { q:'I already have an idea — do I really need to validate it?', a:'Yes. The cost of building something nobody wants is 6 months. The validation checklist takes 20 minutes. It is the most valuable 20 minutes in product development.' },
  { q:'Do I need a paid AI subscription to use the prompts?', a:'No. The prompts work in the free tier of ChatGPT. Paid AI access can improve output quality but is not required.' },
  { q:'What if my idea fails the checklist?', a:'That is the point. You want to know now, not after launch. Use the low scores to identify which dimension to strengthen — then rerun the prompts.' },
  { q:'How is this different from just searching Google myself?', a:'The prompts are engineered to extract structured, specific signals that are harder to find manually — Reddit sentiment, competitor absence patterns, and psychological buyer profiling.' },
  { q:'I already have a landing page — will this still help?', a:'The copy generator works standalone. Use it to stress-test and rewrite your existing copy with the demand data you have already collected.' },
  { q:'Is there a refund?', a:'Digital products are non-refundable once downloaded. If files are corrupted or the kit does not match the description, contact us and we will resolve it immediately.' },
]
export default function App() {
  const [o, setO] = useState<number|null>(null)
  return (
    <div style={{background:CHAR,color:W,fontFamily:'Georgia,serif',minHeight:'100vh'}}>
      <nav style={{background:'rgba(28,25,23,0.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(232,93,4,0.15)',position:'sticky',top:0,zIndex:100}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'14px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:34,height:34,borderRadius:8,backgroundColor:ORG,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>💡</div>
            <span style={{fontWeight:700,fontSize:18}}>AI Validation <span style={{color:ORG}}>Blueprint</span></span>
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            {[['Inside','inside'],['Process','process'],['Pricing','pricing'],['FAQ','faq']].map(([l,id])=>(
              <a key={l} href={'#'+id} style={{color:G,textDecoration:'none',fontSize:14,fontFamily:'system-ui,sans-serif'}}>{l}</a>
            ))}
            <a href="#pricing" style={{backgroundColor:ORG,color:W,padding:'8px 20px',borderRadius:8,textDecoration:'none',fontWeight:700,fontSize:14,fontFamily:'system-ui,sans-serif'}}>Get the Kit</a>
          </div>
        </div>
      </nav>
      <section style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px 60px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,backgroundColor:'rgba(232,93,4,0.1)',border:'1px solid rgba(232,93,4,0.3)',borderRadius:100,padding:'6px 14px',marginBottom:24}}>
            <span style={{fontSize:14,color:ORG,fontWeight:600,fontFamily:'system-ui,sans-serif'}}>⏱️ 60-Minute Validation System</span>
          </div>
          <h1 style={{fontSize:48,fontWeight:900,lineHeight:1.1,letterSpacing:'-1.5px',marginBottom:20}}>Stop Guessing.<br/><span style={{color:ORG}}>Start Validating.</span></h1>
          <p style={{fontSize:19,color:G2,lineHeight:1.7,marginBottom:12,fontFamily:'system-ui,sans-serif'}}>AI-backed demand testing. Structured offer building. Landing page copy generation. Everything you need to turn any idea into a validated, monetizable product in 60 minutes.</p>
          <p style={{fontSize:14,color:G,marginBottom:36,fontFamily:'system-ui,sans-serif'}}>For solo creators and founders who are done wasting months on products nobody wants.</p>
          <a href="#pricing" style={{backgroundColor:ORG,color:W,padding:'14px 32px',borderRadius:10,textDecoration:'none',fontWeight:800,fontSize:16,display:'inline-block'}}>Get Instant Access — From $27</a>
          <div style={{display:'flex',gap:24,marginTop:24,flexWrap:'wrap'}}>
            {['20-question checklist','5 AI demand prompts','8-section offer builder','13-section copy generator'].map(b=>(
              <div key={b} style={{display:'flex',alignItems:'center',gap:6}}><span style={{color:ORG,fontSize:13}}>✓</span><span style={{color:G,fontSize:13,fontFamily:'system-ui,sans-serif'}}>{b}</span></div>
            ))}
          </div>
        </div>
        <div style={{backgroundColor:CHAR2,borderRadius:20,padding:28,border:'1px solid rgba(232,93,4,0.25)',boxShadow:'0 0 80px rgba(232,93,4,0.1)'}}>
          <div style={{marginBottom:16,fontSize:13,color:ORG,fontWeight:700,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px'}}>YOUR VALIDATION SCORE — EXAMPLE</div>
          {[{l:'DEMAND SIGNAL',c:ORG,sc:'32/40',b:'Strong — people pay for this',r:true},{l:'OFFER VIABILITY',c:YEL,sc:'28/40',b:'Solid — package is clear',r:false},{l:'CONVERSION FEASIBILITY',c:'#22c55e',sc:'14/20',b:'Room to improve — copy needs work',r:false}].map(p=>(
            <div key={p.l} style={{backgroundColor:CHAR3,borderRadius:10,padding:'12px 16px',marginBottom:10,border:'1px solid rgba(255,255,255,0.06)'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
                <span style={{fontSize:11,color:p.c,fontWeight:700,fontFamily:'system-ui,sans-serif'}}>{p.l}</span>
                <span style={{fontSize:11,color:p.c,fontWeight:700,fontFamily:'system-ui,sans-serif'}}>{p.sc}</span>
              </div>
              <div style={{fontSize:12,color:G,fontFamily:'system-ui,sans-serif'}}>{p.b}</div>
              {r&&<div style={{marginTop:6,backgroundColor:ORG,borderRadius:4,padding:'3px 8px',fontSize:11,color:W,fontWeight:700,fontFamily:'system-ui,sans-serif',display:'inline-block'}}>CONDITIONAL PROCEED</div>}
            </div>
          ))}
          <div style={{backgroundColor:'#1a1a1a',borderRadius:8,padding:'12px 16px',marginTop:4,border:'1px solid rgba(255,255,255,0.06)'}}>
            <div style={{fontSize:12,color:ORG,fontWeight:600,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>AI Prompt generated: Problem Reframer</div>
            <div style={{fontSize:12,color:G2,fontFamily:'system-ui,sans-serif'}}>"You keep telling yourself you'll start next month. Meanwhile the cost compounds daily."</div>
          </div>
        </div>
      </section>
      <section style={{borderTop:'1px solid rgba(232,93,4,0.08)',borderBottom:'1px solid rgba(232,93,4,0.08)',backgroundColor:CHAR2}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'20px 24px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:16}}>
          {[{s:'20',l:'Questions in the validation checklist'},{s:'5',l:'AI prompt scripts for demand testing'},{s:'8',l:'Sections in the offer builder'},{s:'13',l:'Landing page copy sections generated'}].map(i=>(
            <div key={i.l} style={{textAlign:'center'}}><div style={{fontSize:28,fontWeight:900,color:ORG,fontFamily:'system-ui,sans-serif'}}>{i.s}</div><div style={{fontSize:12,color:G,marginTop:4,fontFamily:'system-ui,sans-serif'}}>{i.l}</div></div>
          ))}
        </div>
      </section>
      <section id="inside" style={{backgroundColor:CHAR2,borderTop:'1px solid rgba(232,93,4,0.06)'}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
          <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>5 Files. 5 Prompts. 1 Complete System.</h2><p style={{color:G,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Everything you need to validate, price, and package your idea — without a single guess.</p></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
            <div>
              {files.map((f,i)=>(
                <div key={f.n} style={{backgroundColor:CHAR,borderRadius:12,padding:20,marginBottom:12,border:'1px solid rgba(232,93,4,0.1)',display:'flex',gap:16,alignItems:'flex-start'}}>
                  <div style={{width:40,height:40,borderRadius:8,backgroundColor:'rgba(232,93,4,0.15)',border:'1px solid rgba(232,93,4,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:ORG,fontSize:14,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>{String(i+1).padStart(2,'0')}</div>
                  <div><div style={{fontWeight:700,fontSize:14,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>{f.n}</div><div style={{color:G,fontSize:12,marginBottom:4,fontFamily:'system-ui,sans-serif'}}>{f.d}</div><div style={{color:ORG,fontSize:11,fontFamily:'system-ui,sans-serif'}}>{f.s}</div></div>
                </div>
              ))}
            </div>
            <div>
              <div style={{backgroundColor:CHAR,borderRadius:16,padding:32,border:'1px solid rgba(232,93,4,0.2)',marginBottom:24}}>
                <div style={{fontSize:13,color:ORG,fontWeight:700,marginBottom:12,fontFamily:'system-ui,sans-serif',letterSpacing:'0.5px',textTransform:'uppercase'}}>The Transformation</div>
                <h3 style={{fontSize:24,fontWeight:900,marginBottom:16}}>Old: Guessing what people want</h3>
                <p style={{color:G2,fontSize:15,lineHeight:1.7,marginBottom:20,fontFamily:'system-ui,sans-serif'}}>You spend 3 months building. Launch. Hear crickets. Realize nobody wanted it the way you built it.</p>
                <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20}}><div style={{width:20,height:2,backgroundColor:CHAR3,flex:1}}/><span style={{color:ORG,fontSize:18}}>→</span><div style={{width:20,height:2,backgroundColor:CHAR3,flex:1}}/></div>
                <h3 style={{fontSize:24,fontWeight:900,marginBottom:16,color:ORG}}>New: AI-backed validation + offer creation</h3>
                <p style={{color:G2,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>You run 5 AI prompts. Score your checklist. Build your offer. Write your landing page copy. 60 minutes. Then you build — with evidence.</p>
              </div>
              {[{l:'Before you code',d:'Validate demand with 5 AI prompt scripts and 20-question checklist'},{l:'Before you launch',d:'Build your offer with the 8-section template — structured, specific, sellable'},{l:'Before you write',d:'Generate all 13 sections of your landing page from your completed offer'}].map(s=>(
                <div key={s.l} style={{display:'flex',gap:12,marginBottom:14,alignItems:'flex-start'}}>
                  <div style={{width:28,height:28,borderRadius:'50%',backgroundColor:ORG,color:W,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0,fontFamily:'system-ui,sans-serif'}}>✓</div>
                  <div><div style={{fontWeight:700,fontSize:14,marginBottom:2,fontFamily:'system-ui,sans-serif'}}>{s.l}</div><div style={{color:G,fontSize:12,lineHeight:1.5,fontFamily:'system-ui,sans-serif'}}>{s.d}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="process" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px',textAlign:'center'}}>
        <h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>From Idea to Validated Offer in 4 Steps</h2>
        <p style={{color:G,fontSize:18,marginBottom:56,fontFamily:'system-ui,sans-serif'}}>No theory. No fluff. Just a production workflow that compresses months into one hour.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:20}}>
          {steps.map(item=>(
            <div key={item.s} style={{backgroundColor:CHAR2,borderRadius:16,padding:28,border:'1px solid rgba(232,93,4,0.12)',textAlign:'center'}}>
              <div style={{fontSize:36,marginBottom:16}}>{item.i}</div>
              <div style={{fontSize:12,color:ORG,fontWeight:700,marginBottom:8,fontFamily:'system-ui,sans-serif'}}>STEP {item.s}</div>
              <h3 style={{fontSize:16,fontWeight:800,marginBottom:10,fontFamily:'system-ui,sans-serif'}}>{item.t}</h3>
              <p style={{color:G,fontSize:13,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{backgroundColor:CHAR2,borderTop:'1px solid rgba(232,93,4,0.06)'}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
          <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:40,fontWeight:900,letterSpacing:'-1px',marginBottom:16}}>What the Kit Does for You</h2><p style={{color:G,fontSize:18,fontFamily:'system-ui,sans-serif'}}>Six capabilities that replace months of guessing with one hour of evidence.</p></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
            {feat.map(f=>(
              <div key={f.t} style={{backgroundColor:CHAR,borderRadius:14,padding:24,border:'1px solid rgba(232,93,4,0.12)'}}>
                <div style={{fontSize:28,marginBottom:12}}>{f.i}</div>
                <h3 style={{fontWeight:800,fontSize:16,marginBottom:8}}>{f.t}</h3>
                <p style={{color:G,fontSize:13,lineHeight:1.6}}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" style={{maxWidth:900,margin:'0 auto',padding:'80px 24px'}}>
        <div style={{textAlign:'center',marginBottom:56}}><h2 style={{fontSize:44,fontWeight:900,letterSpacing:'-1.5px',marginBottom:16}}>One Decision. Two Tiers.</h2><p style={{color:G,fontSize:18,fontFamily:'system-ui,sans-serif'}}>The core system is enough. The complete version is what most people wish they had started with.</p></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,maxWidth:800,margin:'0 auto'}}>
          <div style={{backgroundColor:CHAR2,borderRadius:20,padding:36,border:'1px solid rgba(232,93,4,0.1)'}}>
            <div style={{fontSize:13,color:G,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Starter</div>
            <div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900}}>$27</span><span style={{color:G,fontSize:15}}>one-time</span></div>
            <p style={{color:G,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>The complete validation system. Run it on any idea in 60 minutes.</p>
            <ul style={{listStyle:'none',padding:0,marginBottom:32}}>{starter.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:ORG,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:W}}>{item}</span></li>))}</ul>
            <a href="#" style={{display:'block',textAlign:'center',backgroundColor:'rgba(232,93,4,0.1)',color:ORG,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,border:'1px solid rgba(232,93,4,0.3)',fontFamily:'system-ui,sans-serif'}}>Get the Validation Kit</a>
          </div>
          <div style={{backgroundColor:'#0f0e0d',borderRadius:20,padding:36,border:'2px solid rgba(232,93,4,0.5)',position:'relative',boxShadow:'0 0 50px rgba(232,93,4,0.15)'}}>
            <div style={{position:'absolute',top:-14,left:24,backgroundColor:ORG,color:W,padding:'4px 14px',borderRadius:100,fontWeight:800,fontSize:12,fontFamily:'system-ui,sans-serif'}}>MOST USEFUL</div>
            <div style={{fontSize:13,color:ORG,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:12,fontFamily:'system-ui,sans-serif'}}>Complete</div>
            <div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:20}}><span style={{fontSize:52,fontWeight:900}}>$47</span><span style={{color:G,fontSize:15}}>one-time</span></div>
            <p style={{color:G,fontSize:14,marginBottom:28,lineHeight:1.6,fontFamily:'system-ui,sans-serif'}}>Starter plus all worked examples, bonus niche ideas, and priority support.</p>
            <ul style={{listStyle:'none',padding:0,marginBottom:32}}>{complete.map(item=>(<li key={item} style={{display:'flex',gap:10,marginBottom:12,fontSize:14,alignItems:'flex-start'}}><span style={{color:ORG,flexShrink:0,fontWeight:700}}>✓</span><span style={{color:W}}>{item}</span></li>))}</ul>
            <a href="#" style={{display:'block',textAlign:'center',backgroundColor:ORG,color:W,padding:'14px',borderRadius:10,textDecoration:'none',fontWeight:700,fontSize:15,fontFamily:'system-ui,sans-serif'}}>Get the Complete Kit</a>
          </div>
        </div>
        <p style={{textAlign:'center',color:G,fontSize:13,marginTop:24,fontFamily:'system-ui,sans-serif'}}>Instant download. Files are yours to keep. No subscriptions. No upsells.</p>
      </section>
      <section id="faq" style={{maxWidth:800,margin:'0 auto',padding:'0 24px 80px'}}>
        <div style={{textAlign:'center',marginBottom:48}}><h2 style={{fontSize:40,fontWeight:900}}>Questions. Answered.</h2></div>
        <div>{faqs.map((faq,i)=>(
          <div key={i} style={{borderBottom:'1px solid rgba(232,93,4,0.1)'}}>
            <button onClick={()=>setO(o===i?null:i)} style={{width:'100%',background:'none',border:'none',color:W,padding:'20px 0',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontSize:16,fontWeight:600,textAlign:'left',gap:16,fontFamily:'system-ui,sans-serif'}}>
              {faq.q}<span style={{color:ORG,fontSize:20,flexShrink:0}}>{o===i?'−':'+'}</span>
            </button>
            {o===i&&<div style={{paddingBottom:20,color:G,fontSize:15,lineHeight:1.7,fontFamily:'system-ui,sans-serif'}}>{faq.a}</div>}
          </div>
        ))}</div>
      </section>
      <section style={{backgroundColor:CHAR2,borderTop:'1px solid rgba(232,93,4,0.06)',textAlign:'center',padding:'80px 24px'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <div style={{fontSize:48,marginBottom:20}}>🎯</div>
          <h2 style={{fontSize:40,fontWeight:900,marginBottom:16,letterSpacing:'-1px'}}>Stop Building Ideas.<br/>Start Building Products.</h2>
          <p style={{color:G,fontSize:18,lineHeight:1.6,marginBottom:40,fontFamily:'system-ui,sans-serif'}}>60 minutes. One idea. A validated offer with pricing, copy, and a landing page. No more guessing.</p>
          <a href="#pricing" style={{backgroundColor:ORG,color:W,padding:'16px 40px',borderRadius:12,textDecoration:'none',fontWeight:900,fontSize:18,display:'inline-block',fontFamily:'system-ui,sans-serif'}}>Get Instant Access — From $27</a>
          <p style={{color:G,fontSize:13,marginTop:16}}>One-time purchase. Instant download. No subscriptions.</p>
        </div>
      </section>
      <footer style={{borderTop:'1px solid rgba(232,93,4,0.05)',padding:'24px',textAlign:'center',color:G,fontSize:12,fontFamily:'system-ui,sans-serif'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}><p>2026 AI Microtec. Personal use only. Not for resale.</p><p style={{marginTop:8}}>AI Validation Blueprint — Turn Any Idea Into a Monetizable Product in 1 Hour</p></div>
      </footer>
    </div>
  )
}
