import type { ReactNode } from "react";

export interface ContentGridSkeletonProps {
  length: number;
  renderSkeleton: () => ReactNode;
  gridClassName?: string;
}

const defaultGridClassName =
  "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4";

export function ContentGridSkeleton({
  length,
  renderSkeleton,
  gridClassName = defaultGridClassName,
}: ContentGridSkeletonProps) {
  return (
    <div className={gridClassName}>
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="w-full min-w-0 self-start">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
}
