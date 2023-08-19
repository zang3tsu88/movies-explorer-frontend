import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="error">
      <div className="error__text-container">
        <h1 className="error__title">404</h1>
        <p className="error__text">Страница не&nbsp;найдена</p>
      </div>
        <Link className="link error__link" to="/">Назад</Link>
    </div>
  )
}

export default NotFound
