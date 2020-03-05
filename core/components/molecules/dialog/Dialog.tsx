import * as React from 'react';
import Modal, { Dimension } from '@/components/molecules/modal';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalDescription from '@/components/molecules/modalDescription';
import ModalFooter from '@/components/molecules/modalFooter';
import Button, { Appearance } from '@/components/atoms/button';

export interface IDialogProps {
  onClose: (reason?: string, event?: Event|React.MouseEvent<HTMLElement, MouseEvent>) => void;
  closeOnEscape?: boolean;
  dimension?: Dimension;
  open: boolean;
  heading?: string;
  icon?: string;
  title?: string;
  description?: string;
  primaryButtonLabel: string;
  primaryButtonAppearance?: Appearance;
  primaryButtonCallback: () => void;
  secondaryButtonLabel: string;
  secondaryButtonAppearance?: Appearance;
  secondaryButtonCallback: () => void;
}

const Dialog: React.FunctionComponent<IDialogProps> = props => {
  const {
    open,
    onClose,
    dimension = 'small',
    icon,
    heading = '',
    title = '',
    description = '',
    primaryButtonAppearance = 'primary',
    primaryButtonLabel,
    primaryButtonCallback,
    secondaryButtonAppearance = 'basic',
    secondaryButtonLabel,
    secondaryButtonCallback } = props;

  const modalOptions = {
    open,
    onClose,
    dimension
  };

  const modalHeaderOptions = {
    onClose,
    icon,
    heading
  };

  const modalDescriptionOptions = {
    title,
    description
  };

  return (
    <Modal {...modalOptions} >
      <ModalHeader {...modalHeaderOptions} />
      <ModalDescription {...modalDescriptionOptions} />
      <ModalFooter>
        <Button appearance={secondaryButtonAppearance} onClick={secondaryButtonCallback}>{secondaryButtonLabel}</Button>
        <Button appearance={primaryButtonAppearance} onClick={primaryButtonCallback}>{primaryButtonLabel}</Button>
      </ModalFooter>
    </Modal>
  );
};

export default Dialog;
