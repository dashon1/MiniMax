# AI WORKFLOW SOP — BUILD 3 AUTOMATIONS IN ONE SITTING
## Step-by-Step Instructions for Three Proven Workflows

---

## BEFORE YOU START

**Tools you need (all have free tiers):**
- Zapier account (zapier.com — free up to 100 tasks/month)
- OpenAI account with API key (platform.openai.com — $5 free credit)
- Google account (for Gmail and Sheets)
- Make.com account (optional alternative to Zapier for some workflows)

**Time needed:** 90 minutes for all 3 workflows
**First workflow live in:** 30 minutes or less

---

## WORKFLOW A: AUTO-REPLY TO INQUIRIES (Gmail + GPT)

**What it does:** New inquiry email → GPT reads it → Draft reply created → You review and send

**Use case:** You get messages from a website form, a LinkedIn connection, or a cold email. You want to respond within hours, not days. GPT drafts the reply — you make it personal and send.

---

### STEP 1 — Create the Gmail Trigger (5 minutes)

1. Go to zapier.com → Click "Create Zap"
2. Search "Gmail" → Select "New Email Matching Search"
3. Sign in with your Google account
4. In the Search field, type: `from:(@gmail.com OR @yahoo.com OR @outlook.com) subject:(inquiry OR contact OR question OR hello OR "get in touch")`
   — This catches most contact form submissions
5. Click "Continue" → Click "Test trigger" → Pull in a sample email
6. Click "Continue"

---

### STEP 2 — Add GPT (5 minutes)

1. Click the "+" button between Gmail and your next step
2. Search "OpenAI" → Select "Send a Prompt"
3. Sign in with your OpenAI API key:
   → Go to platform.openai.com → API Keys → Create new secret key
   → Copy it → Paste into Zapier
4. In the "Model" field, select: `gpt-4o-mini` (fastest, cheapest)
5. In the "Prompt" field, paste exactly:

```
You are a professional business development assistant. A potential customer has sent the following message:

{plaintext_content}

Your task:
1. Identify what they are asking for or interested in
2. Write a concise, warm reply (under 120 words)
3. If they asked a question, answer it directly
4. If they want to connect or talk, suggest two specific time slots
5. Keep a professional, helpful tone

Reply:
```

6. Map the `{plaintext_content}` field to Gmail's "Body Plain" (or "Snippet")
7. Click "Continue" → "Test & Review"
8. Check the output — it should be a clean, short reply draft

**If the output is too long:** Add "Keep your reply under 120 words" to the prompt.
**If it's off-target:** Add "The sender is a [type of person] interested in [topic]" above the email content.

---

### STEP 3 — Set Up the Reply (5 minutes)

1. Click "+" after the GPT step
2. Search "Gmail" → Select "Send Email"
3. In "To" — map to the Gmail sender's email address
4. In "Subject" — type: `Re: [Thread Subject]` and map the original subject field
5. In "Body" — map to GPT's response
6. Important: Toggle "Save as Draft / Send Later" — DO NOT auto-send AI replies directly
   → Set to: "Create a draft" so you review before sending
7. Click "Continue" → "Test"
8. Open your Gmail — you should see a draft created

**Why not auto-send?** Always review AI-generated content before it goes out.
You can turn on auto-send later once you've reviewed 50+ outputs and are confident.

---

### STEP 4 — Activate and Monitor (2 minutes)

1. Name your Zap: "Inquiry Auto-Reply"
2. Toggle the Zap ON
3. Check your Zap history weekly for the first month

---

## WORKFLOW B: VOICE MEMO → TASK LIST (Voice + GPT + Notion/Todoist)

**What it does:** Record a voice note → Zap triggers → GPT extracts tasks and notes → Saves to Notion or Todoist

**Use case:** You think of tasks, ideas, or notes throughout the day. Instead of typing them, you record a 30-second voice note. GPT transcribes it, extracts the actionable items, and puts them in your task manager automatically.

---

### STEP 1 — Set Up Your Voice Trigger (5 minutes)

**On iPhone:**
1. Open the Shortcuts app
2. Create new Shortcut: "Voice → Zapier"
3. Add action: "Record Audio" (limit 60 seconds)
4. Add action: "Send HTTP Request"
5. Use Zapier's webhook URL as the destination

**Alternative (no shortcuts needed):**
1. Create a dedicated Gmail label: "Voice Tasks"
2. Email that label: yourvoice@[yourdomain].com
3. Record a voicemail → it auto-saves to Gmail
4. In Zapier: trigger on "New Labeled Email"

---

### STEP 2 — Set Up GPT (5 minutes)

1. In Zapier: after the trigger, add "OpenAI — Send a Prompt"
2. Model: `gpt-4o-mini`
3. Prompt:

```
You are a personal productivity assistant. A user recorded a voice note. Transcribe it accurately, then extract:

TASKS: Any action items mentioned, written as clear short tasks (e.g. "Call back John", "Send proposal to Sarah", "Buy domain name")
NOTES: Any useful information that isn't a task (e.g. "Conference is in March", "Follow up on the proposal")
NEXT STEP: The single most urgent or important item

Format your response EXACTLY like this (copy exactly):
---
TASKS:
1. [task]
2. [task]
NOTES:
- [note]
NEXT STEP:
[task]
---
Voice note content: {transcription_text}
```

3. Map the voice note transcription text to the {transcription_text} field

---

### STEP 3 — Save to Notion (5 minutes)

1. Add action: "Notion — Create Database Item"
2. Sign in with your Notion account
3. Select your Tasks database
4. Map fields:
   - Task Name → Extract from GPT "TASKS" field
   - Note → Extract from GPT "NOTES" field
   - Priority → Leave blank or set default
5. Click "Test" → Check Notion → Item should appear

**Alternative — Save to Todoist:**
1. Add action: "Todoist — Create Task"
2. In "Task Content" → map GPT's "NEXT STEP" output
3. In "Note Content" → map GPT's full "TASKS" list
4. Set due date: "Today" or leave blank

---

## WORKFLOW C: FORM SUBMISSION → AI FOLLOW-UP (Typeform + GPT + Gmail)

**What it does:** Someone fills out a form → GPT generates personalized follow-up → Sends as a draft email to you for review

**Use case:** You have a lead capture form on your website. Every time someone submits it, you want GPT to: (1) read what they filled in, (2) write a personalized follow-up, (3) send a draft to your Gmail so you can review and send personally.

---

### STEP 1 — Connect Your Form (5 minutes)

**Option A — Typeform:**
1. In Zapier: Search "Typeform" → "New Entry"
2. Sign in to Typeform → Select your form
3. Click "Continue" → "Test trigger" → Submit a test entry

**Option B — Google Forms:**
1. In Zapier: Search "Google Sheets" → "New or Updated Spreadsheet Row"
2. Connect your Google account → Select the spreadsheet receiving form responses
3. Click "Continue" → "Test trigger" → Submit a test form response

---

### STEP 2 — GPT Reads and Generates Follow-Up (5 minutes)

1. Add "OpenAI — Send a Prompt"
2. Model: `gpt-4o-mini`
3. Prompt:

```
A new lead has submitted the following information:

Name: {name_field}
Email: {email_field}
[Add your form field names here — map them from the form response]

Your task:
1. Write a warm, personalized 3-sentence follow-up email
2. Reference something specific from their submission
3. Suggest one clear next step (a call, a link, a resource)
4. Sign it as: [Your Name]

Keep the email under 100 words. Write it as if a real human sent it.
```

4. Map each {field} to the corresponding form field
5. Click "Test" → Review the AI's output

---

### STEP 3 — Create a Gmail Draft (3 minutes)

1. Add "Gmail — Create Draft"
2. "To" → map the form's email field
3. "Subject" → `Great connecting, {name_field}!`
4. "Body" → map GPT's response
5. Important: Set to "Create Draft" — do not auto-send

---

## ZAPIER FREE TIER — HOW TO MANAGE YOUR 100 TASKS

**What counts as 1 task:**
- Each time a Zap runs from trigger to final action = 1 task
- Testing counts as tasks — use "pull sample" instead of "run test" to save tasks
- Multi-step Zaps: each step that accesses an app = 1 task

**How to stretch 100 tasks:**
- Set up multiple Zaps but only keep 2-3 active at once
- Use schedules wisely — don't run every 5 minutes; every hour is fine for most use cases
- Use filters: only run the Zap when conditions are met (e.g. only new emails with specific words)

---

## PRO TIPS FOR ZAPIER + GPT WORKFLOWS

**Tip 1 — Start with "Pull a Sample"**
Before running a full test, use "Pull a Sample" — this doesn't consume tasks.

**Tip 2 — Build one Zap, test it for a week, then build the next**
Don't build all 3 at once. Watch the outputs for 7 days. Tweak the prompts. Then move on.

**Tip 3 — Keep a prompt log**
Every time the output isn't perfect, copy the input, paste it into a doc with the prompt and the bad output, and write the fix. After 20 corrections, your prompts will be excellent.

**Tip 4 — Use filters to reduce task usage**
Add a Zapier filter: "Only continue if email body contains [keyword]"
This prevents irrelevant emails from running through GPT and burning tasks.

**Tip 5 — Use Zapier's built-in AI**
Zapier's "AI by Zapier" feature lets you build workflows by describing them in plain English. Useful for quick automations without building step-by-step.