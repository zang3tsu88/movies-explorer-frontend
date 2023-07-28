import './Portfolio.css'
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="list portfolio__items">
        <li className="portfolio__item">
          <a href="https://zang3tsu88.github.io/how-to-learn/" className="link portfolio__link" target="_blank" rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="https://zang3tsu88.github.io/russian-travels/" className="link portfolio__link" target="_blank" rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="https://zang3tsu88.github.io/react-mesto-auth/" className="link portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
