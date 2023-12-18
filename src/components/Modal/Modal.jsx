import { useEffect } from 'react';
import { Overlay, Popup } from './Modal.styled';

export const Modal = ({ URL, alt, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => window.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Popup>
        <img src={URL} alt={alt} />
      </Popup>
    </Overlay>
  );
};
