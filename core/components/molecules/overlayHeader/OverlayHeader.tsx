import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Heading, Text, Button } from '@/index';

export interface OverlayHeaderProps extends BaseProps {
  /**
   * Heading string
   */
  heading?: string;
  /**
   * Callback called when `Overlay` is closed
   * **Soon to be depreacted**
   */
  onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  /**
   * Subheading string
   */
  subHeading?: string;
  /**
   * Shows back button
   */
  backButton?: boolean;
  /**
   * Callback called when back button is clicked
   */
  backButtonCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * Shows back button
   * **Soon to be depreacted**
   */
  backIcon?: boolean;
  /**
   * Callback called when back button is clicked
   * **Soon to be depreacted**
   */
  backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const OverlayHeader = (props: OverlayHeaderProps) => {
  const { className, heading, subHeading, backButton, backIcon, backIconCallback, backButtonCallback } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    OverlayHeader: true,
    ['OverlayHeader--withBackButton']: backButton || backIcon,
  }, className);

  const subheadingClass = classNames({
    ['OverlayHeader-subheading']: true,
    ['OverlayHeader-subheading--withBackButton']: backButton || backIcon
  });

  return (
    <div data-test="DesignSystem-OverlayHeader" {...baseProps} className={classes}>
      <div className="OverlayHeader-headerWrapper">
        {(backButton || backIcon) && (
          <Button
            appearance="transparent"
            className="mr-5"
            icon="keyboard_backspace"
            onClick={backButtonCallback || backIconCallback}
          />
        )}
        {heading && <Heading>{heading}</Heading>}
      </div>
      {subHeading && (
        <Text data-test="DesignSystem-OverlayHeader--Subheading" appearance="subtle" className={subheadingClass}>
          {subHeading}
        </Text>
      )}
    </div>
  );
};

OverlayHeader.displayName = 'OverlayHeader';

export default OverlayHeader;
