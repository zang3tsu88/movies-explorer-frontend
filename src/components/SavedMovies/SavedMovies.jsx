import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'
import './SavedMovies.css'
import movies from '../../utils/movies'

function SavedMovies() {

  const savedMovies = movies.filter((movie) => movie.saved)

  return (
    <main>
      <SearchForm />
      {/* <Preloader /> */}

      <section className="movies">
        <MoviesCardList movies={savedMovies} />

        <button
          type='button'
          className='link movies__more-btn' >
            Ещё
        </button>

      </section>
    </main>
  )
}

export default SavedMovies
