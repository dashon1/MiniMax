# Booking Flow Setup
## Calendly / Cal.com Configuration for Automated Call Booking

**Time to set up: 30 minutes | Free tier works**

---

## CALENDLY SETUP (Recommended)

### Step 1: Create Your Event Type

Go to Calendly → Event Types → Create:

**Discovery Call (30 minutes)**
- Name: "Free Discovery Call" or "Strategy Session"
- Duration: 30 minutes (or 45 if your sales cycle is longer)
- Location: Google Meet or Zoom (use a dedicated link or generate automatically)
- Description: Brief 2–3 sentence description of who this is for and what happens on the call
- Invite question: "What's the main challenge you want to discuss?" (this becomes your pre-call intel)
- Buffer time: 5 minutes before and after

### Step 2: Set Your Availability

**For a service business, set these availability rules:**
- Monday–Friday, 9am–5pm (your timezone)
- No same-day bookings (at least 4 hours notice)
- No weekends

**If you are in a different timezone than your clients:**
Set Calendly to show your availability in the lead's timezone, not yours. This is a detail that builds trust.

### Step 3: Configure Notifications

**In Calendly → Notification Settings:**

**Email confirmation to invitee:** ON
- Include: Date, time, location, video link

**Email reminder to yourself:** ON
- 24 hours before: "You have a Discovery Call with [Name]"
- 1 hour before: "Starting in 1 hour"

**In-app reminder:** ON (if using Calendly premium)

### Step 4: Connect to Zapier

**Trigger:** Calendly — Invitee Created
- Connect your Calendly account via OAuth in Zapier
- Test with a real booking to confirm trigger works

**What Zapier pulls from Calendly:**
- Invitee name
- Invitee email
- Event start time
- Event name
- Location (video link)

---

## CAL.COM SETUP (Free Alternative)

### Step 1: Create Your First Event Type

Go to Cal.com → Event Types → Create:

- Name: "Discovery Call"
- Slug: /discovery-call
- Duration: 30 minutes
- Location: [Video call URL — auto-generates a unique Zoom link]
- Description: What to expect on the call

### Step 2: Set Routing (Cal.com Routing Forms)

Cal.com has a built-in routing feature — use this instead of Calendly's qualifying questions:

1. Go to Routing → Create Form
2. Add questions:
   - "What's your budget for this project?" (Multiple choice: under $500 / $500–2000 / $2000+)
   - "What's your main challenge?" (Short text)
   - "Are you ready to book a call?" (Yes/No)
3. Set routing logic:
   - "Yes" → show your booking link
   - "No" → thank them and add to email sequence

### Step 3: Connect to Zapier

**Trigger:** Cal.com — Booking Created
- App: Cal.com via Zapier
- Event: New Booking

---

## THE BOOKING CONFIRMATION EMAIL (Automate This)

Set this up in Zapier as Action 2 of the Booking Triggered Zap:

**To:** [Lead email]
**Subject:** Confirmed — [Your Name] discovery call, [Date]
**Body:**

```
Hi [Name],

Your call is confirmed.

📅 [Date] at [Time] ([Timezone])
⏰ Duration: [30] minutes
🔗 [Video call link — Calendly/Zoom link from invite]

A few things to know before we start:

1. I'll send you a quick prep note 24 hours before the call with 3 questions to think about.
2. There's nothing to prepare beyond that — just show up as you are.
3. If you need to reschedule, click the link in your original email. No charge, no questions asked.

Looking forward to talking soon.

[Your Name]
[Your Website]
```

---

## PRE-CALL EMAIL (Sent 24 Hours Before)

**Send timing:** 24 hours before calendar event starts
**Trigger:** Calendly/Cal.com event in 24 hours (use Zapier delay or schedule trigger)

**Subject:** A few things to think about before tomorrow's call

```
Hi [Name],

Looking forward to our call tomorrow at [Time].

To help me make the most of the [30] minutes, here are 3 questions I'd like you to think about before we speak:

1. Where are you currently with [the problem they mentioned]? What have you already tried?

2. What would "success" look like for you in the next [timeframe]? Be as specific as you can.

3. What's the one thing you most want to make sure we cover on the call?

No need to write anything down or prepare slides. Just think it through before we speak.

See you tomorrow.

[Your Name]
```

---

## POST-CALL EMAIL (Sent 2 Hours After Call Ends)

**Trigger:** Calendar event end time (Google Calendar event ended)
**This is the same as Automation 5 from the CRM SOP**

**Subject:** Notes from our call, [Name]

```
Hi [Name],

Thanks for making the time to talk today. I really enjoyed learning about where you're at.

Here's what I took away from our conversation:
[2–3 sentence summary of what they said they needed]

Next steps we agreed on:
1. [You'll do X] — by [date]
2. [I'll do Y] — by [date]

I'll follow up with [the proposal / pricing / next steps] by [date].

If anything has changed in the last few hours or you have questions, just hit reply.

Talk soon,

[Your Name]
```

---

## CALENDAR BOOKING PAGE SETUP CHECKLIST

Use this to confirm your booking flow is complete:

- [ ] Event type created with correct name and duration
- [ ] Availability set to your real working hours
- [ ] Minimum notice period set (4 hours minimum recommended)
- [ ] Buffer time added (5 minutes before/after)
- [ ] Confirmation email enabled
- [ ] Reminder to yourself set (24h + 1h)
- [ ] Video call link auto-generating OR entered manually
- [ ] Routing form connected (if Cal.com)
- [ ] Zapier trigger tested with real booking
- [ ] Confirmation email Zap tested
- [ ] Pre-call 24h reminder Zap tested

---

## WHERE TO PUT YOUR BOOKING LINK

**The booking link should appear in:**
1. Every email in the qualification sequence (Scripts Q4 and Q5 from the Qualification Scripts file)
2. Your Calendly/Cal.com profile (so people can find it after Googling you)
3. Your LinkedIn profile contact section
4. Your email signature: "Book a free call: [LINK]"
5. Every piece of content you publish (LinkedIn, Twitter, blog)

Make it impossible to miss.

---

*From Zero-to-Automated Lead Gen System — AI Microtechlink*