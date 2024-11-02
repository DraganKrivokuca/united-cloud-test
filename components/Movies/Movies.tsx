"use client";

import React from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { moviesAtom } from "@/store/movies";
import useKeyboardNavigation from "@/hooks/useKeyboardNavigation";
import MovieItem from "../MovieItem/MovieItem";
import { Movie } from "@/types/movies";

import style from "./Movies.module.scss";

type MoviesProps = {
  initialMovies: Movie[];
  columns: number;
};

const Movies = ({ initialMovies, columns }: MoviesProps) => {
  useHydrateAtoms([[moviesAtom, initialMovies]]);
  const movies = useAtomValue(moviesAtom);
  const setMovie = useSetAtom(moviesAtom);

  const updateMovie = (index: number) => {
    setMovie((prevState) => {
      const updatedMovies = [...prevState];
      updatedMovies[index] = {
        ...updatedMovies[index],
        isFavorite: true,
      };
      return updatedMovies;
    });
  };

  const { handleKeyDown, setFocusedIndex, focusedIndex } =
    useKeyboardNavigation({
      movies,
      columns,
      updateMovie,
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
