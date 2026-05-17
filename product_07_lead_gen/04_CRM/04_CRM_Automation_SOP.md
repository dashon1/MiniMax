# CRM + Automation SOP
## Building Your Lead Management System Without Expensive Tools

**Time to build: 1 hour | Free tier of Notion + Zapier is sufficient**

---

## NOTION CRM — SETUP GUIDE

### Step 1: Create the Leads Database

Create a new Notion database called "Leads." Set these properties:

| Property | Type | Description |
|---|---|---|
| Name | Title | Lead's full name |
| Email | Email | Primary contact email |
| Status | Select | New / Qualified / Booked / Nurture / Cold / Closed |
| Lead Source | Select | LinkedIn / Blog / Ad / Referral / Newsletter / Direct |
| Lead Score | Number | 0–25, updated after each qualification response |
| Budget | Select | $0 / $100–499 / $500–999 / $1000+ |
| Timeline | Select | Immediate / 1–3mo / 3–6mo / Exploration |
| Hotness | Select | Hot / Warm / Cool / Cold |
| Company | Text | Optional |
| Role | Text | Optional |
| Last Contact | Date | Last email sent or received |
| Next Action | Text | What to do next |
| Next Action Due | Date | When to do it |
| Calendly Link | URL | Their booked call link (post-booking) |
| Notes | Text | Full qualification notes from email responses |

### Step 2: Create These Views

**View 1: All Hot + Warm Leads**
Filter: Hotness is Hot OR Warm
Sort: Last Contact ascending
Use: Daily review — check this every morning

**View 2: Booked This Week**
Filter: Status is Booked AND Last Contact is within 7 days
Use: Know who's coming before the week starts

**View 3: Overdue Follow-Ups**
Filter: Next Action Due is before today AND Status is not Closed
Use: Never miss a follow-up again

**View 4: New Leads**
Filter: Status is New
Sort: Last Contact descending
Use: Watch for new entries as they come in

---

## AUTOMATION 1 — Form Submission to CRM Entry

**Trigger:** Tally / Typeform / Google Forms submitted
**Tool:** Zapier
**Time to build:** 8 minutes

**Zap Steps:**
1. **Trigger:** Form submitted (Webhooks by Zapier OR the specific form app)
2. **Action:** Create Notion page in Leads database
   - Name: [form response — full name]
   - Email: [form response — email]
   - Status: "New"
   - Lead Source: [form name as source tag]
   - Last Contact: today
   - Next Action: "Complete qualification Q1"
   - Next Action Due: today + 1 day

---

## AUTOMATION 2 — Qualification Responses Update Lead Score

**Trigger:** Gmail label applied OR Notion page updated manually
**Tool:** Zapier
**Time to build:** 10 minutes per question

**How it works:**
When you reply to a qualification email with your AI analysis, you label the email with the score. Zapier detects the label and updates the lead score.

**Zap Steps:**
1. **Trigger:** Gmail — New labeled email (label: "Q1 Done" etc.)
2. **Action:** Notion — Update database item
   - Find lead by email
   - Update: Lead Score + [score from Q1], Next Action updated to "Q2 pending"

**Label system to use in Gmail:**
- Q1 Done → Q1 score added
- Q2 Done → Q2 score added
- Q3 Done → Q3 score added
- HOT LEAD → score 21+, booking sequence triggered
- WARM LEAD → score 14–20, nurture triggered
- COOL LEAD → score 8–13, long sequence triggered
- COLD LEAD → score 0–7, newsletter only

---

## AUTOMATION 3 — Hot Lead Triggers Booking Email

**Trigger:** Notion Lead Score updated to 21+
**Tool:** Zapier
**Time to build:** 5 minutes

**Zap Steps:**
1. **Trigger:** Notion — Database item updated
   - Filter: Lead Score is greater than 20
2. **Action:** Gmail — Send email
   - To: [lead email]
   - Subject: "[First Name] — I think we should talk"
   - Body: [Script Q4 from the Qualification Scripts file]
3. **Action:** Notion — Update Status
   - Status: "Qualified"

---

## AUTOMATION 4 — Post-Booking CRM Update

**Trigger:** Calendly / Cal.com booking confirmed
**Tool:** Zapier
**Time to build:** 5 minutes

**Zap Steps:**
1. **Trigger:** Calendly — Invitee created (or Cal.com booking)
2. **Action:** Notion — Update database item
   - Find lead by email
   - Status: "Booked"
   - Calendly Link: [booking URL]
3. **Action:** Notion — Create task
   - Task: "Pre-call research: [Name]"
   - Due: 24 hours before call
   - Priority: High

---

## AUTOMATION 5 — Post-Call Follow-Up

**Trigger:** Calendar event ended (call finished)
**Tool:** Zapier
**Time to build:** 5 minutes

**Zap Steps:**
1. **Trigger:** Google Calendar — Event ended
   - Filter: Event title contains "[Your Name] — Discovery" or "Discovery Call"
2. **Action:** Gmail — Send post-call email
   - To: [lead email]
   - Subject: "Notes from our call, [Name]"
   - Body: [Script Q7 from Qualification Scripts file]
3. **Action:** Notion — Update Status
   - Status: "Post-Call" (for you to manually move to Closed Won / Closed Lost)

---

## LEAD SCORE TRACKER SHEET (Optional Google Sheets)

Add a Google Sheets tab to your Notion for reporting:

| Metric | This Week | This Month |
|---|---|---|
| New leads captured | | |
| Leads qualified (score 8+) | | |
| Hot leads (score 21+) | | |
| Calls booked | | |
| Calls completed | | |
| Conversion rate (qualified to booked) | | |
| Average lead score | | |

---

## THE DAILY LEAD MANAGEMENT ROUTINE (5 MINUTES)

**Every morning — open Notion and check:**

1. **Hot Leads view** — Are there any new hot leads? If yes: check if booking email was sent. If not, send it now.
2. **Overdue Follow-Ups view** — Any overdue tasks? Clear them or reschedule them.
3. **New Leads view** — Any new entries today? Check if the welcome email was sent (it should be automated but verify).

That's it. 5 minutes. You're current on every lead in your pipeline.

---

*From Zero-to-Automated Lead Gen System — AI Microtechlink*