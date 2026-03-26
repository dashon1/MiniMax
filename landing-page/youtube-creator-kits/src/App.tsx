import { useState } from "react";

const kits = [
  {
    id: 1,
    name: "Natural Health & Wellness",
    emoji: "🌿",
    price: 27,
    color: "from-green-500 to-emerald-600",
    badge: "Most Popular",
    badgeColor: "bg-green-500",
    topic: "\"The Silent Cortisol Crisis\"",
    bullets: [
      "2,881-word word-for-word script",
      "Complete SEO package (48 tags, 5 titles, chapters)",
      "Professional AI-generated thumbnail",
      "Quick-start README guide",
      "Niche research & trend analysis",
      "Monetization & channel growth tips",
    ],
    gumroad: "https://microtechlink.gumroad.com/l/jijih",
    payhip: "https://payhip.com/b/qj0Xs",
  },
  {
    id: 2,
    name: "Personal Finance & Wealth",
    emoji: "💰",
    price: 27,
    color: "from-blue-500 to-indigo-600",
    badge: "Trending NOW",
    badgeColor: "bg-blue-500",
    topic: "\"Trump Tariffs: $700/Year Hidden Tax\"",
    bullets: [
      "2,402-word word-for-word script",
      "Complete SEO package (48 tags, 5 titles, chapters)",
      "Professional AI-generated thumbnail",
      "Quick-start README guide",
      "Financial disclaimer included",
      "Monetization & channel growth tips",
    ],
    gumroad: "https://microtechlink.gumroad.com/l/enenzu",
    payhip: "https://payhip.com/b/Dcyo2",
  },
  {
    id: 3,

    name: "Kids & Family Adventure",
    emoji: "🌋",
    price: 27,
    color: "from-orange-500 to-red-600",
    badge: "COPPA Compliant",
    badgeColor: "bg-orange-500",
    topic: "\"Aria's Volcano Explosion — Ep.1\"",
    bullets: [
      "3,123-word word-for-word script",
      "COPPA-compliant SEO package",
      "Professional AI-generated thumbnail",
      "Quick-start README guide",
      "Experiment supplies list included",
      "Monetization & channel growth tips",
    ],
    gumroad: "https://microtechlink.gumroad.com/l/vzxkw",
    payhip: "https://payhip.com/b/3jM4t",
  },
  {
    id: 4,
    name: "Personal Branding & Marketing",
    emoji: "🎯",
    price: 27,
    color: "from-purple-500 to-pink-600",
    badge: "High RPM Niche",
    badgeColor: "bg-purple-500",
    topic: "\"Why Nobody Knows Your Name Yet\"",
    bullets: [
      "3,203-word word-for-word script",
      "Complete SEO package (48 tags, 5 titles, chapters)",
      "Professional AI-generated thumbnail",
      "Quick-start README guide",
      "Signature \"Signal → System → Sell\" framework",
      "Monetization & channel growth tips",
    ],
    gumroad: "https://microtechlink.gumroad.com/l/avndc",
    payhip: "https://payhip.com/b/cdn5k",
  },
];

const steps = [
  { icon: "📥", title: "Download Your Kit", desc: "Instant delivery after purchase. Open the files in any text editor." },
  { icon: "🎙️", title: "Record Voiceover", desc: "Read the script in your own voice — or use a free AI voice tool like ElevenLabs." },
  { icon: "✂️", title: "Edit in CapCut (Free)", desc: "Sync your voiceover, add visuals, add the thumbnail. Takes 2-3 hours." },
  { icon: "🚀", title: "Upload & Publish", desc: "Paste the SEO package. Post the Shorts clip. Watch the views come in." },
];

const faqs = [
  {
    q: "Do I need to be on camera?",
    a: "Absolutely not. Every kit is designed specifically for faceless channels. The scripts are written for voiceover, the b-roll footage is AI-generated, and the thumbnails don't include a human face.",
  },
  {
    q: "What if I can't do my own voiceover?",
    a: "No problem. ElevenLabs has a free tier with incredibly natural-sounding AI voices. Murf.ai and Play.ht are great alternatives. We include a guide in every kit's README.",
  },
  {
    q: "Do I need video editing experience?",
    a: "No. CapCut (free, desktop + mobile) is beginner-friendly and has everything you need. Import the b-roll, layer your voiceover, add the thumbnail. Most people finish their first video in under 3 hours.",
  },
  {
    q: "How fast can I post my first video?",
    a: "Most buyers post within 24–48 hours of downloading. You have everything done for you — script, SEO, thumbnail, footage. The only variable is how quickly you record and edit.",
  },
  {
    q: "Can I use these for multiple channels?",
    a: "Yes — each kit is for personal use across your channels. You own the content you create from it. We just can't allow resale of the raw kit files.",
  },
  {
    q: "What's inside the Mega Bundle?",
    a: "All 4 kits organized into labeled folders — scripts, SEO packages, thumbnails, research, monetization guides, and READMEs for every niche. You save $51 vs buying individually and can test all 4 niches to see which gets traction fastest.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-16 pb-20 px-4">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2563eb 0%, transparent 50%)"}} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-1.5 text-sm text-purple-300 mb-6">
            🔥 March 2026 — Trending Topics Included
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Launch Your YouTube Channel<br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Without Showing Your Face
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Done-for-you YouTube Starter Kits — complete with word-for-word scripts, SEO packages, 
            professional thumbnails, and channel strategy guides. Pick your niche. Download. Post. 
            <strong className="text-white"> No camera. No guessing. No starting from scratch.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kits" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-purple-900/30">
              See All 4 Kits →
            </a>
            <a href="#bundle" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Get the Bundle — $67
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">Instant digital download · No camera needed · Faceless-first design</p>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="bg-gray-900 border-y border-gray-800 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center text-sm text-gray-400">
          <div><span className="text-white font-bold text-lg">4</span><br />Trending Niches</div>
          <div><span className="text-white font-bold text-lg">6</span><br />Files Per Kit</div>
          <div><span className="text-white font-bold text-lg">11,609</span><br />Words of Script</div>
          <div><span className="text-white font-bold text-lg">0</span><br />Camera Required</div>
          <div><span className="text-white font-bold text-lg">48h</span><br />Avg. Time to First Upload</div>
        </div>
      </div>

      {/* WHAT'S INSIDE */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What's Inside Every Kit</h2>
          <p className="text-gray-400 text-center mb-10">6 assets that eliminate every excuse for not posting</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {icon: "📝", label: "Word-for-Word Script", desc: "2,400–3,200 words. Every sentence written. Just record."},
              {icon: "🔍", label: "SEO Package", desc: "5 titles, full description, 48 tags, hashtags, chapters, pinned comment."},
              {icon: "🎨", label: "Thumbnail", desc: "High-CTR design. High contrast, bold text. Drop it in, done."},
              {icon: "📊", label: "Niche Research", desc: "Trending topic analysis, audience insights, and content angle breakdown."},
              {icon: "💡", label: "Monetization Guide", desc: "How to grow fast, qualify for monetization, and maximize revenue."},
              {icon: "📖", label: "Quick-Start README", desc: "Step-by-step guide from download to published. Complete beginners welcome."},
            ].map((item) => (
              <div key={item.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-purple-500/50 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-semibold text-sm mb-2">{item.label}</div>
                <div className="text-xs text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KITS */}
      <section id="kits" className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Niche</h2>
          <p className="text-gray-400 text-center mb-10">All 4 kits use trending March 2026 topics. Pick one — or get all 4 in the bundle.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {kits.map((kit) => (
              <div key={kit.id} className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all">
                <div className={`bg-gradient-to-r ${kit.color} p-6`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-4xl">{kit.emoji}</span>
                      <h3 className="text-xl font-bold mt-2">{kit.name}</h3>
                      <p className="text-white/80 text-sm mt-1">Topic: {kit.topic}</p>
                    </div>
                    <span className={`${kit.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap`}>{kit.badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {kit.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 line-through text-lg mr-2">$87</span>
                      <span className="text-3xl font-extrabold text-green-400">${kit.price}</span>
                      <span className="text-green-400 text-xs font-bold ml-2 bg-green-400/10 px-2 py-0.5 rounded-full">SAVE $60</span>
                    </div>
                    <div className="flex gap-2">
                      <a href={kit.gumroad} className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">
                        Buy Now →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUNDLE */}
      <section id="bundle" className="py-16 px-4 bg-gradient-to-br from-purple-950 to-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">BEST VALUE — SAVE $130</div>
          <h2 className="text-4xl font-extrabold mb-4">YouTube Creator Mega Bundle</h2>
          <p className="text-gray-300 text-lg mb-6">All 4 starter kits in one download. 20 files. 4 niches. Every tool you need to test, launch, and scale.</p>
          <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["🌿 Natural Health", "💰 Personal Finance", "🌋 Kids & Family", "🎯 Personal Branding"].map((k) => (
                <div key={k} className="bg-gray-800 rounded-xl p-3 text-sm font-medium">{k}</div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <div>
                <span className="text-gray-500 line-through text-2xl mr-3">$197</span>
                <span className="text-5xl font-extrabold text-green-400">$67</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2">That's $16.75 per kit — normally $197</p>
          </div>
          <a href="https://microtechlink.gumroad.com/l/afetbg" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-10 py-5 rounded-xl text-xl transition-all shadow-xl shadow-purple-900/40">
            Get the Mega Bundle — $67 →
          </a>
          <p className="text-gray-500 text-sm mt-4">Instant download · Stripe + PayPal accepted · 30-day guarantee</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">From Download to Published in 48 Hours</h2>
          <p className="text-gray-400 text-center mb-10">The entire process — start to first upload.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-500/50 to-transparent z-10" />
                )}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <div className="text-purple-400 text-xs font-bold mb-2">STEP {i + 1}</div>
                  <div className="font-bold mb-2">{step.title}</div>
                  <div className="text-gray-400 text-sm">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-900 transition-colors"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <span className="text-gray-400 text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Your Channel Starts Today.</h2>
          <p className="text-gray-300 text-lg mb-8">
            Stop waiting until you have better equipment, more confidence, or "the perfect idea." 
            The idea is written. The SEO is done. The thumbnail is made. 
            <strong className="text-white"> All you do is press record.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kits" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Get a Single Kit — $27
            </a>
            <a href="#bundle" className="bg-white text-gray-950 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all">
              Get the Bundle — $67 (Best Value)
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">Instant download · No camera needed · Works for complete beginners</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4 text-center text-gray-500 text-sm">
        <p>© 2026 YouTube Creator Kits · Digital products for faceless YouTube channels</p>
        <p className="mt-2">Questions? Email: support@youtubecreactorkits.com</p>
      </footer>
    </div>
  );
}
