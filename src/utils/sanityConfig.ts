import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "jrwuxgv2",
  dataset: "production",
  apiVersion: "2025-04-18",
  useCdn: true,
});
