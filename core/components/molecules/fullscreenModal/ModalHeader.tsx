import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Heading, Text, Icon } from '@/index';

export interface ModalHeaderProps extends BaseProps {
  heading?: string;
  subHeading?: string;
  backButton?: boolean;
  backButtonCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { className, heading, subHeading, backButton, backButtonCallback } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      'FullscreenModal-header': true,
      ['FullscreenModal-header--backButton']: backButton
    },
    className
  );

  return (
    <div data-test="DesignSystem-ModalHeader" {...baseProps} className={classes}>
      <div className="FullscreenModal-headerWrapper">
        {backButton && (
          <Icon name="keyboard_backspace" size={20} className="mr-5 cursor-pointer" onClick={backButtonCallback} />
        )}
        {heading && <Heading>{heading}</Heading>}
      </div>
      {subHeading && (
        <Text data-test="DesignSystem-ModalHeader--Subheading" appearance="subtle" className="mt-2">
          {subHeading}
        </Text>
      )}
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
