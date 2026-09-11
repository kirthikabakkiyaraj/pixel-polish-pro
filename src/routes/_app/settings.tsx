import { createFileRoute } from "@tanstack/react-router";
import Settings from "@/pages/Settings";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({
    meta: [
      { title: "Workspace Settings | Aether Platform" },
      { name: "description", content: "Manage preferences, integrations and workspace defaults." },
      { property: "og:title", content: "Workspace Settings | Aether Platform" },
      { property: "og:description", content: "Manage preferences, integrations and workspace defaults." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Settings,
});
