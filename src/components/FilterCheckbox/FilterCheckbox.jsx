import './FilterCheckbox.css'

function FilterCheckbox({
  shortMoviesCheckbox,
  toggleCheckbox,
}) {
  return (
    <div className="switch">
      <label className="switch__label">
        <input
          type="checkbox"
          className="switch__input"
          checked={shortMoviesCheckbox}
          onChange={toggleCheckbox}
        />
        <span className="switch__checkbox"></span>
          Короткометражки
      </label>
    </div>
  )
}

export default FilterCheckbox
