import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './studio/schemaTypes';

// Single pages (one document each) open directly; everything else is a list.
const SINGLETONS = [
	{ id: 'siteSettings', title: 'Site Settings' },
	{ id: 'homePage', title: 'Home Page' },
	{ id: 'storyPage', title: 'Story Page' },
	{ id: 'podcastShow', title: 'Podcast Show' },
	{ id: 'eventsPage', title: 'Events Page' },
	{ id: 'contactPage', title: 'Contact Page' },
];
const LISTS = [
	{ type: 'podcastEpisode', title: 'Podcast Episodes' },
	{ type: 'book', title: 'Books' },
	{ type: 'blogPost', title: 'Blog Posts' },
	{ type: 'event', title: 'Events' },
	{ type: 'ministry', title: 'Ministries & Companies' },
];

export default defineConfig({
	name: 'kevin-and-shelly',
	title: 'Kevin & Shelly',
	projectId: 'a53g9qeq',
	dataset: 'production',
	basePath: '/studio',
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title('Content')
					.items([
						...SINGLETONS.map((s) => S.listItem().title(s.title).id(s.id).child(S.document().schemaType(s.id).documentId(s.id))),
						S.divider(),
						...LISTS.map((l) => S.documentTypeListItem(l.type).title(l.title)),
					]),
		}),
		visionTool(),
		media(),
	],
	schema: {
		types: schemaTypes,
		templates: (templates) => templates.filter(({ schemaType }) => !SINGLETONS.some((s) => s.id === schemaType)),
	},
});
