export type Tool = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  submitLabel: string;
  steps: { label: string; detail: string }[];
};

export const tools: Tool[] = [
  {
    slug: "funnel-audit",
    title: "Funnel Audit",
    tagline: "Find the 3 biggest leaks in your middle-of-funnel.",
    description:
      "Paste your URL. We scan for the six value-first signals — tools, magnets, answer-first copy, AEO, nurture triggers, attribution — and tell you which ones your site is missing.",
    inputLabel: "Your website URL",
    inputPlaceholder: "https://yoursite.com",
    submitLabel: "Run the audit →",
    steps: [
      { label: "Scan", detail: "We pull your site, check schema, copy, and capture points." },
      { label: "Score", detail: "Scored against the six value-first principles." },
      { label: "Report", detail: "Emailed PDF + 3 fixes, ranked by impact." },
    ],
  },
  {
    slug: "aeo-checker",
    title: "AEO Checker",
    tagline: "Is ChatGPT citing your site? Here's how to tell.",
    description:
      "We run your domain through the AEO checklist — schema.org, llms.txt, answer-first copy, named entity consistency, FAQ structure — and flag what's missing.",
    inputLabel: "Your domain",
    inputPlaceholder: "yoursite.com",
    submitLabel: "Check AEO →",
    steps: [
      { label: "Probe", detail: "We query ChatGPT, Claude, Perplexity for your brand." },
      { label: "Audit", detail: "Check schema, llms.txt, structured answers." },
      { label: "Score", detail: "Scored 0–100. Top fixes emailed as a ranked list." },
    ],
  },
  {
    slug: "seo-checker",
    title: "SEO Checker",
    tagline: "Technical SEO audit. Core Web Vitals, schema, indexability.",
    description:
      "Not another Semrush wrapper. We check the things that actually move rankings — semantic HTML, performance budget, internal linking, schema.",
    inputLabel: "Your URL",
    inputPlaceholder: "https://yoursite.com",
    submitLabel: "Check SEO →",
    steps: [
      { label: "Crawl", detail: "We fetch the page + 10 linked pages." },
      { label: "Audit", detail: "Technical + content + structure review." },
      { label: "Report", detail: "Emailed report with ranked fixes." },
    ],
  },
  {
    slug: "content-gap",
    title: "Content Gap Finder",
    tagline: "Which buyer questions does your content miss?",
    description:
      "We pull the top 50 buyer questions for your space, check your site's coverage, and flag the gaps where you're invisible to search.",
    inputLabel: "Your domain + buyer keyword",
    inputPlaceholder: "yoursite.com, consulting firms",
    submitLabel: "Find the gaps →",
    steps: [
      { label: "Pull", detail: "Top 50 buyer questions from search + AEO." },
      { label: "Match", detail: "Which questions your site answers today." },
      { label: "Report", detail: "Ranked list of missing topics, emailed." },
    ],
  },
  {
    slug: "schema-validator",
    title: "Schema Validator",
    tagline: "Does your schema.org markup actually parse?",
    description:
      "Schema rich results require clean markup. We validate Organization, Service, FAQ, Article, BreadcrumbList — and flag what'll break.",
    inputLabel: "Your URL",
    inputPlaceholder: "https://yoursite.com/page",
    submitLabel: "Validate schema →",
    steps: [
      { label: "Parse", detail: "We extract all JSON-LD blocks on the page." },
      { label: "Validate", detail: "Checked against schema.org spec." },
      { label: "Report", detail: "Errors + warnings listed inline." },
    ],
  },
  {
    slug: "attribution-check",
    title: "Attribution Check",
    tagline: "Are your UTMs, pixels, and CRM actually talking?",
    description:
      "The most common pipeline leak: attribution broken between website, ESP, and CRM. We test the flow end-to-end.",
    inputLabel: "Your stack",
    inputPlaceholder: "HubSpot, GA4, Customer.io…",
    submitLabel: "Check attribution →",
    steps: [
      { label: "Map", detail: "We map your stack + expected data flow." },
      { label: "Test", detail: "Submit a test lead, trace end-to-end." },
      { label: "Report", detail: "Where the data breaks + how to fix." },
    ],
  },
];

export type Magnet = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  pageCount: number;
  format: string;
};

export const magnets: Magnet[] = [
  {
    slug: "middle-of-funnel-playbook",
    title: "The Middle-of-Funnel Playbook",
    tagline: "The 47-page guide to building the warm-up layer.",
    description:
      "The full method — principles, architecture, sample tool specs, email sequences, attribution stack. Our actual operating manual.",
    pageCount: 47,
    format: "PDF",
  },
  {
    slug: "aeo-checklist-2026",
    title: "AEO Checklist (2026 Edition)",
    tagline: "22 things your site needs to be cited by ChatGPT and Claude.",
    description:
      "Schema. llms.txt. Answer-first copy. Named entities. FAQ patterns. The working checklist we use on every build.",
    pageCount: 18,
    format: "PDF",
  },
  {
    slug: "six-conversion-points",
    title: "The Six Conversion Points",
    tagline: "Architect capture at every intent stage.",
    description:
      "Every warm-up site has six. Most sites have one. This guide walks through each — with real examples.",
    pageCount: 24,
    format: "PDF",
  },
  {
    slug: "ai-tool-spec-templates",
    title: "AI Tool Spec Templates",
    tagline: "Four ready-to-use tool specs for common B2B categories.",
    description:
      "SaaS ROI calculator. Agency proposal generator. Consultancy audit tool. Services readiness checker. Prompt, UI, capture, attribution — all specced.",
    pageCount: 32,
    format: "PDF + JSON",
  },
  {
    slug: "attribution-stack-blueprint",
    title: "Attribution Stack Blueprint",
    tagline: "The exact stack we deploy — in one diagram + 15 pages.",
    description:
      "GA4 + server-side + CRM + ESP. The tools, the connectors, the failure modes. Not theory — what's live on our client sites.",
    pageCount: 16,
    format: "PDF + Figma",
  },
  {
    slug: "email-nurture-sequences",
    title: "The 6-Month Nurture Library",
    tagline: "12 sequences, fully written.",
    description:
      "SaaS post-trial. Agency post-proposal. Consulting firm post-magnet. Every sequence ready to paste into your ESP.",
    pageCount: 68,
    format: "PDF + ESP imports",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "the-middle-of-your-funnel-is-missing",
    title: "The Middle of Your Funnel Is Missing (and It's Costing You 5x Pipeline)",
    excerpt:
      "Every B2B funnel has two outcomes today: buy now, or leave forever. The 99% of visitors in between have nowhere to go — because the middle layer doesn't exist.",
    date: "2026-04-15",
    readTime: "9 min",
    author: "Stefan Popadic",
    category: "Strategy",
    content: [
      "Your B2B funnel has two outcomes today. Visitor buys now. Visitor leaves forever. There's nothing in between.",
      "That's not a traffic problem. That's a *structure* problem. The infrastructure to warm up the 99% who aren't ready yet — the tools, the magnets, the content, the nurture, the attribution — either doesn't exist on your site, or exists in seven disconnected pieces no one glued together.",
      "We call the glued version the **warm-up layer**. It sits between your top-of-funnel (ads, SEO, social) and your bottom-of-funnel (sales calls, demos). Its job: capture the 99%, give them real value, stay in their feed for six months, and bring 30–50% of them back when they're ready.",
      "The math is brutal. 1,000 monthly visitors, 1% conversion, gives you 10 pipeline leads per month. Same 1,000 visitors with a warm-up layer, 35% captured, 15% converted over six months gives you 50+. Same spend. Different middle.",
      "In this piece, we'll walk through the six principles that separate sites that convert from sites that collect bounces — and the exact stack you need to implement each.",
      "*(Continued — this is a placeholder body. Full article ships with launch.)*",
    ],
  },
  {
    slug: "aeo-is-seo-for-the-next-wave",
    title: "AEO Is SEO for the Next Wave (and Most Sites Are Already Invisible)",
    excerpt:
      "AI search — ChatGPT, Claude, Perplexity — is 20% of B2B research today and climbing. Most sites are structurally invisible to it. Here's what to fix.",
    date: "2026-04-08",
    readTime: "11 min",
    author: "Stefan Popadic",
    category: "AEO",
    content: [
      "Twenty percent of B2B buyer research happens inside AI search engines today. In eighteen months, it'll be sixty percent. If your site isn't structured to be cited by ChatGPT, Claude, Perplexity, and Google AI Overview — you're already losing pipeline you'll never see in your analytics.",
      "AEO — Answer Engine Optimization — is how you fix that. It's not a replacement for SEO. It's SEO for a world where the search result isn't a page anymore; it's an answer synthesized from structured fragments across the web.",
      "The four pillars: **schema.org markup**, **llms.txt / llms-full.txt files**, **semantic HTML with answer-first copy**, and **named entity consistency**. Get those four right and your pages start showing up in AI citations. Get them wrong and your site stays invisible no matter how much you spend on ads.",
      "*(Continued — this is a placeholder body. Full article ships with launch.)*",
    ],
  },
  {
    slug: "why-we-guarantee-outcomes",
    title: "Why We Guarantee Outcomes (and Every Other Agency Won't)",
    excerpt:
      "Agencies bill for hours. Clients pay whether the hours produced anything. That's a lottery where one side always loses. Here's what we did instead.",
    date: "2026-04-01",
    readTime: "7 min",
    author: "Stefan Popadic",
    category: "Operations",
    content: [
      "Every other agency we've seen bills for effort. You buy hours, retainers, scopes. The agency delivers effort. Whether that effort produces pipeline is your problem, not theirs.",
      "That's a lottery. The agency wins whether you win or not. You win only if you happen to get lucky.",
      "We took the opposite bet. Our guarantee: 10 qualified leads in 90 days. Miss at 90, we work free. Miss at 180, full refund plus a penalty on top.",
      "We can do that because we built the system ourselves — and we run the numbers on it every month. We know what it takes to produce 10 qualified leads in 90 days for our ICP. We also know when a client isn't the right fit, which is why half of discovery calls end with us saying no.",
      "*(Continued — this is a placeholder body. Full article ships with launch.)*",
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function findTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}
