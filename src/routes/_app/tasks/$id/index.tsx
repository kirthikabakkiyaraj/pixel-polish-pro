import { createFileRoute } from "@tanstack/react-router";
import TaskDetails from "@/pages/TaskDetails";

export const Route = createFileRoute("/_app/tasks/$id/")({
  head: () => ({
    meta: [
      { title: "Task Detail | Aether Platform" },
      { name: "description", content: "Timeline, output and status for a single task." },
      { property: "og:title", content: "Task Detail | Aether Platform" },
      { property: "og:description", content: "Timeline, output and status for a single task." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TaskDetails,
});
