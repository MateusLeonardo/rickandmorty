import { Link } from "react-router";

interface ErrorStateProps {
  title?: string;
  message?: string;
  backTo?: string;
  backLabel?: string;
}

export function ErrorState({
  title = "Algo deu errado",
  message = "Não foi possível carregar os dados.",
  backTo,
  backLabel = "Voltar",
}: ErrorStateProps) {
  return (
    <div className="flex-1 grid place-items-center px-4">
      <div className="text-center">
        <h2 className="text-xl font-bold text-neutral-800 mb-2">{title}</h2>
        <p className="text-neutral-500 mb-4">{message}</p>
        {backTo && (
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            ← {backLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
