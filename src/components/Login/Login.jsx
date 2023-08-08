import './Login.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="form-container">
      <img src={logo} alt="логотип" className="logo form-container__logo" />
      <h1 className="form-container__title">Рады видеть!</h1>
      <form className="form" name="login">

        <div className="form__input-container">

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
          Войти
        </button>
      </form>
        <p className="form__question">
        Ещё не&nbsp;зарегистрированы?&nbsp;
          <Link className="link form__link" to="/signup">Регистрация</Link>
        </p>

    </div>
  )
}

export default Login
