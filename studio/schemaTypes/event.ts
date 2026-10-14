export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'url', title: 'Details / Registration Link', type: 'url' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
  ],
  orderings: [{ title: 'Date', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] }],
};
