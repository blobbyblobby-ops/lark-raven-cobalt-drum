import { createFileRoute } from "@tanstack/react-router";
import { originFromRequest } from "@/lib/seo";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = originFromRequest(request);
        const body = [
          "User-agent: *",
          "Allow: /",
          "Disallow: /__grok/",
          "",
          `Sitemap: ${origin}/sitemap.xml`,
          "",
        ].join("\n");
        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
