export async function GET() {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin",
    "Disallow: /api",
    "Sitemap: /sitemap.xml",
  ];
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: "https://learnshift.netlify.app/sitemap.xml",
  };
}
