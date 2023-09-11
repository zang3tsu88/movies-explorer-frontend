import { useCallback, useState } from "react"
import isEmail from 'validator/lib/isEmail'
import { MESSAGES, NAME_REGEX } from "../utils/constants";

function useForm(initialValues = {}) {
  const [ values, setValues ] = useState(initialValues);
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        !NAME_REGEX.test(value)
          ? e.target.setCustomValidity(MESSAGES.NAME_ERROR)
          : e.target.setCustomValidity('');
        break;
      case 'email':
        !isEmail(value)
          ? e.target.setCustomValidity(MESSAGES.EMAIL_ERROR)
          : e.target.setCustomValidity('');
        break;
      // TODO: POSSIBLY REMOVE SEARCH VALIDATION
      // case 'search':
      //   e.target.validity.valueMissing
      //     ? e.target.setCustomValidity(MESSAGES.EMPTY_SEARCH_ERROR)
      //     : e.target.setCustomValidity('');
      //   break;
      default:
        break;
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: e.target.validationMessage});
    setIsValid(e.target.closest('form').checkValidity());
  }

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);


  return { values, errors, isValid, handleChange, resetForm }
}

export default useForm;
