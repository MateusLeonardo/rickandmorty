import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonWithProps } from "./ButtonWithProps";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const meta = {
  title: "RickAndMorty/ButtonWithProps",
  component: ButtonWithProps,
  parameters: {
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonWithProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Clique",
  },
};

export const Disabled: Story = {
  args: {
    children: "Clique",
    disabled: true,
  },
};
