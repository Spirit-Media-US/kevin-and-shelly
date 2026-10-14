export default {
  name: 'ministry',
  title: 'Ministries & Companies',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'summary', title: 'Summary', type: 'text', rows: 4 },
    { name: 'url', title: 'Website', type: 'url' },
    { name: 'linkLabel', title: 'Link Label', type: 'string' },
    { name: 'image', title: 'Image or Logo', type: 'image', fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    { name: 'order', title: 'Order', type: 'number' },
  ],
};
