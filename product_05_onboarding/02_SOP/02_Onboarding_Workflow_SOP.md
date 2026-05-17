# Client Onboarding Workflow SOP
## The Step-by-Step System for Setting Up Your Automated Onboarding Pipeline

**Setup time: 45–60 minutes | Est. time to onboard 1 client after: 0 minutes**

---

## BEFORE YOU START

**What you need set up first:**
- Zapier or Make account (free tier is sufficient)
- Notion account (free personal tier works)
- Gmail account (your business email)
- Google Calendar (for scheduling)
- An intake form tool (Google Forms is free — use Carrd for a branded look)

**Your current onboarding steps (fill this before building):**
What happens today when a client signs? List each step in order:
1. `___________________________________`
2. `___________________________________`
3. `___________________________________`
4. `___________________________________`
5. `___________________________________`

The automated version replaces ALL of these with a system that runs without you touching it.

---

## PHASE 1 — SET UP YOUR INTAKE FORM (15 minutes)

**The intake form is the entry point for your entire automated onboarding system.**

**What to collect (minimum viable set):**
- Full name + company name
- Email address (pre-filled from contract)
- Best phone/Zoom link (Calendly URL is ideal)
- Project type / what they're hiring you for
- Preferred communication style
- Key goals for the first 30 days
- Any access they need to give you (logins, shared drives, etc.)
- How they found you / referral source

**Set up your form at:**
`___________________________________` (Google Forms, Tally, or Carrd form URL)

**Tip:** Keep it to 8–10 questions maximum. Longer forms kill completion rates.

**Zap to build:** When form is submitted → create Notion CRM contact

---

## PHASE 2 — SET UP YOUR NOTION CRM (20 minutes)

**Create a new Notion database called "Clients" with these properties:**

| Property | Type | Notes |
|---|---|---|
| Client Name | Title | Full name or company |
| Email | Email | Primary contact |
| Status | Select | Intake / Active / Complete / Paused |
| Start Date | Date | Contract start date |
| Intake Form | URL | Link to their form response |
| Project Type | Select | Service or product they've bought |
| Next Step | Text | What happens next |
| Next Step Due | Date | Deadline for next action |
| Kickoff Call | Date | Scheduled kickoff date/time |
| Billing Status | Select | Deposit paid / Invoice pending / Paid |

**Create these views:**
1. **All Active Clients** — filtered by Status = Active
2. **This Week's Kickoffs** — calendar view by Kickoff Call
3. **Overdue Actions** — filtered by Next Step Due in the past
4. **New Leads** — filtered by Status = Intake

**Zap to build:** Intake form submitted → Notion CRM page created with all fields populated

---

## PHASE 3 — BUILD YOUR AUTOMATIONS (25 minutes)

**Automation 1: Intake Form → CRM**
- Trigger: Form submitted (Typeform, Google Forms, Tally, or Carrd)
- Action: Create Notion page in Clients database
- Map every form field to the correct Notion property

**Automation 2: New CRM Entry → Welcome Email**
- Trigger: Notion page created with Status = "Intake"
- Action: Send templated welcome email via Gmail (BCC yourself)
- Delay: Immediate OR set to next business day 9am

**Automation 3: Intake Complete → Welcome Sequence Kicks Off**
- Trigger: Notion Status field updated to "Active" manually OR via form completion
- Action: Send "Welcome to [Your Business]" email (Day 1)
- Follow-up: Send logistics email (Day 2), kickoff prep email (Day 3)

**Automation 4: 48 Hours Before Kickoff → Reminder Email**
- Trigger: Calendar event start in 48 hours
- Action: Send kickoff reminder email with agenda

**Automation 5: Post-Kickoff → Check-In**
- Trigger: Calendar event end
- Action: Send 1-week check-in email with next steps

---

## PHASE 4 — WRITE YOUR CUSTOM EMAILS (10 minutes)

**Open:** `03_Email_Templates.md` — copy each template into Gmail Drafts or your email marketing tool.

**For each email:**
1. Replace every [BRACKET] with your specific details
2. Set the send timing in your automation
3. Send a test to yourself and read it from a client's perspective
4. Adjust tone to match your brand voice

---

## PHASE 5 — TEST THE FULL FLOW (10 minutes)

**Run a complete test from your own email address:**

1. Submit your own intake form
2. Check Notion — a new page should appear within 30 seconds
3. Check your email — welcome email should arrive
4. Manually update Notion Status to "Active"
5. Check your email — logistics email should arrive within 1 minute
6. Manually add a calendar event for tomorrow, label it "Kickoff Call"
7. In 48 hours, check your email — reminder should arrive

**Fix anything that breaks before going live.** Then done — your onboarding is automated.

---

## THE COMPLETE ONBOARDING TIMELINE (AFTER SETUP)

| When | What Happens | Who Touches It |
|---|---|---|
| Day 0: Contract signed | Confirmation email sent | Nobody |
| Day 0: Deposit paid | Intake form link sent | Nobody |
| Day 1: Intake received | Notion updated, welcome email sent | Nobody |
| Day 2 | Logistics email sent | Nobody |
| Day 3 | Kickoff prep email sent | Nobody |
| Day 5 (minus 48h) | Kickoff reminder + agenda sent | Nobody |
| Day 5: Kickoff | Kickoff call happens | You (only this) |
| Day 12 | Post-kickoff check-in sent | Nobody |

**Your involvement after setup: 1 kickoff call per client. Everything else runs itself.**

---

## MANAGING EXPECTATIONS

**What clients see as automated:**
- Every email that comes before the kickoff call
- The intake form
- The agenda and logistics
- The check-in after kickoff

**What you still do manually:**
- The kickoff call (this is where trust is built — don't automate it)
- Any work you deliver (obviously)
- Complex or sensitive conversations

**Tip:** Tell clients in your kickoff prep email that you personally reviewed their intake responses. This makes them feel seen even though the system did the work.

---

*From Client Onboarding on Autopilot — AI Microtechlink*