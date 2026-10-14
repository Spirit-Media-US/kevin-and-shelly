export default {
  name: 'podcastShow',
  title: 'Podcast Show',
  type: 'document',
  fields: [
    { name: 'title', title: 'Show Title', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'schedule', title: 'Schedule Line', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 6 },
    { name: 'artwork', title: 'Show Artwork', type: 'image', fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    {
      name: 'listenLinks', title: 'Listen / Follow Links', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'url', title: 'URL', type: 'url' },
      ] }],
    },
  ],
};
