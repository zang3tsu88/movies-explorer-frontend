import { Link, useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className="error">
      <div className="error__text-container">
        <h1 className="error__title">404</h1>
        <p className="error__text">Страница не&nbsp;найдена</p>
      </div>
        <Link className="link error__link" onClick={handleGoBack}>Назад</Link>
    </div>
  )
}

export default NotFound
