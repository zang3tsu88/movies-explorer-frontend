import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import movies from '../../utils/movies'


function MoviesCardList() {
  return (
    <ul className="list movies__list">
      {movies.map((movie) => (
        <MoviesCard
          title={movie.title}
          duration={movie.duration}
          image={movie.image}
          saved={movie.saved}
        />
      ))}



    </ul>
  )
}

export default MoviesCardList
