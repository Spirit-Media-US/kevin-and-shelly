import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// Read .env too (git pushd builds without exporting it); CF Pages sets PUBLIC_SITE_URL as an env var.
const fileEnv = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// Each cloned site MUST set PUBLIC_SITE_URL (in .env locally and in the
// CF Pages production env). The fallback is intentionally a fake string so a
// missed configuration is caught in QA (canonical/og:url will render with
// example.com and grep visibly) instead of shipping silently.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || fileEnv.PUBLIC_SITE_URL || 'https://example.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/studio'),
      serialize(item) {
        // Blog posts — highest priority, weekly refresh (SMP blog protocol step 8)
        if (item.url.includes('/blog/') && !item.url.endsWith('/blog/')) {
          return { ...item, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
        }
        if (item.url.endsWith('/blog/') || item.url.endsWith('/podcast/')) {
          return { ...item, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() };
        }
        return { ...item, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() };
      },
    }),
  ],
  build: {
    // Trait 6: Astro inlines small stylesheets, externalizes larger ones.
    // scripts/async-css.mjs converts the externalized bundles to async via the
    // media="print" onload swap so they never block first paint.
    inlineStylesheets: 'auto',
  },
  vite: {
    server: { allowedHosts: ['preview.spiritmediapublishing.com'] },
    plugins: [tailwindcss()],
  },
});
