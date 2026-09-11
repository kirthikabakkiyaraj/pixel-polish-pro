import { createFileRoute } from "@tanstack/react-router";
import Profile from "@/pages/Profile";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({
    meta: [
      { title: "Your Profile | Aether Platform" },
      { name: "description", content: "Update your name, avatar and account details." },
      { property: "og:title", content: "Your Profile | Aether Platform" },
      { property: "og:description", content: "Update your name, avatar and account details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Profile,
});
