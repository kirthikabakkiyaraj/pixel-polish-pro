import { createFileRoute } from "@tanstack/react-router";
import ResultDetails from "@/pages/ResultDetails";

export const Route = createFileRoute("/_app/research/$id")({
  head: () => ({
    meta: [
      { title: "Research Detail | Aether Platform" },
      { name: "description", content: "Full detail view for a single research result." },
      { property: "og:title", content: "Research Detail | Aether Platform" },
      { property: "og:description", content: "Full detail view for a single research result." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResultDetails,
});
