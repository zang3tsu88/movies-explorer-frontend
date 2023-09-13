import { useEffect, useState } from "react";
import {
  CARD_ADD,
  CARD_COUNT
} from "./constants";

export function ResizeHandlerComponent() {
  const [moviesToShow, setMoviesToShow] = useState({
    moviesOnPage: CARD_COUNT.WIDTH_1280,
    addMoviesOnPage: CARD_ADD.WIDTH_1280,
  });

  useEffect(() => {
    function handleWindowResize() {
      const screenWidth = window.innerWidth;

      let moviesOnPage = CARD_COUNT.WIDTH_1280;
      let addMoviesOnPage = CARD_ADD.WIDTH_1280;

      if (screenWidth < 1024) {
        moviesOnPage = CARD_COUNT.WIDTH_1024;
        addMoviesOnPage = CARD_ADD.WIDTH_1024;
      }

      if (screenWidth < 768) {
        moviesOnPage = CARD_COUNT.WIDTH_768;
        addMoviesOnPage = CARD_ADD.WIDTH_768;
      }

      setMoviesToShow({ moviesOnPage, addMoviesOnPage });
    }

    handleWindowResize();

    let resizeTimeout;

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleWindowResize, 1000);
    });

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return moviesToShow;
}
