import { createFileRoute } from "@tanstack/react-router";
import Activity from "@/pages/Activity";

export const Route = createFileRoute("/_app/activity")({
  head: () => ({
    meta: [
      { title: "Activity Feed | Aether Platform" },
      { name: "description", content: "Chronological feed of everything happening across your agents." },
      { property: "og:title", content: "Activity Feed | Aether Platform" },
      { property: "og:description", content: "Chronological feed of everything happening across your agents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Activity,
});
