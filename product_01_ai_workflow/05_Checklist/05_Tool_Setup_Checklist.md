# AI WORKFLOW TOOL SETUP CHECKLIST
## Tick Each Box Before You Build Your First Workflow

---

## SECTION 1: ZAPIER ACCOUNT SETUP

### □ Create your Zapier account
→ Go to zapier.com → Sign up (free)
→ Use a work email, not a personal one (keeps things organized)
→ Confirm your email address

### □ Set up 2-factor authentication
→ Go to zapier.com/settings → Security
→ Enable 2FA with an authenticator app
→ Download backup codes and save them somewhere safe

### □ Identify your trigger app
→ Which app starts your workflow?
→ Common triggers: Gmail, Google Sheets, Typeform, Calendly, Slack
→ Confirm you have access to that app and can log in

### □ Note your task usage
→ Free tier = 100 tasks/month
→ Each Zap run = 1 task (multi-step Zaps can use more)
→ Bookmark: zapier.com/settings/usage to monitor

---

## SECTION 2: MAKE.COM ACCOUNT SETUP (Alternative or Backup)

### □ Create a Make.com account
→ Go to make.com → Sign up free
→ Free tier = 1,000 operations/month
→ More generous than Zapier for complex workflows

### □ Note when to use Make vs. Zapier
→ Use Make when: You need more than 5 steps, or need branching logic
→ Use Zapier when: Simpler workflows, better app integrations

---

## SECTION 3: OPENAI API KEY SETUP

### □ Create an OpenAI account
→ Go to platform.openai.com → Sign up
→ Use the same email you use for ChatGPT (easier to manage)

### □ Add $5-$20 in credits (first time only)
→ Go to platform.openai.com → Settings → Billing → Add payment method
→ Set a payment cap: $5-$20 is enough to start
→ Credits don't expire but watch the auto-reload setting

### □ Generate your first API key
→ Go to platform.openai.com → API Keys → Create new secret key
→ Name it: "Zapier Workflows" or "Make.com"
→ Copy the key — you won't be able to see it again after leaving the page

### □ Save the key somewhere safe
→ Put it in a notes app (encrypted) or password manager
→ Do NOT email it, Slack it, or put it in a plain doc
→ If lost: Create a new key, delete the old one

### □ Set usage limits (important!)
→ Go to platform.openai.com → Settings → Billing → Usage limits
→ Set a monthly limit: $5-$20 is more than enough for most personal workflows
→ This prevents a runaway workflow from billing hundreds of dollars

### □ Test your API key
→ Paste the key into Zapier's OpenAI connection
→ Click "Continue" → If it says "Account connected successfully," you're done
→ If not, double-check the key was copied correctly (no extra spaces)

---

## SECTION 4: GMAIL CONNECTION

### □ Set up a dedicated workflow Gmail address (recommended)
→ Create a new Gmail account for business workflows
→ Example: yourname.workflows@gmail.com
→ Keep it separate from your personal email

### □ Enable IMAP in Gmail
→ Go to Gmail → Settings → See all settings → Forwarding and POP/IMAP
→ Select "Enable IMAP Access"
→ Note: This allows Zapier to read your emails securely

### □ Connect Gmail in Zapier
→ In Zapier → Create a new Zap → Add Gmail trigger
→ Click "Sign in to Gmail"
→ Grant the following permissions:
   ✓ Read, compose, and send email
   ✓ See email metadata (headers but not body)
   ✓ Manage drafts
   ✓ Send email on your behalf
→ If asked for advanced options, stick to "Basic access" unless you specifically need full access

### □ Set up email filters in Gmail (to reduce noise)
→ Create Gmail filters for the workflow email address
→ Example: Emails from contact forms → Auto-label "Form Inquiries"
→ This makes your Zap trigger cleaner (only relevant emails)

---

## SECTION 5: GOOGLE SHEETS CONNECTION

### □ Create a dedicated workflow Google Sheet
→ Go to sheets.google.com → Create new
→ Name it: "Workflow Data" or "Automation Hub"
→ Keep one master sheet for all your workflow data

### □ Set up column headers first
→ Before connecting to Zapier, add headers to your columns
→ Example: Date | Name | Email | Note | Status
→ Zapier can only map data to labeled columns

### □ Connect Google Sheets in Zapier
→ In Zapier → Add action → Search "Google Sheets"
→ Choose "Lookup Spreadsheet Row" or "Create Spreadsheet Row"
→ Sign in with your Google account
→ Grant: "See, edit, create, and delete your spreadsheets"

---

## SECTION 6: NOTION CONNECTION (Optional)

### □ Create a workspace for workflows
→ Go to notion.so → Create a workspace (free)
→ Name it: "Workflow Automation"

### □ Set up a task database
→ Create a new page → Add a database (Table view)
→ Add properties: Name, Status, Priority, Created Date
→ This is where your voice-to-task workflow will write

### □ Connect Notion in Zapier
→ In Zapier → Add action → Search "Notion"
→ "Create Database Item" → Sign in
→ Authorize: "Connect your Notion workspaces to Zapier"
→ Select the workspace you created above

---

## SECTION 7: TO-DOIST CONNECTION (Alternative to Notion)

### □ Create a Todoist account
→ Go to todoist.com → Sign up free
→ Create a project called "AI Workflow Tasks"

### □ Connect Todoist in Zapier
→ In Zapier → Add action → Search "Todoist"
→ "Create Task" → Sign in with Todoist account
→ Grant: "Full access to manage your tasks and projects"

---

## SECTION 8: BUDGET TRACKER (Keep API Costs Under Control)

### □ Calculate your expected monthly usage
→ Formula: Tasks per day × Days per month × Cost per task
→ GPT-4o-mini: ~$0.001 per task (1/10th of a cent)
→ Example: 50 tasks/day × 30 days = 1,500 tasks × $0.001 = $1.50/month

### □ Set a Zap cost budget
→ Budget = Tasks per day × 30 × $0.002 (safety margin)
→ If over budget, add a Zapier filter to reduce runs

### □ Set OpenAI monthly cap
→ Platform.openai.com → Settings → Billing → Monthly limit
→ Recommended: $5-$20 for personal workflows
→ This is your most important cost control setting

---

## SECTION 9: FINAL PRE-FLIGHT CHECK

Before you activate your first workflow, verify:

### □ I have created and tested a Zap with a Gmail trigger
→ Tested with a real email → Zap detected it correctly

### □ I have connected OpenAI and tested a GPT prompt
→ Got a usable output → Prompt produced relevant result

### □ I have reviewed the GPT output in test mode
→ Output is the right format → No harmful or incorrect content
→ If not perfect yet: I've noted my prompt changes

### □ I have set up email output as a DRAFT (not auto-send)
→ For any workflow that sends email: Always draft first
→ Plan to review 10 outputs before turning on auto-send

### □ I have my task budget in Zapier
→ I know how many tasks I've used this month
→ I know what triggers use the most tasks

### □ I have saved my credentials somewhere safe
→ API key: [Where I saved it]
→ Gmail workflow address: [yourworkflowemail@gmail.com]
→ Zapier login: [email used]

---

## QUICK REFERENCE: YOUR SETUP SUMMARY

Fill this in as you go — keeps you organized:

```
Zapier email: ___________________________
OpenAI API key saved: ___________________________

Workflow Gmail: ___________________________
Primary trigger app: ___________________________

Notion workspace: ___________________________
Task project: ___________________________

Monthly API budget: $________________
Monthly task budget (Zapier): 100 tasks
```

---

## IF YOU HIT A PROBLEM

**"Zapier can't connect to Gmail"**
→ Re-authorize the Gmail connection in Zapier → Settings → Connected Accounts
→ Make sure "Less secure app access" is NOT required (it's been deprecated)

**"OpenAI API key is rejected"**
→ Double-check: No spaces at the beginning or end when you pasted it
→ Try creating a new key if you can't verify the old one

**"GPT output is wrong/irrelevant"**
→ Refine the prompt: Add more constraints, examples, or format instructions
→ Add this at the end: "If you're uncertain, say 'I need more information' instead of guessing."

**"Zapier is using too many tasks"**
→ Add a Zapier Filter step: only continue if a specific condition is met
→ Example: Only run if email subject contains "[inquiry]"
→ This prevents irrelevant emails from burning tasks