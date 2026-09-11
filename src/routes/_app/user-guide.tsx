import { createFileRoute } from "@tanstack/react-router";
import UserGuide from "@/pages/UserGuide";

export const Route = createFileRoute("/_app/user-guide")({
  head: () => ({
    meta: [
      { title: "User Guide | Aether Platform" },
      { name: "description", content: "Learn how to create tasks, run agents and read results." },
      { property: "og:title", content: "User Guide | Aether Platform" },
      { property: "og:description", content: "Learn how to create tasks, run agents and read results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UserGuide,
});
