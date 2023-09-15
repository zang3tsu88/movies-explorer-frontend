import { useEffect, useState } from "react";
import { CARD_ADD, CARD_COUNT } from "./constants";

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

      if (screenWidth < 1275) {
        moviesOnPage = CARD_COUNT.WIDTH_1274;
        addMoviesOnPage = CARD_ADD.WIDTH_1274;
      }

      if (screenWidth < 857) {
        moviesOnPage = CARD_COUNT.WIDTH_856;
        addMoviesOnPage = CARD_ADD.WIDTH_856;
      }

      setMoviesToShow({ moviesOnPage, addMoviesOnPage });
    }

    handleWindowResize();

    const throttledHandleWindowResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleWindowResize, 1000);
    };

    let resizeTimeout;

    window.addEventListener("resize", throttledHandleWindowResize);

    return () => {
      window.removeEventListener("resize", throttledHandleWindowResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return moviesToShow;
}
