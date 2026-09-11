import { createFileRoute } from "@tanstack/react-router";
import UpcomingToday from "@/pages/UpcomingToday";

export const Route = createFileRoute("/_app/upcoming-today")({
  head: () => ({
    meta: [
      { title: "Upcoming Today | Aether Platform" },
      { name: "description", content: "Scheduled work queued for the rest of today." },
      { property: "og:title", content: "Upcoming Today | Aether Platform" },
      { property: "og:description", content: "Scheduled work queued for the rest of today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpcomingToday,
});
