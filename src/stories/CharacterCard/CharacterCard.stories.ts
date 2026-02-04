import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { CharacterCard } from "./CharacterCard";
import { charactersMock } from "../../mock/character";

const meta = {
  title: "RickAndMorty/CharacterCard",
  component: CharacterCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Função chamada quando o card é clicado",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CharacterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rick: Story = {
  args: {
    character: charactersMock[0],
  },
};

export const Morty: Story = {
  args: {
    character: charactersMock[1],
  },
};

export const DeadCharacter: Story = {
  args: {
    character: {
      ...charactersMock[0],
      status: "Dead" as const,
      name: "Rick Sanchez (Morto)",
    },
  },
};

export const UnknownStatus: Story = {
  args: {
    character: {
      ...charactersMock[0],
      status: "unknown" as const,
      name: "Rick Sanchez (Desconhecido)",
    },
  },
};
