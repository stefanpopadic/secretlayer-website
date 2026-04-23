export type ServiceSubpage = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  whatItIs: string[];
  included: string[];
  deliverables: string[];
  fitsFunnel: string;
  faqs: { question: string; answer: string }[];
};

export type ServiceGroup = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  subpages: ServiceSubpage[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "web-strategy",
    title: "Web Strategy",
    tagline: "The authority-grade site the 99% will actually come back to.",
    summary:
      "Every page earns its place by giving value before asking for it. Five disciplines that turn your website from a brochure into the first layer of nurture.",
    subpages: [
      {
        slug: "conversion-strategy",
        title: "Conversion Strategy",
        tagline: "Architect the path before the pixels.",
        summary:
          "Map every page, every call-to-action, every micro-conversion. The wireframe of the middle before we design it.",
        whatItIs: [
          "A blueprint of your funnel — not just the website, but the entire journey from first touch to qualified lead.",
          "Six conversion points instead of one. Early-intent, mid-intent, late-intent. Each matched to a real offer.",
          "We design the system first, so when the visuals ship, they ship on top of something that works.",
        ],
        included: [
          "Funnel map of current vs. proposed state",
          "Conversion-point inventory (6+ per site)",
          "Offer architecture for each intent stage",
          "Messaging hierarchy, page by page",
          "Attribution plan tied to each capture point",
          "Success metrics + reporting cadence",
        ],
        deliverables: [
          "Funnel map (Figma)",
          "Page-by-page conversion spec",
          "Offer + lead-magnet matrix",
          "Attribution tagging plan",
        ],
        fitsFunnel:
          "This is the spine. Every service on this site plugs into the conversion strategy — tools, magnets, content, email, attribution. Without it, you ship a pretty website that doesn't know what it's for.",
        faqs: [
          {
            question: "Do I need this if I already have a site?",
            answer:
              "Yes — often more. Most sites have one conversion point and four pages that don't know each other. A conversion strategy audit surfaces the gaps in under two weeks.",
          },
          {
            question: "How is this different from a 'website brief'?",
            answer:
              "A brief lists features. A conversion strategy defines the *system* — what converts, where, why, and how we measure it. Features follow from that, not the other way around.",
          },
          {
            question: "Is this standalone or bundled?",
            answer:
              "Included in the Secret Layer setup. We don't sell it separately — it's the foundation everything else gets built on.",
          },
        ],
      },
      {
        slug: "website-design",
        title: "Website Design",
        tagline: "Editorial, authority-grade, built for attention.",
        summary:
          "Magazine-level design without the magazine-level timeline. Ten to twelve pages that look like they took six months. Shipped in six weeks.",
        whatItIs: [
          "Custom, hand-crafted design — not a template, not a 'design system library' of generic components.",
          "Typography-led. Grid-driven. Built so your visitor remembers your site two days after they left it.",
          "Mobile-first, but not mobile-only. Desktop is where the buyer evaluates you.",
        ],
        included: [
          "Full design system (colors, type, grid, components)",
          "10–14 page designs at the needed fidelity",
          "Interactive prototype for key flows",
          "Motion direction for scroll + hover interactions",
          "Image + illustration direction",
          "Two rounds of structured revisions",
        ],
        deliverables: [
          "Figma file, organized + production-ready",
          "Design system tokens exported",
          "Prototype URL for stakeholder review",
          "Motion + animation spec",
        ],
        fitsFunnel:
          "Design is how you earn the second second of attention. If the first impression is template-level, you've already lost half the 99%. This is the surface that makes them stay long enough to care.",
        faqs: [
          {
            question: "Can I use my existing brand?",
            answer:
              "Yes. We inherit your brand — we're not redoing your logo or palette. We apply it at a level of craft most brand guidelines never reach.",
          },
          {
            question: "How many pages do I get?",
            answer:
              "Typically 10–14 core pages + reusable systems for blog, case study, resource templates. Page count scales with the conversion strategy output.",
          },
          {
            question: "Who does the design?",
            answer:
              "Stefan. Every pixel. No junior designers, no offshore handoff.",
          },
        ],
      },
      {
        slug: "webflow-development",
        title: "Webflow Development",
        tagline: "Hand-built. Fast. Findable by Google and ChatGPT.",
        summary:
          "Every Secret Layer site ships on Webflow — clean markup, semantic HTML, schema injected, performance-budgeted. No page-builder clutter.",
        whatItIs: [
          "Senior Webflow development by Nenad. Not a template customization, not a Figma-to-Webflow export dumped into the CMS.",
          "Performance-first: LCP under 2s, CLS zero, structured data on every page.",
          "Built to be edited. Your team can update content without touching code.",
        ],
        included: [
          "Full production Webflow build",
          "CMS collections (blog, case studies, resources, team)",
          "Schema.org markup per page type",
          "llms.txt + llms-full.txt (AEO)",
          "Performance budget enforced",
          "CMS training for your team",
          "30-day post-launch support",
        ],
        deliverables: [
          "Production Webflow site, deployed",
          "CMS structured + populated with seed content",
          "SEO/AEO technical audit report",
          "Loom walkthrough for your editors",
        ],
        fitsFunnel:
          "Build quality is invisible when it works and catastrophic when it doesn't. Every performance second you lose costs 7% of conversion. We don't lose seconds.",
        faqs: [
          {
            question: "Why Webflow and not a custom stack?",
            answer:
              "Because your team needs to edit the site without calling us every week. Webflow gives us custom-quality output with a CMS your marketing person can actually use.",
          },
          {
            question: "Will it rank?",
            answer:
              "Technically, yes — every build passes the Core Web Vitals green line and ships with full schema. Ranking is a function of content + authority, which the Growth Strategy side handles.",
          },
          {
            question: "What about ChatGPT and Claude?",
            answer:
              "AEO is baked in: llms.txt, semantic HTML, answer-first copy, FAQ schema. You're findable by AI search out of the box.",
          },
        ],
      },
      {
        slug: "interactive-ai-tools",
        title: "Interactive AI Tools",
        tagline: "The calculator that converts 8× better than the testimonial wall.",
        summary:
          "Two to three custom AI-powered tools on your site — real utility the visitor interacts with, not another chat bubble.",
        whatItIs: [
          "Purpose-built tools matched to your buyer: calculators, audits, checkers, generators, analyzers.",
          "Give the answer first. Capture the email after. The reverse of what 99% of sites do.",
          "Powered by Claude or OpenAI APIs. Private, attribution-tagged, conversion-optimized.",
        ],
        included: [
          "Tool concept + scope for 2–3 tools",
          "AI prompt engineering + testing",
          "Front-end UI design + build",
          "API integration + rate limiting",
          "Lead capture + CRM sync",
          "Attribution tagging at capture",
          "Monthly tool analytics + iteration",
        ],
        deliverables: [
          "2–3 production AI tools, live on your site",
          "Admin dashboard for each tool",
          "Lead data piped into your CRM",
          "Monthly performance report",
        ],
        fitsFunnel:
          "This is the hook for the 99%. A visitor who interacts with a tool has given you intent data they'd never give a form. It's the single highest-converting middle-funnel asset we ship.",
        faqs: [
          {
            question: "What kinds of tools?",
            answer:
              "Depends on your buyer. For a SaaS: ROI calculator, migration audit, feature-gap analyzer. For an agency: proposal generator, brief scorer, teardown tool. We spec 2–3 after the Conversion Strategy phase.",
          },
          {
            question: "Who pays for the API usage?",
            answer:
              "You do, at cost. Typically $50–200/mo depending on volume. We bake it into the retainer if you'd rather not touch the infrastructure.",
          },
          {
            question: "What if the tool flops?",
            answer:
              "We iterate. Tools are live, trackable, and can be revised. If one doesn't pull its weight by month three, we replace it.",
          },
        ],
      },
      {
        slug: "lead-magnets",
        title: "Lead Magnets",
        tagline: "Something they'd actually save to their desktop.",
        summary:
          "Four real lead magnets — playbooks, teardowns, frameworks — that pass the 'would I screenshot this?' test.",
        whatItIs: [
          "Not gated blog posts. Not 'subscribe to our newsletter.' Not a one-pager PDF with a stock photo on the cover.",
          "Frameworks and playbooks your buyer would reference in their own meetings.",
          "Designed + written + formatted to the same standard as the website itself.",
        ],
        included: [
          "4 lead magnets across 4 intent stages",
          "Topic research + positioning",
          "Long-form writing (5–15 pages each)",
          "Custom design, print-ready + digital",
          "Gated landing pages per magnet",
          "Post-download email sequence per magnet",
          "Quarterly content refresh",
        ],
        deliverables: [
          "4 designed PDF lead magnets",
          "4 landing pages with capture forms",
          "4 post-download nurture sequences",
          "Usage analytics per magnet",
        ],
        fitsFunnel:
          "The magnet is the second capture point. The website is the first impression; the magnet is the first *commitment*. The person who downloads your playbook converts at 6× the rate of the person who just read your homepage.",
        faqs: [
          {
            question: "What topics?",
            answer:
              "Derived from the Conversion Strategy phase. One magnet per major intent stage, each matched to a buyer decision they're trying to make.",
          },
          {
            question: "Who writes them?",
            answer:
              "Stefan writes the frames; we draft the long-form in AI and edit every sentence. The review is as tight as the website copy.",
          },
          {
            question: "How long are they?",
            answer:
              "5–15 pages depending on topic. Long enough to be useful, short enough to be finishable.",
          },
        ],
      },
    ],
  },
  {
    slug: "growth-strategy",
    title: "Growth Strategy",
    tagline: "The off-site layer that keeps you in the feed.",
    summary:
      "Five channels that reinforce the on-site build. SEO, AEO, social, content, email. All pointing back at the funnel.",
    subpages: [
      {
        slug: "seo-strategy",
        title: "SEO Strategy",
        tagline: "Ranked by Google. Respected by humans.",
        summary:
          "Technical SEO + answer-first content strategy. Built so every page earns its ranking by being the best answer, not the longest.",
        whatItIs: [
          "Keyword strategy grounded in your buyer's actual questions — not a spreadsheet of 10K vanity keywords.",
          "Technical SEO baked in during development. Not retrofitted six months later.",
          "Content programs that ship monthly and compound.",
        ],
        included: [
          "Buyer-question research (50–100 queries)",
          "Topic cluster architecture",
          "Technical SEO audit + fixes",
          "On-page optimization for all core pages",
          "Content calendar (quarterly)",
          "Monthly ranking reports",
          "Backlink strategy (organic, not spammy)",
        ],
        deliverables: [
          "Keyword + topic cluster map",
          "Technical SEO report + fixes",
          "On-page optimization per page",
          "Monthly performance dashboard",
        ],
        fitsFunnel:
          "SEO is the top-of-funnel earner. Most of your warm-up audience will arrive via a Google search for a question you haven't yet answered. Our job: make sure the answer exists, and it's yours.",
        faqs: [
          {
            question: "How long until we rank?",
            answer:
              "Real answer: 3–6 months for mid-tail, 6–12 months for competitive terms. Anyone promising faster is lying or buying links.",
          },
          {
            question: "How much content per month?",
            answer:
              "4–8 indexable pages depending on topic complexity. Quality over volume — every piece is the best answer or we don't ship it.",
          },
          {
            question: "Do I need backlinks?",
            answer:
              "For competitive queries, yes. We build them through content that gets cited — not paid placement.",
          },
        ],
      },
      {
        slug: "aeo-strategy",
        title: "AEO Strategy",
        tagline: "Answer Engine Optimization for ChatGPT, Claude, Perplexity.",
        summary:
          "AI search is 20% of your buyer's research today. It'll be 60% in 18 months. AEO is SEO for the next wave — structured so your answers get cited, not skipped.",
        whatItIs: [
          "Schema.org + llms.txt + semantic HTML + answer-first copy = the four pillars of AEO.",
          "Pages written to be quoted, not just ranked. Claims, citations, named entities, FAQ schema.",
          "Monitoring across ChatGPT, Claude, Perplexity, Google AI Overview, Bing Copilot.",
        ],
        included: [
          "Full AEO audit of current site",
          "llms.txt + llms-full.txt files",
          "Schema.org markup per page type",
          "Answer-first content rewrite for top pages",
          "FAQ schema across service pages",
          "Named entity consistency pass",
          "Monthly AEO citation tracking",
        ],
        deliverables: [
          "AEO audit report",
          "llms.txt + schema implementation",
          "Rewritten answer-first copy",
          "Monthly citation report (which AI, which query, which page)",
        ],
        fitsFunnel:
          "When your buyer asks ChatGPT 'who's the best X for Y,' your website either gets cited or doesn't exist. AEO is the difference between those two futures.",
        faqs: [
          {
            question: "Is AEO a real thing or a buzzword?",
            answer:
              "It's real. AI search engines index differently than Google — they pull structured answers from specific pages. If your pages aren't structured to be pulled, you're invisible. That's AEO.",
          },
          {
            question: "Can I track AEO rankings?",
            answer:
              "Yes, imperfectly. We run monthly queries across the major AI engines and log which pages get cited for which questions. It's early, but the signal is readable.",
          },
          {
            question: "What's llms.txt?",
            answer:
              "A root-level file that tells AI crawlers what your site is, who it's for, and what content matters. Think robots.txt for ChatGPT. We ship one with every build.",
          },
        ],
      },
      {
        slug: "social-media-strategy",
        title: "Social Media Strategy",
        tagline: "LinkedIn first. Where your B2B buyer actually is.",
        summary:
          "Not a content calendar with 30 generic posts. A founder-voice LinkedIn system that builds trust before the buyer ever clicks your ad.",
        whatItIs: [
          "Founder-led content. Your voice, our operating system.",
          "12–20 posts per month across founder + company accounts, written in your voice with AI-assisted drafting.",
          "Engagement strategy — because 80% of LinkedIn's reward comes from comments, not posts.",
        ],
        included: [
          "Content pillar strategy (5 pillars per founder)",
          "Weekly post drafting + approval loop",
          "Founder + company account management",
          "Engagement layer (comments, replies, DM triage)",
          "Monthly analytics + iteration",
          "Lead-gen retargeting from content",
        ],
        deliverables: [
          "Pillar strategy document",
          "Weekly post drafts, scheduled",
          "Monthly performance report",
          "Lead pipeline from content",
        ],
        fitsFunnel:
          "Social is where the 99% warm up before they ever hit your site. A buyer who's seen your founder's posts for three months converts at a fundamentally different rate than a cold click.",
        faqs: [
          {
            question: "Do I have to be on camera?",
            answer:
              "No. Text-first works. If you want video, we'll spec it — but we won't force it.",
          },
          {
            question: "Will you write in my voice?",
            answer:
              "We train on your past writing + voice interviews. First month is calibration; month two onward it sounds like you.",
          },
          {
            question: "What about other platforms?",
            answer:
              "LinkedIn for B2B — full stop. Twitter optional. We skip IG and TikTok unless your buyer is there.",
          },
        ],
      },
      {
        slug: "content-marketing",
        title: "Content Marketing",
        tagline: "The pillar content that does the compound work.",
        summary:
          "Long-form articles, teardowns, guides, and original research. Built to be cited, linked, and remembered — not scrolled past.",
        whatItIs: [
          "4–8 pieces per month, each engineered to be the best answer to a specific buyer question.",
          "Original research + teardown format — not rewrites of competitor blog posts.",
          "Distributed across SEO, AEO, LinkedIn, email — one piece, four channels.",
        ],
        included: [
          "Editorial calendar (quarterly)",
          "Topic research + angle pitching",
          "Full writing + editing",
          "Custom illustration + graphics",
          "Publishing + distribution",
          "Internal linking architecture",
          "Repurposing to social + email",
        ],
        deliverables: [
          "4–8 published pieces / month",
          "Editorial calendar dashboard",
          "Monthly performance report",
          "Repurposed social + email assets",
        ],
        fitsFunnel:
          "Content is the compounding asset. Every piece shipped is a long-tail warm-up machine — earning traffic, earning citations, earning trust for years.",
        faqs: [
          {
            question: "Who writes?",
            answer:
              "Stefan frames. AI drafts. A human editor polishes. You approve before publish. Every piece reads like a human wrote it — because one did, just with AI leverage.",
          },
          {
            question: "Can I reuse your content elsewhere?",
            answer:
              "Yes — it's yours. We encourage reuse: speaker decks, sales docs, onboarding materials.",
          },
          {
            question: "What's the ROI timeline?",
            answer:
              "6 months to see traffic compounding. 12 months to see pipeline. Content is a long game, baked into the 12-month engagement for that reason.",
          },
        ],
      },
      {
        slug: "email-marketing",
        title: "Email Marketing",
        tagline: "Six-month nurture. Opens because it's worth opening.",
        summary:
          "Behavioral email built on top of the on-site magnets and tools. Automated, segmented, measured.",
        whatItIs: [
          "Lifecycle sequences triggered by on-site behavior — tool completion, magnet download, page revisit.",
          "Written with the same standard as the website. No 'Hey {{first_name}}' template fillers.",
          "Integrated with your CRM. Attribution tagged at every click.",
        ],
        included: [
          "6-month nurture sequence per magnet",
          "Behavioral triggers (tool use, page visits)",
          "Segmentation + list management",
          "Email copywriting + design",
          "Deliverability monitoring",
          "CRM integration",
          "Monthly performance + iteration",
        ],
        deliverables: [
          "Nurture sequences (4+ per magnet)",
          "Behavioral trigger rules",
          "CRM integration setup",
          "Monthly engagement report",
        ],
        fitsFunnel:
          "Email is the 99%'s path home. They downloaded a magnet, used a tool, left. Email brings them back — on their schedule, with the right next step each time.",
        faqs: [
          {
            question: "What ESP do you use?",
            answer:
              "Default: Customer.io or HubSpot. If you have a strong preference, we'll work with what you have (Mailchimp, Klaviyo, ConvertKit, etc.).",
          },
          {
            question: "How many emails per sequence?",
            answer:
              "6–12 depending on magnet depth. Cadence is every 3–7 days, tuned by engagement.",
          },
          {
            question: "Do I need an email list already?",
            answer:
              "No — most clients start from zero. The magnets + tools build the list within the first 60 days.",
          },
        ],
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "The operator layer. Analytics, attribution, and the AI that runs the back-of-house.",
    summary:
      "Five operator-grade capabilities that keep the warm-up system running without a 10-person team.",
    subpages: [
      {
        slug: "analytics-attribution",
        title: "Analytics & Attribution",
        tagline: "Every lead tagged. Every source measured. No more guessing.",
        summary:
          "Full-funnel attribution from first touch to closed deal. Built on a stack we actually understand — not Google Analytics + hope.",
        whatItIs: [
          "Multi-touch attribution across organic, paid, social, content, referral.",
          "Server-side tracking — not ad-blocker-defeatable browser pixels.",
          "Dashboard that answers 'where did this lead come from' in one click.",
        ],
        included: [
          "Attribution stack setup (GA4 + Plausible + CRM)",
          "Server-side tracking",
          "UTM + campaign tagging strategy",
          "Lead source pipeline into CRM",
          "Custom dashboard build",
          "Monthly attribution report",
          "Channel ROI analysis",
        ],
        deliverables: [
          "Attribution stack, live + validated",
          "Custom dashboard URL",
          "Monthly channel-ROI report",
          "Tagging playbook for your team",
        ],
        fitsFunnel:
          "You can't optimize what you can't measure. Most warm-up systems fail because the team can't see which channel is actually producing pipeline. We make it visible.",
        faqs: [
          {
            question: "Google Analytics isn't enough?",
            answer:
              "Not anymore. Ad-blockers kill 30–40% of data. Multi-touch attribution requires server-side + a proper CRM connection. GA4 alone shows you a fraction of the truth.",
          },
          {
            question: "Is this GDPR/CCPA compliant?",
            answer:
              "Yes. Consent-layer baked in; server-side tracking respects opt-outs; EU traffic routed appropriately.",
          },
          {
            question: "Can I see the dashboard before signing?",
            answer:
              "Yes — we'll share a sample dashboard during the sales conversation.",
          },
        ],
      },
      {
        slug: "workflow-automations",
        title: "Workflow Automations",
        tagline: "The internal plumbing that removes 20 hours of weekly ops.",
        summary:
          "n8n, Zapier, Make — whichever fits — building the automations that connect your tools so your team stops copy-pasting between tabs.",
        whatItIs: [
          "Custom workflows: lead handoff, proposal automation, content distribution, invoice reminders, onboarding.",
          "Built, hosted, monitored, maintained by us — not handed to you as a Zap you'll break in two months.",
          "Documented + modifiable. Your team can extend; you're not locked in.",
        ],
        included: [
          "Workflow audit + scope",
          "5–10 core automations built",
          "Error monitoring + alerting",
          "Monthly iteration + expansion",
          "Documentation per workflow",
          "Team training session",
        ],
        deliverables: [
          "Live automations (typically 5–10)",
          "Error-monitoring dashboard",
          "Documentation per workflow",
          "Monthly report of runs + errors",
        ],
        fitsFunnel:
          "Every manual step between 'lead fills form' and 'sales rep responds' costs a conversion. Automation compresses that path to seconds — and makes the 99% feel like the 1%.",
        faqs: [
          {
            question: "n8n, Zapier, or Make?",
            answer:
              "Default: n8n (self-hosted, no per-zap costs). If you already live in Zapier or Make, we work there. Pick on-site or hosted in discovery.",
          },
          {
            question: "What if an automation breaks?",
            answer:
              "We monitor. You get a Slack ping before the business notices.",
          },
          {
            question: "Can I add more later?",
            answer:
              "Yes — every retainer includes iteration. New workflows scoped monthly.",
          },
        ],
      },
      {
        slug: "ai-agents",
        title: "AI Agents",
        tagline: "The agent that handles the first 80% of the conversation.",
        summary:
          "Custom Claude / OpenAI agents for research, qualification, first-draft proposals, content ops — running inside your stack, on your data.",
        whatItIs: [
          "Not a chatbot on your website. Agents that live in your ops layer — Slack, email, CRM — and do actual work.",
          "Scoped agents with defined inputs, outputs, and guardrails. Tested before they touch production.",
          "Built on Claude Code or OpenAI Agents SDK — the tooling that makes agents reliable instead of novelties.",
        ],
        included: [
          "Agent scope + guardrail design",
          "Prompt engineering + tool integration",
          "Deployment into Slack/email/CRM",
          "Monitoring + logging",
          "Iterative tuning",
          "Handoff-to-human rules",
        ],
        deliverables: [
          "1–3 production agents, live",
          "Monitoring dashboard",
          "Handoff-to-human workflow",
          "Monthly agent performance report",
        ],
        fitsFunnel:
          "Agents remove the bottleneck between volume and quality. A well-scoped agent can research 50 inbound leads before your first sales call of the day.",
        faqs: [
          {
            question: "What's the difference between an agent and a chatbot?",
            answer:
              "A chatbot answers. An agent acts — it can research, call APIs, update records, send messages, route to humans. Agents have tools; chatbots have transcripts.",
          },
          {
            question: "Who controls the data?",
            answer:
              "You do. Agents run on your API keys, in your infrastructure (or ours, under your account). We don't store prompts or outputs on our side.",
          },
          {
            question: "What if the agent makes a mistake?",
            answer:
              "Guardrails + handoff-to-human. Any action above a defined confidence threshold gets flagged for human approval before execution.",
          },
        ],
      },
      {
        slug: "content-automation",
        title: "Content Automation",
        tagline: "The system that turns one piece of pillar content into twelve.",
        summary:
          "Pipeline that takes a long-form piece and automatically produces social posts, email snippets, video scripts, podcast notes — drafted, formatted, queued for review.",
        whatItIs: [
          "One pillar → 12 derivative assets across channels, in your voice, drafted without human-hours.",
          "Review-first: you approve before it publishes. Nothing posts on autopilot.",
          "Saves 10–15 hours / week on content ops for a mid-sized team.",
        ],
        included: [
          "Pillar-to-derivative pipeline (12 outputs per piece)",
          "Voice training on your past content",
          "Approval queue integration (Notion, Airtable, Slack)",
          "Publishing integrations (LinkedIn, Buffer, email)",
          "Monthly iteration + tuning",
        ],
        deliverables: [
          "Automated content pipeline, live",
          "Approval queue dashboard",
          "Voice-training library",
          "Monthly content throughput report",
        ],
        fitsFunnel:
          "Distribution is half the battle. Most companies write once and post once. Content automation lets you write once and show up twelve times — without a content team.",
        faqs: [
          {
            question: "Will it sound like me?",
            answer:
              "Yes. Voice training is the first step. We calibrate on your past work until the drafts read like you on a good day.",
          },
          {
            question: "Do I review every post?",
            answer:
              "Yes — nothing auto-publishes without your check-off. Queue surfaces in Slack or wherever you already live.",
          },
          {
            question: "Does this replace Content Marketing?",
            answer:
              "No — it amplifies it. Content Marketing ships the pillar; Content Automation ships the derivatives.",
          },
        ],
      },
      {
        slug: "integrations-apis",
        title: "Integrations & APIs",
        tagline: "Your stack, connected. Your data, portable. No more silos.",
        summary:
          "Custom integrations between your website, CRM, ESP, analytics, CMS, and anything else that needs to talk.",
        whatItIs: [
          "Point-to-point integrations when off-the-shelf connectors don't exist or aren't good enough.",
          "API-first thinking — your data stays portable, your tools stay swappable.",
          "Webhook + serverless-function architecture for fast, maintainable glue code.",
        ],
        included: [
          "Integration audit + gap analysis",
          "Custom API + webhook builds",
          "CRM ↔ website ↔ analytics sync",
          "Error monitoring + retry logic",
          "Documentation per integration",
          "Ongoing maintenance",
        ],
        deliverables: [
          "Live integrations, documented",
          "Architecture diagram",
          "Monitoring dashboard",
          "Quarterly integration review",
        ],
        fitsFunnel:
          "If the lead data doesn't flow cleanly from capture → CRM → email → analytics, you're leaving conversions on the floor. Integrations make the funnel a closed loop instead of a leaky bucket.",
        faqs: [
          {
            question: "Which tools do you integrate with?",
            answer:
              "Most things with an API — HubSpot, Salesforce, Pipedrive, Customer.io, Klaviyo, Webflow, Airtable, Notion, Slack. We scope per client.",
          },
          {
            question: "What if a tool doesn't have an API?",
            answer:
              "Then we build around it — usually via webhook + scraping fallback. We'll flag it in discovery.",
          },
          {
            question: "Who maintains it?",
            answer:
              "We do, inside the monthly retainer. Integrations break; ours get fixed before you notice.",
          },
        ],
      },
    ],
  },
];

export function findGroup(slug: string) {
  return serviceGroups.find((g) => g.slug === slug);
}

export function findSubpage(groupSlug: string, subSlug: string) {
  const group = findGroup(groupSlug);
  if (!group) return null;
  const sub = group.subpages.find((s) => s.slug === subSlug);
  return sub ? { group, sub } : null;
}
