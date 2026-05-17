import { useState } from 'react'

const C = '#0f172a'
const C2 = '#1e293b'
const C3 = '#334155'
const CYAN = '#06b6d4'
const CYAN2 = '#0891b2'
const AMBER = '#f59e0b'
const W = '#ffffff'
const GY = '#94a3b8'
const GY2 = '#64748b'
const GY3 = '#cbd5e1'

const files = [
  { name: '01_AI_Workflow_Quickstart.md', size: '8.4 KB', desc: 'System overview, 5 automation types, and setup plan' },
  { name: '02_Zapier_Automation_SOP.md', size: '14.2 KB', desc: 'Step-by-step for building all 5 automations in Zapier' },
  { name: '03_AI_Prompt_Frameworks.md', size: '11.8 KB', desc: '8 AI prompt templates for workflow automation' },
  { name: '04_Notion_Workflow_Tracker.md', size: '9.6 KB', desc: 'Project tracking system built in Notion' },
  { name: '05_Checklist_Review_System.md', size: '7.4 KB', desc: 'Quality control checklist for automated outputs' },
]

const feat = [
  { i: '⚡', t: '5 Workflow Automations', d: 'Email to task, meeting to summary, content to archive, invoice to tracker, report generator.' },
  { i: '🧠', t: '8 AI Prompt Frameworks', d: 'Prompt templates that turn ChatGPT into your automation co-pilot for every workflow.' },
  { i: '📋', t: 'Notion Workflow Tracker', d: 'A live dashboard showing every active workflow, its status, and what needs attention.' },
  { i: '✅', t: 'Automated QA Checklist', d: 'Every automated output gets checked against a 10-point quality checklist automatically.' },
  { i: '🔌', t: 'Zapier-Native Setup', d: 'Built for Zapier. Free tier works. Each automation is a step-by-step visual guide.' },
  { i: '📊', t: 'Weekly Digest Report', d: 'Every Monday: one email with your weeks accomplishments and outstanding tasks.' },
]

const starterItems = ['Quickstart Guide + Workflow Overview', '5 Automation SOPs (step-by-step)', '8 AI Prompt Frameworks', 'Notion Workflow Tracker Template', '48-hour email support']
const completeItems = ['Everything in Starter', 'Pre-built Zapier import bundle (all 5 Zaps)', 'Notion Dashboard Template (import-ready)', 'Weekly Digest Report automation', 'Priority 24h support']
const faqs = [
  { q: 'Do I need to know how to code?', a: 'No. All automations are built in Zapier using no-code triggers and actions. The AI prompt frameworks work in ChatGPT or Claude — just copy and paste.' },
  { q: 'Do I need a paid Zapier account?', a: 'The free Zapier tier (100 tasks/month) covers 4 of the 5 automations. The Weekly Digest automation requires Zapier Pro ($20/month). Start free, upgrade when you need it.' },
  { q: 'What AI models does this work with?', a: 'All prompt frameworks work with ChatGPT, Claude, and Gemini. No special API required — just a free ChatGPT account.' },
  { q: 'How is this delivered?', a: 'Instant digital download. You get a ZIP with all 5 files and a link to the Notion template. No physical product.' },
  { q: 'Is there a refund?', a: 'Digital products are non-refundable once downloaded. If files are corrupted, contact us and we will resolve it immediately.' },
  { q: 'Can I resell this kit?', a: 'No. This is licensed for personal use only. You may not resell, redistribute, or sublicense this product in any form.' },
]

export default function App() {
  const [o, setO] = useState<number | null>(null)
  return (
    <div style={{ background: C, color: W, fontFamily: 'Georgia, serif', minHeight: '100vh' }}>
      <nav style={{ background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(6,182,212,0.12)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg,#06b6d4,#0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>⚡</div>
            <span style={{ fontWeight: 700, fontSize: 18 }}>AI Workflow Kit <span style={{ color: CYAN }}>AI</span></span>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {[['Inside', 'inside'], ['How It Works', 'how-it-works'], ['Pricing', 'pricing'], ['FAQ', 'faq']].map(([l, id]) => (
              <a key={l} href={'#' + id} style={{ color: GY, textDecoration: 'none', fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>{l}</a>
            ))}
            <a href="#pricing" style={{ background: CYAN, color: W, padding: '8px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>Get the Kit</a>
          </div>
        </div>
      </nav>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: 100, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ fontSize: 14, color: CYAN, fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}>⚡ 5 Automations. Infinite Leverage.</span>
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 20 }}>Your Workflows,<br/><span style={{ color: CYAN }}>Running Themselves.</span></h1>
          <p style={{ fontSize: 19, color: GY, lineHeight: 1.7, marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>5 pre-built automations that turn scattered tasks into a connected system. Email to task. Meeting to summary. Content to archive. Invoices to tracker.</p>
          <p style={{ fontSize: 14, color: GY2, marginBottom: 36, fontFamily: 'system-ui, sans-serif' }}>For professionals who are done doing manually what should be automatic.</p>
          <a href="#pricing" style={{ background: CYAN, color: W, padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 16, display: 'inline-block', boxShadow: '0 4px 20px rgba(6,182,212,0.3)' }}>Get Instant Access — From $27</a>
          <div style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
            {['5 workflow automations', '8 AI prompt templates', 'Notion workflow dashboard', 'Free + paid Zapier setup'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ color: CYAN, fontSize: 13 }}>✓</span><span style={{ color: GY, fontSize: 13, fontFamily: 'system-ui, sans-serif' }}>{b}</span></div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: C2, borderRadius: 20, padding: 28, border: '1px solid rgba(6,182,212,0.2)', boxShadow: '0 8px 40px rgba(6,182,212,0.1)' }}>
          <div style={{ marginBottom: 16, fontSize: 13, color: CYAN, fontWeight: 700, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.5px' }}>THE 5 AUTOMATIONS</div>
          {[{ n: '#1', t: 'Email → Task', d: 'New email detected → task created in Notion → you get a notification. No more follow-up slip-through.' },
            { n: '#2', t: 'Meeting → Summary', d: 'Calendar event ends → AI generates summary → sent to Notion + email to you. Meeting notes you actually read.' },
            { n: '#3', t: 'Content → Archive', d: 'Content published → logged to Notion with date, platform, and link. Your content library stays clean automatically.' },
            { n: '#4', t: 'Invoice → Tracker', d: 'Invoice email received → amount and vendor extracted → logged to finance tracker. No manual data entry.' },
            { n: '#5', t: 'Weekly Report', d: 'Every Monday 8am → Zapier pulls your weeks tasks → formats a digest → emails it to you. You start the week informed.' }].map(p => (
            <div key={p.n} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: CYAN, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 11, color: W, flexShrink: 0, fontFamily: 'system-ui, sans-serif' }}>{p.n}</div>
              <div style={{ flex: 1, paddingBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2, color: W, fontFamily: 'system-ui, sans-serif' }}>{p.t}</div>
                <div style={{ fontSize: 12, color: GY, lineHeight: 1.5, fontFamily: 'system-ui, sans-serif' }}>{p.d}</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 14, backgroundColor: 'rgba(6,182,212,0.08)', borderRadius: 8, padding: '10px 14px', border: '1px solid rgba(6,182,212,0.2)' }}>
            <div style={{ fontSize: 12, color: CYAN, fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}>All connected to Notion</div>
            <div style={{ fontSize: 12, color: GY2, fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>One dashboard. Your entire work visible at a glance.</div>
          </div>
        </div>
      </section>
      <section style={{ borderTop: '1px solid rgba(6,182,212,0.08)', borderBottom: '1px solid rgba(6,182,212,0.08)', backgroundColor: C2 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 16 }}>
          {[{ s: '5', l: 'Core automations' }, { s: '8', l: 'AI prompt templates' }, { s: '45min', l: 'Full setup time' }, { s: 'Free', l: 'Zapier tier available' }].map(i => (
            <div key={i.l} style={{ textAlign: 'center' }}><div style={{ fontSize: 28, fontWeight: 900, color: CYAN, fontFamily: 'system-ui, sans-serif' }}>{i.s}</div><div style={{ fontSize: 12, color: GY, marginTop: 4, fontFamily: 'system-ui, sans-serif' }}>{i.l}</div></div>
          ))}
        </div>
      </section>
      <section id="inside" style={{ backgroundColor: C2, borderTop: '1px solid rgba(6,182,212,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}><h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, letterSpacing: '-1px' }}>5 Files. 5 Automations. Zero Friction.</h2><p style={{ color: GY, fontSize: 18, fontFamily: 'system-ui, sans-serif' }}>Everything you need to automate your work and stop doing manually what should run itself.</p></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              {files.map((f, i) => (
                <div key={f.name} style={{ backgroundColor: C, borderRadius: 12, padding: 20, marginBottom: 12, border: '1px solid rgba(6,182,212,0.08)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: CYAN, fontSize: 14, flexShrink: 0, fontFamily: 'system-ui, sans-serif' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div><div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, fontFamily: 'system-ui, sans-serif', color: W }}>{f.name}</div><div style={{ color: GY, fontSize: 12, marginBottom: 4, fontFamily: 'system-ui, sans-serif' }}>{f.desc}</div><div style={{ color: CYAN, fontSize: 11, fontFamily: 'system-ui, sans-serif' }}>{f.size}</div></div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: 'linear-gradient(135deg,#1e293b,#0f172a)', borderRadius: 16, padding: 32, border: '1px solid rgba(6,182,212,0.25)', marginBottom: 24 }}>
                <div style={{ fontSize: 13, color: CYAN, fontWeight: 700, marginBottom: 12, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase' }}>The Transformation</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16, color: GY }}>Old: Manual task management</h3>
                <p style={{ color: GY2, fontSize: 15, lineHeight: 1.7, marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>You manually create tasks from emails. You take your own meeting notes. You update your Notion every week when you remember. Things slip through. Work doesn't get logged.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}><div style={{ flex: 1, height: 1, backgroundColor: 'rgba(6,182,212,0.3)' }} /><span style={{ color: CYAN, fontSize: 18 }}>→</span><div style={{ flex: 1, height: 1, backgroundColor: 'rgba(6,182,212,0.3)' }} /></div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: CYAN }}>New: Everything automated and logged</h3>
                <p style={{ color: GY2, fontSize: 15, lineHeight: 1.7, fontFamily: 'system-ui, sans-serif' }}>Email arrives → task created automatically. Meeting ends → summary generated and logged. Content published → archived with date and link. Your work logs itself.</p>
              </div>
              <div style={{ backgroundColor: C, borderRadius: 12, padding: 20, border: '1px solid rgba(6,182,212,0.1)' }}>
                <div style={{ fontSize: 13, color: CYAN, fontWeight: 700, marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>MORNING ROUTINE — 60 SECONDS</div>
                <p style={{ color: GY, fontSize: 14, lineHeight: 1.7, fontFamily: 'system-ui, sans-serif' }}>Open your Notion Workflow Dashboard. New tasks from emails? Meeting summaries from last week? Content published? Done. You are now informed for the day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, letterSpacing: '-1px' }}>How the Automation System Works</h2>
        <p style={{ color: GY, fontSize: 18, marginBottom: 56, fontFamily: 'system-ui, sans-serif' }}>Five triggers. Five actions. All running in the background of your work.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {[{ n: '01', t: 'Trigger', d: 'Something happens in your tools — an email arrives, a meeting ends, content goes live.' }, { n: '02', t: 'Filter', d: 'Zapier checks the conditions. Is it the right type? The right time? Is it for the right project?' }, { n: '03', t: 'Action', d: 'If conditions are met, Zapier does the work: create a task, log a note, send a summary.' }].map(s => (
            <div key={s.n} style={{ backgroundColor: C2, borderRadius: 16, padding: 28, border: '1px solid rgba(6,182,212,0.1)', textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: CYAN, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: W, margin: '0 auto 16px', fontFamily: 'system-ui, sans-serif' }}>{s.n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, fontFamily: 'system-ui, sans-serif', color: W }}>{s.t}</h3>
              <p style={{ color: GY, fontSize: 14, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ backgroundColor: C2, borderTop: '1px solid rgba(6,182,212,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}><h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>What the System Does for You</h2><p style={{ color: GY, fontSize: 18, fontFamily: 'system-ui, sans-serif' }}>Six capabilities that replace manual work with automated systems.</p></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {feat.map(f => (
              <div key={f.t} style={{ backgroundColor: C, borderRadius: 14, padding: 24, border: '1px solid rgba(6,182,212,0.1)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.i}</div>
                <h3 style={{ fontWeight: 800, fontSize: 15, marginBottom: 8, color: W }}>{f.t}</h3>
                <p style={{ color: GY, fontSize: 13, lineHeight: 1.6 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}><h2 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 16 }}>One System. Two Tiers.</h2><p style={{ color: GY, fontSize: 18, fontFamily: 'system-ui, sans-serif' }}>Build it in 45 minutes. Run it for the lifetime of your business.</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 800, margin: '0 auto' }}>
          <div style={{ backgroundColor: C2, borderRadius: 20, padding: 36, border: '1px solid rgba(6,182,212,0.15)' }}>
            <div style={{ fontSize: 13, color: GY, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>Starter</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}><span style={{ fontSize: 52, fontWeight: 900 }}>$27</span><span style={{ color: GY, fontSize: 15 }}>one-time</span></div>
            <p style={{ color: GY, fontSize: 14, marginBottom: 28, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>The complete AI Workflow Kit. 5 automation SOPs, 8 AI prompt frameworks, and the Notion Workflow Tracker template.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>{starterItems.map(item => (<li key={item} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 14, alignItems: 'flex-start' }}><span style={{ color: CYAN, flexShrink: 0, fontWeight: 700 }}>✓</span><span style={{ color: W }}>{item}</span></li>))}</ul>
            <a href="#" style={{ display: 'block', textAlign: 'center', backgroundColor: 'rgba(6,182,212,0.1)', color: CYAN, padding: '14px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15, border: '1px solid rgba(6,182,212,0.25)', fontFamily: 'system-ui, sans-serif' }}>Get the Workflow Kit</a>
          </div>
          <div style={{ backgroundColor: 'rgba(6,182,212,0.06)', borderRadius: 20, padding: 36, border: '2px solid rgba(6,182,212,0.4)', position: 'relative', boxShadow: '0 8px 40px rgba(6,182,212,0.15)' }}>
            <div style={{ position: 'absolute', top: -14, left: 24, backgroundColor: CYAN, color: W, padding: '4px 14px', borderRadius: 100, fontWeight: 800, fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>COMPLETE SYSTEM</div>
            <div style={{ fontSize: 13, color: CYAN, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>Complete</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}><span style={{ fontSize: 52, fontWeight: 900, color: W }}>$47</span><span style={{ color: GY2, fontSize: 15 }}>one-time</span></div>
            <p style={{ color: GY2, fontSize: 14, marginBottom: 28, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>Starter plus the Zapier import bundle, Notion template, and the Weekly Digest automation.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>{completeItems.map(item => (<li key={item} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 14, alignItems: 'flex-start' }}><span style={{ color: CYAN, flexShrink: 0, fontWeight: 700 }}>✓</span><span style={{ color: W }}>{item}</span></li>))}</ul>
            <a href="#" style={{ display: 'block', textAlign: 'center', backgroundColor: CYAN, color: W, padding: '14px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15, fontFamily: 'system-ui, sans-serif' }}>Get the Complete System</a>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: GY, fontSize: 13, marginTop: 24, fontFamily: 'system-ui, sans-serif' }}>Instant download. Files are yours to keep. No subscriptions.</p>
      </section>
      <section id="faq" style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}><h2 style={{ fontSize: 40, fontWeight: 900 }}>Questions. Answered.</h2></div>
        <div>{faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(6,182,212,0.1)' }}>
            <button onClick={() => setO(o === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', color: W, padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: 16, fontWeight: 600, textAlign: 'left', gap: 16, fontFamily: 'system-ui, sans-serif' }}>
              {faq.q}<span style={{ color: CYAN, fontSize: 20, flexShrink: 0 }}>{o === i ? '−' : '+'}</span>
            </button>
            {o === i && <div style={{ paddingBottom: 20, color: GY, fontSize: 15, lineHeight: 1.7, fontFamily: 'system-ui, sans-serif' }}>{faq.a}</div>}
          </div>
        ))}</div>
      </section>
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)', borderTop: '1px solid rgba(6,182,212,0.06)', textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>⚡</div>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, letterSpacing: '-1px', color: W }}>Your First Workflow,<br />Running Automatically.</h2>
          <p style={{ color: GY, fontSize: 18, lineHeight: 1.6, marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>45-minute setup. Then your workflows run themselves — email to task, meeting to summary, content to archive.</p>
          <a href="#pricing" style={{ backgroundColor: CYAN, color: W, padding: '16px 40px', borderRadius: 12, textDecoration: 'none', fontWeight: 900, fontSize: 18, display: 'inline-block', fontFamily: 'system-ui, sans-serif', boxShadow: '0 4px 30px rgba(6,182,212,0.35)' }}>Get Instant Access — From $27</a>
          <p style={{ color: GY2, fontSize: 13, marginTop: 16 }}>One-time purchase. Instant download. No subscriptions.</p>
        </div>
      </section>
      <footer style={{ borderTop: '1px solid rgba(6,182,212,0.05)', padding: '24px', textAlign: 'center', color: GY, fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}><p>2026 AI Microtec. Personal use only. Not for resale.</p><p style={{ marginTop: 8 }}>AI Workflow Kit — 5 Automations for a Smarter Workday</p></div>
      </footer>
    </div>
  )
}
