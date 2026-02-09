import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const meta: Meta<typeof Header> = {
  title: "RickAndMorty/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
