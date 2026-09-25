import { createFileRoute } from "@tanstack/react-router";
import { LensApp } from "@/components/lens/lens-app";
import { APP_DESCRIPTION } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LotLens" },
      { name: "description", content: APP_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LensApp,
});
