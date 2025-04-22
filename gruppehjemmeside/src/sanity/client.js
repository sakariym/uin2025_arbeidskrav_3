import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: "o4kavlqr",
  dataset: "production",
  apiVersion: "v2025-04-21",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
  }

