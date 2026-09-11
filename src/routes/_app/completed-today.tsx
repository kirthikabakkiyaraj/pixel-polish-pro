import { createFileRoute } from "@tanstack/react-router";
import CompletedToday from "@/pages/CompletedToday";

export const Route = createFileRoute("/_app/completed-today")({
  head: () => ({
    meta: [
      { title: "Completed Today | Aether Platform" },
      { name: "description", content: "Tasks your agents finished during the current day." },
      { property: "og:title", content: "Completed Today | Aether Platform" },
      { property: "og:description", content: "Tasks your agents finished during the current day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CompletedToday,
});
