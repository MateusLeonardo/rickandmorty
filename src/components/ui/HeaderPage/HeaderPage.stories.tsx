import type { Meta, StoryObj } from "@storybook/react-vite";
import HeaderPage, { type HeaderPageProps } from "./HeaderPage";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const meta = {
  title: "RickAndMorty/HeaderPage",
  component: HeaderPage,
  parameters: {
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderPage>;

export default meta;
type Story = StoryObj<typeof meta>;
type RenderStory = StoryObj<Meta<React.ComponentType>>;

export const Default: Story = {
  args: {
    title: "Locais",
    subtitle: "Explore os locais da série Rick and Morty",
  },
};

export const Character: Story = {
  args: {
    title: "Personagens",
    subtitle: "Explore os personagens da série Rick and Morty",
  },
};
