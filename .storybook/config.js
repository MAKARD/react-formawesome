import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.ts/tsx
const req = require.context('../stories', true, /\.story\.ts+x?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
