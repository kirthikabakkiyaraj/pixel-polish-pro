import { createFileRoute } from "@tanstack/react-router";
import LiveExecution from "@/pages/LiveExecution";

export const Route = createFileRoute("/_app/executions")({
  head: () => ({
    meta: [
      { title: "Live Executions | Aether Platform" },
      { name: "description", content: "Watch agent executions stream step by step in real time." },
      { property: "og:title", content: "Live Executions | Aether Platform" },
      { property: "og:description", content: "Watch agent executions stream step by step in real time." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LiveExecution,
});
