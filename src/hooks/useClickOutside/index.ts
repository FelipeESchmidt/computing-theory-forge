import React, { useEffect } from "react";

export type UseClickOutsideProps = (
  ref: React.MutableRefObject<HTMLElement | null> | null,
  callback: () => void,
) => void;

export const useClickOutside: UseClickOutsideProps = (ref, callback) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (!ref) return;
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);
};
