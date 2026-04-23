import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, Eyebrow, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { articles, findArticle } from "@/lib/resources";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  const url = `${site.url}/resources/articles/${article.slug}`;
  const idx = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(idx + 1) % articles.length];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Resources", url: `${site.url}/resources` },
          { name: "Articles", url: `${site.url}/resources/articles` },
          { name: article.title, url },
        ]}
      />
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        url={url}
        datePublished={article.date}
        author={article.author}
      />

      <Section variant="ink" className="pt-28 lg:pt-36">
        <div className="max-w-[840px]">
          <div className="flex items-center gap-3 mb-10">
            <Link
              href="/resources/articles"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55 hover:text-flame transition-colors"
            >
              ← Articles
            </Link>
            <span className="text-bone/30">·</span>
            <PillTag>{article.category}</PillTag>
          </div>
          <Display>{article.title}</Display>
          <div className="mt-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55">
            <span>{article.author}</span>
            <span>·</span>
            <span>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <article className="max-w-[720px] mx-auto">
          <p className="font-serif text-[clamp(1.5rem,2.4vw,1.9rem)] leading-[1.3] tracking-[-0.02em] text-ink/85 mb-10 [&_em]:italic">
            {article.excerpt}
          </p>
          <div className="flex flex-col gap-5 text-[19px] leading-[1.65] text-ink/85 [&_strong]:font-semibold [&_em]:italic [&_em]:font-serif">
            {article.content.map((p, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: p
                    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.+?)\*/g, "<em>$1</em>"),
                }}
              />
            ))}
          </div>
        </article>
      </Section>

      <Section variant="ink" className="py-20">
        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-8">
          <Eyebrow>Next up</Eyebrow>
          <Link
            href={`/resources/articles/${next.slug}`}
            className="group flex flex-col gap-3"
          >
            <Headline as="h2" className="group-hover:text-flame transition-colors">
              {next.title}
            </Headline>
            <Body className="text-bone/70 max-w-[640px]">{next.excerpt}</Body>
          </Link>
          <CTAButton href="/contact" className="mt-4">
            Book a call →
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
