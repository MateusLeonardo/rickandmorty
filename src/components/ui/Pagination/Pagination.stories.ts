import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination.tsx";
import { fn } from "storybook/test";

const meta = {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
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

export const MiddlePage: Story = {
  args: {
    pages: 10,
    next: "https://rickandmortyapi.com/api/character?page=6",
    prev: "https://rickandmortyapi.com/api/character?page=4",
    page: 5,
    onPrevious: fn(),
    onNext: fn(),
  },
};
