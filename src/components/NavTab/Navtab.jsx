import './Navtab.css'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

function Navtab({ isNavtabOpen, isLoggedIn }) {

  const navlinkStyles = ({ isActive }) => `link navtab__link ${isActive ? "navtab__link_active" : ""}`


  return (
    <aside className={classNames('navtab', { 'navtab_active': isNavtabOpen })} >
      <nav className={classNames('navtab__window', { 'navtab__window_active': isNavtabOpen })} >

        <ul className='list navtab__link-list'>
        {isLoggedIn
          ?
          (<>
          <li>
            <NavLink to="/" className={navlinkStyles} >Главная</NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={navlinkStyles} >Фильмы</NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className={navlinkStyles} >Сохранённые фильмы</NavLink>
          </li>

          <li>
            <NavLink to="/profile" className='link navtab__link navtab__link_type_account header__link header__link_type_account' >Аккаунт</NavLink>
          </li>
          </>
          ) : ( <>
          <li>
            <NavLink to="/signup" className={navlinkStyles} >Регистрация</NavLink>
          </li>
          <li>
            <NavLink to="/signin" className={navlinkStyles} >Вход</NavLink>
          </li>
          </>)}

        </ul>
      </nav>
    </aside>
  )
}

export default Navtab
