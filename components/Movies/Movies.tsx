/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
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
  const [isArrowKeyUsed, setIsArrowKeyUsed] = useState(false);
  useHydrateAtoms([[moviesAtom, initialMovies]]);
  const movies = useAtomValue(moviesAtom);
  const setMovie = useSetAtom(moviesAtom);

  const updateMovie = (index: number) => {
    setMovie((prevState) => {
      const updatedMovies = [...prevState];
      if (updatedMovies[index].isFavorite) {
        updatedMovies.splice(index, 1);
      } else {
        updatedMovies[index] = { ...updatedMovies[index], isFavorite: true };
      }
      return updatedMovies;
    });
  };

  const { handleKeyDown, setFocusedIndex, focusedIndex } =
    useKeyboardNavigation({
      movies,
      columns,
      updateMovie,
      setIsArrowKeyUsed,
    });

  useEffect(() => {
    const handleKeyDownWrapper = (e: KeyboardEvent) => {
      handleKeyDown(e as unknown as React.KeyboardEvent<HTMLDivElement>);
    };
    window.addEventListener("keydown", handleKeyDownWrapper);

    return () => {
      window.removeEventListener("keydown", handleKeyDownWrapper);
    };
  }, []);

  return (
    <div className={style.moviesWrapper}>
      {movies.map((movie: Movie, index: number) => (
        <MovieItem
          movie={movie}
          key={`${movie.title}-${movie.id}`}
          index={index}
          isFocused={index === focusedIndex}
          setFocusedIndex={setFocusedIndex}
          updateMovie={updateMovie}
          setIsArrowKeyUsed={setIsArrowKeyUsed}
          isArrowKeyUsed={isArrowKeyUsed}
        />
      ))}
    </div>
  );
};

export default Movies;
