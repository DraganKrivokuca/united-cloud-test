"use client";

import React from "react";
import { Movie } from "@/types/movies";

import style from "./Movies.module.scss";

type MoviesProps = {
  movies: Movie[];
};

const Movies = ({ movies }: MoviesProps) => {
  console.log(movies);

  return (
    <div className={style.moviesWrapper}>
      <h1>Movies</h1>
    </div>
  );
};

export default Movies;
