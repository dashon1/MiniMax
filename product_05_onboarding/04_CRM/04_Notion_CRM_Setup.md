# Notion CRM Setup Blueprint
## The Exact Notion Workspace Structure for Tracking Every Client From Inquiry to Delivery

**Time to set up: 20 minutes | Free Notion tier works**

---

## OVERVIEW: YOUR NOTION WORKSPACE STRUCTURE

```
YOUR NAME's Business (workspace)
├── Clients (database)
├── Projects (database)
├── Tasks (database)
├── Onboarding Pipeline (template)
└── Client Portal (optional, for delivering to client)
```

---

## STEP 1 — CREATE THE CLIENTS DATABASE

**Create a new page in your workspace. Title it "Clients."**

Set these properties when you create the database table view:

| Property | Type | Options / Format | Notes |
|---|---|---|---|
| Client Name | Title | — | Full name or company name |
| Email | Email | — | Primary contact email |
| Phone | Phone | — | Optional |
| Status | Select | Intake / Active / Paused / Complete | Lifecycle stage |
| Intake Form | URL | — | Link to their Google Forms / Tally response |
| Project Type | Select | Retainer / Project / Consultation / Discovery | What they're buying |
| Start Date | Date | — | Contract start date |
| Deposit Status | Select | Not Invoiced / Invoice Sent / Paid | Payment tracking |
| Kickoff Call | Date | — | Scheduled date and time |
| Next Step | Text | — | Plain text description |
| Next Step Due | Date | — | When the next action is due |
| Kickoff Agenda | URL | — | Link to Google Doc with agenda |
| Notes | Text | — | Anything worth remembering |
| Tags | Multi-select | — | For filtering — niche, referral source, etc. |

---

## STEP 2 — CREATE THE PROJECTS DATABASE

**Create a new database titled "Projects."**

| Property | Type | Notes |
|---|---|---|
| Project Name | Title | e.g., "Client Name — Website Redesign" |
| Client | Relation | Link to Clients database |
| Status | Select | Brief / In Progress / Review / Delivered / Archived |
| Start Date | Date | |
| End Date | Date | Expected or actual end |
| Value | Currency | (optional — helps track revenue per client) |
| Next Milestone | Text | What comes next |
| Milestone Due | Date | |

---

## STEP 3 — CREATE THE TASKS DATABASE

**Create a new database titled "Tasks."**

| Property | Type | Notes |
|---|---|---|
| Task Name | Title | e.g., "Send kickoff agenda" |
| Project | Relation | Link to Projects |
| Assigned To | Person | You or team member |
| Status | Select | Not Started / In Progress / Waiting / Done |
| Due Date | Date | |
| Priority | Select | High / Medium / Low |
| Notes | Text | |

---

## STEP 4 — CREATE A TEMPLATE PAGE FOR NEW CLIENTS

**Create a master template page called "Client Onboarding Template."**

This page will contain:
- All intake answers (linked from the database)
- Kickoff agenda (embedded Google Doc)
- Project tracker (embedded Notion database view)
- Notes section
- Meeting history

To use it for a new client:
1. Duplicate the template
2. Name it with the client name
3. Fill in the database properties
4. Every new piece of information goes in this one page

---

## STEP 5 — CREATE THE ONBOARDING PIPELINE VIEW

**In the Clients database, create a Board view (grouped by Status).**

Groups:
- 📥 **Intake** — Intake form sent, waiting for completion
- ✅ **Active** — Intake complete, project in motion
- ⏸️ **Paused** — On hold (specify reason in Notes)
- ✅ **Complete** — Project delivered and closed

**Add these filtered views to the Clients database:**
- "This Week's Kickoffs" — filtered by Kickoff Call = this week
- "Needs Follow-Up" — filtered by Next Step Due is in the past
- "Deposit Pending" — filtered by Deposit Status = Invoice Sent

---

## STEP 6 — CONNECT INTAKE FORM TO NOTION (ZAPIER SETUP)

**Zap: When intake form submitted → Create Notion page in Clients database**

Required field mapping:
- Form response: Full Name → Notion: Client Name (title)
- Form response: Email → Notion: Email
- Form response: Project Type → Notion: Project Type
- Form response: Preferred Start Date → Notion: Start Date
- Notion Status auto-set to: "Intake"
- Notion Next Step auto-set to: "Complete intake form"

---

## STEP 7 — SET UP YOUR WEEKLY REVIEW

**Every Monday, spend 5 minutes in your Notion workspace:**

1. Open "This Week's Kickoffs" view — check who's starting
2. Open "Needs Follow-Up" — clear any overdue next steps
3. Open "Deposit Pending" — chase up anything unpaid before week 2

This 5-minute weekly habit keeps your entire client lifecycle clean without anything falling through the cracks.

---

*From Client Onboarding on Autopilot — AI Microtechlink*