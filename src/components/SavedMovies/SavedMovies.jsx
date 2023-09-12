import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'
import './SavedMovies.css'
// import testMovies from '../../utils/movies'

function SavedMovies({
  savedMovies,
  savedMoviesSearchField,
  setSavedMoviesSearchField,
  savedShortMoviesCheckbox,
  toggleCheckbox,
  searchMovies,
  errorMessage,
  preloader}
  ) {

  // const savedMovies = testMovies.filter((movie) => movie.saved)

  return (
    <main>
      <SearchForm
        searchField={savedMoviesSearchField}
        setSearchField={setSavedMoviesSearchField}
        shortMoviesCheckbox={savedShortMoviesCheckbox}
        toggleCheckbox={toggleCheckbox}
        searchMovies={searchMovies}
        errorMessage={errorMessage}
      />
      {/* <Preloader /> */}

      <section className="movies">
        <MoviesCardList movies={savedMovies} />
      </section>
    </main>
  )
}

export default SavedMovies
