import './MoviesCardList.css'

function MoviesCardList(props) {

  return (
    <>
      {props.moviesCards.length > 0 ? (
        <ul className="list movies__list">{props.moviesCards}</ul>
      ) : (
        <p className={"movies__message"}>Ничего не найдено</p>
      )}
      <div className="movies__button-container">
        <button
          className={
            props.moviesCards.length < props.movies && !props.isSaved && props.moviesCards.length > 0
              ? "link movies__button"
              : "link movies__button movies__button_hidden"
          }
          type={"button"}
          onClick={() => props.addMovies()}
        >
          Ещё
        </button>
      </div>
    </>
  )
}

export default MoviesCardList
