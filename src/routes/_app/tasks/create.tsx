import { createFileRoute } from "@tanstack/react-router";
import CreateTask from "@/pages/CreateTask";

export const Route = createFileRoute("/_app/tasks/create")({
  head: () => ({
    meta: [
      { title: "Create Task | Aether Platform" },
      { name: "description", content: "Describe a new task and hand it to an autonomous agent." },
      { property: "og:title", content: "Create Task | Aether Platform" },
      { property: "og:description", content: "Describe a new task and hand it to an autonomous agent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CreateTask,
});
