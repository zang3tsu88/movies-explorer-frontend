import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox'
import classNames from 'classnames';
import useForm from '../../hooks/useForm';

function SearchForm({
  searchField,
  setSearchField,
  searchMovies,
  shortMoviesCheckbox,
  toggleCheckbox,
  errorMessage
}) {

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO(zang3tsu88): Remove log and refactor error handlling :

    // После сабмита формы поиска производится валидация.
    // Если в поле не введён текст, выводится ошибка «Нужно ввести ключевое слово».
    // Если слово введено, то осуществляется запрос к API
    console.log('Searching for Movies!')
    searchMovies();
  }

  return (
    <section className="search" aria-label='поиск'>
      <form
        className="search-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="search-form__input"
          placeholder='Фильм'
          name='search'
          required
          value={searchField}
          onChange={handleChange}
        />

        <button
          type='submit'
          aria-label='Поиск фильмов'
          className='search-form__btn link'
          onClick={handleSubmit}
        >
          Найти
        </button>

      </form>

      <span
        className='form__error form__error_active'
        // className={classNames(
        // 'form__error',
        // // {'form__error_active' : errors.search}
        // )}
      >
        {errorMessage}
      </span>

      <FilterCheckbox
        shortMoviesCheckbox={shortMoviesCheckbox}
        toggleCheckbox={toggleCheckbox}
      />
    </section>
  )
}

export default SearchForm
