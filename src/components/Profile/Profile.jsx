import { useContext } from 'react';
import './Profile.css'
import CurrentUserContext from '../../context/CurrentUserContext';
import classNames from 'classnames';

const isEditing = false;

function Profile({ logout, errorMessage, setErrorMessage, }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className='profile'>
      <h1 className="profile__title">Привет, {currentUser.name}</h1>
      <form className="profile__form" name="profile">

        {/* <div className="form__input-container"> */}

        <div className="profile__input-field">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            type="text"
            name="name"
            value={currentUser.name}
          />
        </div>
        <div className="profile__input-field">
          <label className="profile__label">E-mail</label>
          <input
            className="profile__input"
            type="email"
            name="email"
            value={currentUser.email}
          />
        </div>
        {/* <span className="form__error" /> */}
        {/* </div> */}

      </form>

      <span className={classNames(
            'form__error',
            'form__error_submit',
            {'form__error_active' : errorMessage}
            )}
        >
          {errorMessage}
        </span>


      {isEditing
        ? <button type="submit" className="link form__submit-btn">Сохранить</button>
        : <button className="link profile__edit">Редактировать</button>}

      {!isEditing
        && (<button
          className="link profile__logout"
          onClick={logout}
        >
          Выйти из&nbsp;аккаунта
        </button>)}

    </section>
  )
}

export default Profile
