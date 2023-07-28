import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </h2>
        <div className="footer__bottom">
          <p className="footer__text footer__date">
            &copy; {new Date().getFullYear()}
          </p>
          <ul className="list footer__items">
            <li className="footer__item">
              <a href="https://github.com/dacorm/" className="link footer__link footer__text">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/dacorm/" className="link footer__link footer__text">Github</a>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer
