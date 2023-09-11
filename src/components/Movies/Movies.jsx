import './Movies.css'
import SearchForm from '../SearchForm'
import Preloader from '../Preloader'
import MoviesCardList from '../MoviesCardList'
import movies from '../../utils/movies'


function Movies({
  filteredMovies,
  moviesSearchField,
  setMoviesSearchField,
  shortMoviesCheckbox,
  toggleCheckbox,
  searchMovies,
  errorMessage,
  preloader
}) {
  return (
    <main>
    <SearchForm
      moviesSearchField={moviesSearchField}
      setMoviesSearchField={setMoviesSearchField}
      shortMoviesCheckbox={shortMoviesCheckbox}
      toggleCheckbox={toggleCheckbox}
      searchMovies={searchMovies}
      errorMessage={errorMessage}

    />
    <section className="movies">
      { preloader && <Preloader /> }
      {/*  TODO : ADD STYLES - movies__nothing-found  */}
      {/* <p className='movies__nothing-found'>«Ничего не найдено»</p> */}
      <MoviesCardList
        movies={filteredMovies}
        />

      <button
        type='button'
        className='link movies__more-btn' >
          Ещё
      </button>

    </section>
    </main>
  )
}

export default Movies
