import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Heading, Text, Button } from '@/index';
import styles from '@css/components/overlay.module.css';

export interface OverlayHeaderProps extends BaseProps {
  /**
   * Heading string
   */
  heading?: string;
  /**
   * Callback called when `Overlay` is closed
   * **Soon to be deprecated**
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
   * **Soon to be deprecated**
   */
  backIcon?: boolean;
  /**
   * Callback called when back button is clicked
   * **Soon to be deprecated**
   */
  backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * Specify css classes to be applied on heading
   */
  headingClass?: string;
}

export const OverlayHeader = (props: OverlayHeaderProps) => {
  const { className, heading, subHeading, backButton, backIcon, backIconCallback, backButtonCallback, headingClass } =
    props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles.OverlayHeader]: true,
      [styles['OverlayHeader--withBackButton']]: backButton || backIcon,
    },
    className
  );

  const subheadingClass = classNames({
    [styles['OverlayHeader-subheading']]: true,
    [styles['OverlayHeader-subheading--withBackButton']]: backButton || backIcon,
  });

  return (
    <div data-test="DesignSystem-OverlayHeader" {...baseProps} className={classes}>
      <div className={styles['OverlayHeader-headerWrapper']}>
        {(backButton || backIcon) && (
          <Button
            data-test="DesignSystem-OverlayHeader--Button"
            appearance="transparent"
            className="mr-4"
            icon="arrow_back"
            largeIcon={true}
            onClick={backButtonCallback || backIconCallback}
          />
        )}
        {heading && (
          <Heading className={headingClass} data-test="DesignSystem-OverlayHeader--heading">
            {heading}
          </Heading>
        )}
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
