import * as React from 'react';
import { Button, Modal, ModalDescription } from '@/index';
import { ModalProps, ModalHeaderProps, ButtonProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface DialogProps extends BaseProps {
  /**
   * Callback for `Dialog` close event
   */
  onClose: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  /**
   * Dimension of `Dialog`
   */
  dimension: ModalProps['dimension'];
  /**
   * Handles open/close
   */
  open: boolean;
  /**
   * Dialog heading
   */
  heading: ModalHeaderProps['heading'];
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
   */
  primaryButtonAppearance: ButtonProps['appearance'];
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
   */
  secondaryButtonAppearance: ButtonProps['appearance'];
  /**
   * Handler to be called when second button is clicked
   */
  secondaryButtonCallback: () => void;
}

/**
 *
 * Dialog component has been deprecated, please use [Modal](https://mds.innovaccer.com/?path=/docs/components-modal-modal-all--all) component instead.
 *
 */

const Dialog = (props: DialogProps) => {
  const {
    dimension,
    primaryButtonAppearance,
    secondaryButtonAppearance,
    open,
    onClose,
    heading,
    title,
    description,
    primaryButtonLabel,
    primaryButtonCallback,
    secondaryButtonLabel,
    secondaryButtonCallback,
  } = props;

  const baseProps = extractBaseProps(props);

  return (
    <Modal
      data-test="DesignSystem-Dialog"
      {...baseProps}
      open={open}
      dimension={dimension}
      onClose={onClose}
      headerOptions={{
        heading,
      }}
      footer={
        <>
          <Button
            type="button"
            data-test="DesignSystem-Dialog--SecondaryButton"
            appearance={secondaryButtonAppearance}
            onClick={secondaryButtonCallback}
          >
            {secondaryButtonLabel}
          </Button>
          <Button
            type="button"
            className="ml-4"
            data-test="DesignSystem-Dialog--PrimaryButton"
            appearance={primaryButtonAppearance}
            onClick={primaryButtonCallback}
          >
            {primaryButtonLabel}
          </Button>
        </>
      }
    >
      <ModalDescription title={title} description={description} />
    </Modal>
  );
};

Dialog.displayName = 'Dialog';
Dialog.defaultProps = {
  dimension: 'small',
  primaryButtonAppearance: 'primary',
  secondaryButtonAppearance: 'basic',
};

export default Dialog;
