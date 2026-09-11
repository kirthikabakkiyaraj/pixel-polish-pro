import { createFileRoute } from "@tanstack/react-router";
import Approvals from "@/pages/Approvals";

export const Route = createFileRoute("/_app/approvals")({
  head: () => ({
    meta: [
      { title: "Approvals | Aether Platform" },
      { name: "description", content: "Approve or reject actions waiting on a human decision." },
      { property: "og:title", content: "Approvals | Aether Platform" },
      { property: "og:description", content: "Approve or reject actions waiting on a human decision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Approvals,
});
