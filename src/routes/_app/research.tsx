import { createFileRoute } from "@tanstack/react-router";
import ResearchResults from "@/pages/ResearchResults";

export const Route = createFileRoute("/_app/research")({
  head: () => ({
    meta: [
      { title: "Research Results | Aether Platform" },
      { name: "description", content: "Review research produced by your agents in one place." },
      { property: "og:title", content: "Research Results | Aether Platform" },
      { property: "og:description", content: "Review research produced by your agents in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchResults,
});
