import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="switch">
      <label className="switch__label">
        <input
          type="checkbox"
          className="switch__input" />
        <span className="switch__checkbox"></span>
          Короткометражки
      </label>
    </div>
  )
}

export default FilterCheckbox
