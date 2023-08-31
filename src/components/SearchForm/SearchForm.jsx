import { useState } from 'react'
import FilterCheckbox from '../FilterCheckbox'
import './SearchForm.css'
import classNames from 'classnames';

function SearchForm() {

  const [ search, setSearch ] = useState('');
  const [ error, setError ] = useState('')
  // Нужно ввести ключевое слово
  const [ isDirty, setIsDirty ] = useState(false);

  const onBlur = (e) => {
    setIsDirty(true);
  }

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      setError('Нужно ввести ключевое слово')
      return;
    } else {
      setError('')
    }
    console.log(search)
    console.log('submit')
  }

  return (
    <section className="search" aria-label='поиск'>
      <form
        className="search-form"
        noValidate
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="search-form__input"
          placeholder='Фильм'
          name='search'
          required
          minLength={1}
          value={search}
          onChange={onChange}
          onBlur={onBlur}
        />

        <button
          className="link search-form__btn"
          type='submit'
        >
          Найти
        </button>
      </form>

      <span className={classNames(
        'form__error',
        {'form__error_active' : isDirty && error}
        )}
      >
        {error}
      </span>

      <FilterCheckbox />
    </section>
  )
}

export default SearchForm
