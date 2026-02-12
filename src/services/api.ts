export const API_URL = "https://rickandmortyapi.com/api";

export function toQueryParams<
  T extends Record<string, string | number | null | undefined>,
>(params: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== "" && value != null),
  ) as Partial<T>;
}
