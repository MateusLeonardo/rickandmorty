import { Route, Routes } from "react-router";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage.tsx";
import { EpisodesPage } from "./pages/Episode/EpisodesPage.tsx";
import { LocationsPage } from "./pages/Location/LocationsPage.tsx";
import { CharacterIndex } from "./pages/Character/CharacterIndex.tsx";
import { ChacarcterShow } from "./pages/Character/ChacarcterShow.tsx";

function App() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="characters">
          <Route index element={<CharacterIndex />} />
          <Route path=":id" element={<ChacarcterShow />} />
        </Route>
        <Route path="episodes" element={<EpisodesPage />} />
        <Route path="locations" element={<LocationsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
