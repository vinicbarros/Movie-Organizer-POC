export type MovieEntity = {
  id: number;
  name: string;
  gender_Id: number;
  platform_Id: number;
  status_Id: number;
  rating?: null | number;
};

export type Movie = Omit<MovieEntity, "id">;

export interface MovieUpdate {
  rating: number | undefined;
  status_id: number | undefined;
}

export type MoviesPlatformEntity = {
  name: string;
  movie_count: number;
  movies: MoviePlatformEntity[];
};

export type MoviePlatformEntity = {
  id: number;
  name: string;
  gender: string;
  rating: string | null;
};

export type GenderEntity = {
  id: number;
  name: string;
};

export type Gender = Omit<GenderEntity, "id">;

export type PlatformEntity = {
  id: number;
  name: string;
};

export type Platform = Omit<PlatformEntity, "id">;

export type StatusEntity = {
  id: number;
  type: string;
};

export type Status = Omit<StatusEntity, "id">;
