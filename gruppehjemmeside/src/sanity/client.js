import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
  projectId: "o4kavlqr",
  dataset: "production",
  apiVersion: "v2025-04-21",
  useCdn: false,
});
