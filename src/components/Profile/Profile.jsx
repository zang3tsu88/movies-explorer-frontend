import { useContext } from 'react';
import './Profile.css'
import CurrentUserContext from '../../context/CurrentUserContext';
import {Link} from "react-router-dom";

function Profile({ logout, errorMessage, userMessage }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className='profile'>
      <h1 className="profile__title">Привет, {currentUser.name}</h1>
      <div className="profile__form">
        <div className="profile__input-field">
          <p className="profile__label">Имя</p>
          <p className="profile__input">{currentUser.name}</p>
        </div>
        <div className="profile__input-field">
          <p className="profile__label">E-mail</p>
          <p className="profile__input">{currentUser.email}</p>
        </div>
      </div>
        <span className="form__input-message" >{userMessage !== '' ? userMessage : ''}</span>

        <Link className="link profile__edit" type="button" to="/edit">
            Редактировать
        </Link>
        <button
            className="link profile__logout"
            type="button"
            onClick={logout}
        >
            Выйти из аккаунта
        </button>

    </section>
  )
}

export default Profile
