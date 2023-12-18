import { useState } from 'react';
import { Image, ImageItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const Item = ({ smallImage, largeImage, description }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = e => {
    if (e.target.id === 'overlay' || e.key === 'Escape') {
      setModal(false);
    }
  };

  return (
    <>
      <ImageItem>
        <Image
          src={smallImage}
          loading="lazy"
          alt={description}
          onClick={openModal}
        />
      </ImageItem>
      {modal && (
        <Modal
          URL={largeImage}
          alt={description}
          closeModal={closeModal}
          isOpen={modal}
        />
      )}
    </>
  );
};

