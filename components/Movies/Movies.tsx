"use client";

import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { Movie } from "@/types/movies";

import style from "./Movies.module.scss";

type MoviesProps = {
  movies: Movie[];
};

const Movies = ({ movies }: MoviesProps) => {
  return (
    <div className={style.moviesWrapper}>
      {movies.map((movie: Movie) => (
        <MovieItem movie={movie} key={`${movie.title}-${movie.id}`} />
      ))}
    </div>
  );
};

export default Movies;
