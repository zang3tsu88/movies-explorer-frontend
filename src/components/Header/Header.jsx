import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { useEffect, useState } from 'react';
import BurgerButton from '../BurgerButton';
import Navtab from '../NavTab';


function Header() {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const isLoggedIn = true; // change to false to registration/sign-in buttons

  const [ isNavtabOpen, setIsNavtabOpen ] = useState(false);

  const handleNavtabOpenState = () => setIsNavtabOpen(prev => !prev);

  // prevents scrolling when modal is open
  // close on overlay click
  useEffect(() => {

    const closeOnOverlayClick = (e) => {
      if (e.target.classList.contains('navtab_active')) {
        handleNavtabOpenState();
      }
    }

    if (isNavtabOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', closeOnOverlayClick)
    }

    return () => {
      document.removeEventListener('click', closeOnOverlayClick)
      document.body.style.overflow = 'unset'
    };
  }, [isNavtabOpen])

  return (
    <>
      <header className={classNames('header', {'header_accent-clr': isLanding })} >

        <Link to="/" className='link logo header__logo' />

        <nav className={classNames('nav', 'header__nav', {'header__nav_landing': isLanding})} >
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

        {!isLanding && (

          <BurgerButton
            isLanding={isLanding}
            isNavtabOpen={isNavtabOpen}
            toggleOpenClose={handleNavtabOpenState} />

        )}

        <Navtab isNavtabOpen={isNavtabOpen} />

      </header>
    </>
  )
}

export default Header
