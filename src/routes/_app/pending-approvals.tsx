import { createFileRoute } from "@tanstack/react-router";
import PendingApprovals from "@/pages/PendingApprovals";

export const Route = createFileRoute("/_app/pending-approvals")({
  head: () => ({
    meta: [
      { title: "Pending Approvals | Aether Platform" },
      { name: "description", content: "Requests still waiting for your approval." },
      { property: "og:title", content: "Pending Approvals | Aether Platform" },
      { property: "og:description", content: "Requests still waiting for your approval." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PendingApprovals,
});
