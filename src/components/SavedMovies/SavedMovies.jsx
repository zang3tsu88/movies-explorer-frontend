import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'
import './SavedMovies.css'
import { useState } from "react";
import { filterMovies } from "../../utils/filterMovies";
import MoviesCard from "../MoviesCard/MoviesCard";
// import testMovies from '../../utils/movies'

function SavedMovies( props ) {
    const [query, setQuery] = useState("");
    const [shortFilmsOnly, setShortFilmsOnly] = useState(false);

    const movies = filterMovies(props.savedMovies, query, shortFilmsOnly, 0);

    const userMoviesCards = movies.filteredMovies.map((el) => {
      return (
        <MoviesCard
            key={el.movieId}
            id={el.movieId}
            class={el.class}
            movie={el}
            onRemove={props.handleRemoveMovie}
        />
      );
    });

    function handleSearch(query) {
      setQuery(query);
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
      {/* <Preloader /> */}

      <section className="movies">
        <MoviesCardList isSaved={true} moviesCards={userMoviesCards}/>
      </section>
    </main>
  )
}

export default SavedMovies
