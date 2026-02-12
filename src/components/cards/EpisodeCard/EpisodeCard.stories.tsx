import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { EpisodeCard } from "./EpisodeCard.tsx";
import { EpisodeCardSkeleton } from "./EpisodeCard.skeleton.tsx";
import { episodesMock } from "@/test/mocks/episodes.mock.ts";

const meta = {
  title: "Cards/EpisodeCard",
  component: EpisodeCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EpisodeCard>;

export default meta;
type Story = StoryObj<typeof meta>;
type RenderStory = StoryObj<Meta<React.ComponentType>>;

export const Default: Story = {
  args: {
    episode: episodesMock[0],
  },
};

export const Skeleton: RenderStory = {
  render: () => React.createElement(EpisodeCardSkeleton),
};
