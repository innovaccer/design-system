import React from 'react';
import { Modal, Button } from '@innovaccer/design-system';
import '../css/style.css';

const LightBox = ({ imgData, onClose }) => {
  const { open, imgSrc } = imgData;

  const onZoomInClick = (e) => {
    console.log('handle zoom in', imgSrc);
    e.stopPropagation();
    var myImg = document.getElementById('lightbox-image');

    var currWidth = myImg.clientWidth;
    console.log('currWidth-> ', currWidth);
    if (currWidth == 2500) return false;
    else {
      // myImg.style.width = currWidth + 10 + '%';
      myImg.style.transform = `scale(0.5)`;
    }
  };

  return (
    <div onClick={onClose}>
      <Modal
        open={open}
        backdropClose={true}
        onClose={onClose}
        dimension="large"
        closeOnEscape={true}
        className="bg-transparent vh-100 vw-100 p-8 Lightbox-wrapper"
        // headerOptions={{
        //   heading: '',
        // }}
      >
        <div className="h-100 d-flex justify-content-center flex-column">
          <img id="lightbox-image" src={imgSrc.currentSrc} className="Lightbox-image h-75" />
          <div className="d-flex justify-content-center">
            <Button aria-label="zoom_in" icon="zoom_in_round" className="mr-4" onClick={onZoomInClick} />
            <Button aria-label="zoom_out" icon="zoom_out_round" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LightBox;
