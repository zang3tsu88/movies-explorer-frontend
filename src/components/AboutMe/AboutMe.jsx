import './AboutMe.css'
import studentPic from '../../images/vitaliy_optimized.jpg'

function AboutMe() {
  return (
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
  )
}

export default AboutMe
