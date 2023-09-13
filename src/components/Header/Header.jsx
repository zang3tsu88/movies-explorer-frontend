import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { useState } from 'react';
import BurgerButton from '../BurgerButton';
import Navtab from '../NavTab';
import useModalClose from '../../hooks/useModalClose';


function Header({ isLoggedIn }) {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const [ isNavtabOpen, setIsNavtabOpen ] = useState(false);

  const handleNavtabOpenState = () => setIsNavtabOpen(prev => !prev);

  useModalClose(isNavtabOpen, handleNavtabOpenState);

  return (
    <>
      <header className={classNames('header', {'header_accent-clr': isLanding })} >

        <Link to="/" className='link logo header__logo' />

        <nav className='nav header__nav' >
          {
            isLoggedIn
            ? (
              <>
                <div className='header__link-container'>
                  <Link to="/movies" className='link header__link header__link_type_movies'>Фильмы</Link>
                  <Link to="/saved-movies" className='link header__link header__link_type_saved-movies'>Сохранённые фильмы</Link>
                </div>

                <Link to="/profile" className='link header__link header__link_type_account'>Аккаунт</Link>
              </>
            ) : (
              <>
                <Link to="/signup" className='link header__link header__link_type_signup'>Регистрация</Link>
                <Link to="/signin" className='link header__link header__link_type_login'>Войти</Link>
              </>
            )}
        </nav>

        <BurgerButton
          isLanding={isLanding}
          isNavtabOpen={isNavtabOpen}
          toggleOpenClose={handleNavtabOpenState} />

        <Navtab isNavtabOpen={isNavtabOpen} isLoggedIn={isLoggedIn} />

      </header>
    </>
  )
}

export default Header
