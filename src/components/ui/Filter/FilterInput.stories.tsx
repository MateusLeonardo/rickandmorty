import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterInput } from "./FilterInput.tsx";
import { fn } from "storybook/test";

const meta = {
  title: "UI/FilterInput",
  component: FilterInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FilterInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: fn(),
    placeholder: "Pesquisar",
    value: "",
  },
};

export const WithValue: Story = {
  args: {
    onChange: fn(),
    placeholder: "Pesquisar",
    value: "Rick",
  },
};
