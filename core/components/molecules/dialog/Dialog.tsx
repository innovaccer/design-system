import * as React from 'react';
import Modal, { Dimension } from '@/components/molecules/modal';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalDescription from '@/components/molecules/modalDescription';
import ModalFooter from '@/components/molecules/modalFooter';
import Button, { Appearance } from '@/components/atoms/button';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface DialogProps extends BaseProps {
  /**
   * Callback for `Dialog` close event
   */
  onClose: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  /**
   * closes `Dialog` on pressing escape key
   */
  closeOnEscape?: boolean;
  /**
   * Dimension of `Dialog`
   * @default "small"
   */
  dimension?: Dimension;
  /**
   * Handles open/close
   */
  open: boolean;
  /**
   * Dialog heading
   */
  heading?: string;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * Dialog's description title
   */
  title?: string;
  /**
   * Description inside `Dialog`
   */
  description?: string;
  /**
   * Label of first button inside `Dialog`
   */
  primaryButtonLabel: string;
  /**
   * Color of second button inside `Dialog`
   * @default "primary"
   */
  primaryButtonAppearance?: Appearance;
  /**
   * Handler to be called when first button is clicked
   */
  primaryButtonCallback: () => void;
  /**
   * Label of second button inside `Dialog`
   */
  secondaryButtonLabel: string;
  /**
   * Color of second button inside `Dialog`
   * @default "basic"
   */
  secondaryButtonAppearance?: Appearance;
  /**
   * Handler to be called when second button is clicked
   */
  secondaryButtonCallback: () => void;
}

const Dialog = (props: DialogProps) => {
  const {
    dimension = 'small',
    primaryButtonAppearance = 'primary',
    secondaryButtonAppearance = 'basic',
    open,
    onClose,
    icon,
    heading = '',
    title = '',
    description = '',
    primaryButtonLabel,
    primaryButtonCallback,
    secondaryButtonLabel,
    secondaryButtonCallback,
  } = props;

  const baseProps = extractBaseProps(props);

  const modalOptions = {
    open,
    dimension,
    backdropClose: onClose
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
    <Modal data-test="DesignSystem-Dialog" {...baseProps} {...modalOptions}>
      <ModalHeader {...modalHeaderOptions} />
      <ModalDescription {...modalDescriptionOptions} />
      <ModalFooter>
        <Button
          data-test="DesignSystem-Dialog--SecondaryButton"
          appearance={secondaryButtonAppearance}
          onClick={secondaryButtonCallback}
        >
          {secondaryButtonLabel}
        </Button>
        <Button
          data-test="DesignSystem-Dialog--PrimaryButton"
          appearance={primaryButtonAppearance}
          onClick={primaryButtonCallback}
        >
          {primaryButtonLabel}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

Dialog.displayName = 'Dialog';

export default Dialog;
