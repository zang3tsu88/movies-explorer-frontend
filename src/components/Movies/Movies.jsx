import './Movies.css'
import movie1 from '../../images/movie_pic-1.png'
import movie2 from '../../images/movie_pic-2.png'
import movie3 from '../../images/movie_pic-3.png'
import movie4 from '../../images/movie_pic-4.png'
import movie5 from '../../images/movie_pic-5.png'
import movie6 from '../../images/movie_pic-6.png'
import movie7 from '../../images/movie_pic-7.png'
import movie8 from '../../images/movie_pic-8.png'
import movie9 from '../../images/movie_pic-9.png'
import movie10 from '../../images/movie_pic-10.png'
import movie11 from '../../images/movie_pic-11.png'
import movie12 from '../../images/movie_pic-12.png'
function Movies() {
  return (
    <>
    <section className="search">
      <form className="search-form">
        <input
          type="text"
          className="search-form__input"
          placeholder='Фильм'
          name='search'
        />
        <button
          className="link search-form__btn"
          type='submit'
        >
          Найти
        </button>
      </form>
      <div className="switch">

        <input
          type="checkbox"
          id='switch'
          className="switch__input" />
        <span className="switch__checkbox"></span>
        <label htmlFor="switch" className="switch__label">
          Короткометражки
        </label>
      </div>
    </section>

    <section className="movies">
      <ul className="list movies__list">
        <li className="movies__item">

          {/* GRID TEST */}

          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">
                В погоне за Бенкси
              </h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie1} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn movie__save-btn_type_saved' >
                Сохранить
            </button>
          </div>
        </li>

        {/*  OTHER MOVIES FOR TEST */}

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie2} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn movie__save-btn_type_saved' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie3} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie4} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie5} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie6} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn movie__save-btn_type_saved' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie7} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn movie__save-btn_type_saved' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie8} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn' >
                Сохранить
            </button>
          </div>
        </li>

        {/* <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie9} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie10} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie11} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn movie__save-btn_type_saved' >
                Сохранить
            </button>
          </div>
        </li>

        <li className="movies__item">
          <div className="movie">
            <div className="movie__about-container">
              <h2 className="movie__title">В погоне за Бенкси</h2>
              <p className="movie__duration">27 минут</p>
            </div>
            <img src={movie12} alt={`Картинка из фильма `} className="movie__image" />
            <button
              type='button'
              className='link movie__save-btn' >
                Сохранить
            </button>
          </div>
        </li> */}


        {/*  OTHER MOVIES FOR TEST */}
      </ul>

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
