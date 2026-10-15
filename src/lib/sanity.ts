import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Sanity project a53g9qeq (Kevin and Shelly). useCdn false so webhook rebuilds get fresh content.
export const sanityClient = createClient({
  projectId: 'a53g9qeq',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const builder = createImageUrlBuilder(sanityClient);
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
