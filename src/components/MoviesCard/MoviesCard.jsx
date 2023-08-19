import './MoviesCard.css'
import classNames from 'classnames'

function MoviesCard( { title, duration, image, saved } ) {
  return (
    <li className="movies__item">
      <div className="movie">
        <div className="movie__about-container">
          <h2 className="movie__title">
          {title}
          </h2>
          <p className="movie__duration">{duration}</p>
        </div>
        <img src={image} alt={`Картинка из фильма `} className="movie__image" />
        <button
          type='button'
          className={classNames('link', 'movie__save-btn', {
            'movie__save-btn_type_saved' : saved
          })}
        >
            Сохранить
        </button>
      </div>
    </li>
  )
}

export default MoviesCard
