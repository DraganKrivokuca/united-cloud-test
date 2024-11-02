/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Movie } from "@/types/movies";

type UseKeyboardNavigationProps = {
  movies: Movie[];
  columns: number;
  updateMovie: (index: number) => void;
  setIsArrowKeyUsed: (isArrowKeyUsed: boolean) => void;
};

const useKeyboardNavigation = ({
  movies,
  columns,
  updateMovie,
  setIsArrowKeyUsed,
}: UseKeyboardNavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const focusedIndexRef = useRef(focusedIndex);

  useEffect(() => {
    focusedIndexRef.current = focusedIndex;
  }, [focusedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyActions: { [key: string]: () => void } = {
      ArrowDown: () => {
        setFocusedIndex((prev) => Math.min(prev + columns, movies.length - 1));
        setIsArrowKeyUsed(true);
      },
      ArrowUp: () => {
        setFocusedIndex((prev) => Math.max(prev - columns, 0));
        setIsArrowKeyUsed(true);
      },
      ArrowRight: () => {
        setFocusedIndex((prev) => Math.min(prev + 1, movies.length - 1));
        setIsArrowKeyUsed(true);
      },
      ArrowLeft: () => {
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        setIsArrowKeyUsed(true);
      },
      Enter: () => updateMovie(focusedIndexRef.current),
    };

    keyActions[e.key]?.();
  };

  return {
    handleKeyDown,
    setFocusedIndex,
    focusedIndex,
  };
};

export default useKeyboardNavigation;
