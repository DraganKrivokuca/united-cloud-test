type Ratings = {
  id: string;
  rating: number;
};

export type Movie = {
  id: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  video: boolean;
  ratings: Ratings[];
  release_date: string;
  isFavorite?: boolean;
};
