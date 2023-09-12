import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ movies }) {
  return (
    <ul className="list movies__list">
      {movies.map((movie) => (
        <MoviesCard
          title={movie.nameRU}
          duration={movie.duration}
          image={movie.image}
          // saved={movie.owner === currentUser._id}
          key={movie.movieId}
        />
      ))}
    </ul>
  )
}

export default MoviesCardList
