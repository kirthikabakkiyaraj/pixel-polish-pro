import { createFileRoute } from "@tanstack/react-router";
import Analytics from "@/pages/Analytics";

export const Route = createFileRoute("/_app/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics | Aether Platform" },
      { name: "description", content: "Trends on agent throughput, success rate and task volume." },
      { property: "og:title", content: "Analytics | Aether Platform" },
      { property: "og:description", content: "Trends on agent throughput, success rate and task volume." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Analytics,
});
