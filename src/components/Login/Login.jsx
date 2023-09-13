import './Login.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import useForm from '../../hooks/useForm';

function Login({ loginUser, errorMessage, setErrorMessage }) {
  const { values, errors, isValid, handleChange, resetForm }  = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email: values.email,
      password: values.password,
    })
    setErrorMessage('');
    resetForm();
  }

  return (
    <div className="form-container">
      <img src={logo} alt="логотип" className="logo form-container__logo" />
      <h1 className="form-container__title">Рады видеть!</h1>
      <form className="form" name="login" onSubmit={handleSubmit} noValidate>
        <div className="form__input-container">

          <label htmlFor="email" className="form__label">E-mail</label>
          <input
            type="email"
            id='email'
            name='email'
            className="form__input"
            autoComplete="current-email"
            required
            minLength={4}
            value={values.email}
            onChange={handleChange}
          />
          <span className={classNames(
            'form__error',
            {'form__error_active' : errors.email}
            )}
          >
            {errors.email}
          </span>

          <label htmlFor="password" className="form__label">Пароль</label>
          <input
            type="password"
            id='password'
            name='password'
            className="form__input"
            autoComplete="current-password"
            required
            minLength={4}
            value={values.password}
            onChange={handleChange}
          />
          <span className={classNames(
            'form__error',
            {'form__error_active' : errors.password}
            )}
          >
            {errors.password}
          </span>

        </div>

        <span className={classNames(
            'form__error',
            'form__error_submit',
            {'form__error_active' : errorMessage}
            )}
        >
          {errorMessage}
        </span>

        <button
          type="submit"
          disabled={!isValid}
          className={classNames(
            'form__submit-btn', {
            'link': isValid,
          })}
        >
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
