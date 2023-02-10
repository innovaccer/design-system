import React from 'react';
import * as ReactDOM from 'react-dom';
import { Backdrop, Button, Modal } from '@innovaccer/design-system';
import '../css/style.css';

const LightBox = ({ imgData, onClose }) => {
  const { open, imgSrc } = imgData;

  // const ModalWrapper = <Button style={{ zIndex: 1001 }}>Hello lightbox</Button>;
  const ModalWrapper = <img id="my-image-id" src={imgSrc.currentSrc} 
  // width={1000} style={{ zIndex: 1001, position: 'relative' }} 
  />;
  const getWrapperElement = () => {
    let element;
    element = document.createElement('div');
    element.classList.add('Lightbox-wrapper');
    document.body.appendChild(element);
    return element;
  };

  const DOMElement = getWrapperElement();
  const WrapperElement = ReactDOM.createPortal(ModalWrapper, DOMElement);

  // return (
  //   <div onClick={onClose}>
  //     {WrapperElement}
  //     <Backdrop open={open} zIndex={1000} />
  //   </div>
  // );

  return (
    <Modal
      open={open}
      backdropClose={true}
      onClose={onClose}
      onClick={onClose}
      dimension="large"
      closeOnEscape={true}
      className="bg-transparent vh-100 vw-100 p-10 Lightbox-wrappers"
    >
      {/* <div> */}
      <img id="my-image-id" src={imgSrc.currentSrc} className="lightbox h-100 w-auto" />
      {/* </div> */}
    </Modal>
  );
};

export default LightBox;
