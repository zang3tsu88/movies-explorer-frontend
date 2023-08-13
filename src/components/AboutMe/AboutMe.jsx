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
              Я&nbsp;родился в&nbsp;Ленинграде, потом в&nbsp;детстве уехал в&nbsp;США. Жил и&nbsp;учился там, там&nbsp;же собрал с&nbsp;отцом свой первый компьютер и&nbsp;поступил на&nbsp;курс веб дизайна. Потом вернулся в&nbsp;Санкт-Петербург, и&nbsp;тут закончил радиотехнический факультет. Я&nbsp;люблю читать мангу, а&nbsp;ещё увлекаюсь бегом и&nbsp;экстремальным вело спортом. Недавно снова начал кодить. С&nbsp;2015 года работал в&nbsp;конструкторском бюро НПО &laquo;Волна&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
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
