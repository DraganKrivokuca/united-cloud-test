import { Movie } from "@/types/movies";

export const sortMovieByRating = (movies: Movie[]) => {
  const getImdbRating = (movie: Movie) =>
    movie.ratings.find((r) => r.id === "imdb")?.rating || 0;

  const uniqueMovies = Array.from(
    new Map(movies.map((movie: Movie) => [movie.id, movie])).values()
  );
  uniqueMovies.sort((a, b) => getImdbRating(b) - getImdbRating(a));

  return uniqueMovies;
};
