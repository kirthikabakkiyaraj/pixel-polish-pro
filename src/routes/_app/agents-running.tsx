import { createFileRoute } from "@tanstack/react-router";
import AgentsRunning from "@/pages/AgentsRunning";

export const Route = createFileRoute("/_app/agents-running")({
  head: () => ({
    meta: [
      { title: "Agents Running | Aether Platform" },
      { name: "description", content: "Agents that are executing work right now." },
      { property: "og:title", content: "Agents Running | Aether Platform" },
      { property: "og:description", content: "Agents that are executing work right now." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgentsRunning,
});
