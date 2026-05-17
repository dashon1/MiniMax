# GMAIL + AI AUTOMATION SOP
## Build 4 Automations That Handle Your Email on Autopilot

**Time needed:** 90 minutes for all 4 automations
**Tools:** Gmail + Zapier + OpenAI (all have free tiers)

---

## AUTOMATION 1: AUTO-TRIAGE
**What it does:** Every new email gets a priority label before you open your inbox.
**Time saved:** 20-30 minutes/day of inbox scanning

---

### Step 1 — Create the Gmail Trigger
1. Go to zapier.com → Create new Zap
2. Search "Gmail" → Select "New Email Matching Search"
3. In the Search field, paste:
```
from:(@gmail.com OR @yahoo.com OR @hotmail.com OR @outlook.com OR *)
```
(This catches all incoming mail)
4. Click Continue → Test trigger → Pull in 1 sample email
5. Click Continue

---

### Step 2 — Add GPT Triage Step
1. Click the "+" between Gmail and your next step
2. Search "OpenAI" → Select "Send a Prompt"
3. Model: gpt-4o-mini (fastest and cheapest)
4. Map the fields:
   - sender_name → Gmail "From name"
   - subject → Gmail "Subject"
   - email_preview → Gmail "Snippet"
5. In the Prompt field, paste:

```
You are an email triage assistant. Read this email and assign ONE priority level:

P1 (Urgent): Needs your personal response within 2 hours. Client issue, money matter, time-sensitive decision, or from a VIP.
P2 (Important): Worth reading today. Not urgent but adds value. Requires a response eventually.
P3 (Routine): Newsletters, notifications, social updates. Can wait until tomorrow.
P4 (Archive): Read and done. No action needed.

From: {sender_name}
Subject: {subject}
Preview: {email_preview}

Respond with ONLY the priority code: P1, P2, P3, or P4. Nothing else.
```

6. Click Continue → Test & Review
7. Check the output — should be a single letter: P1, P2, P3, or P4

---

### Step 3 — Route by Priority
1. Click "+" after the GPT step
2. Search "Filter by Zapier" → "Lookup Table"
3. Add a lookup: if GPT response = P1 → add label "URGENT" and star email
4. If P2 → add label "IMPORTANT"
5. If P3 → add label "ROUTINE"
6. If P4 → archive email immediately

**Shortcut — use Zapier's "Path" feature:**
1. Add a Zapier "Path" step after GPT
2. Create 4 paths (P1/P2/P3/P4)
3. Each path has a different Gmail action

**Gmail actions per path:**
- P1: Add label "URGENT" + Star email + Send to Priority Inbox
- P2: Add label "IMPORTANT"
- P3: Add label "ROUTINE"
- P4: Archive email

---

### Step 4 — Activate and Monitor
1. Name your Zap: "Inbox Zero — Auto-Triage"
2. Turn it ON
3. Check your Zap history after 1 hour — confirm labels are being applied
4. Adjust the prompt if any emails are being mislabeled

---

## AUTOMATION 2: AUTO-DRAFT
**What it does:** For Important (P2) emails, GPT creates a reply draft in your Gmail.
**Time saved:** 3-5 minutes per email × average 15 routine important emails/day = 45-75 minutes/day

---

### Step 1 — New Trigger (only for P2 emails)
1. Create a new Zap
2. Gmail trigger: "New Labeled Email"
3. Select label: "IMPORTANT"
4. Continue → Test → Pull in a sample IMPORTANT email

---

### Step 2 — Set Working Hours Filter
1. Click "+" → Search "Schedule by Zapier"
2. Select "Every Week" — set your working hours
   - Day: Monday, Tuesday, Wednesday, Thursday, Friday
   - Time: 8:00 AM to 6:00 PM
3. Add a Zapier "Filter" step after the trigger:
   - Only continue if the email was received during working hours

---

### Step 3 — Draft the Reply
1. Add "OpenAI — Send a Prompt" step
2. Model: gpt-4o-mini
3. Prompt:

```
You are a professional executive assistant. Write a concise reply draft for this email.

Context: You are a busy professional. Keep emails short, direct, and action-focused.
Reply length: Under 80 words.
Tone: Warm but professional. Direct but not curt.

Email received:
From: {sender_name}
Subject: {subject}
Body: {email_body_plain}

Your reply draft:
```

4. Map fields:
   - sender_name → Gmail "From name"
   - subject → Gmail "Subject"
   - email_body_plain → Gmail "Body Plain"

---

### Step 4 — Create the Draft
1. Add "Gmail — Create Draft" step
2. To: Map to Gmail "From" (reply to the sender)
3. Subject: `Re: {subject}`
4. Body: Map to GPT's response
5. Click Continue → Test
6. Check your Gmail drafts folder — new draft should appear

---

### Step 5 — Review Before Sending
**Important:** Set drafts to "Create draft" NOT "Send automatically."
AI-generated emails should always be reviewed before sending.
After 50 reviewed drafts, you'll trust the outputs enough to enable auto-send for routine responses.

---

## AUTOMATION 3: ESCALATION ROUTING
**What it does:** VIP emails get instant priority treatment — starred, labeled, and surfaced immediately.
**Time saved:** No more important emails buried under newsletters

---

### Step 1 — Set Up the Trigger
1. Create a new Zap: "Inbox Zero — VIP Escalation"
2. Gmail trigger: "New Email Matching Search"
3. Search string (customize with your VIP senders):

```
from:(boss@company.com OR investor@firm.com OR client@bigcompany.com OR {your-top-5-vip-contacts})
OR
subject:(urgent OR ASAP OR important OR decision OR "call me" OR "need today" OR "deadline")
```

4. Test → Pull in a sample if available

---

### Step 2 — Apply VIP Treatment
1. Add "Gmail — Update Email" step
2. Email ID: Map to Gmail "Email ID"
3. Add Star: TRUE
4. Add Label: "VIP ESCALATION"
5. Add Mark as Important: TRUE

---

### Step 3 — Add a Backup Notification
1. Add "Gmail — Send Email" step
2. To: Your personal email (or your spouse/assistant)
3. Subject: `[Inbox Zero] VIP Email Detected`
4. Body: `A high-priority email was flagged in your inbox from {sender_name}: {subject}. View it here: {email_url}`
5. Set to "Only send if VIP detected" — use Zapier filter

---

## AUTOMATION 4: DAILY DIGEST
**What it does:** Every morning and evening, get one briefing that replaces your inbox scan.
**Time saved:** 10-15 minutes/day of inbox scanning

---

### Step 1 — Set the Schedule
1. Create a new Zap: "Inbox Zero — Daily Digest"
2. Trigger: "Schedule by Zapier — Every Day"
3. Time: 8:00 AM (morning briefing) and 5:00 PM (evening wrap-up)
4. For evening digest: Also add a second trigger at 5:00 PM

---

### Step 2 — Pull All Unread Emails
1. Add "Gmail — Search Emails"
2. Search: `is:unread AND in:inbox`
3. Max results: 50 (to keep the digest manageable)
4. Map each email to an array: subject, from, snippet, date

---

### Step 3 — Compile the Digest
1. Add "OpenAI — Send a Prompt"
2. Model: gpt-4o-mini
3. Prompt:

```
You are an executive briefing assistant. Compile the following emails into a structured daily digest.

Format EXACTLY like this:
---
MORNING BRIEFING — [Date]

TOP PRIORITIES (only P1 emails — what needs your action today):
1. [Email topic] — from [sender name] — [one sentence on what it needs from you]
2. [Email topic] — from [sender name] — [one sentence]

IMPORTANT (P2 emails — worth reading today):
- [Brief description] — [count] items requiring response

ROUTINE (P3/P4 emails — handle when you have time):
- [Count] newsletters, [count] notifications, [count] social updates

DIGEST SUMMARY:
[3 sentences max on the overall state of your inbox today]

---
If there are no P1 emails, write: "No urgent items today. You are clear to focus."
---
Email list:
{map_all_emails_here}
```

---

### Step 4 — Send the Digest to Yourself
1. Add "Gmail — Send Email" step
2. To: Your own email address
3. Subject: `[Inbox Zero] Your Morning Briefing — [Date]`
4. Body: Map to GPT's digest response
5. Set frequency: Daily at 8am and 5pm

---

## ZAPIER TASK USAGE GUIDE

**Estimated monthly task consumption:**
- Auto-triage: ~600 tasks/month (20 emails/day × 30 days)
- Auto-draft: ~300 tasks/month (10 P2 emails/day × 30 days)
- VIP escalation: ~30 tasks/month
- Daily digest: 60 tasks/month (2 per day × 30 days)

**Total: ~990 tasks/month**

Free tier = 100 tasks/month. This system requires Zapier paid plan ($20+/month) or you need to reduce triggers.

**To stay on free tier:**
- Disable auto-triage (the biggest consumer)
- Keep only auto-draft and daily digest
- Use Gmail filters for basic triage (free, built into Gmail)

**To reduce tasks:**
- Set auto-triage to run every 15 minutes instead of continuously
- Add a Zapier filter: "only continue if sender is not in my contacts" (reduces volume by ~40%)

---

## ZAPIER TIPS FOR ADVANCED USERS

**Multi-step Zaps:**
Don't build 4 separate Zaps. Chain them:
Triage Zap → creates labels → auto-draft Zap triggers on "IMPORTANT" label only

**Conditional routing:**
Use Zapier's "Path" step to send different email types to different workflows:
- Inbound client emails → Auto-draft + daily digest
- Internal emails from your team → Auto-label + mute
- Newsletters → Auto-archive

**Backup systems:**
Always have a fallback: if the Zap fails, you still receive the original email. The AI is an assistant, not a replacement for your inbox.

---

*From The Inbox Zero AI System — AI Microtec 2026*