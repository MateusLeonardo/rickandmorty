import type { Preview } from "@storybook/react-vite";
import React from "react";
import { MemoryRouter } from "react-router";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(Story, null),
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
