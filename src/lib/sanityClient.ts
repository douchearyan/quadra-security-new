import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "jrwuxgv2", // 🔁 replace with actual ID
  dataset: "production", // or your dataset name
  apiVersion: "2025-04-18", // or latest date
  useCdn: true, // can be true for faster reads
});
