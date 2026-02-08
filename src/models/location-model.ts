import type { PageInfo } from "./page-info";

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
  info: PageInfo;
  results: Location[];
}
