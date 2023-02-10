import React from 'react';
import { Modal } from '@innovaccer/design-system';
import '../css/style.css';

const LightBox = ({ imgData, onClose }) => {
  const { open, imgSrc } = imgData;

  return (
    <div onClick={onClose}>
      <Modal
        open={open}
        backdropClose={true}
        onClose={onClose}
        dimension="large"
        closeOnEscape={true}
        className="bg-transparent vh-100 vw-100 p-8 Lightbox-wrapper"
      >
        <img src={imgSrc.currentSrc} className="Lightbox-image h-100 w-auto" />
      </Modal>
    </div>
  );
};

export default LightBox;
