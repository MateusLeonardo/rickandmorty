export interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>
      <p className="text-neutral-500 mt-1">{subtitle}</p>
    </header>
  );
}
