import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { LocationCard } from "./LocationCard.tsx";
import { LocationCardSkeleton } from "./LocationCard.skeleton.tsx";

const locationMock = {
  id: 1,
  name: "Earth (C-137)",
  type: "Planet",
  dimension: "Dimension C-137",
  residents: ["https://api.com/character/1"],
  url: "",
  created: "",
};

const meta = {
  title: "Cards/LocationCard",
  component: LocationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LocationCard>;

export default meta;
type Story = StoryObj<typeof meta>;
type RenderStory = StoryObj<Meta<React.ComponentType>>;

export const Default: Story = {
  args: {
    location: locationMock,
  },
};

export const Skeleton: RenderStory = {
  render: () => React.createElement(LocationCardSkeleton),
};
