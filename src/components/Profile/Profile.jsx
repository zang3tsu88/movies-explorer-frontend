import React from 'react'

function Profile() {
  return (
    <section className='profile'>
      <h1 className="profile__title">Привет, Виталий!</h1>
      <button className="link profile__edit">Редактировать</button>
      <button className="link profile__logout">Выйти из&nbsp;аккаунта</button>
    </section>
  )
}

export default Profile
