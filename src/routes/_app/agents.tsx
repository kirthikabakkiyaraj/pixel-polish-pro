import { createFileRoute } from "@tanstack/react-router";
import Agents from "@/pages/Agents";

export const Route = createFileRoute("/_app/agents")({
  head: () => ({
    meta: [
      { title: "Your Agents | Aether Platform" },
      { name: "description", content: "Browse, configure and monitor every autonomous agent on your workspace." },
      { property: "og:title", content: "Your Agents | Aether Platform" },
      { property: "og:description", content: "Browse, configure and monitor every autonomous agent on your workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Agents,
});
