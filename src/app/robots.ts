import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "Anthropic-AI",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "YouBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
    ],
    sitemap: "https://www.randompokemon.co/sitemap.xml",
    host: "https://www.randompokemon.co",
  };
}
