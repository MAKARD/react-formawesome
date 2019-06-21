import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module)
    .add("Read first", () => {
        return <ReactMarkdown className="markdown" source={require("./index.md").default} />;
    });
