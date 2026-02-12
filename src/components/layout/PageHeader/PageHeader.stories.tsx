import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHeader } from "./PageHeader.tsx";

const meta = {
  title: "Layout/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Locais",
    subtitle: "Explore os locais da série Rick and Morty",
  },
};

export const Characters: Story = {
  args: {
    title: "Personagens",
    subtitle: "Explore os personagens da série Rick and Morty",
  },
};
