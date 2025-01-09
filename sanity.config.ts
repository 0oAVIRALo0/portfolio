import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Sanity Portfolio Site",

  projectId: "nkb7xac2",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
