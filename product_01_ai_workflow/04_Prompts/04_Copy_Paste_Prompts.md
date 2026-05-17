# COPY-PASTE AI PROMPTS FOR WORKFLOW AUTOMATION
## 18 Ready-to-Use Prompts — Categorized by Function

---

## HOW TO USE THESE PROMPTS

1. Copy the prompt text
2. Paste into the GPT node in Zapier or Make
3. Replace anything in {curly braces} with your actual data field
4. Add or remove constraints to match your exact needs
5. Test with 3 samples before activating

---

## SECTION A: DATA EXTRACTION PROMPTS (5 Prompts)

Use these when you need GPT to pull specific information out of messy text — emails, notes, transcripts, documents.

---

### PROMPT A1: Extract Contact Info

```
You are a data extraction assistant. Read the following text and extract:
- Full name
- Email address
- Phone number
- Company name (if mentioned)
- Job title (if mentioned)

Format your response EXACTLY like this:
---
Name: [full name]
Email: [email or "not found"]
Phone: [phone or "not found"]
Company: [company or "not found"]
Title: [title or "not found"]
---
Text to extract from:
{text_to_parse}
```

---

### PROMPT A2: Extract Key Numbers and Dates

```
You are a financial data extraction assistant. Read the following document and extract all:
- Dollar amounts (with context of what they represent)
- Dates (with context of what they refer to)
- Percentages and rates
- Key financial metrics mentioned

Format your response as a clean bulleted list:
---
Financial Items Found:
- [amount/date/metric]: [context]

If nothing financial is found, write: "No financial data found in this document."
Document text:
{text_to_parse}
```

---

### PROMPT A3: Extract Action Items from a Meeting

```
You are a meeting notes assistant. Read the following notes or transcript and extract:
- Decisions made (what was agreed)
- Action items assigned (who should do what)
- Questions raised that need follow-up
- Any deadlines mentioned

Format your response EXACTLY like this:
---
DECISIONS:
1. [decision]

ACTION ITEMS:
1. [task] — Assigned to: [person or "team"]
2. [task] — Assigned to: [person or "team"]

OPEN QUESTIONS:
1. [question to follow up]

DEADLINES:
- [deadline and what it relates to]
---
Meeting notes:
{meeting_notes}
```

---

### PROMPT A4: Extract Product or Service Requests

```
You are a sales analysis assistant. Read the following message and identify:
1. What product or service the sender is interested in (quote it directly)
2. Any specific requirements mentioned
3. Any budget or timeline mentioned
4. Any questions they asked that need answering

Format your response EXACTLY like this:
---
INTEREST: [direct quote of what they want]
REQUIREMENTS: [list any specific needs]
BUDGET/TIMELINE: [what was mentioned, or "not specified"]
QUESTIONS TO ANSWER: [list their questions]
---
Message:
{email_text}
```

---

### PROMPT A5: Extract and Summarize Long Documents

```
You are a document summarization assistant. Read the following document and produce a summary that:
- Is under 200 words
- Captures the 3 main points or arguments
- Notes any specific data, numbers, or deadlines
- Flags anything that seems urgent or requires action

Format your response EXACTLY like this:
---
SUMMARY: [3-5 sentence summary]

KEY POINTS:
- [point 1]
- [point 2]
- [point 3]

NUMBERS/DATA MENTIONED:
- [list any specific data points]

ACTION NEEDED: [Yes/No — if yes, what]
---
Document:
{long_document_text}
```

---

## SECTION B: DRAFT GENERATION PROMPTS (5 Prompts)

Use these when you need GPT to write a first draft — emails, replies, proposals, or content.

---

### PROMPT B1: Warm Professional Email Reply

```
You are a professional business assistant. Write a concise, warm reply to the following email.
- Keep it under 100 words
- Address any specific questions they asked
- If they want to connect or meet, suggest two specific time slots
- End with a clear next step or call to action
- Do NOT be salesy or pushy

Email you received:
{email_body}
```

---

### PROMPT B2: Lead Qualification Response

```
You are a sales qualification assistant. Based on the following inquiry, write a 3-email sequence:
- Email 1 (send immediately): Acknowledge their inquiry, tell them what to expect
- Email 2 (send 2 days later): Share a relevant case study or example
- Email 3 (send 5 days later): Follow up, answer any unspoken objections, suggest a clear next step

Keep each email under 80 words. Sound like a helpful human, not a salesperson.
Inquiry: {inquiry_text}
```

---

### PROMPT B3: Meeting Summary After a Call

```
You are a meeting assistant. After receiving the following notes from a meeting, write:
1. A 3-paragraph summary (what was discussed, what was decided, what happens next)
2. A bulleted list of action items
3. A follow-up email draft to send to the other attendees

Meeting notes:
{meeting_notes}

Format your response EXACTLY like this:
---
SUMMARY:
[3 paragraphs]

ACTION ITEMS:
- [item]
- [item]

FOLLOW-UP EMAIL DRAFT:
[Email content below — keep under 120 words]
[Email]
---
```

---

### PROMPT B4: Social Media Post from Content

```
You are a social media copywriter. Transform the following content into 3 posts for LinkedIn.
- Each post: under 150 words
- Post 1: Hook + value (no personal angle)
- Post 2: First-person story angle (make it relatable)
- Post 3: Bold take or contrarian opinion (get engagement)

Use a conversational tone. No hashtags in the posts themselves (add them as a separate list).
Original content:
{content_text}
```

---

### PROMPT B5: FAQ Answer from Product Info

```
You are a product knowledge assistant. Read the following product information and write:
1. The 3 most common questions buyers ask about this type of product
2. Clear, honest answers to each question
3. A brief comparison (how this is different from similar products)

Format answers in plain, non-technical language. Be honest about limitations.
Product info:
{product_info}
```

---

## SECTION C: CLASSIFICATION AND ROUTING PROMPTS (4 Prompts)

Use these when you need GPT to sort things into categories or decide what to do with them.

---

### PROMPT C1: Email Routing

```
You are an email routing assistant. Read the following email and classify it:
Category options:
- urgent: needs personal response within 2 hours
- inquiry: general question or request for information
- sales_pitch: vendor or salesperson reaching out
- spam: irrelevant or suspicious
- newsletter: newsletter or promotional content
- follow_up: someone following up on a previous conversation

Respond with ONLY the category word. Nothing else.
Email:
{email_body}
```

---

### PROMPT C2: Lead Scoring

```
You are a lead qualification assistant. Score the following lead on a scale of 1-10:
Consider:
- Did they fill out a form with specific needs? (+2 points)
- Did they mention a budget? (+2 points)
- Did they mention a timeline? (+2 points)
- Are they already a customer? (max 3 points, no additional points)
- Is their message specific and personalized? (+2 points)
- Did they explicitly request a call or demo? (+2 points)

Respond with ONLY the number (1-10). Nothing else.
Lead message:
{lead_message}
```

---

### PROMPT C3: Sentiment Analysis

```
You are a customer feedback analyst. Read the following message and classify the sentiment:
Options:
- positive: genuinely happy, satisfied, or enthusiastic
- neutral: matter-of-fact, no strong emotion
- negative: frustrated, disappointed, or upset
- urgent: requires immediate attention regardless of sentiment

Respond with ONLY the word. Nothing else. No explanation.
Feedback:
{feedback_text}
```

---

### PROMPT C4: Support Ticket Priority

```
You are a customer support triage assistant. Read the following support ticket and assign:
Priority options:
- P1_Critical: Service is down, data is lost, major function broken
- P2_High: Feature is broken but workaround exists, or urgency is stated
- P3_Medium: Question or non-urgent issue with workaround
- P4_Low: Nice-to-have request, low urgency, informational

Respond with ONLY the priority code. Nothing else.
Ticket:
{ticket_text}
```

---

## SECTION D: SUMMARY AND REPORTING PROMPTS (4 Prompts)

Use these when you need GPT to condense, report on, or synthesize information.

---

### PROMPT D1: Daily Briefing from Notes

```
You are a briefing assistant. Read the following notes or inputs from today and produce:
1. A "Top 3" list — the 3 most important things to know
2. A "To Do" list — action items extracted
3. A "Watch Out" — anything that might cause problems tomorrow

Be concise. No fluff. Bullet points preferred.
Today's notes:
{daily_notes}
```

---

### PROMPT D2: Competitor Summary from Web Research

```
You are a market research assistant. Read the following notes about a competitor and write:
1. A 3-paragraph summary of what they do, who they serve, and their pricing
2. A bulleted list of their strengths (what they do better than most)
3. A bulleted list of their weaknesses (what they do worse or miss entirely)
4. A one-sentence positioning recommendation: how to position against them

Competitor info:
{competitor_notes}
```

---

### PROMPT D3: Content Angle Generator

```
You are a content ideation assistant. Read the following source material and suggest:
1. One hot take or controversial opinion angle (for LinkedIn or Twitter)
2. One educational "how to" angle (for blog or newsletter)
3. One story-driven personal angle (for podcast or video)

Each suggestion should include: a headline/hook, a 2-sentence description, and the target platform.
Source material:
{content_material}
```

---

### PROMPT D4: Weekly Status Report

```
You are a project status reporting assistant. Read the following status updates and write:
1. A 3-sentence executive summary (where does the project stand overall?)
2. A RAG status: Green = on track, Yellow = at risk, Red = behind schedule
3. A bulleted list of what's been completed this week
4. A bulleted list of blockers or concerns
5. A one-sentence next step for next week

Status updates:
{status_updates}
```

---

## CUSTOMIZATION TIPS

**To make prompts faster:** Remove the "Format EXACTLY like this" sections — but understand output consistency will drop.

**To make prompts more accurate:** Add "If you're not sure, say 'not enough information' instead of guessing."

**To make outputs shorter:** Add "Keep it under [X] words" to any prompt.

**To make outputs match your brand voice:** Add "Write in the style of [person or company]" to any prompt.