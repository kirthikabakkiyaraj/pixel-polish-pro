import { createFileRoute } from "@tanstack/react-router";
import Login from "@/pages/Login";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in to Aether Platform | Aether Platform" },
      { name: "description", content: "Access your autonomous agent workspace with email or Google sign-in." },
      { property: "og:title", content: "Sign in to Aether Platform | Aether Platform" },
      { property: "og:description", content: "Access your autonomous agent workspace with email or Google sign-in." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Login,
});
