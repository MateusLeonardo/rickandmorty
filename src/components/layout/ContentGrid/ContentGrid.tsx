import type { ReactNode } from "react";

export interface ContentGridProps<T> {
  items: T[];
  keyExtractor: (item: T) => string | number;
  renderItem: (item: T) => ReactNode;
  gridClassName?: string;
}

const defaultGridClassName =
  "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4";

export function ContentGrid<T>({
  items,
  keyExtractor,
  renderItem,
  gridClassName = defaultGridClassName,
}: ContentGridProps<T>) {
  return (
    <div className={gridClassName}>
      {items.map((item) => (
        <div key={keyExtractor(item)} className="w-full min-w-0 self-start">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
