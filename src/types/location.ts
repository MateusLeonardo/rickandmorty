import type { PaginationInfo } from "./pagination.ts";

export interface Location {
  id: number;
  name: string;
  dimension: string;
  type: string;
  url: string;
  residents: string[];
  created: string;
}

export interface LocationResponse {
  info: PaginationInfo;
  results: Location[];
}
