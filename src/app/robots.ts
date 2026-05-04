import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All crawlers: allow everything except API routes (no indexable content there)
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "Anthropic-AI",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "YouBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
    ],
    sitemap: "https://www.randompokemon.co/sitemap.xml",
  };
}

