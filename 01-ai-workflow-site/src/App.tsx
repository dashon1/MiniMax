import { useState } from 'react'

const GREEN = '#16a34a'
const GREEN_DARK = '#14532d'
const AMBER = '#f59e0b'
const DARK = '#0a120a'
const DARK2 = '#111a11'
const DARK3 = '#162016'
const WHITE = '#ffffff'
const GRAY = '#86efac'
const GRAY2 = '#6b7280'

const files = [
  { name: '01_Inbox_Zero_Quickstart_Guide.md', size: '11.7 KB', desc: 'The complete setup manual plus daily routine guide' },
  { name: '02_Gmail_AI_Automation_SOP.md', size: '10.2 KB', desc: 'Step-by-step for building all 4 automations in Zapier' },
  { name: '03_Prompt_Pack.md', size: '12.5 KB', desc: '24 prompts across 4 categories: drafting, triage, routing, follow-ups' },
  { name: '04_Labeling_Routing_System.md', size: '9.8 KB', desc: '12-label architecture, auto-filters, and priority inbox setup' },
  { name: '05_Email_Templates.md', size: '18.4 KB', desc: '47 templates: acknowledgment, scheduling, follow-up, decline, status' },
]

const features = [
  { icon: '📬', title: 'Auto-Triage Labels', desc: 'Every email scored P1-P4 before you open your inbox. AI reads it, routes it, you decide.' },
  { icon: '✍️', title: 'Auto-Draft Replies', desc: 'Routine emails get a reply draft created. Review for 30 seconds, hit send.' },
  { icon: '⭐', title: 'VIP Escalation', desc: 'High-value senders get immediate priority treatment. No important emails buried.' },
  { icon: '📋', title: 'Daily Briefings', desc: 'Two times a day: one email that replaces your entire inbox scan. 8am and 5pm.' },
  { icon: '🏷️', title: '12-Label System', desc: 'Complete label architecture. Color-coded. Visual scanning. Works with or without AI.' },
  { icon: '🔗', title: 'Works With Gmail + Zapier', desc: 'Free Zapier tier is enough. OpenAI API key required. No other tools needed.' },
]

const starterItems = ['Quickstart Guide (11-page)', 'Gmail AI Automation SOP (all 4 automations)', '24-Prompt Pack (4 categories)', '12-Label Architecture and Auto-Filters', 'Morning plus Evening Digest automation', '48-hour email support']

const completeItems = ['Everything in Starter', '47 Done-for-You Email Templates', 'Escalation Routing system', 'VIP sender configuration guide', 'Priority notification routing', '72-hour phone support']

const faqs = [
  { q: 'How long does setup take?', a: '45 minutes for the full system. Auto-triage and auto-draft alone take about 30 minutes. You can start with just one automation and add the rest over time.' },
  { q: 'Do I need a paid Zapier account?', a: 'The free Zapier tier (100 tasks/month) covers auto-draft and daily digest. Auto-triage uses more tasks. Upgrade to paid ($20/month) if you want all 4 automations running continuously.' },
  { q: 'Will AI send emails without my review?', a: 'No. All drafts are created in your Gmail drafts folder. You review and press send. Only you can authorize an outbound email. This is intentional.' },
  { q: 'What happens to my emails?', a: 'Emails stay in your Gmail. The AI reads metadata (sender, subject, snippet) and content to make routing decisions. No emails are stored anywhere else.' },
  { q: 'Does this work with other email providers?', a: 'This kit is built for Gmail specifically. Outlook and Yahoo versions of the same automations are possible but require slightly different Zapier triggers.' },
  { q: 'Is there a refund?', a: 'Digital products are non-refundable once downloaded. If files are corrupted, contact us and we will resolve it immediately.' },
]

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ backgroundColor: DARK, color: WHITE, fontFamily: 'Georgia, serif', minHeight: '100vh' }}>

      <nav style={{ backgroundColor: 'rgba(10,18,10,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(22,163,74,0.15)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📬</div>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Inbox Zero <span style={{ color: GREEN }}>AI</span></span>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {['Inside', 'How It Works', 'Pricing', 'FAQ'].map(link => (
              <a key={link} href={'#' + link.toLowerCase().replace(/\s/g, '-')} style={{ color: GRAY2, textDecoration: 'none', fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>{link}</a>
            ))}
            <a href="#pricing" style={{ backgroundColor: GREEN, color: WHITE, padding: '8px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>Get the Kit</a>
          </div>
        </div>
      </nav>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.3)', borderRadius: 100, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ fontSize: 14, color: GREEN, fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}>📬 Gmail + AI Automation</span>
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 20 }}>
            Inbox Zero, <span style={{ color: GREEN }}>Every Single Day.</span>
          </h1>
          <p style={{ fontSize: 19, color: GRAY2, lineHeight: 1.7, marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>
            AI triages every email. AI drafts your replies. You review and send. Your inbox becomes a priority system instead of a to-do list.
          </p>
          <p style={{ fontSize: 14, color: GRAY2, marginBottom: 36, fontFamily: 'system-ui, sans-serif' }}>
            For professionals who want to spend 15 minutes on email instead of 2.5 hours.
          </p>
          <a href="#pricing" style={{ backgroundColor: GREEN, color: WHITE, padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 16, display: 'inline-block' }}>
            Get Instant Access — From $27
          </a>
          <div style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
            {['45-min setup', '4 automations', '24 AI prompts', '47 templates'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: GREEN, fontSize: 13 }}>✓</span>
                <span style={{ color: GRAY2, fontSize: 13, fontFamily: 'system-ui, sans-serif' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: DARK2, borderRadius: 20, padding: 28, border: '1px solid rgba(22,163,74,0.25)', boxShadow: '0 0 80px rgba(22,163,74,0.1)' }}>
          <div style={{ marginBottom: 16, fontSize: 13, color: GREEN, fontWeight: 700, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.5px' }}>YOUR MORNING BRIEFING — TODAY</div>
          {[
            { label: 'P1 URGENT', color: '#ef4444', from: 'Sarah Chen — Invoice question', action: 'Reply today' },
            { label: 'P2 IMPORTANT', color: AMBER, from: 'Follow-ups needed', action: 'Handle by noon' },
            { label: 'P3 ROUTINE', color: '#22c55e', from: 'Newsletters + updates', action: 'Batch at 5pm' },
          ].map(p => (
            <div key={p.label} style={{ backgroundColor: DARK3, borderRadius: 10, padding: '12px 16px', marginBottom: 10, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: p.color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: p.color, fontWeight: 700, fontFamily: 'system-ui, sans-serif' }}>{p.label}</div>
                <div style={{ fontSize: 12, color: GRAY2, fontFamily: 'system-ui, sans-serif' }}>{p.from}</div>
              </div>
              <div style={{ fontSize: 11, color: GRAY2, fontFamily: 'system-ui, sans-serif' }}>{p.action}</div>
            </div>
          ))}
          <div style={{ backgroundColor: GREEN_DARK, borderRadius: 8, padding: '12px 16px', border: '1px solid rgba(22,163,74,0.3)' }}>
            <div style={{ fontSize: 12, color: GREEN, fontWeight: 600, marginBottom: 4, fontFamily: 'system-ui, sans-serif' }}>AI has drafted replies for P2 emails</div>
            <div style={{ fontSize: 12, color: GRAY2, fontFamily: 'system-ui, sans-serif' }}>3 drafts ready in your Gmail — review and send</div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid rgba(22,163,74,0.08)', borderBottom: '1px solid rgba(22,163,74,0.08)', backgroundColor: DARK2 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 16 }}>
          {[{ stat: '2.5 hrs', label: 'Average daily email time before AI' }, { stat: '15 min', label: 'Daily email time with this system' }, { stat: '47', label: 'Pre-written email templates included' }, { stat: '24', label: 'Copy-paste AI prompts ready to run' }].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: GREEN, fontFamily: 'system-ui, sans-serif' }}>{item.stat}</div>
              <div style={{ fontSize: 12, color: GRAY2, marginTop: 4, fontFamily: 'system-ui, sans-serif' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 850, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 38, fontWeight: 900, marginBottom: 24, letterSpacing: '-0.5px' }}>Your Inbox Is a Prison. Every Email Is an Interruption.</h2>
        <p style={{ color: GRAY2, fontSize: 17, lineHeight: 1.7, marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>80 emails a day. Every one requires a decision. Read it? Reply to it? File it? The mental load never stops. And the important ones get buried under the noise.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, textAlign: 'left' }}>
          {[{ emoji: '😩', text: 'You check email first thing and lose 90 minutes before work starts' }, { emoji: '📉', text: 'Important messages from clients buried under 40 newsletters' }, { emoji: '⏰', text: 'You batch-process at 11pm because you could never keep up during the day' }, { emoji: '🔁', text: 'You write the same types of responses 30 times a week' }].map(item => (
            <div key={item.text} style={{ backgroundColor: DARK2, borderRadius: 12, padding: 20, border: '1px solid rgba(22,163,74,0.1)' }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{item.emoji}</div>
              <div style={{ color: GRAY2, fontSize: 14, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>{item.text}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, backgroundColor: GREEN_DARK, borderRadius: 16, padding: '28px', border: '1px solid rgba(22,163,74,0.3)' }}>
          <p style={{ fontSize: 20, color: WHITE, fontWeight: 700, marginBottom: 8, fontFamily: 'system-ui, sans-serif' }}>The fix: Split the funnel. Let AI handle triage and drafting.</p>
          <p style={{ color: GRAY, fontSize: 16, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>AI reads every email. AI labels it by priority. AI drafts a reply. You review for 30 seconds and hit send. Inbox Zero every day, starting today.</p>
        </div>
      </section>

      <section id="inside" style={{ backgroundColor: DARK2, borderTop: '1px solid rgba(22,163,74,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, letterSpacing: '-1px' }}>5 Files. 24 Prompts. 4 Automations.</h2>
            <p style={{ color: GRAY2, fontSize: 18, fontFamily: 'system-ui, sans-serif' }}>Everything you need to build and run your AI-powered inbox.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              {files.map((file, i) => (
                <div key={file.name} style={{ backgroundColor: DARK, borderRadius: 12, padding: 20, marginBottom: 12, border: '1px solid rgba(22,163,74,0.1)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: GREEN, fontSize: 14, flexShrink: 0, fontFamily: 'system-ui, sans-serif' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, fontFamily: 'system-ui, sans-serif' }}>{file.name}</div>
                    <div style={{ color: GRAY2, fontSize: 12, marginBottom: 4, fontFamily: 'system-ui, sans-serif' }}>{file.desc}</div>
                    <div style={{ color: GREEN, fontSize: 11, fontFamily: 'system-ui, sans-serif' }}>{file.size}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ backgroundColor: DARK, borderRadius: 16, padding: 32, border: '1px solid rgba(22,163,74,0.2)', marginBottom: 24 }}>
                <div style={{ fontSize: 13, color: GREEN, fontWeight: 700, marginBottom: 12, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase' }}>How It Works</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Your AI inbox in 4 systems</h3>
                <p style={{ color: GRAY2, fontSize: 15, lineHeight: 1.7, marginBottom: 20, fontFamily: 'system-ui, sans-serif' }}>The kit builds 4 automations that work together as a complete inbox management system. Start with one, add the rest whenever you are ready.</p>
                {[{ num: '1', name: 'Auto-Triage', desc: 'AI reads every email, scores it P1-P4, applies labels. You scan priorities in 60 seconds.' }, { num: '2', name: 'Auto-Draft', desc: 'P2 emails get a reply draft created automatically. You review, edit, send.' }, { num: '3', name: 'Escalation Routing', desc: 'VIP emails get starred and surfaced immediately. Important never gets buried.' }, { num: '4', name: 'Daily Digest', desc: 'Morning and evening briefings compile everything you need to know. No inbox scanning.' }].map(step => (
                  <div key={step.num} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: GREEN, color: WHITE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0, fontFamily: 'system-ui, sans-serif' }}>{step.num}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2, fontFamily: 'system-ui, sans-serif' }}>{step.name}</div>
                      <div style={{ color: GRAY2, fontSize: 12, lineHeight: 1.5, fontFamily: 'system-ui, sans-serif' }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: GREEN_DARK, borderRadius: 16, padding: 24, border: '1px solid rgba(22,163,74,0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>💡</span>
                  <span style={{ fontWeight: 800, fontSize: 15, fontFamily: 'system-ui, sans-serif' }}>Works with what you already have</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Gmail', 'Zapier (free tier)', 'OpenAI API', 'Google Sheets', 'Notion'].map(tool => (
                    <span key={tool} style={{ backgroundColor: DARK, borderRadius: 6, padding: '4px 10px', fontSize: 12, color: GRAY2, border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'system-ui, sans-serif' }}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, letterSpacing: '-1px' }}>From Download to Inbox Zero in 45 Minutes</h2>
        <p style={{ color: GRAY2, fontSize: 18, marginBottom: 56, fontFamily: 'system-ui, sans-serif' }}>No technical knowledge required. If you can use Gmail, you can build this.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {[{ step: '01', title: 'Read the SOP', desc: 'The step-by-step guide tells you exactly which buttons to click. Open Zapier, follow the steps, build your first automation.', icon: '📋' }, { step: '02', title: 'Paste the Prompts', desc: 'Copy the 24 prompts from the Prompt Pack. Paste them into Zapier. The AI does the rest.', icon: '🧠' }, { step: '03', title: 'Set Your Labels', desc: 'Apply the 12-label system to Gmail. The visual scanning makes your inbox readable in seconds, not minutes.', icon: '🏷️' }].map(item => (
            <div key={item.step} style={{ backgroundColor: DARK2, borderRadius: 16, padding: 32, border: '1px solid rgba(22,163,74,0.1)', textAlign: 'left' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontSize: 12, color: GREEN, fontWeight: 700, marginBottom: 8, fontFamily: 'system-ui, sans-serif' }}>STEP {item.step}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ color: GRAY2, fontSize: 14, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: DARK2, borderTop: '1px solid rgba(22,163,74,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>What the System Does</h2>
            <p style={{ color: GRAY2, fontSize: 18, fontFamily: 'system-ui, sans-serif' }}>Six capabilities that turn your inbox from chaos to clarity.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {features.map(f => (
              <div key={f.title} style={{ backgroundColor: DARK, borderRadius: 14, padding: 24, border: '1px solid rgba(22,163,74,0.15)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: GRAY2, fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 16 }}>Two Tiers, One Decision</h2>
          <p style={{ color: GRAY2, fontSize: 18, fontFamily: 'system-ui, sans-serif' }}>Start with the foundations, upgrade when you are ready.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 800, margin: '0 auto' }}>
          <div style={{ backgroundColor: DARK2, borderRadius: 20, padding: 36, border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: 13, color: GRAY2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>Starter</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
              <span style={{ fontSize: 52, fontWeight: 900 }}>$27</span>
              <span style={{ color: GRAY2, fontSize: 15 }}>one-time</span>
            </div>
            <p style={{ color: GRAY2, fontSize: 14, marginBottom: 28, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>The complete system. Build all 4 automations and have AI handling your inbox.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
              {starterItems.map(item => (
                <li key={item} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: GREEN, flexShrink: 0, fontWeight: 700 }}>✓</span>
                  <span style={{ color: WHITE }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#" style={{ display: 'block', textAlign: 'center', backgroundColor: 'rgba(22,163,74,0.1)', color: GREEN, padding: '14px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15, border: '1px solid rgba(22,163,74,0.3)', fontFamily: 'system-ui, sans-serif' }}>
              Download the Starter Kit
            </a>
          </div>
          <div style={{ backgroundColor: DARK, borderRadius: 20, padding: 36, border: '2px solid rgba(22,163,74,0.6)', position: 'relative', boxShadow: '0 0 50px rgba(22,163,74,0.12)' }}>
            <div style={{ position: 'absolute', top: -14, left: 24, backgroundColor: GREEN, color: WHITE, padding: '4px 14px', borderRadius: 100, fontWeight: 800, fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>
              MOST POPULAR
            </div>
            <div style={{ fontSize: 13, color: GREEN, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>Complete</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
              <span style={{ fontSize: 52, fontWeight: 900 }}>$47</span>
              <span style={{ color: GRAY2, fontSize: 15 }}>one-time</span>
            </div>
            <p style={{ color: GRAY2, fontSize: 14, marginBottom: 28, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>Everything in Starter plus the 47-template library and escalation routing.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
              {completeItems.map(item => (
                <li key={item} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: GREEN, flexShrink: 0, fontWeight: 700 }}>✓</span>
                  <span style={{ color: WHITE }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#" style={{ display: 'block', textAlign: 'center', backgroundColor: GREEN, color: WHITE, padding: '14px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, fontFamily: 'system-ui, sans-serif' }}>
              Get the Complete Kit
            </a>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: GRAY2, fontSize: 13, marginTop: 24, fontFamily: 'system-ui, sans-serif' }}>Instant download. Files are yours to keep. No subscriptions.</p>
      </section>

      <section id="faq" style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900 }}>Questions? Answered.</h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(22,163,74,0.1)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', color: WHITE, padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: 16, fontWeight: 600, textAlign: 'left', gap: 16, fontFamily: 'system-ui, sans-serif' }}>
                {faq.q}
                <span style={{ color: GREEN, fontSize: 20, flexShrink: 0 }}>{openFaq === i ? '-' : '+'}</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: 20, color: GRAY2, fontSize: 15, lineHeight: 1.7, fontFamily: 'system-ui, sans-serif' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: DARK2, borderTop: '1px solid rgba(22,163,74,0.06)', textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>📬</div>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, letterSpacing: '-1px' }}>Your Inbox Is Waiting.<br />Let us Fix It.</h2>
          <p style={{ color: GRAY2, fontSize: 18, lineHeight: 1.6, marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>
            Download the kit. Follow the SOP. Build your first automation in 45 minutes. Wake up tomorrow with a clean inbox.
          </p>
          <a href="#pricing" style={{ backgroundColor: GREEN, color: WHITE, padding: '16px 40px', borderRadius: 12, textDecoration: 'none', fontWeight: 900, fontSize: 18, display: 'inline-block', fontFamily: 'system-ui, sans-serif' }}>
            Get Instant Access — From $27
          </a>
          <p style={{ color: GRAY2, fontSize: 13, marginTop: 16 }}>One-time purchase. Instant download. No subscriptions.</p>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(22,163,74,0.05)', padding: '24px', textAlign: 'center', color: GRAY2, fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p>2026 AI Microtec. Personal use only. Not for resale.</p>
          <p style={{ marginTop: 8 }}>Inbox Zero AI System — Gmail + GPT Automation Kit</p>
        </div>
      </footer>

    </div>
  )
}
