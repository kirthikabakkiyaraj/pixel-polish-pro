import { createFileRoute } from "@tanstack/react-router";
import ArtifactPreview from "@/pages/ArtifactPreview";

export const Route = createFileRoute("/_app/artifacts/$id")({
  head: () => ({
    meta: [
      { title: "Artifact Preview | Aether Platform" },
      { name: "description", content: "Preview a single artifact produced by an agent run." },
      { property: "og:title", content: "Artifact Preview | Aether Platform" },
      { property: "og:description", content: "Preview a single artifact produced by an agent run." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArtifactPreview,
});
