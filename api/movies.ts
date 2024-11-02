import { Movie } from "@/types/movies";

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch("http://localhost:3009/movies");
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const movies: Movie[] = await response.json();

  const uniqueMovies = Array.from(
    new Map(movies.map((movie: Movie) => [movie.id, movie])).values()
  );
  uniqueMovies.sort((a, b) => {
    const ratingA = a.ratings.find((r) => r.id === "imdb")?.rating || 0;
    const ratingB = b.ratings.find((r) => r.id === "imdb")?.rating || 0;
    return ratingB - ratingA;
  });

  return uniqueMovies;
};
