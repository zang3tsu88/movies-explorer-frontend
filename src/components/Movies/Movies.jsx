import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies() {
  return (
    <>
    <SearchForm />
    {/* <Preloader /> */}

    <section className="movies">
      <MoviesCardList />

      <button
        type='button'
        className='link movies__more-btn' >
          Ещё
      </button>

    </section>
    </>
  )
}

export default Movies
