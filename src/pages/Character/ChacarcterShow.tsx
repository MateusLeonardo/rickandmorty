import {
  genderLabel,
  getCharacterStatusLabel,
  statusBadgeClass,
} from "../../models/character-model";
import { useParams, Link } from "react-router";
import { useGetCharacter } from "../../hooks/queries/characters/use-get-character";

export function ChacarcterShow() {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, isError } = useGetCharacter(Number(id));

  if (isLoading) {
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

  if (isError || !character) {
    return (
      <div className="container mx-auto w-full flex-1 min-h-0 grid place-items-center px-4">
        <div className="text-center">
          <p className="text-xl text-neutral-600 mb-4">
            Personagem não encontrado
          </p>
          <Link
            to="/characters"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Voltar aos personagens
          </Link>
        </div>
      </div>
    );
  }

  const statusLabel = getCharacterStatusLabel(character.status);
  const statusClass = statusBadgeClass[statusLabel] ?? "bg-neutral-500";

  return (
    <div className="container mx-auto w-full flex-1 min-h-0 grid place-items-center px-4 py-8">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <Link
          to="/characters"
          className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-700 text-sm mb-6 transition-colors self-start"
        >
          ← Voltar aos personagens
        </Link>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 flex flex-col sm:flex-row w-full">
          <div className="relative w-full sm:w-80 sm:min-w-[320px] sm:h-[360px] aspect-square sm:aspect-auto min-h-[280px] overflow-hidden bg-neutral-100 flex-shrink-0">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover"
            />
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow ${statusClass}`}
            >
              {statusLabel}
            </span>
          </div>

          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2 tracking-tight">
              {character.name}
            </h1>
            <p className="text-neutral-500 text-lg mb-6">{character.species}</p>

            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1">
                  Gênero
                </dt>
                <dd className="text-neutral-800">
                  {genderLabel[character.gender] ?? character.gender}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1">
                  Origem
                </dt>
                <dd className="text-neutral-800">{character.origin.name}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1">
                  Localização
                </dt>
                <dd className="text-neutral-800">{character.location.name}</dd>
              </div>
              {character.type && (
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1">
                    Tipo
                  </dt>
                  <dd className="text-neutral-800">{character.type}</dd>
                </div>
              )}
            </dl>
          </div>
        </article>
      </div>
    </div>
  );
}
