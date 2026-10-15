export default {
  name: 'book',
  title: 'Books',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'section', title: 'Books Page Section', type: 'string', options: { list: [{ title: 'New from Shelly (top)', value: 'shelly' }, { title: "Kevin's Books", value: 'kevin' }, { title: "Father's Heart Bible", value: 'fhb' }] }, initialValue: 'kevin' },
    { name: 'author', title: 'Author', type: 'string', options: { list: ['Kevin White', 'Shelly White', 'Kevin and Shelly White', 'Spirit Media Publishing'] } },
    { name: 'cover', title: 'Cover', type: 'image', fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'buyUrl', title: 'Buy / Learn More Link', type: 'url' },
    { name: 'buyLabel', title: 'Button Label', type: 'string', initialValue: 'Get the book' },
    { name: 'featured', title: 'Show on Home Page', type: 'boolean', initialValue: true },
    { name: 'order', title: 'Order', type: 'number' },
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
};
