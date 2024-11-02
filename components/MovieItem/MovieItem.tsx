"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Movie } from "@/types/movies";
import FavoriteIcon from "@/icons/FavoriteIcon";
import classNames from "classnames/bind";

import style from "./MovieItem.module.scss";

type MovieItemProps = {
  movie: Movie;
  index: number;
  isFocused: boolean;
  setFocusedIndex: (index: number) => void;
};

const setClass = classNames.bind(style);

const MovieItem = ({
  movie,
  index,
  isFocused,
  setFocusedIndex,
}: MovieItemProps) => {
  const { original_title, poster_path, release_date, isFavorite } = movie;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFocused && itemRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            itemRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(itemRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isFocused]);

  return (
    <div
      className={style.movieItemWrapper}
      ref={itemRef}
      onMouseDown={(e) => {
        e.preventDefault();
        setFocusedIndex(index);
      }}>
      <div
        className={setClass({
          cardWrapper: true,
          focused: isFocused,
        })}>
        <Image
          alt={movie.title}
          className={style.cardImage}
          width={150}
          height={150}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          priority
        />
        <div
          className={setClass({
            cardsOverlay: true,
            focused: isFocused,
          })}>
          <div className={style.cardTitle}>{original_title}</div>
          <div className={style.cardInfo}>
            <span>{release_date}</span>
            <div className={style.cardFavorite}>
              <span>
                <FavoriteIcon color={isFavorite ? "#f31260" : "#fff"} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
