import { Link } from 'react-router-dom';
import './App.css';
import webGlobe from '../../images/web-globe.svg'
import studentPic from '../../images/vitaliy_optimized.jpg'

function App() {
  return (
  <>
    <div className="header header_accent-clr">
      <Link to="/" className='header__logo' />
      <nav>
        <ul className='list header__link-list'>
          <li><Link to="/signup" className='link header__link'>Регистрация</Link></li>
          <li><Link to="/signin" className='link header__link header__link_accent'>Войти</Link></li>
        </ul>
      </nav>
    </div>
    <section className="promo">
      <div className="promo__text-container">
        <div>
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки</h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
        </div>
      <Link className='link promo__link'>Узнать больше</Link>
      </div>
      {/* <div className="promo__img"></div> */}
      <img src={webGlobe} alt="Промо веб глобус" className="promo__img" />
    </section>

    <section className="about-project">
      <h2 className="title about-project__title">О&nbsp;проекте</h2>
      <ul className="list about-project__items">
        <li className="about-project__item">
          <h3 className="about-project__item-title">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__item-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__item-title">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__item-text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="list about-project__steps">
        <li className="about-project__step about-project__step_first">
            <h4 className="about-project__step-title about-project__step-title_first">1 неделя</h4>
            <p className="about-project__step-description">Back-end</p>
        </li>
        <li className="about-project__step">
            <h4 className="about-project__step-title">4 недели</h4>
            <p className="about-project__step-description">Front-end</p>
        </li>
    </ul>

    </section>

    <section className="techs">
      <h2 className="title techs__title">Технологии</h2>
        <div className="techs__content">
            <h3 className="techs__subtitle">
              7&nbsp;технологий
            </h3>
            <p className="techs__text">
              На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
            </p>
            <ul className="list techs__items">
                <li className="techs__item">
                    HTML
                </li>
                <li className="techs__item">
                    CSS
                </li>
                <li className="techs__item">
                    JS
                </li>
                <li className="techs__item">
                    React
                </li>
                <li className="techs__item">
                    Git
                </li>
                <li className="techs__item">
                    Express.js
                </li>
                <li className="techs__item">
                    mongoDB
                </li>
            </ul>
        </div>
    </section>

    <section className="about-me">
      <h2 className="title about-me__title">Студент</h2>
        <div className="about-me__content-container">
          <div className="about-me__text-container">
            <div>
              <h3 className="about-me__name">
                Андрей
              </h3>
              <p className="about-me__about">
                Фронтенд-разработчик, 34&nbsp;года
              </p>
              <p className="about-me__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <a
              href='https://github.com/zang3tsu88'
              target='_blank'
              rel='noreferrer'
              className='link about-me__link'>
                Github
            </a>
          </div>
          <img src={studentPic} alt="Фото студента Андрея" className="about-me__img" />
        </div>
    </section>

    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
        <ul className="list portfolio__items">
          <li className="portfolio__item">
            <a href="https://github.com/zang3tsu88/" className="link portfolio__link" target="_blank" rel="noreferrer">Статичный сайт</a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/zang3tsu88/" className="link portfolio__link" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/zang3tsu88/" className="link portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          </li>
        </ul>
    </section>

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
  </>
  );
}

export default App;
