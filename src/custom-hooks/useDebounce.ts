import { useEffect, useState } from "react";

export function useDebounce<t>(value: t, delay: number): t {
  const [debouncedValue, setDebouncedValue] = useState<t>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
}
