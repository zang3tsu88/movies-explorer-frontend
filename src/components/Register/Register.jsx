import './Register.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import useForm from '../../hooks/useForm'
import { useEffect } from 'react';

function Register({ registerUser, errorMessage, setErrorMessage }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: REMOVE CONSOLE.LOG
    console.log(values)
    registerUser({
      name: values.name,
      email: values.email,
      password: values.password,
    })
    setErrorMessage('');
  }

  useEffect(() => {
    resetForm();
  }, [resetForm])

  return (
    <div className="form-container">
      <img src={logo} alt="логотип" className="logo form-container__logo" />
      <h1 className="form-container__title">Добро пожаловать!</h1>
      <form className="form" name="register" onSubmit={handleSubmit} noValidate>
        <div className="form__input-container">

          <label htmlFor="name" className="form__label">Имя</label>
          <input
            type="text"
            name='name'
            id='name'
            className="form__input"
            required
            value={values.name}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
          />

          <span className={classNames(
            'form__error',
            {'form__error_active' : errors.name}
            )}
          >
            {errors.name}
          </span>

          <label htmlFor="email" className="form__label">E-mail</label>
          <input
            type="email"
            name='email'
            id='email'
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
            name='password'
            id='password'
            className="form__input"
            autoComplete="new-password"
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
