import React from 'react';
import Lightbox from 'react-spring-lightbox';
import { Icon } from '@innovaccer/design-system';

const LightboxHeader = ({onClose}) => {
  return (
    <div className="d-flex justify-content-end">
      <Icon name="close" onClick={onClose} size={30} appearance="white" className="cursor-pointer m-4" />
    </div>
  );
};

const ImageLightBox = ({ onLightBoxClose, lightboxDetail }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={onLightBoxClose}>
      <Lightbox
        singleClickToZoom
        onClose={onLightBoxClose}
        isOpen={lightboxDetail.open}
        renderHeader={() => <LightboxHeader onClose={onLightBoxClose} />}
        images={[{ src: lightboxDetail.imgSrc, alt: lightboxDetail.alt }]}
        style={{ zIndex: 3000, backgroundColor: 'rgba(47, 47, 47, 0.8)' }}
        pageTransitionConfig={{
          from: { transform: 'scale(0.75)', opacity: 0 },
          enter: { transform: 'scale(1)', opacity: 1 },
          leave: { transform: 'scale(0.75)', opacity: 0 },
          config: { mass: 1, tension: 320, friction: 32 },
        }}
      />
    </div>
  );
};

export default ImageLightBox;
