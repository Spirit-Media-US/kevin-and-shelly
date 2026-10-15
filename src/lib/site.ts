import { sanityClient, urlFor } from './sanity';

export const SITE_NAME = 'Kevin and Shelly';

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Story', href: '/story' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Books', href: '/books' },
  { label: 'Blog', href: '/blog' },
];

export async function getSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]{
    siteName, tagline, seoDescription, logo, logoOnDark, ogImage, kevinEmail, shellyEmail, location,
    socials[]{label, url}
  }`);
}

// ─── Podcast episodes ───
// Episodes appear on the site once they have a title (Kevin 2026-10-15).
export const EPISODE_FILTER = `_type == "podcastEpisode" && defined(title) && defined(slug.current)`;
export const EPISODE_FIELDS = `title, "slug": slug.current, episodeNumber, season, releaseDate, youtubeUrl, thumbnail, description, scriptureRef, scriptureText, scriptureUrl, audioUrl`;

/** YouTube video id from any common link shape (watch?v=, youtu.be/, /shorts/, /embed/, /live/). */
export function youtubeId(url?: string): string | null {
  if (!url) return null;
  const m = /(?:youtu\.be\/|[?&]v=|\/(?:shorts|embed|live)\/)([\w-]{11})/.exec(url);
  return m ? m[1] : null;
}

/**
 * Episode thumbnail, always 16:9: YouTube's own once the episode has a YouTube link,
 * otherwise the 1920×1080 image uploaded in Sanity.
 */
export function episodeThumb(ep: any) {
  const id = youtubeId(ep.youtubeUrl);
  if (id) {
    return {
      src: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      srcset: `https://i.ytimg.com/vi/${id}/sddefault.jpg 640w, https://i.ytimg.com/vi/${id}/maxresdefault.jpg 1280w`,
    };
  }
  if (!ep.thumbnail) return null;
  const u = (w: number) => urlFor(ep.thumbnail).width(w).height(Math.round((w * 9) / 16)).format('webp').quality(80).url();
  return { src: u(1280), srcset: `${u(640)} 640w, ${u(960)} 960w, ${u(1280)} 1280w` };
}
