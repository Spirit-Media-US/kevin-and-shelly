export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteName', title: 'Site Name', type: 'string', initialValue: 'Kevin & Shelly' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'seoDescription', title: 'Default SEO Description', type: 'text', rows: 3 },
    { name: 'logo', title: 'Logo (optional — text logo shows until set)', type: 'image' },
    { name: 'ogImage', title: 'Default Share Image', type: 'image' },
    { name: 'kevinEmail', title: "Kevin's Email", type: 'string' },
    { name: 'shellyEmail', title: "Shelly's Email", type: 'string' },
    {
      name: 'socials', title: 'Social Links', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'url', title: 'URL', type: 'url' },
      ] }],
    },
    { name: 'location', title: 'Location Line (footer)', type: 'string' },
  ],
};
