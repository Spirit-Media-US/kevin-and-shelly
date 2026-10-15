import { sanityClient } from './sanity';

export const SITE_NAME = 'Kevin and Shelly';

export const NAV = [
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
