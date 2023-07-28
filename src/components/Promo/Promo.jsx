import { Link } from 'react-router-dom';import './Promo.css'
import webGlobe from '../../images/web-globe.svg'

function Promo() {
  return (
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
      <img src={webGlobe} alt="Промо веб глобус" className="promo__img" />
    </section>
  )
}

export default Promo
