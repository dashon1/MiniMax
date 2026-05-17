# 5 Core Automation SOPs
## Step-by-Step Setup for Each Automation in the AI Operations OS

**Time per automation: 10 minutes | Total: 50 minutes + 20 minutes testing**

---

## AUTOMATION 1 — LEAD CAPTURE PIPELINE

**What it does:** Every new lead gets into your CRM, gets a welcome email, and gets a follow-up task created — automatically.

**Trigger tool:** Typeform, Tally, Google Forms, or Calendly (your lead form)
**Action tools:** Notion, Gmail, ConvertKit or Mailchimp

**Step-by-step:**

1. **Create your lead form** (or use existing). Ensure it collects: Name, Email, Source (how they found you), and one qualifying question (what they're looking for).

2. **In Zapier — Create new Zap:**
   - Trigger: New Form Response (select your form tool)
   - Action: Create Notion Database Item
     - Database: CRM
     - Name: form response full name
     - Email: form response email
     - Status: "New Lead"
     - Lead Source: form response source field
     - Tags: "Lead" + the source channel

3. **Action 2: Send welcome email via Gmail:**
   - Subject: "Thanks for reaching out — here's what happens next"
   - Body: [Use template in Section 5 of the Templates file]
   - To: Email from form response

4. **Action 3: Add to email sequence (ConvertKit/Mailchimp):**
   - Add tag: "Lead" + form name as source

5. **Action 4: Create Notion task:**
   - Task name: "Follow up with [Name]"
   - Due date: +24 hours from now
   - Assign to: You

6. **Test:** Submit a test form entry with your own email. Check: Notion entry created, email received, task created.

---

## AUTOMATION 2 — CLIENT DELIVERY PIPELINE

**What it does:** When a client pays, their project is created, onboarding tasks are generated, and their welcome email is sent — all at once.

**Trigger tool:** Stripe (payment received) or Wave (invoice paid)
**Action tools:** Notion, Gmail, Google Calendar

**Step-by-step:**

1. **In Notion — Create a Project Template page** with these sections:
   - Project overview (client name, dates, value)
   - Milestone tracker (table with: Milestone / Due / Status / Invoice)
   - Notes section
   - Deliverables checklist

2. **In Zapier — Create new Zap:**
   - Trigger: Stripe — Payment Received
   - Filter: (optional) Amount greater than [your minimum project value]

3. **Action 1: Create Notion page from template:**
   - Use Notion's "Create Page from Template" if using the Zapier Notion template feature
   - Or: Create page and populate fields manually via Zapier:
     - Name: "Project — [Client Name] — [Project Type]"
     - Status: Active
     - Start Date: today
     - Client: [from Stripe description or metadata]

4. **Action 2: Create onboarding task list in Notion:**
   - Create 7 checkboxes in the new project page:
     - Send onboarding email (Day 0)
     - Share project workspace link (Day 0)
     - Schedule kickoff call (Day 1)
     - Send kickoff agenda (Day 3)
     - Complete first milestone (Day 7)
     - Mid-project review (Day 14)
     - Final delivery (Day 30)

5. **Action 3: Send onboarding email:**
   - Template: [See Templates file — Client Welcome Email]
   - Send to: Stripe customer email

6. **Action 4: Create Google Calendar event (kickoff call):**
   - Event name: "Kickoff — [Client Name]"
   - Start time: +3 business days from today, 10am
   - Duration: 60 minutes

7. **Test:** Make a $1 test payment in Stripe with your own email. Verify Notion project, onboarding tasks, and calendar event created.

---

## AUTOMATION 3 — FINANCE AUTO-LOG

**What it does:** Every payment creates a row in your Google Sheets income log and triggers a monthly summary.

**Trigger tool:** Stripe (payment received)
**Action tools:** Google Sheets, Gmail

**Step-by-step:**

1. **Create your Income Log Google Sheet** with these columns:
   - Date | Amount | Client/Source | Category (Retainer / Project / Product / Consultation) | Notes | Month

2. **In Zapier — Create new Zap:**
   - Trigger: Stripe — Payment Received

3. **Action 1: Create Spreadsheet Row:**
   - Spreadsheet: Your Income Log
   - Date: Stripe payment created (formatted as date)
   - Amount: Stripe payment amount
   - Client/Source: Stripe payment description
   - Category: Use a Zapier Formatter step to categorize:
     - If description contains "retainer" → Retainer
     - If description contains "project" → Project
     - If description contains "product" → Product
     - Default → Consultation
   - Month: =TEXT(date, "MMMM YYYY")

4. **Action 2: Monthly Summary Automation** (separate Zap):
   - Trigger: Schedule — Every month on the 1st at 8am
   - Action: Google Sheets — Lookup Row
     - Find row where Month = previous month
     - Sum all Amount values
   - Action: Send Email via Gmail
     - To: your email
     - Subject: "Monthly Summary — [Month]"
     - Body: "Total income [Month]: $[amount]. See full log here: [link to spreadsheet]"

5. **Test:** Make a test Stripe payment. Check Google Sheet row created with all fields populated correctly.

---

## AUTOMATION 4 — CONTENT PUBLISHING AUTOMATION

**What it does:** Every piece of content you publish gets logged to Notion, triggers a repurposing task, and updates your content tracker.

**Trigger tool:** Buffer (new post published) OR YouTube (video uploaded) OR RSS feed
**Action tools:** Notion, Google Sheets, Gmail (notification)

**Step-by-step:**

1. **Create your Content Calendar Notion database** with these fields:
   - Title | Platform (multi-select) | Publish Date | Status (Draft / Published / Repurposed) | Link | Repurpose Tasks (checkbox) | Notes

2. **In Zapier — Create new Zap:**
   - Trigger: Buffer — New Post Published
     - Connect your Buffer account
     - Select profile to monitor

3. **Action 1: Create Notion page in Content Calendar:**
   - Title: Post text (first 50 characters)
   - Platform: [platform name]
   - Publish Date: today
   - Status: Published
   - Link: [URL from trigger]

4. **Action 2: Create repurposing tasks in Notion:**
   - Create 3 checkbox items in the new Notion page:
     - [ ] LinkedIn adaptation written
     - [ ] Twitter/X thread adaptation written
     - [ ] Blog article angle extracted
   - Due date: +48 hours from today

5. **Action 3: Update Google Sheets Content Tracker:**
   - Add row: Date, Platform, Title, URL, Status

6. **Action 4: Performance milestone notification** (separate Zap):
   - Trigger: YouTube — New Video Details (when video reaches 100 views)
   - Action: Send Gmail notification with subject: "Content milestone — [Video Title] hit 100 views!"

7. **Test:** Publish a test post from Buffer (or simulate trigger). Verify Notion entry, task creation, and Sheet update.

---

## AUTOMATION 5 — COMMUNICATION AUTO-ROUTING

**What it does:** Every email and DM gets categorized and routed — leads get instant replies, clients get flagged, press gets forwarded.

**Trigger tool:** Gmail (new email) or Instagram (new DM via Zapier)
**Action tools:** Notion, Gmail, Superhuman or Spike (fallback)

**Step-by-step:**

1. **Create a Gmail filter (manual setup in Gmail):**
   - Create these labels: Lead / Client / Press / Spam / Urgent
   - Set up rules:
     - If subject contains "unsubscribe" OR sender is in no-list → Spam (auto-archive)
     - If email body contains "interested in your services" OR "book a call" → Lead

2. **In Zapier — Create new Zap for each category:**

   **Zap A: New Lead Routing**
   - Trigger: Gmail — New Labeled Email
   - Label: Lead
   - Action 1: Create Notion CRM entry (Status: New Lead, Source: Inbound Email)
   - Action 2: Send Auto-Reply via Gmail:
     - Subject: "Re: [original subject]"
     - Body: [See Templates file — Lead Auto-Reply Template]
     - Note: Add 30-minute delay to avoid looking automated

   **Zap B: Client Message Routing**
   - Trigger: Gmail — New Labeled Email
   - Label: Client
   - Action: Create Notion task:
     - Task: "Reply to [Client Name]: [subject]"
     - Due: +4 hours (same business day)
     - Priority: High

   **Zap C: Urgent Message Detection**
   - Trigger: Gmail — New Email Matching Search
   - Search: from:[your_client_emails] AND subject:[urgent | help | not working | refund]
   - Action: Send SMS via Twilio (or push via Pushover):
     - Message: "[Client Name]: [Subject] — needs your attention"
   - Action 2: Add urgent label in Gmail

3. **Instagram DM routing (if using Instagram):**
   - Trigger: Instagram — New Media Comment or DM (via Zapier Instagram integration)
   - Action: Send Gmail with subject "[Instagram DM] from [username]: [first 100 chars]"

4. **Superhuman / Spike auto-reply setup** (for fastest lead response):
   - In Superhuman: Use Superhuman AI Rules to auto-set +5 min reply delay
   - In Gmail: Set up a template reply for new leads using Gmail Canned Responses

5. **Test:** Have a friend send an email to your inbox with a lead-style subject ("I'd like to work with you"). Verify label applied, CRM created, and auto-reply sent.

---

## COMMON ISSUES AND FIXES

| Problem | Cause | Fix |
|---|---|---|
| Notion page not created | Wrong database ID | Copy the exact database ID from Notion URL |
| Stripe trigger not firing | Webhook not connected | In Stripe Dashboard, check Connect — Webhooks |
| Google Sheets row wrong format | Date format mismatch | Zapier requires YYYY-MM-DD — use formatter |
| Email replies looping | Auto-reply sent to your own inbox | Filter: do not reply to emails from your own domain |
| Buffer trigger fires twice | Zapier sees it as 2 posts | Use a dedup step in Zapier on post ID |

---

*From The AI Operations OS — AI Microtechlink*