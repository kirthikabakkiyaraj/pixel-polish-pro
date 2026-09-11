import { createFileRoute } from "@tanstack/react-router";
import Schedules from "@/pages/Schedules";

export const Route = createFileRoute("/_app/schedules")({
  head: () => ({
    meta: [
      { title: "Schedules | Aether Platform" },
      { name: "description", content: "Recurring agent runs and their upcoming trigger times." },
      { property: "og:title", content: "Schedules | Aether Platform" },
      { property: "og:description", content: "Recurring agent runs and their upcoming trigger times." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Schedules,
});
