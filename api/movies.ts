import { Movie } from "@/types/movies";

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch("http://localhost:3009/movies");
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const movies: Movie[] = await response.json();
  return movies;
};
