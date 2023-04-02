import { useEffect } from "react";

export const useOutsideClick = (ref, onClick) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        const isClickingOutside = ref.current && !ref.current.contains(event.target);
  
        if (isClickingOutside) {
          onClick();
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
};
