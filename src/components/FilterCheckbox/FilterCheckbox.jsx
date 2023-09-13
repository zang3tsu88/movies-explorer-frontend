import './FilterCheckbox.css'
import {useState} from "react";

function FilterCheckbox(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    props.onToggle(newChecked);
    props.onSubmit({ search: props.filmValue });
  };

  return (
    <div className="switch">
      <label className="switch__label" htmlFor="checkbox">
        <input
          id="checkbox"
          type="checkbox"
          className="switch__input"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="switch__checkbox"></span>
          Короткометражки
      </label>
    </div>
  )
}

export default FilterCheckbox
