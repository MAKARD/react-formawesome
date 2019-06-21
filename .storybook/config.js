import "./styles.scss";

import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.ts/tsx
const req = require.context("../stories", true, /\.story\.ts+x?$/);
function loadStories() {
    req.keys().sort((prev, next) => prev.length - next.length).forEach(filename => req(filename));
}

configure(loadStories, module);
