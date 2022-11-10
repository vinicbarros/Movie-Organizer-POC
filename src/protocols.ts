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
