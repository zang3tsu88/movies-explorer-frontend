import './Movies.css'
import SearchForm from '../SearchForm'
import Preloader from '../Preloader'
import MoviesCardList from '../MoviesCardList'
import { ResizeHandlerComponent } from "../../utils/handleResize";
import { useEffect, useState } from "react";
import { filterMovies } from "../../utils/filterMovies";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies({ movies, handleRemoveMovie, handleLikeMovie, getBitFilms }) {
  const moviesToShow = ResizeHandlerComponent();
  const [query, setQuery] = useState(
    localStorage.getItem("queryMovies") || "",
  );
  const [shortFilmsOnly, setShortFilmsOnly] = useState(() => {
    const savedShortFilmsOnly = localStorage.getItem("shortFilmsOnlyMovies");
    return savedShortFilmsOnly ? JSON.parse(savedShortFilmsOnly) : false;
  });
  const [movieCount, setMovieCount] = useState(0);
  const [useSearch, setUseSearch] = useState(false)

  useEffect(() => {
    if(query !== '') {
      setUseSearch(true)
    }
  }, []);

  useEffect(() => {
    setMovieCount(moviesToShow.moviesOnPage);
  }, [moviesToShow]);

  useEffect(() => {
    localStorage.setItem("queryMovies", query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("shortFilmsOnlyMovies", JSON.stringify(shortFilmsOnly));
  }, [shortFilmsOnly]);

  const filter = filterMovies(
    movies,
    query,
    shortFilmsOnly,
    movieCount,
  );

  const moviesCards = filter.filteredMovies.map((el) => {
    return (
      <MoviesCard
        key={el.id}
        id={el.id}
        class={el.class}
        movie={el}
        onRemove={handleRemoveMovie}
        onLike={handleLikeMovie}
      />
    );
  });

  function handleSearch(query) {
    setQuery(query);
    if (movies.length === 0) {
      getBitFilms()
    }
    setUseSearch(true)
  }

  function loadMoreMovies() {
    setMovieCount(movieCount + moviesToShow.addMoviesOnPage);
  }

  function handleToggleShortFilms(checked) {
    setShortFilmsOnly(checked);
  }

  return (
    <main>
    <SearchForm
        onSearch={handleSearch}
        onToggle={handleToggleShortFilms}
        checked={shortFilmsOnly}
    />
    <section className="movies">
      {/*{ preloader && <Preloader /> }*/}
      {/* <span
        className='form__error form__error_active movies__error'
        // className={classNames(
        // 'form__error',
        // // {'form__error_active' : errors.search}
        // )}
      >
        {errorMessage}
      </span> */}

      <MoviesCardList
        moviesCards={moviesCards}
        addMovies={loadMoreMovies}
        maxMovies={movieCount}
        isSaved={false}
        movies={filter.countMovies}
        useSearch={useSearch}
      />

    </section>
    </main>
  )
}

export default Movies
