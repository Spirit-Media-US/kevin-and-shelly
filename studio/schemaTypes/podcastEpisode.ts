// Podcast episode. An episode shows on the site once it has a Title.
// Thumbnail: the uploaded 1920×1080 image until a YouTube link is added; then the site uses
// YouTube's own thumbnail and plays the video (Kevin 2026-10-15).
export default {
  name: 'podcastEpisode',
  title: 'Podcast Episodes',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title (shown on site, same as the YouTube/Apple title)', type: 'string' },
    { name: 'slug', title: 'Page address', type: 'slug', options: { source: 'title' }, description: 'Do not change after launch: it is the episode page URL.' },
    { name: 'episodeNumber', title: 'Episode Number', type: 'number' },
    { name: 'season', title: 'Season', type: 'number', initialValue: 1 },
    { name: 'releaseDate', title: 'Release Date', type: 'date' },
    { name: 'youtubeUrl', title: 'YouTube link', type: 'url', description: 'Paste the video link when the episode launches. The site then uses the YouTube thumbnail and video.' },
    { name: 'thumbnail', title: 'Thumbnail (1920×1080, used until the YouTube link is added)', type: 'image', fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    { name: 'description', title: 'Summary (2–3 sentences, shown on site for search)', type: 'text', rows: 4 },
    { name: 'scriptureRef', title: 'Scripture reference', type: 'string', description: 'e.g. Luke 15:20' },
    { name: 'scriptureText', title: 'Scripture text (Father\'s Heart Bible)', type: 'text', rows: 3 },
    { name: 'scriptureUrl', title: 'Scripture link (Father\'s Heart Bible reader)', type: 'url' },
    { name: 'audioUrl', title: 'Audio URL', type: 'url' },
    { name: 'word', title: 'Theme (internal, not shown)', type: 'string', description: 'e.g. New Voice' },
    { name: 'subtitle', title: 'Theme subtitle (internal, not shown)', type: 'string' },
  ],
  orderings: [{ title: 'Episode', name: 'epAsc', by: [{ field: 'episodeNumber', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'word', media: 'thumbnail' } },
};
