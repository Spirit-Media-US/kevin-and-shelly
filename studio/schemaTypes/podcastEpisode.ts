export default {
  name: 'podcastEpisode',
  title: 'Podcast Episodes',
  type: 'document',
  fields: [
    { name: 'word', title: '"New ___" Word (big title)', type: 'string', description: 'e.g. New Voice' },
    { name: 'subtitle', title: 'Subtitle', type: 'string', description: 'e.g. How to Hear God\'s Voice as Your Father' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'word' } },
    { name: 'episodeNumber', title: 'Episode Number', type: 'number' },
    { name: 'releaseDate', title: 'Release Date', type: 'date' },
    { name: 'description', title: 'Description', type: 'text', rows: 6 },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    { name: 'youtubeId', title: 'YouTube Video ID', type: 'string' },
    { name: 'audioUrl', title: 'Audio URL', type: 'url' },
  ],
  orderings: [{ title: 'Episode', name: 'epDesc', by: [{ field: 'episodeNumber', direction: 'desc' }] }],
  preview: { select: { title: 'word', subtitle: 'subtitle' } },
};
