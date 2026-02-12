interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({
  title = "Nenhum resultado",
  message = "Não encontramos nenhum item para exibir.",
}: EmptyStateProps) {
  return (
    <div className="flex-1 grid place-items-center px-4 py-12">
      <div className="text-center">
        <h2 className="text-xl font-bold text-neutral-800 mb-2">{title}</h2>
        <p className="text-neutral-500">{message}</p>
      </div>
    </div>
  );
}
