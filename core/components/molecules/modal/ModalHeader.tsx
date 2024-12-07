import * as React from 'react';
import classNames from 'classnames';
import { OverlayHeader } from '@/components/molecules/overlayHeader';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Column, Button } from '@/index';
import styles from '@css/components/modal.module.css';

export interface ModalHeaderProps extends BaseProps {
  heading?: string;
  onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  subHeading?: string;
  seperator?: boolean;
  backIcon?: boolean;
  backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { className, heading, subHeading, onClose, seperator, backIcon, backIconCallback } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['Modal-header']]: true,
      [styles['Modal-header--withSeperator']]: seperator,
    },
    className
  );

  return (
    <div {...baseProps} className={classes}>
      <Column>
        <OverlayHeader
          heading={heading}
          subHeading={subHeading}
          backButton={backIcon}
          backButtonCallback={backIconCallback}
        />
      </Column>
      <Column className="flex-grow-0">
        <Button
          icon="close"
          appearance="transparent"
          data-test="DesignSystem-Modal--CloseButton"
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (onClose) onClose(event, 'IconClick');
          }}
        />
      </Column>
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
