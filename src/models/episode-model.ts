import type { PageInfo } from "./page-info";

export interface EpisodeModel {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
export interface EpisodeResponse {
  info: PageInfo;
  results: EpisodeModel[];
}
