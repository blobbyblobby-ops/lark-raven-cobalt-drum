import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/studio/studio";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "LotLens — five page designs" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Studio,
});
