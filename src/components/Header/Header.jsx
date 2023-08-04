import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const isLoggedIn = false;

function Header() {
  return (
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

        <nav className="navtab">
          <ul className='list navtab__link-list'>

            <li><Link to="/" className='link navtab__link' />Домой</li>


            <li><Link to="/movies" className='link navtab__link header__link_type_movies'>Фильмы</Link></li>
            <li><Link to="/saved-movies" className='link navtab__link header__link_type_saved-movies'>Сохранённые фильмы</Link></li>

            <li><Link to="/signin" className='link navtab__link header__link_type_account'>Аккаунт</Link></li>

          </ul>
        </nav>

      <button className="link hamburger-btn">
        <div className='hamburger-btn__bar' />
      </button>



    </div>
  )
}

export default Header
