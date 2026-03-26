#!/usr/bin/env python3
"""
Build a YouTube Growth Master Plan DOCX using only Python stdlib (zipfile + xml).
A .docx is just a ZIP containing XML files.
"""
import zipfile, textwrap, io, datetime, os

OUT = "/workspace/YouTube_Growth_Master_Plan_March2026.docx"

# ── helpers ────────────────────────────────────────────────────────────────────

def esc(s):
    return (s.replace("&","&amp;").replace("<","&lt;")
              .replace(">","&gt;").replace('"',"&quot;"))

def para(text="", bold=False, italic=False,
         size=24, color="000000", align="left",
         space_before=0, space_after=120, indent=0, bullet=False):
    """Return a <w:p> XML string."""
    a = {"left":"start","center":"center","right":"end"}.get(align,"start")
    bv = "<w:b/>" if bold else ""
    iv = "<w:i/>" if italic else ""
    ppr_extra = ""
    if bullet:
        ppr_extra = (
            '<w:numPr>'
            '<w:ilvl w:val="0"/>'
            '<w:numId w:val="1"/>'
            '</w:numPr>'
        )
    ind = f'<w:ind w:left="{indent}"/>' if indent else ""
    sp  = f'<w:spacing w:before="{space_before}" w:after="{space_after}"/>'
    jc  = f'<w:jc w:val="{a}"/>'
    runs = ""
    if text:
        # Allow simple **bold** markers
        parts = text.split("**")
        for i, part in enumerate(parts):
            if not part:
                continue
            rb = "<w:b/>" if (i % 2 == 1) else bv
            ri = iv
            runs += (
                f'<w:r>'
                f'<w:rPr>{rb}{ri}'
                f'<w:sz w:val="{size}"/>'
                f'<w:color w:val="{color}"/>'
                f'</w:rPr>'
                f'<w:t xml:space="preserve">{esc(part)}</w:t>'
                f'</w:r>'
            )
    return (
        f'<w:p>'
        f'<w:pPr>{ppr_extra}{sp}{jc}{ind}</w:pPr>'
        f'{runs}'
        f'</w:p>'
    )

def h1(text, color="1069AD"):
    return para(text, bold=True, size=44, color=color,
                space_before=320, space_after=160, align="left")

def h2(text, color="1A1A2E"):
    return para(text, bold=True, size=28, color=color,
                space_before=200, space_after=120, align="left")

def h3(text, color="333333"):
    return para(text, bold=True, size=24, color=color,
                space_before=160, space_after=80, align="left")

def body(text, color="222222", bold=False, space_after=100):
    return para(text, bold=bold, size=22, color=color, space_after=space_after)

def bul(text, bold_prefix=None):
    if bold_prefix:
        t = f"**{bold_prefix}** {text}"
    else:
        t = text
    return para(t, size=21, color="333333", bullet=True,
                indent=360, space_after=80)

def divider():
    return (
        '<w:p>'
        '<w:pPr>'
        '<w:pBdr>'
        '<w:bottom w:val="single" w:sz="6" w:space="1" w:color="BBBBBB"/>'
        '</w:pBdr>'
        '<w:spacing w:before="160" w:after="160"/>'
        '</w:pPr>'
        '</w:p>'
    )

def page_break():
    return (
        '<w:p><w:r><w:br w:type="page"/></w:r></w:p>'
    )

def video_idea(num, emoji, title, why, fmt, length, hook):
    parts = [
        h3(f"{emoji} Video Idea #{num}: {title}", color="1069AD"),
        bul(why, "Why it works:"),
        bul(fmt, "Format:"),
        bul(length, "Length:"),
        bul(hook, "Hook:"),
    ]
    return "\n".join(parts)

# ── document body ──────────────────────────────────────────────────────────────

today = datetime.date.today().strftime("%B %d, %Y")

paragraphs = []

# COVER
paragraphs += [
    para("", space_before=800),
    para("🎬 YouTube Growth Master Plan", bold=True, size=52,
         color="1069AD", align="center", space_after=80),
    para("4-Channel Content Strategy  |  March 2026", size=26,
         color="555555", align="center", space_after=60),
    para("Dashon McFarlane", bold=True, size=24,
         color="222222", align="center", space_after=60),
    para(f"Generated: {today}", size=20, color="888888",
         align="center", space_after=200),
    para("🌿 NaturalHealingRevival   •   💰 Richer By Design", size=24,
         color="333333", align="center", space_after=40),
    para("🌍 Aria's Great Adventures   •   🌌 Dashon McFarlane", size=24,
         color="333333", align="center"),
    page_break(),
]

# EXECUTIVE SUMMARY
paragraphs += [
    h1("📋 Executive Summary"),
    body("This content strategy report covers all 4 of your YouTube channels, each starting from 0 subscribers. "
         "Based on live research conducted in March 2026, this plan provides channel-specific trending topics, "
         "optimized video titles, best formats for growth, and a 90-day launch playbook."),
    body(""),
    body("Universal Growth Strategy (All Channels):", bold=True, color="1069AD"),
    bul("Post 3–5 Shorts/week as a discovery funnel into 1–2 long-form videos/week"),
    bul("Consistency + SEO-optimized titles beat viral chasing every time"),
    bul("Shorts = Discovery engine  |  Long-form = Trust + Revenue"),
    body(""),
    body("Channel Overview:", bold=True, color="1069AD"),
    bul("🌿 NaturalHealingRevival — Natural Health & Wellness — CPM: $15–$40+"),
    bul("💰 Richer By Design — Personal Finance & Wealth — CPM: $12–$22"),
    bul("🌍 Aria's Great Adventures — Kids & Family Adventure — CPM: $5–$12"),
    bul("🌌 Dashon McFarlane — Personal Brand / Marketing — CPM: $8–$18"),
    divider(),
    page_break(),
]

# ── CHANNEL 1: NATURAL HEALING REVIVAL ────────────────────────────────────────
paragraphs += [
    h1("🌿 Channel 1: NaturalHealingRevival", color="2E7D32"),
    h2("Niche: Natural Health, Herbal Remedies & Holistic Wellness", color="388E3C"),

    h2("🔥 Top Trends Right Now (March 2026)", color="2E7D32"),
    bul("Adaptogens & Stress Herbs — Ashwagandha, Rhodiola, Holy Basil, Lion's Mane exploding. Search demand for cortisol/burnout solutions at all-time high."),
    bul("Gut Microbiome & Digestive Healing — Gut-brain axis content generates millions of views. 'Healing your gut naturally' and fermented food protocols dominate."),
    bul("Natural Longevity & Anti-Aging — Audiences want NAD+ boosters, red light therapy, and ancestral diets WITHOUT expensive lab tests."),
    bul("Liver Detox & Mineral Health — Viral Shorts series on copper/liver detox spreading rapidly. Castor oil, dandelion root, milk thistle spiking in search."),
    bul("'Doctors vs. Nature' Controversy Content — Barbara O'Neill-style content ('What Doctors Won't Tell You') drives enormous organic discovery."),
    bul("Metabolic Health & Blood Sugar — Naturally — Natural insulin sensitivity and anti-inflammatory content overlapping with anti-GLP-1 drug narrative."),

    h2("🎬 Best Format", color="2E7D32"),
    bul("Post 3–5 Shorts/week with shocking hooks (e.g. 'This 1 herb lowers cortisol in 3 days')"),
    bul("Each Short funnels viewers to a full long-form video — health CPM is $15–$40+ per 1,000 views"),
    bul("Talking head builds expert trust; voiceover + B-roll works for listicle/faceless channels"),
    bul("SEO title formula: [Specific Benefit] + [Time Frame] + [Authority Signal or Curiosity Trigger]"),

    h2("🏆 Top 5 Video Ideas", color="2E7D32"),
    video_idea(1, "🌿",
        "\"The Ancient Herb That Lowers Cortisol in 7 Days (Doctors Are Finally Admitting It)\"",
        "Taps the cortisol/stress epidemic; 'doctors finally admitting' triggers curiosity; '7 days' gives a concrete promise.",
        "Talking head + supplement visuals, 10–14 min",
        "10–14 minutes",
        "\"Most people are walking around with cortisol levels 3x higher than they should be. This herb has been used for 3,000 years.\""),
    video_idea(2, "🦠",
        "\"I Healed My Gut in 30 Days Using Only These 4 Forgotten Remedies (No Supplements)\"",
        "'30 days' transformation hook; 'forgotten remedies' = natural wisdom angle; 'no supplements' attracts budget-conscious viewers.",
        "Story-driven talking head or voiceover + B-roll, 12–16 min",
        "12–16 minutes",
        "\"I spent thousands on probiotics and gut tests. Then I found these 4 remedies that cost almost nothing.\""),
    video_idea(3, "⏳",
        "\"Scientists Discovered This Herb Reverses Aging at the Cellular Level (And It Costs $3)\"",
        "Science credibility + natural angle + affordability. Longevity content growing 40%+ YoY.",
        "Voiceover with graphics + talking head outro, 10–15 min",
        "10–15 minutes",
        "\"Longevity researchers just published findings on this — and you can find it at any grocery store for under $3.\""),
    video_idea(4, "🫀",
        "\"Do This Every Morning for 7 Days and Watch What Happens to Your Liver (Ancient Remedy)\"",
        "Challenge-style format drives retention. Liver detox is viral in 2026 Shorts. 'Ancient remedy' = wisdom-based positioning.",
        "Challenge/series format, talking head, 8–12 min",
        "8–12 minutes",
        "\"Your liver processes 500+ functions every day. Most people are unknowingly destroying it.\""),
    video_idea(5, "⚡",
        "\"STOP Taking These 5 'Healthy' Supplements — They're Making Your Inflammation WORSE\"",
        "Pattern-interrupt title challenges assumed behavior. Controversy angle drives shares and comments.",
        "Talking head, direct/authoritative tone, 12–15 min",
        "12–15 minutes",
        "\"I know this is going to be controversial. But after studying the research, I can't stay silent anymore.\""),

    h2("📈 90-Day Growth Tips", color="2E7D32"),
    bul("Claim a micro-identity: 'The Herb Channel,' 'Natural Liver Health,' or 'Ancestral Healing' outperforms broad 'wellness'"),
    bul("Post Shorts daily for the first 90 days — use trending audio + 'did you know this herb…' hooks"),
    bul("Launch a '30-Day Herbal Reset Challenge' series to retain viewers across multiple videos"),
    bul("High-CPM keywords: liver detox, cortisol, longevity herbs, gut microbiome, adaptogens for stress"),
    bul("Personal health data stories ('I tested my cortisol and fixed it naturally') are surging in 2026"),
    divider(),
    page_break(),
]

# ── CHANNEL 2: RICHER BY DESIGN ───────────────────────────────────────────────
paragraphs += [
    h1("💰 Channel 2: Richer By Design", color="1565C0"),
    h2("Niche: Personal Finance, Wealth Building & Intentional Wealth Design", color="1976D2"),

    h2("🔥 Top Trends Right Now (March 2026)", color="1565C0"),
    bul("Tariff Economy Anxiety — Trump's 2026 tariffs averaging $700 tax increase per household. Massive search demand for recession-proofing and inflation hedges."),
    bul("AI + Wealth Overlap — Finance content combining AI investment strategy is getting outsized reach across YouTube."),
    bul("Interest Rates & 'Money Reset' — Fed rate cuts expected March 2026. Content around high-yield savings, CD ladders, and bond strategies spiking."),
    bul("Anti-Passive-Income Backlash — Viral content debunking 'easy passive income' gurus. Authentic, results-oriented creators winning audience trust."),
    bul("'Wealth Design' & Financial Identity — Micro-niche around designing your financial life intentionally is underserved and growing fast."),
    bul("Generational Finance (Gen Z & Millennials) — Content for Gen Z navigating housing unaffordability, student debt, and side hustles is surging."),

    h2("🎬 Best Format", color="1565C0"),
    bul("Lead with long-form talking head (10–18 min) — finance viewers trust faces; personal brand is the 'designed wealth' identity"),
    bul("Use Shorts as teasers — repurpose 45–60 sec clips, posted 24hrs before the long-form as curiosity-gap hooks"),
    bul("Finance is YouTube's highest-paying niche — target $12–$22 CPM; long-form earns it, Shorts don't"),
    bul("Batch-produce: 1 long-form per week + 2–3 Shorts from each video"),

    h2("🏆 Top 5 Video Ideas", color="1565C0"),
    video_idea(1, "📊",
        "\"Trump's Tariffs Will Cost You $700 This Year — Here's How to Get It Back\"",
        "Ties a breaking news trigger to actionable personal finance. High search volume, emotional stakes, solves a real problem.",
        "Talking head + screen graphics, 12–15 min",
        "12–15 minutes",
        "\"Everyone is talking about tariffs. Nobody is telling you what to actually DO with your money right now.\""),
    video_idea(2, "💡",
        "\"The Passive Income Lie Nobody's Talking About (And What Actually Works in 2026)\"",
        "Taps massive passive income search volume while differentiating as the honest voice. Speaks to 'Richer By Design' ethos.",
        "Story-driven talking head, 15–18 min",
        "15–18 minutes",
        "\"I made $4,700 in so-called passive income last year. After expenses? Negative $200. Here's what nobody tells you.\""),
    video_idea(3, "⏰",
        "\"The Fed Is Cutting Rates in March — Move Your Money NOW Before It's Too Late\"",
        "Urgency + specific timing + FOMO. Real event happening NOW (March 2026). Searchable, timely, actionable.",
        "Voiceover with charts + talking head outro, 10–12 min",
        "10–12 minutes",
        "\"If you have money in a regular savings account right now, you are actively losing purchasing power.\""),
    video_idea(4, "🎨",
        "\"Stop Saving, Start Designing: The Wealth Blueprint Nobody Teaches You\"",
        "Positions 'Richer By Design' as a philosophy. Appeals to people tired of generic budgeting advice. Builds brand identity.",
        "Talking head, cinematic/aesthetic visuals, 15–20 min",
        "15–20 minutes",
        "\"Every financial guru says: save more, spend less. Nobody ever taught you how to actually design a wealthy life.\""),
    video_idea(5, "🤖",
        "\"AI Is Changing How the Rich Invest — Here's How to Do It With $1,000\"",
        "Combines two massive trends (AI + personal finance). Democratizes topic for average viewers. Strong affiliate potential.",
        "Screen share + talking head, 12–15 min",
        "12–15 minutes",
        "\"The wealthiest investors in the world are quietly using AI to make decisions in seconds that used to take weeks.\""),

    h2("📈 90-Day Growth Tips", color="1565C0"),
    bul("Own a unique framework — create a proprietary system like 'The Design Wealth Method' to build a signature brand identity"),
    bul("Post tariff/rate cut content ASAP — topical content within the news cycle captures trending search traffic immediately"),
    bul("Finance CPM is gold ($12–$22) — avoid mixing off-niche content to protect your ad revenue rate"),
    bul("Build an email list from Day 1 — finance audiences have high willingness to subscribe to newsletters"),
    bul("Collab with adjacent creators in productivity, minimalism, and entrepreneurship to expand reach"),
    divider(),
    page_break(),
]

# ── CHANNEL 3: ARIA'S GREAT ADVENTURES ────────────────────────────────────────
paragraphs += [
    h1("🌍 Channel 3: Aria's Great Adventures", color="E65100"),
    h2("Niche: Kids & Family Adventure | Edutainment | Live-Action Exploration", color="F57C00"),

    h2("🔥 Top Trends Right Now (March 2026)", color="E65100"),
    bul("'Edutainment' Adventure Content is King — Combining real outdoor exploration with learning (nature facts, science, geography) shows highest retention rates."),
    bul("Comfort & Familiarity Beats Viral Chasing — Kids rewatch content obsessively. Recognizable characters + consistent tone outperform trend-chasers."),
    bul("Parent-Safe = Algorithm Safe — 80% of parents with kids under 11 watch YouTube with them. Trustworthy channels get more algorithmic support."),
    bul("Spanish + Multilingual Content Exploding — 5 of the top 30 fastest-growing kids channels in 2026 are Spanish-language. Adding subtitles drives huge international growth."),
    bul("STEM/Science Adventures Surging — Coding basics, nature experiments, and interactive phonics content pulling millions of views in March 2026."),
    bul("Urban/Nature Exploration Gap — City wildlife, backyard science, local nature walks for kids have loyal audiences and very low competition."),

    h2("🎬 Best Format", color="E65100"),
    bul("Live-action adventure vlog with Aria as the lead — creates personal connection and authenticity (NOT animation — too expensive to compete with 198M-sub channels like Cocomelon)"),
    bul("Supplement with simple animated graphics/overlays for facts — the 'Bluey effect' (fun for kids AND parents)"),
    bul("Post 3–5 Shorts/week (teaser moments from adventures) + 2–3 long-form vlogs per week"),
    bul("Launch a recurring named series immediately: 'Aria's World Wonders,' 'Aria's Science Adventures'"),
    bul("Target the 6–10 age group specifically — sweet spot for live-action adventure content"),

    h2("🏆 Top 5 Video Ideas", color="E65100"),
    video_idea(1, "🕵️",
        "\"We Found a SECRET Underground World Kids Can Explore!! (Family Adventure Vlog)\"",
        "'SECRET' + 'underground' triggers curiosity gap clicks. Family vlog tag pulls in parent viewers. High search volume for kids adventure destinations.",
        "10–15 min long-form + 60s Short teaser of the 'big reveal'",
        "10–15 minutes",
        "\"We were just hiking a normal trail when Aria spotted something NOBODY expected to find...\""),
    video_idea(2, "🦎",
        "\"Aria Discovers 5 WILD Animals in Our Backyard (You Won't Believe #3!)\"",
        "Number list titles get 35% higher CTR. 'You Won't Believe' triggers completion. Local/backyard angle is relatable for all families.",
        "8–12 min educational adventure + daily Short of each animal reveal",
        "8–12 minutes",
        "\"Aria, what's that moving in the grass?! Wait... is that a...?!\""),
    video_idea(3, "🏆",
        "\"EXTREME Kids Obstacle Course Challenge in the JUNGLE!! (Last One Wins!)\"",
        "'Challenge,' 'Extreme,' and 'Last One Wins' are proven click triggers. Competitive element keeps kids watching to see the outcome.",
        "12–18 min high energy vlog + Short of hardest obstacle",
        "12–18 minutes",
        "\"Aria is taking on the world's toughest jungle obstacle course — and ONLY one kid can win!\""),
    video_idea(4, "🎢",
        "\"We Spent 24 HOURS at the WORLD'S BIGGEST Kids' Theme Park! (Aria's Reaction)\"",
        "'24 Hours' format is evergreen and highly searchable. Emotional reaction shot in title drives clicks. Theme park content perennially top-performing.",
        "15–20 min full-day vlog + multiple Shorts (rides, food, surprises)",
        "15–20 minutes",
        "\"We told Aria we were going grocery shopping... then THIS happened.\""),
    video_idea(5, "🌋",
        "\"Aria Teaches Kids About VOLCANOES… Then Makes One ERUPT! (Science Adventure Ep. 1)\"",
        "Episodic label ('Ep. 1') builds return viewers. 'Teaches + shows' hits the edutainment sweet spot parents want.",
        "Series anchor — 10 min + 30s Short of the eruption moment",
        "10–12 minutes",
        "\"Today, Aria is your science teacher... and class is about to get EXPLOSIVE!\""),

    h2("📈 90-Day Growth Tips", color="E65100"),
    bul("Brand Aria as THE Explorer — give her a signature item (explorer hat, backpack, catchphrase). Kids watch FOR Aria, not just the topic."),
    bul("COPPA compliance is non-negotiable — mark appropriate videos as 'Made for Kids' to avoid demonetization"),
    bul("Thumbnail formula: close-up of Aria's face showing strong emotion + bold 3-word text + vivid background"),
    bul("End every video with a question ('Where should Aria explore next?') to drive comment engagement and algorithm signals"),
    bul("The 'girl-led explorer' niche is UNTAPPED — there is NO dominant girl-led kids adventure channel at scale. This is Aria's competitive edge."),
    bul("Cross-promote on Instagram Reels — kids content creators are seeing 40–60% additional reach at zero extra production cost"),
    divider(),
    page_break(),
]

# ── CHANNEL 4: DASHON McFARLANE ───────────────────────────────────────────────
paragraphs += [
    h1("🌌 Channel 4: Dashon McFarlane", color="4A148C"),
    h2("Niche: Personal Branding, Entrepreneurship & Marketing", color="6A1B9A"),

    h2("🔥 Top Trends Right Now (March 2026)", color="4A148C"),
    bul("YouTube Shorts Hit 90 Billion Views/Day — Short-form is the #1 discovery engine for new channels in 2026. Non-negotiable for growth from zero."),
    bul("Quality > Quantity Era — Daily posting is dead. Fewer, better videos with strong hooks and SEO optimization consistently win."),
    bul("Serialized Content Exploding — 57% of consumers want creator SERIES, not one-offs. Episodic content drives return viewers and subscriber loyalty."),
    bul("Authentic > Polished — Raw, talking-head, unscripted content outperforms high-gloss production. Real beats manufactured every time."),
    bul("AI Content Backlash — 46% of audiences are uncomfortable with AI influencers. Demand for REAL human voices has never been higher."),
    bul("YouTube = New Google for Gen Z — 50%+ of Gen Z searches YouTube instead of Google. SEO-optimized video titles are more important than ever."),
    bul("The Contrarian Hook Dominates — Videos titled 'Stop doing X' / 'The old way is DEAD' are spiking CTR across all creator niches."),

    h2("🎬 Best Format", color="4A148C"),
    bul("Go Talking Head — personal branding is LITERALLY about you. Your face, voice, and energy ARE the brand."),
    bul("Use Shorts as trailers — post 30–60 sec clips from each long-form video 24hrs before the full video"),
    bul("Launch a content SERIES ('Dashon's Brand Breakdown' or 'Marketing Mondays') for appointment viewing"),
    bul("Production tip: Clean background + good lighting + iPhone + Rode mic = 80% of the quality you need"),
    bul("Cadence: 1 long-form (12–20 min) per week + 3 Shorts per week"),

    h2("🏆 Top 5 Video Ideas", color="4A148C"),
    video_idea(1, "📈",
        "\"I Built a Personal Brand From 0 to 10K Subscribers in 90 Days — Here's My Exact Strategy\"",
        "Social proof + specific numbers + time frame = irresistible click. Search-optimized for 'how to grow YouTube channel' queries.",
        "Talking head + screen recording/B-roll, 14–18 min",
        "14–18 minutes",
        "\"Most people spend 2 years trying to grow on YouTube. I figured out how to do it in 90 days — including what FAILED.\""),
    video_idea(2, "🔥",
        "\"The Personal Branding Strategy EVERYONE Is Teaching Is Completely Wrong (Do This Instead)\"",
        "Contrarian hooks are the #1 performing title format in 2026. Triggers curiosity and challenges existing beliefs.",
        "Talking head, high energy, fast cuts, 10–14 min",
        "10–14 minutes",
        "\"Every guru tells you: post every day, pick a niche, be consistent. But what if that's exactly why you're stuck at 200 subscribers?\""),
    video_idea(3, "🤖",
        "\"These 7 AI Tools Are Making Personal Brand Creators Rich in 2026 (I Tested All of Them)\"",
        "AI is the hottest search category on YouTube. Combining it with personal brand monetization = massive search volume.",
        "Screen recording tutorial + talking head intro/outro, 15–20 min",
        "15–20 minutes",
        "\"The people winning online right now aren't working harder — they've plugged into these 7 tools that automate 80% of their content workflow.\""),
    video_idea(4, "🎯",
        "\"How to Start a YouTube Channel in 2026 With NO Audience, NO Equipment, and NO Experience\"",
        "'How to start a YouTube channel' is a perennial top-10 search term. The 2026 angle + NO [obstacle] formula is hyper-clickable for beginners.",
        "Structured tutorial, talking head with clear sections, 18–25 min",
        "18–25 minutes",
        "\"You don't need a ring light. You don't need a fancy camera. Here's the actual truth about starting from zero.\""),
    video_idea(5, "💀",
        "\"Why 99% of Personal Brand Channels FAIL in Their First Year (And the 1 Shift That Changes Everything)\"",
        "Fear-based framing + promise of 'the secret' = top CTR formula. Aligns with self-improvement + entrepreneurship crossover audience.",
        "Storytelling talking head, vulnerability-forward, 12–16 min",
        "12–16 minutes",
        "\"I studied 100 personal brand channels that died before hitting 1,000 subscribers. Every single one made the same mistake.\""),

    h2("📈 90-Day Growth Tips", color="4A148C"),
    bul("Niche down ruthlessly — 'Entrepreneurship' is too broad. Own 'personal brand YouTube strategy for first-gen entrepreneurs' or similar"),
    bul("SEO first — treat your channel like a search engine. Every video must answer a real question people type into YouTube"),
    bul("Comment on 10 videos/day in your niche — real engagement builds visibility and community"),
    bul("Custom thumbnails on EVERY video — they drive 154% more clicks than auto-generated"),
    bul("Repurpose every long-form into: 3 Shorts, 1 LinkedIn post, 1 Twitter/X thread"),
    bul("Track Watch Time + Click-Through Rate (CTR), NOT subscriber count — these drive the algorithm"),
    divider(),
    page_break(),
]

# ── MASTER CALENDAR ────────────────────────────────────────────────────────────
paragraphs += [
    h1("📅 90-Day Master Launch Calendar", color="1A1A2E"),
    body("Use this schedule across all 4 channels to build momentum simultaneously.", color="444444"),

    h2("Month 1 — Foundation (Weeks 1–4)", color="1A1A2E"),
    bul("Set up all 4 channels correctly: banner art, About section, channel trailer, featured video"),
    bul("Post the #1 Video Idea for each channel in Week 1 — your 'anchor' video for each channel"),
    bul("Launch daily Shorts on ALL channels from Day 1 — even 30-second clips work"),
    bul("NaturalHealingRevival: Start the 'Herb of the Week' short-form series"),
    bul("Richer By Design: Drop the tariff video IMMEDIATELY while it's in the news cycle"),
    bul("Aria's Great Adventures: Launch 'Aria's World Wonders — Episode 1' as the series anchor"),
    bul("Dashon McFarlane: Post your origin story / personal brand manifesto video"),

    h2("Month 2 — Discovery (Weeks 5–8)", color="1A1A2E"),
    bul("3 Shorts/week per channel + 1 long-form/week per channel = 12 Shorts + 4 long-forms total weekly"),
    bul("Optimize every title with YouTube search intent (use VidIQ or TubeBuddy free plans)"),
    bul("NaturalHealingRevival: Launch '30-Day Herbal Reset Challenge' series"),    bul("Richer By Design: Post the 'Wealth Design Blueprint' brand cornerstone video"),
    bul("Aria's Great Adventures: Add Spanish subtitles to top 5 videos for international reach"),
    bul("Dashon McFarlane: Launch 'Marketing Mondays' weekly series"),

    h2("Month 3 — Authority (Weeks 9–12)", color="1A1A2E"),
    bul("Increase Shorts to 5/week per channel using repurposed long-form clips"),
    bul("Identify top 3 performing videos per channel and double down on similar topics"),
    bul("Begin outreach for collaborations in adjacent niches"),
    bul("NaturalHealingRevival: Add affiliate links for herbs/supplements (high-converting in health niche)"),
    bul("Richer By Design: Launch email newsletter / lead magnet from YouTube CTA"),
    bul("Aria's Great Adventures: Community post asking 'Where should Aria go next?' to drive votes/engagement"),
    bul("Dashon McFarlane: Publish 'Results after 90 Days' transparency video — builds massive trust"),
    divider(),
    page_break(),
]

# ── UNIVERSAL RULES ────────────────────────────────────────────────────────────
paragraphs += [
    h1("⚡ Universal Rules for All 4 Channels", color="B71C1C"),
    bul("Thumbnails Are Everything — Close-up face with strong emotion + bold 3-word text + vivid color = highest CTR. Test 3 per video in the first week.", "Rule 1:"),
    bul("Post Consistently, Not Constantly — 1 quality long-form + 3–5 Shorts per week beats daily mediocre uploads every time.", "Rule 2:"),
    bul("Shorts = Discovery, Long-Form = Loyalty — Shorts get new eyes on your channel. Long-form converts viewers into subscribers and earns real ad revenue.", "Rule 3:"),
    bul("SEO Your Titles Before Posting — YouTube IS a search engine. Every title must answer a question people are actually searching.", "Rule 4:"),
    bul("The First 30 Seconds Win or Lose Everything — Hook viewers immediately with the promise, pain, or payoff — or they're gone.", "Rule 5:"),
    bul("Engagement Signals Drive the Algorithm — Comments > Likes > Views for the algorithm. End every video with a specific question.", "Rule 6:"),
    bul("Be Patient — Most channels hit their first viral video between video 20 and 40. Don't quit before the breakthrough.", "Rule 7:"),
    divider(),
    para("YouTube Growth Master Plan — Generated by MaxClaw AI | March 2026",
         size=18, color="AAAAAA", align="center", space_before=200),
    para("Research based on live YouTube, SEO, and industry data from March 2026.",
         size=18, color="AAAAAA", align="center"),
]

# ── XML assembly ───────────────────────────────────────────────────────────────

body_xml = "\n".join(paragraphs)

# numbering XML (for bullets)
NUMBERING_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:aink="http://schemas.microsoft.com/office/drawing/2016/ink"
  xmlns:am3d="http://schemas.microsoft.com/office/drawing/2017/model3d"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:oel="http://schemas.microsoft.com/office/2019/extlst"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
  xmlns:w10="urn:schemas-microsoft-com:office:word"
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
  xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"
  xmlns:w16cex="http://schemas.microsoft.com/office/word/2018/wordml/cex"
  xmlns:w16cid="http://schemas.microsoft.com/office/word/2016/wordml/cid"
  xmlns:w16="http://schemas.microsoft.com/office/word/2018/wordml"
  xmlns:w16sdtdh="http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash"
  xmlns:w16se="http://schemas.microsoft.com/office/word/2015/wordml/symex"
  xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"
  xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk"
  xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
  xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
  mc:Ignorable="w14 w15 w16se w16cid w16 w16cex w16sdtdh wp14">
  <w:abstractNum w:abstractNumId="0">
    <w:multiLevelType w:val="hybridMultilevel"/>
    <w:lvl w:ilvl="0">
      <w:start w:val="1"/>
      <w:numFmt w:val="bullet"/>
      <w:lvlText w:val="•"/>
      <w:lvlJc w:val="left"/>
      <w:pPr>
        <w:ind w:left="720" w:hanging="360"/>
      </w:pPr>
      <w:rPr>
        <w:sz w:val="20"/>
      </w:rPr>
    </w:lvl>
  </w:abstractNum>
  <w:num w:numId="1">
    <w:abstractNumId w:val="0"/>
  </w:num>
</w:numbering>'''

DOCUMENT_XML = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
  xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"
  xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
  mc:Ignorable="w14 w15">
  <w:body>
    {body_xml}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>
    </w:sectPr>
  </w:body>
</w:document>'''

CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml"
    ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/numbering.xml"
    ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
  <Override PartName="/word/settings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
</Types>'''

RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
    Target="word/document.xml"/>
</Relationships>'''

WORD_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering"
    Target="numbering.xml"/>
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings"
    Target="settings.xml"/>
</Relationships>'''

SETTINGS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:defaultTabStop w:val="708"/>
</w:settings>'''

# ── Write ZIP ──────────────────────────────────────────────────────────────────
with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    z.writestr("[Content_Types].xml", CONTENT_TYPES)
    z.writestr("_rels/.rels", RELS)
    z.writestr("word/_rels/document.xml.rels", WORD_RELS)
    z.writestr("word/document.xml", DOCUMENT_XML)
    z.writestr("word/numbering.xml", NUMBERING_XML)
    z.writestr("word/settings.xml", SETTINGS)

size_kb = os.path.getsize(OUT) // 1024
print(f"SUCCESS: {OUT} ({size_kb} KB)")
