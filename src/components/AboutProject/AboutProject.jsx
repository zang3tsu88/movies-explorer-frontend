import './AboutProject.css'

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
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
  )
}

export default AboutProject
