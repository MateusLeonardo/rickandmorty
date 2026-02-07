import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { fn } from "storybook/test";

import { CharacterCard } from "./CharacterCard";
import { CharacterCardSkeleton } from "./CharacterCardSkeleton";
import { charactersMock } from "../../mock/character";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const meta = {
  title: "RickAndMorty/CharacterCard",
  component: CharacterCard,
  parameters: {
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
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
type RenderStory = StoryObj<Meta<React.ComponentType>>;

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
      status: "Dead",
      name: "Rick Sanchez (Morto)",
    },
  },
};

export const UnknownStatus: Story = {
  args: {
    character: {
      ...charactersMock[0],
      status: "unknown",
      name: "Rick Sanchez (Desconhecido)",
    },
  },
};

export const Skeleton: RenderStory = {
  render: () => React.createElement(CharacterCardSkeleton),
};
