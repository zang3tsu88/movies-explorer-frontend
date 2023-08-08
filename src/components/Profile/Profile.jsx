import './Profile.css'

const isEditing = false;

function Profile() {
  return (
    <section className='profile'>
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form" name="profile">

        {/* <div className="form__input-container"> */}

        <div className="profile__input-field">
          <label className="profile__label">Имя</label>
          <input className="profile__input" type="text" name="name" value={'Виталий'} />
        </div>
        <div className="profile__input-field">
          <label className="profile__label">E-mail</label>
          <input className="profile__input" type="email" name="email" value={'pochta@yandex.ru'} />
        </div>
        {/* <span className="form__error" /> */}
        {/* </div> */}

      </form>


      { isEditing
        ? <button type="submit" className="link form__submit-btn">Сохранить</button>
        : <button className="link profile__edit">Редактировать</button>}
      <button className="link profile__logout">Выйти из&nbsp;аккаунта</button>
    </section>
  )
}

export default Profile
