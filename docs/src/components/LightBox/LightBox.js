import React from 'react';
import { Modal } from '@innovaccer/design-system';
import '../css/style.css';

const LightBox = ({ imgData, onClose }) => {
  const { open, imgSrc } = imgData;
  const isWindowDefined = typeof window !== 'undefined';

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={onClose}>
      {isWindowDefined && (
        <Modal
          open={open}
          backdropClose={true}
          onClose={onClose}
          dimension="large"
          closeOnEscape={true}
          className="bg-transparent vh-100 vw-100 p-8 Lightbox-wrapper"
        >
          <img src={imgSrc} className="Lightbox-image h-100 w-auto" />
        </Modal>
      )}
    </div>
  );
};

export default LightBox;
