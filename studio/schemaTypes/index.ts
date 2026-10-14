import blogPost from './blogPost';
import book from './book';
import booksPage from './booksPage';
import contactPage from './contactPage';
import event from './event';
import eventsPage from './eventsPage';
import homePage from './homePage';
import ministry from './ministry';
import podcastEpisode from './podcastEpisode';
import podcastShow from './podcastShow';
import siteSettings from './siteSettings';
import storyPage from './storyPage';

export const schemaTypes: any[] = [
  siteSettings,
  homePage,
  storyPage,
  podcastShow,
  podcastEpisode,
  book,
  booksPage,
  ministry,
  blogPost,
  eventsPage,
  event,
  contactPage,
];
