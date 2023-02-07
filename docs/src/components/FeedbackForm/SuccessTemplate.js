import React from 'react';
import { Heading, Modal, Text } from '@innovaccer/design-system';
import successImage from './images/successImg.png';

const SuccessTemplate = ({ open, onCloseHandler }) => {
  return (
    <Modal
      open={open}
      backdropClose={true}
      onClose={onCloseHandler}
      headerOptions={{
        heading: '',
      }}
    >
      <div className="d-flex align-items-center flex-column mb-4">
        <img data-image-id="Satismeter-img--success" src={successImage} width="152" height="auto" alt="success" />
        <Heading className="mt-6">Thanks for your feedback!</Heading>
        <Text className="mt-3" appearance="subtle">
          We always try to cook better things as per your taste.
        </Text>
      </div>
    </Modal>
  );
};

export default SuccessTemplate;
