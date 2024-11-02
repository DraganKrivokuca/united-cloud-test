"use client";

import React from "react";
import useKeyboardNavigation from "@/hooks/useKeyboardNavigation";
import MovieItem from "../MovieItem/MovieItem";
import { Movie } from "@/types/movies";

import style from "./Movies.module.scss";

type MoviesProps = {
  movies: Movie[];
  columns: number;
};

const Movies = ({ movies, columns }: MoviesProps) => {
  const { handleKeyDown, setFocusedIndex, focusedIndex } =
    useKeyboardNavigation({
      movies,
      columns,
    });

  return (
    <div className={style.moviesWrapper} onKeyDown={handleKeyDown}>
      {movies.map((movie: Movie, index: number) => (
        <MovieItem
          movie={movie}
          key={`${movie.title}-${movie.id}`}
          index={index}
          isFocused={index === focusedIndex}
          setFocusedIndex={setFocusedIndex}
        />
      ))}
    </div>
  );
};

export default Movies;
