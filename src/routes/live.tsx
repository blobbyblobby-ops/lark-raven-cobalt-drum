import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/landing/home";

export const Route = createFileRoute("/live")({
  head: () => ({
    meta: [
      {
        name: "description",
        content: "The current LotLens landing page.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/live" }],
  }),
  component: Home,
});
