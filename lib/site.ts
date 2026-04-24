export const site = {
  name: "Secret Layer",
  domain: "secretlayer.co",
  url: "https://secretlayer.co",
  tagline: "The middle of your funnel B2B companies are missing.",
  description:
    "We build the middle of your funnel. Website, AI tools, content, SEO, AEO, email nurture, attribution.",
  pricing: {
    setup: 15000,
    setupLabel: "$15,000",
    retainer: 5000,
    retainerLabel: "$5,000 / 28 days",
    retainerCycles: 13,
    total: 80000,
    totalLabel: "$80,000",
    engagement: "12 months",
  },
  founders: ["Stefan Popadic", "Nenad Popadic"],
  social: {
    linkedin: "https://linkedin.com/company/secretlayer",
    twitter: "https://twitter.com/secretlayer",
  },
  email: "hello@secretlayer.co",
};

export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "Web Strategy",
          href: "/services/web-strategy",
          children: [
            { label: "Conversion Strategy", href: "/services/web-strategy/conversion-strategy" },
            { label: "Website Design", href: "/services/web-strategy/website-design" },
            { label: "Webflow Development", href: "/services/web-strategy/webflow-development" },
            { label: "Interactive AI Tools", href: "/services/web-strategy/interactive-ai-tools" },
            { label: "Lead Magnets", href: "/services/web-strategy/lead-magnets" },
          ],
        },
        {
          label: "Growth Strategy",
          href: "/services/growth-strategy",
          children: [
            { label: "SEO Strategy", href: "/services/growth-strategy/seo-strategy" },
            { label: "AEO Strategy", href: "/services/growth-strategy/aeo-strategy" },
            { label: "Social Media Strategy", href: "/services/growth-strategy/social-media-strategy" },
            { label: "Content Marketing", href: "/services/growth-strategy/content-marketing" },
            { label: "Email Marketing", href: "/services/growth-strategy/email-marketing" },
          ],
        },
        {
          label: "AI Automation",
          href: "/services/ai-automation",
          children: [
            { label: "Analytics & Attribution", href: "/services/ai-automation/analytics-attribution" },
            { label: "Workflow Automations", href: "/services/ai-automation/workflow-automations" },
            { label: "AI Agents", href: "/services/ai-automation/ai-agents" },
            { label: "Content Automation", href: "/services/ai-automation/content-automation" },
            { label: "Integrations & APIs", href: "/services/ai-automation/integrations-apis" },
          ],
        },
      ],
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};
