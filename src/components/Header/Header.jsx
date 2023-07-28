import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className="header header_accent-clr">
      <Link to="/" className='link header__logo' />
      <nav>
        <ul className='list header__link-list'>
          <li><Link to="/signup" className='link header__link'>Регистрация</Link></li>
          <li><Link to="/signin" className='link header__link header__link_accent'>Войти</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
