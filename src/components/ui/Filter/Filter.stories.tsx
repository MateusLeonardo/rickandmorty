import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterSelect } from "./FilterSelect.tsx";
import { fn } from "storybook/test";

const meta = {
  title: "UI/FilterSelect",
  component: FilterSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FilterSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["Alive", "Dead", "Unknown"],
    value: "",
    onChange: fn(),
    placeholder: "Status",
  },
};

export const EmptyOptions: Story = {
  args: {
    options: [],
    onChange: fn(),
    placeholder: "Status",
  },
};
