# Tool Stack Breakdown
## The Best Tools for Each Function — Free and Paid Options

**Philosophy:** Use what you already pay for. Only add tools that do one job better than everything else. The goal is a connected system, not the most expensive stack.

---

## THE COMPLETE STACK BY FUNCTION

### 1. CENTRAL OPERATIONS HUB — Notion
**What it does:** Single pane of glass for CRM, projects, content, tasks, and finance tracking
**Free tier:** 10 blocks per page, unlimited pages — enough for a solo business
**Paid:** $8/month for unlimited blocks — worth it once you have 3+ active projects

**Why Notion:** Connects to Zapier natively, has a database structure that replaces 5 separate tools, and can embed Google Sheets, Calendars, and Docs inline.

**Setup:** Create one workspace. Add 5 databases (CRM, Projects, Finance, Content, Tasks). Create a Business Dashboard page that embeds all 5 databases.

**Alternatives:** Airtable (better for complex data, worse for free), Coda (good but fewer integrations), Asana (good for projects, weak for CRM).

---

### 2. AUTOMATION ENGINE — Zapier
**What it does:** Connects your tools and runs your 5 automations without code
**Free tier:** 5 Zaps, 100 tasks/month — enough to build and test all 5 automations
**Paid:** $19.99/month for 20 Zaps, 1000 tasks — the Sweet spot for solo ops

**Zapier vs Make:**
- Zapier: Easier to use, better free tier, most integrations
- Make (Integromat): More powerful logic, better for complex multi-step flows, free tier is generous
- Recommendation: Start with Zapier. Move to Make only if Zapier can't handle a specific automation.

**Alternatives:** Pabbly (cheaper than Zapier, fewer integrations), Workato (enterprise-grade, overkill for solo), native integrations where possible.

---

### 3. LEAD CAPTURE FORM — Tally or Typeform
**What it does:** Beautiful lead forms that feed directly into Zapier
**Free tier:** Tally is free and unlimited — use this
**Paid:** $25/month for Tally Pro (remove Tally branding, custom domain) — optional but looks more professional

**Tally:** Free, unlimited forms, clean design. Embed on Carrd or directly in Notion.

**Alternatives:** Google Forms (free, functional, ugly), Cal.com (free, adds Calendly-style booking), Carrd (free one-pagers, good for embed).

---

### 4. EMAIL SEQUENCES — ConvertKit
**What it does:** Sends automated email sequences to leads and nurtures them into buyers
**Free tier:** 0% on first $1,000 earned — generous for starting out
**Paid:** 5% of revenue earned above $1,000/month — reasonable at scale

**Why ConvertKit:** Built for creators and solo businesses. Clean automation builder. Clean email templates. Best-in-class for "sequence that nurtures leads into buyers."

**Alternatives:** Mailchimp (overkill for solo, cheaper at scale), Beehiiv (better for newsletters, weaker for sales sequences), Systeme.io (all-in-one, but weaker automation).

---

### 5. STRIPE PAYMENTS
**What it does:** Accepts payments and triggers your Finance and Client automations
**Free tier:** 2.9% + 30 cents per transaction — industry standard
**No monthly fee:** You only pay per transaction

**Why Stripe:** Triggers Zapier on payment received. Best integration with Gumroad and Payhip. Accepts every card type and Apple/Google Pay globally.

**Setup:** Connect Stripe account to Zapier via OAuth (takes 2 minutes). All automations use Stripe as the trigger.

---

### 6. FINANCE TRACKING — Google Sheets + Stripe
**What it does:** Automatic income log without a bookkeeper
**Free tier:** Unlimited sheets
**Cost:** Free

**Why Google Sheets over a dedicated app:** Because it connects natively to Zapier, updates in real time, and you can build any view you want. A custom spreadsheet beats most finance apps.

**What to track:** Income only for now (expenses added later as you scale). Monthly summary formula: =SUMIF(Month, "[current month]", Amount).

---

### 7. SOCIAL SCHEDULING — Buffer
**What it does:** Schedules and publishes social content; triggers content automation on publish
**Free tier:** 3 channels, 10 scheduled posts per channel — enough to start
**Paid:** $6/month for 1 channel + 1 user — minimal investment for active posting

**Why Buffer:** Clean interface, triggers Zapier on publish, good analytics, no awkward social media management clutter.

**Alternatives:** Hypefury (great for Twitter/X automation, free tier generous), Later (better for Instagram, weaker analytics), Publer (comprehensive but heavier).

---

### 8. COMMUNICATION — Gmail + Superhuman (Optional)
**What it does:** Email routing and fast response
**Free tier:** Gmail is free
**Paid:** Superhuman $30/month or Spike $7/month — optional but transformative if you handle high email volume

**Why Superhuman:** Read-mode, send-later, and AI-assisted triage make email 3x faster. The segmentation features (Superhuman splits) make lead routing automatic.

**Why not required:** Gmail labels + Zapier routing handles 90% of what Superhuman does for free.

---

### 9. CALENDAR — Calendly or Cal.com
**What it does:** Replaces back-and-forth scheduling; triggers CRM and onboarding automations
**Free tier:** Cal.com is free and open source. Calendly free tier: 1 event type.
**Paid:** Calendly $12/month for unlimited event types

**Why Cal.com:** Free, no branding, same functionality as Calendly. Self-host if you want full control.

**What to use it for:** Booking links on your website for discovery calls and onboarding kickoffs. The booking event triggers CRM updates automatically.

---

## THE MINIMAL STACK (START HERE)

If you are starting from zero and want to build the system with the least investment:

| Function | Tool | Cost |
|---|---|---|
| Operations Hub | Notion | Free |
| Automation Engine | Zapier | Free (5 Zaps) |
| Lead Capture | Tally | Free |
| Email Sequences | ConvertKit | Free (0% until $1k) |
| Payments | Stripe | 2.9% per transaction |
| Finance Tracking | Google Sheets | Free |
| Social Scheduling | Buffer | Free |
| Calendar | Cal.com | Free |
| **Total monthly cost** | | **$0–$15** |

---

## THE POWER STACK (WHEN YOU ARE READY TO SCALE)

| Function | Tool | Cost |
|---|---|---|
| Operations Hub | Notion | $8/month |
| Automation Engine | Zapier Pro | $19.99/month |
| Lead Capture | Tally Pro | $25/month |
| Email Sequences | ConvertKit | 5% of revenue |
| Payments | Stripe | 2.9% per transaction |
| Finance Tracking | Google Sheets | Free |
| Social Scheduling | Buffer Pro | $6/month |
| Calendar | Calendly Pro | $12/month |
| Email (fast) | Superhuman | $30/month |
| **Total monthly cost** | | **~$80–120/month** |

---

## TOOL REPLACEMENT DECISION TREE

**Should I replace a tool I already use?**
Ask these 3 questions:
1. Does the new tool connect to Zapier/Make natively? (If no, keep what you have)
2. Does the new tool do ONE job significantly better than my current solution?
3. Is the monthly cost justified by the time it saves me?

If yes to all 3 — swap it in. If not — keep what you have.

---

*From The AI Operations OS — AI Microtechlink*