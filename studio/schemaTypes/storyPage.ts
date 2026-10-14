export default {
  name: 'storyPage',
  title: 'Story Page',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    { name: 'intro', title: 'Intro', type: 'text', rows: 3 },
    {
      name: 'chapters', title: 'Story Sections', type: 'array',
      of: [{ type: 'object', name: 'storySection', fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 6 },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
      ] }],
    },
    {
      name: 'ministries', title: 'What We Lead (Father\'s Heart Bible, Spirit Media Publishing)', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'ministry' }] }],
    },
  ],
};
