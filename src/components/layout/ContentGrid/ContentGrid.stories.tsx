import type { Meta } from "@storybook/react-vite";
import React from "react";
import { Link } from "react-router";
import { ContentGrid } from "./ContentGrid.tsx";
import { ContentGridSkeleton } from "./ContentGridSkeleton.tsx";
import { CharacterCard } from "@/components/cards/CharacterCard/CharacterCard.tsx";
import { CharacterCardSkeleton } from "@/components/cards/CharacterCard/CharacterCard.skeleton.tsx";
import { LocationCard } from "@/components/cards/LocationCard/LocationCard.tsx";
import { LocationCardSkeleton } from "@/components/cards/LocationCard/LocationCard.skeleton.tsx";
import { EpisodeCard } from "@/components/cards/EpisodeCard/EpisodeCard.tsx";
import { EpisodeCardSkeleton } from "@/components/cards/EpisodeCard/EpisodeCard.skeleton.tsx";
import { charactersMock } from "@/test/mocks/characters.mock.ts";
import type { Location } from "@/types/location.ts";
import type { Episode } from "@/types/episode.ts";

const meta = {
  title: "Layout/ContentGrid",
  component: ContentGrid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: React.FC) => (
      <div className="container mx-auto p-4 max-w-6xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContentGrid>;

export default meta;

type RenderStory = { render: () => React.ReactElement; parameters?: unknown };

const characterGridClassName =
  "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4";
const locationGridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";
const episodeGridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

const locationMock: Location = {
  id: 1,
  name: "Earth (C-137)",
  type: "Planet",
  dimension: "Dimension C-137",
  residents: ["https://api.com/character/1"],
  url: "",
  created: "",
};

const episodeMock: Episode = {
  id: 1,
  name: "Pilot",
  episode: "S01E01",
  air_date: "December 2, 2013",
  characters: [],
  url: "",
  created: "",
};

export const WithCharacters: RenderStory = {
  render: () => (
    <ContentGrid
      items={charactersMock}
      keyExtractor={(c) => c.id}
      gridClassName={characterGridClassName}
      renderItem={(character) => (
        <Link
          to={`/characters/${character.id}`}
          className="block w-full min-w-0"
        >
          <CharacterCard character={character} />
        </Link>
      )}
    />
  ),
};

export const WithLocations: RenderStory = {
  render: () => (
    <ContentGrid
      items={[locationMock]}
      keyExtractor={(loc) => loc.id}
      gridClassName={locationGridClassName}
      renderItem={(location) => <LocationCard location={location} />}
    />
  ),
};

export const WithEpisodes: RenderStory = {
  render: () => (
    <ContentGrid
      items={[episodeMock]}
      keyExtractor={(ep) => ep.id}
      gridClassName={episodeGridClassName}
      renderItem={(episode) => <EpisodeCard episode={episode} />}
    />
  ),
};

export const SkeletonCharacters: RenderStory = {
  render: () => (
    <ContentGridSkeleton
      length={10}
      gridClassName={characterGridClassName}
      renderSkeleton={() => <CharacterCardSkeleton />}
    />
  ),
};

export const SkeletonLocations: RenderStory = {
  render: () => (
    <ContentGridSkeleton
      length={8}
      gridClassName={locationGridClassName}
      renderSkeleton={() => <LocationCardSkeleton />}
    />
  ),
};

export const SkeletonEpisodes: RenderStory = {
  render: () => (
    <ContentGridSkeleton
      length={6}
      gridClassName={episodeGridClassName}
      renderSkeleton={() => <EpisodeCardSkeleton />}
    />
  ),
};
