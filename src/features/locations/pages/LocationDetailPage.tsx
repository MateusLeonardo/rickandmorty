import { Link, useParams } from "react-router";
import { useLocation } from "../hooks/useLocation";
import { FaArrowLeft } from "react-icons/fa";
import { useCharactersByIds } from "@/features/characters/hooks/useCharactersByIds";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { CharacterCard } from "@/components/cards/CharacterCard";

export function LocationDetailPage() {
  const { id } = useParams();
  const { data: location, isLoading: isLoadingLocation } = useLocation(
    Number(id),
  );
  const residentsId = location?.residents.map((resident) =>
    Number(resident.split("/").pop()),
  );

  const { data: characters, isLoading: isLoadingCharacters } =
    useCharactersByIds(residentsId || []);

  if (isLoadingLocation || isLoadingCharacters) return <div>Loading...</div>;
  return (
    <div className="p-4">
      <Link
        to="/locations"
        className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-700 text-sm mb-6 transition-colors"
      >
        <FaArrowLeft /> Go back
      </Link>

      <div className="flex flex-col gap-5 lg:gap-10 items-center mb-4">
        <h1 className="text-5xl text-black">{location?.name}</h1>
        <div className="flex items-center gap-6 md:gap-60 justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl">Type</p>
            <p className="text-gray-500">{location?.type}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl">Dimension</p>
            <p className="text-gray-500">{location?.dimension}</p>
          </div>
        </div>
      </div>
      {characters && (
        <ContentGrid
          items={characters}
          keyExtractor={(character) => character.id}
          renderItem={(character) => <CharacterCard character={character} />}
        />
      )}
    </div>
  );
}
