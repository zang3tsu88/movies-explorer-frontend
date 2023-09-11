import { useEffect } from "react";

const useModalClose = (isOpen, toggleModal) => {
  useEffect(() => {
    // prevents scrolling when modal is open
    // close on overlay click and esc key press
    const closeOnEsc = (e) => {
      if (e.key === 'Escape') {
        toggleModal();
        console.log('first')
      }
    }

    const closeOnOverlayClick = (e) => {
      if (e.target.classList.contains('navtab_active')) {
        toggleModal();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', closeOnOverlayClick)
      document.addEventListener('keyup', closeOnEsc)
    }

    return () => {
      document.removeEventListener('keyup', closeOnEsc)
      document.removeEventListener('click', closeOnOverlayClick)
      document.body.style.overflow = 'unset'
    };
  }, [isOpen, toggleModal])


}

export default useModalClose;
