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
      searchField={moviesSearchField}
      setSearchField={setMoviesSearchField}
      shortMoviesCheckbox={shortMoviesCheckbox}
      toggleCheckbox={toggleCheckbox}
      searchMovies={searchMovies}
      errorMessage={errorMessage}

    />
    <section className="movies">
      { preloader && <Preloader /> }
      {/*  TODO : ADD STYLES - movies__nothing-found  */}
      {/* <p className='movies__'>«Ничего не найдено»</p> */}
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
        movies={filteredMovies}
        />

      {/* {!(movies.length <= countCards) && ( */}
      {!(movies.length) && (
      <button
        type='button'
        className='link movies__more-btn' >
          Ещё
      </button>)}

    </section>
    </main>
  )
}

export default Movies
