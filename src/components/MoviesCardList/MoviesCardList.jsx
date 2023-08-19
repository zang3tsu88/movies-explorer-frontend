import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ movies }) {
  return (
    <ul className="list movies__list">
      {movies.map((movie, index) => (
        <MoviesCard
          title={movie.title}
          duration={movie.duration}
          image={movie.image}
          saved={movie.saved}
          key={index}  // temp key
        />
      ))}
    </ul>
  )
}

export default MoviesCardList
