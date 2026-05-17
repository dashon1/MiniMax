# System Architecture Map
## The Complete Layout of Your AI Operations OS

**This document is the master blueprint. Read it before building anything.**

---

## THE 5-INPUT SYSTEM OVERVIEW

Every solo business has 5 inputs that drive all operational activity. Each input has a source (where it enters your business), a processor (what happens to it), and an output (where it goes and what it triggers).

This system connects all 5 inputs through Zapier or Make, using Notion as the central operations hub.

```
                    ┌─────────────────────────────────────────────┐
                    │           CENTRAL OPERATIONS HUB            │
                    │                                             │
                    │   ┌─────────┐  ┌──────────┐  ┌───────────┐    │
                    │   │ Notion  │  │ Google   │  │ Gmail /   │    │
                    │   │ CRM +   │  │ Sheets   │  │ Super     │    │
                    │   │ Project │  │ Finance  │  │ Human     │    │
                    │   │ Tracker│  │ Log      │  │ (fallback)│    │
                    │   └────┬────┘  └────┬─────┘  └─────┬─────┘    │
                    └────────┼────────────┼──────────────┼──────────┘
                             │            │              │
                    ┌────────┴────────┐    │              │
                    │ AUTOMATION BUS │◄───┘              │
                    │ (Zapier/Make)   │◄─────────────────┘
                    │                 │
                    │ 5 Core Zaps     │
                    └────────┬────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
    ┌─────┴─────┐     ┌──────┴──────┐    ┌─────┴─────┐
    │   INPUT   │     │   INPUT    │    │  INPUT   │
    │  #1: Lead │     │ #2: Client │    │ #3: Money│
    │  Capture  │     │  Delivery  │    │ Tracking │
    └─────┬─────┘     └──────┬──────┘    └─────┬─────┘
          │                  │                  │
    ┌─────┴─────┐     ┌──────┴──────┐    ┌─────┴─────┐
    │   INPUT   │     │   INPUT    │    │  INPUT   │
    │ #4: Content│     │ #5: Comm.  │    │          │
    │  System   │     │  Engine   │    │          │
    └───────────┘     └───────────┘    └──────────┘
```

---

## INPUT #1 — LEAD CAPTURE AUTOMATION

**The Flow:**
```
Landing page form / Calendly / Instagram DM
         │
         ▼
    ZAPIER WEBHOOK
         │
         ├─► Create Notion CRM contact (Status: New Lead)
         │
         ├─► Send welcome email (within 5 minutes)
         │
         ├─► Add to email sequence (Mailchimp / ConvertKit)
         │
         └─► Create follow-up task in Notion (due in 24 hours)
```

**What this automation handles:**
- Every new person who expresses interest gets into your system immediately
- No manual copy-pasting from form to CRM
- No leads lost to "I'll add it later"

**Trigger:** New form submission (Typeform, Tally, Google Forms, or Calendly booking)
**Primary output:** Notion CRM contact + email sequence entry
**Fallback:** If CRM write fails, send you a Gmail notification to do it manually

---

## INPUT #2 — CLIENT DELIVERY AUTOMATION

**The Flow:**
```
New contract signed
         │
         ▼
    STRIPE PAYMENT / INVOICE PAID
         │
         ├─► Create Notion project page (from template)
         │
         ├─► Update CRM status to Active
         │
         ├─► Create first invoice (draft) in Notion
         │
         ├─► Create onboarding tasks (7-step template in Notion)
         │
         └─► Send client welcome email (automated)
```

**What this automation handles:**
- New clients go from "paid" to "fully set up" in under 5 minutes
- Project tracker is always current
- No onboarding steps get missed because they are automated tasks

**Trigger:** Stripe payment received OR invoice marked paid in Wave
**Primary output:** Notion project page + onboarding task list + welcome email
**Downstream:** Project milestone updates trigger invoice creation automatically

---

## INPUT #3 — FINANCE AUTO-LOG

**The Flow:**
```
Stripe payment received
         │
         ▼
    ZAPIER: Stripe → Google Sheets
         │
         ├─► New row in Income Log (date, amount, client/project, category)
         │
         ├─► Tag as: Retainer / Project / Product / Consultation
         │
         └─► Monthly summary triggered (on the 1st of each month)
              │
              └─► Compile previous month's income → send you a summary email
```

**What this automation handles:**
- Every dollar that comes in is logged automatically
- No more "I'll reconcile at tax time"
- You always know your actual monthly income at a glance

**Trigger:** Stripe payment received
**Primary output:** Google Sheets row in Income Log
**Monthly output:** Summary email on the 1st with previous month's total

---

## INPUT #4 — CONTENT PUBLISHING AUTOMATION

**The Flow:**
```
New content goes live (YouTube / blog / social scheduled post)
         │
         ▼
    ZAPIER: Buffer / Notion API → Content Calendar
         │
         ├─► Log entry created in Notion content database
         │    (title, platform, date, link, status: Published)
         │
         ├─► Trigger repurposing workflow:
         │    YouTube video → blog post drafted → LinkedIn post written
         │
         ├─► Update Google Sheets content tracker
         │
         └─► If performance milestone hit (100 views on YouTube):
                   └─► Send you a notification to engage with comments
```

**What this automation handles:**
- Everything you publish is logged and tracked in one place
- Repurposing triggers automatically after publish (no manual reminders)
- Content calendar stays current without you updating it

**Trigger:** Buffer new post published OR YouTube video uploaded
**Primary output:** Notion content log entry + repurposing tasks created
**Performance branch:** Notification on milestone (100 views / 50 likes / 10 comments)

---

## INPUT #5 — COMMUNICATION AUTO-ROUTING

**The Flow:**
```
New email or DM received
         │
         ▼
    ZAPIER: Gmail / Instagram DM → Auto-Router
         │
         ▼
    CATEGORY DETECTED:
    ├─► Lead (new person, not a client) → Auto-reply with booking link + CRM entry
    ├─► Client (existing) → Tag in CRM + flag in Notion
    ├─► Press / Collaboration → Forward to specific folder + notify you
    └─► Spam → Auto-archived + blocked
```

**What this automation handles:**
- Every message gets categorized and routed in under 60 seconds
- Leads always get an immediate response (even at 2am)
- Client messages get priority tagging

**Trigger:** New email (Gmail) or new Instagram DM
**Primary output:** Categorized + routed + auto-reply sent if lead
**Escalation:** Any message with keywords ["urgent", "can't access", "refund", "not working"] gets sent to your phone as a push notification

---

## CENTRAL OPERATIONS HUB: NOTION

Notion is the single pane of glass for your entire business:

```
NOTION WORKSPACE
├── CRM (Leads + Clients)
├── Projects (all active work)
├── Finance (income log + invoice tracker)
├── Content (content calendar + archive)
├── Tasks (automated + manual)
└── Business Dashboard (all databases summarized)
```

**The notion page that ties it all together:**
Create a "Business Dashboard" page in Notion — link to all 5 databases as embedded views. This is the one page you open every morning. It shows you everything that needs attention across your entire business in under 60 seconds.

---

## THE COMPLETE AUTOMATION LIST

| # | Name | Trigger | Primary Action | Secondary Action |
|---|---|---|---|---|
| 1 | Lead Capture | Form submitted | CRM contact created | Welcome email sent |
| 2 | Client Delivery | Payment received | Project created | Onboarding tasks + email |
| 3 | Finance Auto-Log | Stripe payment | Row added to Google Sheets | Monthly summary email |
| 4 | Content Publishing | Content published | Logged to Notion | Repurposing tasks created |
| 5 | Communication Router | New message received | Categorized | Auto-reply or flag |

---

*From The AI Operations OS — AI Microtechlink*