import { createFileRoute } from "@tanstack/react-router";
import LiveExecution from "@/pages/LiveExecution";

export const Route = createFileRoute("/_app/tasks/$id/live")({
  head: () => ({
    meta: [
      { title: "Live Task Execution | Aether Platform" },
      { name: "description", content: "Follow a single task's execution as it streams live." },
      { property: "og:title", content: "Live Task Execution | Aether Platform" },
      { property: "og:description", content: "Follow a single task's execution as it streams live." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LiveExecution,
});
