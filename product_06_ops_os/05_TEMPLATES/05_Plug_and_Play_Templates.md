# Plug-and-Play Templates
## Configuration Presets and Import Bundles for Your AI Operations OS

**How to use:** For each section below, copy the configuration values directly into your Zapier or Make setup. These are pre-tested starting points — adjust the specific IDs and credentials to match your own accounts.

---

## TEMPLATE 1 — LEAD CAPTURE ZAPIER ZAP

**Zap Name:** Lead Capture Pipeline
**Trigger:** Webhook (from Tally / Typeform / Google Forms)
**Estimated setup time:** 8 minutes

**Trigger Configuration:**
- Trigger app: Webhooks by Zapier
- Event: Catch Hook
- Hook URL: [Copy from Zapier trigger — paste into your form's webhook URL field]
- Test trigger: Submit your form once with your own email

**Action 1 — Notion CRM Entry:**
- App: Notion
- Event: Create Database Item
- Database: [Your CRM Notion database ID — found in the Notion page URL]
- Properties:
  - Name: {{hook_name}} (from form field)
  - Email: {{hook_email}} (from form field)
  - Status: New Lead
  - Lead Source: {{hook_source}} (or "Website — Direct")
  - Tags: Lead | {{form_name}}

**Action 2 — Gmail Welcome Email:**
- App: Gmail
- Event: Send Email
- To: {{form_email}}
- From: [Your business email]
- Subject: Thanks for reaching out, {{name_first}}!
- Body:
```
Hi {{name_first}},

Thanks for getting in touch. I've received your submission and someone from the team will follow up within 24 hours.

In the meantime, feel free to explore our work at [YOUR WEBSITE].

Looking forward to connecting.

[YOUR NAME]
[YOUR BUSINESS NAME]
```

**Action 3 — ConvertKit / Mailchimp Tag:**
- App: ConvertKit
- Event: Add Tag to Subscriber
- Email: {{form_email}}
- Tag: Lead — {{form_name}}

**Action 4 — Notion Follow-Up Task:**
- App: Notion
- Event: Create Database Item
- Database: Tasks
- Properties:
  - Task: Follow up with {{name_first}} — {{form_subject}}
  - Due Date: +1 day from now
  - Priority: High
  - Status: Not Started
  - Assignee: [Your name]

---

## TEMPLATE 2 — CLIENT DELIVERY ZAPIER ZAP

**Zap Name:** Client Delivery Pipeline
**Trigger:** Stripe Payment Received
**Estimated setup time:** 12 minutes

**Trigger Configuration:**
- Trigger app: Stripe
- Event: New Payment
- Connected account: [Your Stripe account]
- Test: Make a $1 test payment to your own email

**Action 1 — Notion Project Page:**
- App: Notion
- Event: Create Database Item
- Database: Projects
- Properties:
  - Project Name: Project — {{payment_description}}
  - Client: {{payment_description}}
  - Status: Active
  - Start Date: {{payment_created}}
  - Project Value: {{payment_amount}} USD
  - Deposit Status: Paid

**Action 2 — Onboarding Task List (7 items):**
- Create 7 separate Notion "Create Database Item" actions, each with:
  - Database: Tasks
  - Task: [Task name from below]
  - Due Date: [See schedule below]
  - Priority: High
  - Status: Not Started
  - Assignee: [Your name]

Task schedule:
1. "Send onboarding email to {{payment_description}}" — today
2. "Share project workspace link" — today
3. "Schedule kickoff call in Calendly" — today
4. "Send kickoff agenda to {{payment_description}}" — +2 days
5. "Complete first milestone with client" — +7 days
6. "Mid-project review with {{payment_description}}" — +14 days
7. "Final delivery preparation" — +28 days

**Action 3 — Gmail Onboarding Email:**
- To: {{customer_email}}
- Subject: Welcome — your project is officially underway
- Body:
```
Hi {{payment_description}},

Your payment has been confirmed — thank you. Here's everything you need to know:

What happens next:
- Today: You'll receive your project workspace access and onboarding brief
- In 24 hours: We'll schedule your kickoff call
- Within 3 days: Your kickoff call takes place

Your first action: [Book a kickoff call at YOUR CALENDLY LINK]

Looking forward to getting started.

[YOUR NAME]
[YOUR BUSINESS NAME]
```

**Action 4 — Google Calendar Event:**
- App: Google Calendar
- Event: Create Detailed Event
- Calendar: [Your primary calendar]
- Summary: Kickoff — {{payment_description}}
- Start Date/Time: +3 business days, 10:00 AM [YOUR TIMEZONE]
- End Date/Time: +3 business days, 11:00 AM [YOUR TIMEZONE]
- Description: [YOUR KICKOFF AGENDA LINK]

---

## TEMPLATE 3 — FINANCE AUTO-LOG ZAPIER ZAP

**Zap Name:** Finance Auto-Log
**Trigger:** Stripe Payment Received
**Estimated setup time:** 8 minutes

**Trigger Configuration:**
- Trigger app: Stripe
- Event: New Payment
- Test: Use your Stripe test payment

**Formatters Step (categorize payment type):**
- App: Formatter by Zapier
- Event: Text — Transform
- Input: {{payment_description}}
- Transform: Find pattern
- Find: [Use this formula in a Code step instead for best results]

**Alternative — Use a Filter:**
- Only continue if: payment description contains "retainer" → Category = Retainer
- Only continue if: payment description contains "project" → Category = Project
- Default → Category = Consultation

**Action — Google Sheets Add Row:**
- Spreadsheet: [Your Income Log]
- Worksheet: Sheet1
- Date: {{payment_created}}
- Amount: {{payment_amount}}
- Client/Source: {{payment_description}}
- Category: [Use a Zapier conditional or the filter above]
- Month: =TEXT({{payment_created}}, "MMMM YYYY")

---

## TEMPLATE 4 — CONTENT CALENDAR ZAPIER ZAP

**Zap Name:** Content-to-Calendar
**Trigger:** Buffer — New Post Published
**Estimated setup time:** 8 minutes

**Trigger Configuration:**
- Trigger app: Buffer
- Event: New Post Published
- Profile: [Select the profile you want to track]
- Test: Publish a test post to Buffer

**Action 1 — Notion Content Log:**
- App: Notion
- Event: Create Database Item
- Database: Content Calendar
- Properties:
  - Title: {{post_text}} (first 50 characters)
  - Platform: {{profile_name}}
  - Publish Date: {{published_at}}
  - Status: Published
  - Link: {{post_url}}

**Action 2 — Repurposing Tasks (3 items):**
- Create 3 Notion tasks (as items in your Tasks database or checklist in the Content page):
  - "Adapt to LinkedIn" — due +48 hours
  - "Write Twitter/X thread version" — due +48 hours
  - "Extract blog article angle" — due +72 hours

**Action 3 — Google Sheets Update:**
- App: Google Sheets
- Event: Add Row
- Spreadsheet: [Your Content Tracker]
- Row values:
  - Date: {{published_at}}
  - Platform: {{profile_name}}
  - Content: {{post_text}}
  - Link: {{post_url}}
  - Status: Published

---

## TEMPLATE 5 — COMMUNICATION ROUTER ZAPIER ZAP

**Zap Name:** Lead Auto-Response (Email)
**Trigger:** Gmail — New Labeled Email
**Estimated setup time:** 10 minutes

**Trigger Configuration:**
- Trigger app: Gmail
- Event: New Labeled Email
- Label: Lead [create this label in Gmail first]
- Test: Have a friend send you an email with "interested in your services" in the body

**Action 1 — Notion CRM Entry:**
- App: Notion
- Event: Create Database Item
- Database: CRM
- Properties:
  - Name: {{from_name}}
  - Email: {{from_email}}
  - Status: New Lead
  - Lead Source: Email Inbound
  - Tags: Lead | Inbound

**Action 2 — Auto-Reply (with delay):**
- App: Gmail
- Event: Send Email
- To: {{from_email}}
- Subject: Re: {{subject}}
- Delay: 30 minutes [This prevents looping if they reply immediately]
- Body:
```
Hi {{from_name}},

Thanks for reaching out — I received your message and this is an automated reply to let you know I'm on it.

I'll review your message and get back to you personally within 24 hours. If it's urgent, reply with "URGENT" in the subject line.

In the meantime, feel free to explore [YOUR WEBSITE] or book a call directly at [YOUR CALENDLY LINK].

[YOUR NAME]
```

**Action 3 — Task Created:**
- App: Notion
- Event: Create Database Item
- Database: Tasks
- Properties:
  - Task: Reply to {{from_name}}: {{subject}}
  - Due Date: +4 hours
  - Priority: High
  - Status: Not Started

---

## GOOGLE SHEETS — INCOME LOG TEMPLATE SETUP

**Create a new Google Sheet called "Business Income Log"**

Create these columns in Row 1:
| Date | Amount | Client / Source | Category | Notes | Month |

In cell F2 (Month auto-formula):
`=TEXT(A2,"MMMM YYYY")`

In cell G1 add: "Running Total"

In G2 add:
`=SUMIF(Month:F, F2, Amount:C)`

Copy G2 down to all rows.

---

## NOTION — BUSINESS DASHBOARD PAGE SETUP

Create a new page called "Business Dashboard" and embed these:

1. **CRM database** — Board view grouped by Status
2. **Projects database** — Table view sorted by Start Date, filtered to Active only
3. **Tasks database** — Table view filtered to My Tasks, sorted by Due Date
4. **Content Calendar** — Gallery view by Platform
5. **Finance summary** — Embedded Google Sheet (Income Log)

This one page shows your entire business at a glance. Add it to your browser bookmarks bar.

---

*From The AI Operations OS — AI Microtechlink*