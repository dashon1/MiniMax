# LABELING + ROUTING SYSTEM
## The 12-Label Architecture for an AI-Powered Inbox

---

## THE 12-LABEL SYSTEM

Every email that lands in your inbox gets exactly one primary label from this system.

Labels are designed for visual scanning (color-coded in Gmail), fast filtering, and AI routing.

| # | Label | Color | Meaning |
|---|---|---|---|
| 1 | P1_URGENT | 🔴 Red | Requires your response within 2 hours |
| 2 | P2_IMPORTANT | 🟠 Orange | Requires a response within 24 hours |
| 3 | P3_ROUTINE | 🟡 Yellow | Worth reading, can wait |
| 4 | P4_ARCHIVE | 🟢 Green | No action needed, read and done |
| 5 | VIP_ESCALATE | ⭐ Gold + Star | High-value person, immediate attention |
| 6 | ACTION_REQUIRED | 🔵 Blue | Has a task embedded, needs follow-up |
| 7 | CLIENT | 🟣 Purple | From a paying or past client |
| 8 | NEWSLETTER | ⚪ Gray | Newsletter or publication |
| 9 | SOCIAL_NOTIF | 🔵 Light Blue | Social media or platform notification |
| 10 | AUTO_ARCHIVE | ⚫ Black | Newsletter or cold outreach, archive immediately |
| 11 | WAIT_FOR_REPLY | 🔶 Amber | You sent something, waiting on their response |
| 12 | DELEGATED | 🟤 Brown | Routed to someone else, track for follow-up |

---

## LABEL DEFINITIONS + ROUTING LOGIC

### Label 1: P1_URGENT 🔴
**Trigger rules:**
- From: Boss, client (direct), investor, attorney, or anyone with significant authority
- Subject contains: "urgent", "asap", "deadline", "important", "help", "call me", "today"
- Body contains: money, contract, decision, approval, time-sensitive request
- AI triage decision: P1

**What happens:**
- Email gets starred automatically
- Email gets this label
- Sends you a notification (via Zapier)
- GPT creates an auto-draft reply

---

### Label 2: P2_IMPORTANT 🟠
**Trigger rules:**
- From: Colleague, partner, warm contact
- Subject relates to ongoing project or discussion
- Not time-critical but adds value
- AI triage decision: P2

**What happens:**
- Gets this label
- GPT creates a reply draft (during working hours)
- Sits in your Important inbox section

---

### Label 3: P3_ROUTINE 🟡
**Trigger rules:**
- From: Newsletter, notification, social update
- Not time-sensitive
- Informational only

**What happens:**
- Gets this label
- Sits in Routine section
- Read when you have time, usually batch-processed

---

### Label 4: P4_ARCHIVE 🟢
**Trigger rules:**
- Receipts, confirmations, calendar invites without action items
- Already-handled threads
- No response required

**What happens:**
- Gets this label AND is auto-archived
- Can be searched if needed, but clears your inbox immediately

---

### Label 5: VIP_ESCALATE ⭐
**Trigger rules:**
- Specific VIP sender list (you define the first 5-10)
- Board members, investors, key clients, your boss
- Manual override when AI detects high-value content

**What happens:**
- Gets starred AND this label
- Sends a copy notification to your phone or backup email
- Creates priority draft during working hours

---

### Label 6: ACTION_REQUIRED 🔵
**Trigger rules:**
- AI detects an embedded task or request in the email
- Subject contains: "please", "can you", "need", "should", "action"
- Any email with a clear deliverable mentioned

**What happens:**
- Gets this label
- Added to your follow-up queue (Notion or Todoist)
- Labeled with expected action type

---

### Label 7: CLIENT 🟣
**Trigger rules:**
- Sender is a current or past paying client
- CRM match on sender email address
- Warm outreach from a known business contact

**What happens:**
- Gets this label PLUS a priority label (P1 or P2 based on urgency)
- GPT creates a warmer-toned draft (acknowledge by name if known)
- Follows client-specific escalation rules

---

### Label 8: NEWSLETTER ⚪
**Trigger rules:**
- From: Known newsletter domains (substack, medium, mailchimp, etc.)
- Subject contains: "View in browser", "Unsubscribe", "newsletter"
- No specific action needed

**What happens:**
- Gets this label
- Auto-archived (or sent to a dedicated Newsletter inbox section)
- Read in batch once per week

---

### Label 9: SOCIAL_NOTIF 🔵
**Trigger rules:**
- From: LinkedIn, Twitter, Facebook, Instagram, YouTube
- Subject contains: "comment", "mentioned", "like", "share", "followed"
- Notification-type emails

**What happens:**
- Gets this label
- Auto-archived (review monthly in social dashboard)
- No reply needed

---

### Label 10: AUTO_ARCHIVE ⚫
**Trigger rules:**
- From: Cold outreach (first-time sender with no prior history)
- Subject contains: "free", "learn more", "click here", "discount", "offer"
- Mass outreach patterns

**What happens:**
- Gets this label
- Auto-archived without review
- (Optional: keep for monthly review if you want to catch any false positives)

---

### Label 11: WAIT_FOR_REPLY 🔶
**Trigger rules:**
- You sent an email that requires a response
- Manually applied when you send something and want to track it

**What happens:**
- Gets this label
- Starred so it stays visible
- Auto-reminder Zap runs after 3 business days if no response

---

### Label 12: DELEGATED 🟤
**Trigger rules:**
- You routed this email to a team member or colleague
- Manually applied when you forward/assign

**What happens:**
- Gets this label
- Added to your delegation tracking spreadsheet
- Follow-up Zap runs after agreed deadline

---

## AUTO-FILTER RULES FOR GMAIL

These are Gmail filters (not Zapier) — free, instant, and reliable:

### Filter 1: Auto-Archive Promotional
```
to:me AND (
  subject:(free OR discount OR offer OR sale OR "click here" OR "limited time")
  OR from:(mailchimp.com OR sendgrid.com OR amazon.com)
)
```
Action: Apply label "AUTO_ARCHIVE" + Skip inbox (Archive)

### Filter 2: Auto-Label Social
```
from:(linkedin.com OR twitter.com OR facebook.com OR.instagram.com)
```
Action: Apply label "SOCIAL_NOTIF" + Skip inbox (Archive)

### Filter 3: Auto-Label Newsletters
```
from:(substack.com OR medium.com OR rev.com OR convertkit.com)
```
Action: Apply label "NEWSLETTER" + Skip inbox (Archive)

### Filter 4: VIP Senders
```
from:(your-boss-email@company.com OR key-investor@firm.com OR star-client@bigcompany.com)
```
Action: Apply label "VIP_ESCALATE" + Star + Never auto-archive

### Filter 5: Client Emails
```
from:(@yourclientdomain.com OR @pastclient.com)
```
Action: Apply label "CLIENT" + Never auto-archive

---

## PRIORITY INBOX CONFIGURATION

Configure Gmail to show these sections at the top:

**Section 1: VIP (always visible)**
- VIP_ESCALATE label
- P1_URGENT label
- Starred emails

**Section 2: Action Required**
- P1_URGENT label (no star)
- ACTION_REQUIRED label

**Section 3: Important**
- P2_IMPORTANT label

**Section 4: Waiting**
- WAIT_FOR_REPLY label

**Section 5: Everything Else**
- P3_ROUTINE
- CLIENT
- P4_ARCHIVE

---

## DAILY LABEL MAINTENANCE

**Every morning (2 minutes):**
1. Open Priority inbox section
2. Handle P1_URGENT emails first (starred ones)
3. Review P2_IMPORTANT, handle what you can
4. Clear WAIT_FOR_REPLY items — follow up or escalate

**Every evening (2 minutes):**
1. Scan P2_IMPORTANT — handle what's urgent today
2. Review the daily digest (Automation 4)
3. Clear DELEGATED follow-up items
4. Archive everything in P4 that you've read

---

## LABEL MAINTENANCE SCHEDULE

**Weekly (10 minutes):**
- Check for false positives in AUTO_ARCHIVE
- Update VIP sender list
- Review NEWSLETTER section — unsubscribe from anything not being read

**Monthly (20 minutes):**
- Check for labels not being used (remove them)
- Review label assignment accuracy from AI
- Update AI triage prompts based on new email patterns

**Quarterly (30 minutes):**
- Full audit of all filters and routing rules
- Update for new email domains or sender patterns
- Review and update VIP list

---

*From The Inbox Zero AI System — AI Microtec 2026*