import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceGroups } from "@/lib/services";
import { tools, articles } from "@/lib/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/resources",
    "/resources/tools",
    "/resources/library",
    "/resources/articles",
    "/resources/case-studies",
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1.0 : 0.8,
  }));

  const groupEntries = serviceGroups.map((g) => ({
    url: `${site.url}/services/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const subpageEntries = serviceGroups.flatMap((g) =>
    g.subpages.map((s) => ({
      url: `${site.url}/services/${g.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const toolEntries = tools.map((t) => ({
    url: `${site.url}/resources/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleEntries = articles.map((a) => ({
    url: `${site.url}/resources/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...groupEntries,
    ...subpageEntries,
    ...toolEntries,
    ...articleEntries,
  ];
}
