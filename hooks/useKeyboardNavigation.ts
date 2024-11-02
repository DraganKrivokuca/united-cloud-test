/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Movie } from "@/types/movies";

type UseKeyboardNavigationProps = {
  movies: Movie[];
  columns: number;
};

const useKeyboardNavigation = ({
  movies,
  columns,
}: UseKeyboardNavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDownWrapper = (e: KeyboardEvent) => {
      handleKeyDown(e as unknown as React.KeyboardEvent<HTMLDivElement>);
    };
    window.addEventListener("keydown", handleKeyDownWrapper);

    return () => {
      window.removeEventListener("keydown", handleKeyDownWrapper);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyActions: { [key: string]: () => void } = {
      ArrowDown: () =>
        setFocusedIndex((prev) => Math.min(prev + columns, movies.length - 1)),
      ArrowUp: () => setFocusedIndex((prev) => Math.max(prev - columns, 0)),
      ArrowRight: () =>
        setFocusedIndex((prev) => Math.min(prev + 1, movies.length - 1)),
      ArrowLeft: () => setFocusedIndex((prev) => Math.max(prev - 1, 0)),
      Enter: () => console.log("pressed enter"),
    };

    keyActions[e.key]?.();
  };

  return { handleKeyDown, setFocusedIndex, focusedIndex };
};

export default useKeyboardNavigation;
