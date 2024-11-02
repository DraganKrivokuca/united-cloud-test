import { filterDuplicatedMovies } from "@/lib/filterDuplicatedMovies";
import { sortMovieByRating } from "@/lib/sortMovieByRating";
import { Movie } from "@/types/movies";

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch("http://localhost:3009/movies");
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const movies: Movie[] = await response.json();
  const filteredMovies = filterDuplicatedMovies(movies);
  const sortedMovies = sortMovieByRating(filteredMovies);

  return sortedMovies;
};
