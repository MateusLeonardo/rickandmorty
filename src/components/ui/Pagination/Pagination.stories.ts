import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { fn } from "storybook/test";

const meta = {
  title: "RickAndMorty/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pages: 5,
    next: "https://rickandmortyapi.com/api/character?page=2",
    prev: null,
    page: 1,
    onPrevious: fn(),
    onNext: fn(),
  },
};
