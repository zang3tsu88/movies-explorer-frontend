import FilterCheckbox from '../FilterCheckbox'
import './SearchForm.css'

function SearchForm() {
  return (
    <section className="search" aria-label='поиск'>
      <form className="search-form">
        <input
          type="text"
          className="search-form__input"
          placeholder='Фильм'
          name='search'
          required
          minLength={1}
        />
        <button
          className="link search-form__btn"
          type='submit'
        >
          Найти
        </button>
      </form>

      <FilterCheckbox />
    </section>
  )
}

export default SearchForm
