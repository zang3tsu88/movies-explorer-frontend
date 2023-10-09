import {useContext, useEffect, useState} from 'react';
import './EditProfile.css'
import CurrentUserContext from '../../context/CurrentUserContext';
import { checkError, Validation } from "../Validation/validation";
import {Link} from "react-router-dom";

function EditProfile({ profileUpdate }) {
  const currentUser = useContext(CurrentUserContext);
    const { register, handleSubmit, setValue, watch, errors, isValid } = Validation();
    const [isFormChanged, setIsFormChanged] = useState(false);

    useEffect(() => {
      if (currentUser) {
        setValue("name", currentUser.name);
        setValue("email", currentUser.email);
      }
    }, [currentUser, setValue]);

    useEffect(() => {
      const isNameChanged = currentUser.name !== watch("name");
      const isEmailChanged = currentUser.email !== watch("email");
      setIsFormChanged(isNameChanged || isEmailChanged);
    }, [watch("name"), watch("email")]);

    function handleSubmitProfile(data) {
        profileUpdate(data);
    }

  return (
    <section className='profile'>
      <h1 className="profile__title">Привет, {currentUser.name}</h1>
      <form
        className="profile__form"
        name="profile"
        onSubmit={handleSubmit(handleSubmitProfile)}
      >

        <div className="profile__input-field">
          <label className="profile__label">Имя</label>
          <input
            className={"profile__input"}
            type="text"
            name="name"
            placeholder="Ваше имя"
            {...register("name", checkError("name"))}
            required
          />
          <span className="form__input-error">
            {errors.name ? errors.name.message : ""}
          </span>
        </div>

        <div className="profile__input-field">
          <label className="profile__label">E-mail</label>
          <input
            id="email-input"
            className="profile__input"
            type="email"
            name="email"
            {...register("email", checkError("email"))}
            required
          />
          <span className="form__input-error">
            {errors.email ? errors.email.message : ""}
          </span>
        </div>

        <button
          className="link form__submit-btn form__submit-btn_edit-profile"
          type="submit"
          disabled={!isFormChanged || !isValid}
        >
          Сохранить
        </button>
        <Link
          className="link profile__logout"
          type={"button"}
          to={"/profile"}
        >
          Назад
        </Link>
      </form>
    </section>
  )
}

export default EditProfile
