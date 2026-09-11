import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "@/pages/Dashboard";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [
      { title: "Agent Dashboard | Aether Platform" },
      { name: "description", content: "Live overview of running agents, tasks and today's activity." },
      { property: "og:title", content: "Agent Dashboard | Aether Platform" },
      { property: "og:description", content: "Live overview of running agents, tasks and today's activity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});
