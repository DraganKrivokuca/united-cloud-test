"use client";

import React from "react";
import Image from "next/image";
import { Movie } from "@/types/movies";
import style from "./MovieItem.module.scss";

type MovieItemProps = {
  movie: Movie;
};

const MovieItem = ({ movie }: MovieItemProps) => {
  const { original_title, poster_path, release_date } = movie;

  return (
    <div className={style.movieItemWrapper}>
      <div className={style.cardWrapper}>
        <Image
          alt={movie.title}
          className={style.cardImage}
          width={150}
          height={150}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          priority
        />
        <div className={style.cardsOverlay}>
          <div className={style.cardTitle}>{original_title}</div>
          <div className={style.cardInfo}>
            <span>{release_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
