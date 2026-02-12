import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorState } from "./ErrorState.tsx";

const meta = {
  title: "Feedback/ErrorState",
  component: ErrorState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackLink: Story = {
  args: {
    title: "Personagem não encontrado",
    message: "O personagem que você está procurando não existe.",
    backTo: "/characters",
    backLabel: "Voltar aos personagens",
  },
};
