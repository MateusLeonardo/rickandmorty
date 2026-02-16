import { Route, Routes } from "react-router";
import { RootLayout } from "@/components/layout/RootLayout/index.ts";
import { HomePage } from "@/features/home/index.ts";
import {
  CharactersPage,
  CharacterDetailPage,
} from "@/features/characters/index.ts";
import { EpisodesPage, EpisodeDetailPage } from "@/features/episodes/index.ts";
import {
  LocationDetailPage,
  LocationsPage,
} from "@/features/locations/index.ts";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="characters">
          <Route index element={<CharactersPage />} />
          <Route path=":id" element={<CharacterDetailPage />} />
        </Route>
        <Route path="episodes">
          <Route index element={<EpisodesPage />} />
          <Route path=":id" element={<EpisodeDetailPage />} />
        </Route>
        <Route path="locations">
          <Route index element={<LocationsPage />} />
          <Route path=":id" element={<LocationDetailPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
