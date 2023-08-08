import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form">
        <input
          type="text"
          className="search-form__input"
          placeholder='Фильм'
          name='search'
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
