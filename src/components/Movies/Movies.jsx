import './Movies.css'
import SearchForm from '../SearchForm'
// import Preloader from '../Preloader'
import MoviesCardList from '../MoviesCardList'
import movies from '../../utils/movies'


function Movies() {
  return (
    <main>
    <SearchForm />
    {/* <Preloader /> */}

    <section className="movies">
      <MoviesCardList movies={movies} />

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
