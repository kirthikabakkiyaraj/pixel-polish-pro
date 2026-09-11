import { createFileRoute } from "@tanstack/react-router";
import Register from "@/pages/Register";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create your Aether account | Aether Platform" },
      { name: "description", content: "Set up a new Aether Platform account and start running autonomous agents." },
      { property: "og:title", content: "Create your Aether account | Aether Platform" },
      { property: "og:description", content: "Set up a new Aether Platform account and start running autonomous agents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Register,
});
