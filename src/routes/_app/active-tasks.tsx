import { createFileRoute } from "@tanstack/react-router";
import ActiveTasks from "@/pages/ActiveTasks";

export const Route = createFileRoute("/_app/active-tasks")({
  head: () => ({
    meta: [
      { title: "Active Tasks | Aether Platform" },
      { name: "description", content: "Every task currently in progress across your agents." },
      { property: "og:title", content: "Active Tasks | Aether Platform" },
      { property: "og:description", content: "Every task currently in progress across your agents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ActiveTasks,
});
