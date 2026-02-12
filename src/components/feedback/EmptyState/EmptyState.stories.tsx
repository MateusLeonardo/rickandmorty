import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState } from "./EmptyState.tsx";

const meta = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    title: "Sem personagens",
    message: "Nenhum personagem encontrado com os filtros selecionados.",
  },
};
