# Automation Map
## The Complete Visual Flow of Your Automated Client Onboarding System

**Tools: Zapier or Make | Setup time: 25 minutes | This document is the source of truth for building**

---

## THE COMPLETE AUTOMATION MAP

Each automation is listed as: **TRIGGER → FILTER (optional) → ACTION**

---

### AUTOMATION 1 — Contract Signed → Confirmation Email
```
TRIGGER:   Webhook / Email received (contract signed via PandaDoc, Docusign, or DocuSign)
FILTER:    Email subject contains "signed" or "confirmed"
ACTION:    Send Gmail: Contract Confirmation Email (Email Template 1)
RESULT:    Client receives confirmation immediately
```

**In Zapier:**
- Trigger: Webhook catch (or New Document Event from DocuSign)
- Filter: (none needed)
- Action: Send Email via Gmail

---

### AUTOMATION 2 — Deposit Paid → Intake Form Sent
```
TRIGGER:   Stripe payment received (or invoice marked paid in Wave / QuickBooks)
FILTER:    Payment description contains [CLIENT NAME or PROJECT CODE]
ACTION:    Send Gmail: Intake Form Invitation Email (Email Template 2)
ADDED:     Create Notion page in Clients database with Status = "Intake"
RESULT:    Client gets intake form within minutes of payment
           Notion CRM entry created at the same time
```

**In Zapier:**
- Trigger: Stripe — Payment Received
- Filter: (optional — if you need to isolate by amount or description)
- Action 1: Send Email via Gmail
- Action 2: Create Notion page in Clients

---

### AUTOMATION 3 — Intake Form Submitted → Welcome Sequence Starts
```
TRIGGER:   Google Forms / Tally / Typeform — New response submitted
FILTER:    (none needed — any form submission triggers this)
ACTION 1:  Update Notion: Status = "Active", populate all form fields
ACTION 2:  Send Gmail: Kickoff Logistics Email (Email Template 4) — delayed 2 days
ACTION 3:  Create Tasks in Notion: "Send kickoff agenda" (due on kickoff date - 3 days)
RESULT:    Client enters active status, welcome sequence starts, tasks created
```

**In Zapier:**
- Trigger: New Form Response (Google Forms / Tally / Typeform)
- Action 1: Update Notion page (match by client email)
- Action 2: Delay (2 days) → Send Email via Gmail (Email Template 4)
- Action 3: Create Task in Notion Tasks database

---

### AUTOMATION 4 — Intake Not Completed → Reminder Sent (24h later)
```
TRIGGER:   Email Template 2 sent (Email 2 triggers this sub-automation)
FILTER:    Notion Status still = "Intake" after 24 hours (not yet updated)
ACTION:    Send Gmail: Intake Reminder Email (Email Template 3)
RESULT:    Client gets a gentle reminder if they forgot to fill in the form
```

**In Zapier (run alongside Automation 3):**
- Trigger: Email 2 sent (sent via Automation 2)
- Filter: Notion Status = "Intake" (checked via Notion search)
- Delay: 24 hours
- Action: Send Email via Gmail (Email Template 3)

---

### AUTOMATION 5 — 48 Hours Before Kickoff → Reminder + Agenda Sent
```
TRIGGER:   Google Calendar — Event starting in 48 hours
FILTER:    Event title contains "Kickoff" or "Intro"
ACTION:    Send Gmail: Kickoff Reminder + Agenda (Email Template 5)
ADDED:     Attach kickoff agenda Google Doc (if created separately)
RESULT:    Client receives agenda and logistics 48 hours before the call
```

**In Zapier:**
- Trigger: Google Calendar — Event Start Date + Time (2 days before event)
- Filter: Calendar event name contains "kickoff" or "intro"
- Action: Send Email via Gmail with agenda attachment

---

### AUTOMATION 6 — Post-Kickoff Check-In (7 days after kickoff ends)
```
TRIGGER:   Google Calendar — Event ended (kickoff call finished)
FILTER:    (none needed)
ACTION:    Send Gmail: Post-Kickoff Check-In (Bonus Email)
RESULT:    You follow up with the client without having to remember to do it
```

**In Zapier:**
- Trigger: Google Calendar — Event End
- Filter: Calendar event name contains "kickoff"
- Delay: 7 days
- Action: Send Email via Gmail (Bonus Email — post-kickoff)

---

## QUICK SUMMARY TABLE

| # | Automation | Trigger | Delay | Result |
|---|---|---|---|---|
| 1 | Contract confirmation | Contract signed | Immediate | Client gets confirmation + contract copy |
| 2 | Intake form sent | Deposit paid | Immediate | Client gets intake form |
| 3 | CRM created | Intake form submitted | Immediate + 2 days | Notion updated, welcome sequence starts |
| 4 | Intake reminder | 24h after intake sent | 24h | Reminder sent if not completed |
| 5 | Kickoff reminder | Calendar event - 48h | 48h before | Agenda + logistics sent |
| 6 | Post-kickoff check-in | Calendar event end | 7 days | Follow-up sent automatically |

---

## WHAT THE MAP LOOKS LIKE ON MAKE (VISUAL DESCRIPTION)

```
[CONTRACT SIGNED] → (Email: Confirmation)
      ↓
[DEPOSIT PAID] → (Create Notion Contact) → (Email: Intake Form)
      ↓                                   ↓ (24h delay)
[INTAKE SUBMITTED] → (Update Notion to Active) → (Email: Logistics, 2d delay)
      ↓
[CALENDAR: Kickoff - 48h] → (Email: Agenda + Reminder)
      ↓
[CALENDAR: Kickoff END] → (Email: Check-In, 7d delay)
```

---

## WHAT YOU STILL DO MANUALLY

The automations handle everything before and after the kickoff. You still:

- [ ] Attend the kickoff call (the one human touchpoint that builds trust)
- [ ] Create the kickoff agenda (5 minutes — template provided in Email Template 5)
- [ ] Mark the project as "Complete" when delivery is done
- [ ] Respond to client replies (automated emails create a thread in your inbox)

---

## TESTING YOUR AUTOMATIONS

Test in order, one at a time:

1. **Test A1:** Submit a fake Stripe payment with your own email → check Gmail
2. **Test A2:** Submit a fake intake form with your own email → check Notion
3. **Test A3:** Update Notion Status to "Active" for your test entry → check Gmail for delayed email
4. **Test A4:** Create a fake calendar event named "Kickoff — Test" for tomorrow 9am → check Gmail after 48 hours (or simulate with a past-time trigger)
5. **Test A5:** End a fake kickoff event → check Gmail after 7 days

Fix what breaks before connecting real clients.

---

## COMMON ZAPIER ISSUES AND FIXES

| Problem | Cause | Fix |
|---|---|---|
| Notion page not created | Zapier not connected to Notion | Reconnect Notion account in Zapier, check permissions |
| Emails going to spam | Authentication missing | Set up SPF/DKIM for your sending domain |
| Delay not working | Zapier free tier has 5-min max delay | Use a "Delay" step set to the exact time you need |
| Form responses not mapping | Field names don't match | Check exact field names in form — Zapier is case-sensitive |
| Wrong client email matched | Email filter too loose | Use exact client email in your filter condition |

---

*From Client Onboarding on Autopilot — AI Microtechlink*