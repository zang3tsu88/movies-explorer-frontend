import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox'
import classNames from 'classnames';
import useForm from '../../hooks/useForm';
import { Validation } from "../Validation/validation";
import { useLocation } from "react-router-dom";
import {useEffect, useState} from "react";

function SearchForm(props) {
  const { register, handleSubmit, setValue } = Validation();
  const [filmValue, setFilmValue] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      const savedQuery = localStorage.getItem("queryMovies");
      if (savedQuery) {
        setValue("search", savedQuery);
        setFilmValue(savedQuery);
      }
    }
  }, [location.pathname]);

  const onSubmit = (data) => {
    props.onSearch(data.search);
  };

  return (
    <section className="search" aria-label='поиск'>
      <form
        className="search-form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="search-form__input"
          placeholder='Фильм'
          name='search'
          {...register("search")}
          required
          value={filmValue || ''}
          onChange={(e) => setFilmValue(e.target.value)}
        />

        <button
          type='submit'
          aria-label='Поиск фильмов'
          className='search-form__btn link'
        >
          Найти
        </button>

      </form>

      {/*<span*/}
      {/*  className='form__error form__error_active'*/}
      {/*  // className={classNames(*/}
      {/*  // 'form__error',*/}
      {/*  // // {'form__error_active' : errors.search}*/}
      {/*  // )}*/}
      {/*>*/}
      {/*  {errorMessage}*/}
      {/*</span>*/}

      <FilterCheckbox
        onToggle={props.onToggle}
        checked={props.checked}
        onSubmit={onSubmit}
        filmValue={filmValue}
      />
    </section>
  )
}

export default SearchForm
