import { INT_60_MIN } from '../../utils/constants'
import './MoviesCard.css'

function MoviesCard( props ) {

  // const movieDuration = duration <= INT_60_MIN
  //   ? `${duration % INT_60_MIN}м`
  //   : `${Math.floor(duration / INT_60_MIN)}ч ${duration % INT_60_MIN}м`

    function time(duration) {
        const number = parseInt(duration);
        const hours = Math.floor(number / INT_60_MIN);
        const minutes = number % INT_60_MIN;
        return `${hours}ч ${minutes}м`;
    }

    function like() {
        props.onLike(props.movie);
    }

    function remove() {
        props.onRemove(props.id);
    }

  return (
    <li className="movies__item">
      <div className="movie">
        <div className="movie__about-container">
          <h2 className="movie__title">
            {props.movie.nameRU}
          </h2>
          <p className="movie__duration">{time(props.movie.duration)}</p>
        </div>
        <a
          className="movie__image-link"
          href={props.movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movie__image"
            src={
              props.class !== "remove"
                ? `https://api.nomoreparties.co/${props.movie.image.url}`
                : props.movie.image
            }
            alt={props.movie.nameRU}
          />
        </a>
        <button
          type='button'
          className={
            props.class === "like"
              ? "link movie__save-btn movie__save-btn_type_saved"
              : props.class === "default"
                ? "link movie__save-btn"
                : "link movie__save-btn movie__save-btn_type_remove"
          }
          onClick={props.class === "default" ? like : remove}
        >
          Сохранить
        </button>
      </div>
    </li>
  )
}

export default MoviesCard
