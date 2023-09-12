import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ movies }) {
  // console.log(movies[0])
  return (
    <ul className="list movies__list">
      {movies.map((movie) => (
        <MoviesCard
          title={movie.nameRU}
          duration={movie.duration}
          image={movie.image}
          key={movie.movieId}
        />
      ))}
    </ul>
  )
}

export default MoviesCardList
