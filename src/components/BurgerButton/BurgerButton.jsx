import classNames from 'classnames'
import './BurgerButton.css'

function BurgerButton({ isLanding, isNavtabOpen, toggleOpenClose }) {
  return (
    <button className={classNames('link', 'hamburger-btn', {
      'hamburger-btn_landing': isLanding,
      'hamburger-btn_clicked': isNavtabOpen
    })}
      onClick={toggleOpenClose} >
      <div className='hamburger-btn__bar' />
    </button>
  )
}

export default BurgerButton
