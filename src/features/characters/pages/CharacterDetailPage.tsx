import { useParams, Link } from "react-router";
import { useCharacter } from "../hooks/useCharacter.ts";
import {
  genderLabel,
  getCharacterStatusLabel,
  statusBadgeClass,
} from "@/types/character.ts";
import { ErrorState } from "@/components/feedback/ErrorState/index.ts";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function CharacterDetailSkeleton() {
  return (
    <div className="container mx-auto w-full flex-1 min-h-0 grid place-items-center px-4 py-8">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <div className="h-5 w-40 bg-neutral-200 rounded mb-6 self-start animate-pulse" />
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden flex flex-col sm:flex-row w-full animate-pulse">
          <div className="w-full sm:w-80 sm:min-w-[320px] sm:h-90 aspect-square sm:aspect-auto min-h-70 bg-neutral-200 shrink-0" />
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center gap-6">
            <div className="h-8 bg-neutral-200 rounded w-3/4" />
            <div className="h-5 bg-neutral-100 rounded w-1/3" />
            <dl className="grid gap-4 sm:grid-cols-2 mt-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <div className="h-3 bg-neutral-100 rounded w-16 mb-2" />
                  <div className="h-4 bg-neutral-200 rounded w-full" />
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, isError } = useCharacter(Number(id));

  const locationId = character?.location.url.split("/").pop();

  if (isLoading) return <CharacterDetailSkeleton />;

  if (isError || !character) {
    return (
      <ErrorState
        title="Personagem não encontrado"
        message="O personagem que você está procurando não existe."
        backTo="/characters"
        backLabel="Voltar aos personagens"
      />
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/characters"
        className="flex items-center gap-2 text-neutral-500 hover:text-neutral-700 text-sm  w-fit"
      >
        <FaArrowLeft />
        Go back
      </Link>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mb-4">
        <figure>
          <img
            src={character.image}
            alt={character.name}
            className="object-cover rounded-full"
          />
        </figure>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-black">
            {character.name}
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-500 font-medium mb-4">Informations</h2>
            <div className="flex flex-col items-start gap-2">
              <span className="text-black font-medium">Gender</span>
              <span className="text-gray-500">{character.gender}</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-black font-medium">Status</span>
              <span className="text-gray-500">{character.status}</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-black font-medium">Specie</span>
              <span className="text-gray-500">{character.species}</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-black font-medium">Origin</span>
              <span className="text-gray-500">{character.origin.name}</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-black font-medium">Type</span>
              <span className="text-gray-500">
                {character.type || "Unknown"}
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-black font-medium">Location</span>
              <span className="text-gray-500">
                <Link
                  to={`/locations/${locationId}`}
                  className="text-gray-500 flex items-center gap-2"
                >
                  {character.location.name}
                  <IoIosArrowForward />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
