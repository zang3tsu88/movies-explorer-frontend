import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'
import './SavedMovies.css'
import testMovies from '../../utils/movies'

function SavedMovies({ movies }) {

  const savedMovies = testMovies.filter((movie) => movie.saved)

  return (
    <main>
      <SearchForm />
      {/* <Preloader /> */}

      <section className="movies">
        <MoviesCardList movies={savedMovies} />
      </section>
    </main>
  )
}

export default SavedMovies
