export default {
  name: 'eventsPage',
  title: 'Events Page',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'intro', title: 'Intro', type: 'text', rows: 3 },
    { name: 'speakingHeading', title: 'Speaking Request Heading', type: 'string' },
    { name: 'speakingText', title: 'Speaking Request Text', type: 'text', rows: 3 },
    { name: 'emptyText', title: 'Text When No Events Are Listed', type: 'string' },
  ],
};
