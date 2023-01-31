import { useEffect } from 'react';

const Modal = ({ largeImg, onClose }) => {
  useEffect(() => {

    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onCloseByEscape)

    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
    }
    
  }, [onClose]);

    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img src={largeImg} alt="" />
        </div>
      </div>
    );
};

export default Modal;
