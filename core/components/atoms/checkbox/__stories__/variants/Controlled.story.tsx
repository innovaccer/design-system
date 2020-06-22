import * as React from 'react';
import Checkbox from '../../index';
import Modal from '@/components/molecules/modal';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalFooter from '@/components/molecules/modalFooter';
import ModalBody from '@/components/molecules/modalBody';
import Button from '@/components/atoms/button';

// CSF format story
export const controlledCheckbox = () => {
  const [checked, setChecked] = React.useState(false);
  const [temporaryChecked, setTemporaryChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleParentChange = (checkedValue: boolean) => {
    setOpen(true);
    setTemporaryChecked(checkedValue);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const onConfirm = () => {
    setChecked(temporaryChecked);
    setOpen(false);
  };

  const modalHeaderOptions = {
    onClose: onCloseModal,
    heading: 'Confirmation Modal',
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        label={'Innovaccer'}
        onChange={handleParentChange}
        value={'Innovaccer'}
      />
      <Modal open={open} onClose={onCloseModal}>
        <ModalHeader {...modalHeaderOptions} />
        <ModalBody>
         <p>Are you sure you want to toggle the checkbox ?</p>
        </ModalBody>
        <ModalFooter>
          <Button appearance="basic" onClick={onCloseModal}>Cancel</Button>
          <Button appearance="primary" onClick={onConfirm}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default {
  title: 'Atoms|Checkbox/Variants',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
        noStory: true
      }
    }
  }
};
