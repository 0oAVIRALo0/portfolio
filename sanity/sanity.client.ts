import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "nkb7xac2",
  dataset: "production",
  apiVersion: "2025-01-09",
  useCdn: false,
};

const client = createClient(config);

export default client;
