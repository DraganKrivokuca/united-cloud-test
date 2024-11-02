import { Movie } from "@/types/movies";

export const removeDuplicateMovies = (movies: Movie[]) => {
  return Array.from(
    new Map(movies.map((movie: Movie) => [movie.id, movie])).values()
  );
};
