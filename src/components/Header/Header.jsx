import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

// const isLoggedIn = false;

function Header() {
  return (
    <>
    <div className="header header_accent-clr">

         <nav className='header__nav'>
          <ul className='list header__link-list header__link-list_type_landing'>

            <li><Link to="/" className='link logo header__logo' /></li>


            <li><Link to="/movies" className='link header__link header__link_type_movies'>Фильмы</Link></li>
            <li><Link to="/saved-movies" className='link header__link header__link_type_saved-movies'>Сохранённые фильмы</Link></li>

              {/* <li><Link to="/signup" className='link header__link'>Регистрация</Link></li>
              <li><Link to="/signin" className='link header__link header__link_type_login'>Войти</Link></li> */}

            <li><Link to="/signin" className='link header__link header__link_type_account'>Аккаунт</Link></li>

          </ul>
        </nav>


      <button className="link hamburger-btn">
        <div className='hamburger-btn__bar' />
      </button>



    </div>

    {/* <div className="navtab">
      <nav className="navtab__window">

        <button className="link hamburger-btn navtab__btn-close">
          <div className='hamburger-btn__bar' />
        </button>

        <ul className='list navtab__link-list'>
          <li><Link to="/" className='link navtab__link' />Главная</li>
          <li><Link to="/movies" className='link navtab__link header__link_type_movies navtab__link_active'>Фильмы</Link></li>
          <li><Link to="/saved-movies" className='link navtab__link header__link_type_saved-movies'>Сохранённые фильмы</Link></li>

          <li><Link to="/signin" className='link navtab__link navtab__link_type_account header__link_type_account'>Аккаунт</Link></li>
        </ul>
      </nav>
    </div> */}

    </>
  )
}

export default Header
