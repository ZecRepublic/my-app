import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({

  projectId: "ax9yig5w",
  dataset: "production",
  title: "My Personal App",
  apiVersion: "2023-10-14",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }

})

export default config;