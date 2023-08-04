import './Register.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="form-container">
      <img src={logo} alt="логотип" className="logo form-container__logo" />
      <h1 className="form-container__title">Добро пожаловать!</h1>
      <form className="form">


        <div className="form__input-container">

        <label htmlFor="name" className="form__label">Имя</label>
        <input
          type="text"
          id='name'
          className="form__input" />
        <span className="form__error" />

        <label htmlFor="email" className="form__label">E-mail</label>
        <input
          type="email"
          id='email'
          className="form__input" />
        <span className="form__error" />

        <label htmlFor="password" className="form__label">Пароль</label>
        <input
          type="password"
          id='password'
          className="form__input" />
        <span className="form__error" />

        </div>

        <button type="submit" className="link form__submit-btn">
          Зарегистрироваться
        </button>
      </form>
        <p className="form__question">
          Уже зарегистрированы?&nbsp;
          <Link className="link form__link" to="/signin">Войти</Link>
        </p>

    </div>
  )
}

export default Register
