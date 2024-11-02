import { Movie } from "@/types/movies";

export const filterDuplicatedMovies = (movies: Movie[]) => {
  return Array.from(
    new Map(movies.map((movie: Movie) => [movie.id, movie])).values()
  );
};
