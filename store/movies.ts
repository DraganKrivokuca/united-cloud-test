import { atom } from "jotai";
import { Movie } from "@/types/movies";

export const moviesAtom = atom<Movie[]>([
  {
    id: "",
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    original_language: "",
    original_title: "",
    overview: "",
    poster_path: "",
    title: "",
    video: false,
    ratings: [
      {
        id: "",
        rating: 0,
      },
    ],
    release_date: "",
    isFavorite: false,
  },
]);
