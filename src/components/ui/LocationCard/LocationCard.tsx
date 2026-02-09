import type { Location } from "../../../models/location-model";

export interface LocationCardProps {
  location: Location;
}

export const LocationCard = ({ location }: LocationCardProps) => {
  const residentsCount = location.residents?.length ?? 0;

  return (
    <article className="bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow p-5">
      <h2 className="text-lg font-bold text-neutral-900 mb-3 truncate">
        {location.name}
      </h2>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="text-neutral-400 uppercase tracking-wider text-xs mb-0.5">
            Tipo
          </dt>
          <dd className="text-neutral-800 font-medium">
            {location.type || "—"}
          </dd>
        </div>
        <div>
          <dt className="text-neutral-400 uppercase tracking-wider text-xs mb-0.5">
            Dimensão
          </dt>
          <dd className="text-neutral-800 font-medium truncate">
            {location.dimension || "—"}
          </dd>
        </div>
        <div>
          <dt className="text-neutral-400 uppercase tracking-wider text-xs mb-0.5">
            Residentes
          </dt>
          <dd className="text-neutral-800 font-medium">{residentsCount}</dd>
        </div>
      </dl>
    </article>
  );
};
