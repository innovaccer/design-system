import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Heading, Text, Icon } from '@/index';

export interface ModalHeaderProps extends BaseProps {
  heading: string;
  onClose: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  subHeading?: string;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { className, heading, subHeading, onClose } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-header': true
  }, className);

  return (
    <div data-test="DesignSystem-ModalHeader" {...baseProps} className={classes}>
      <div className="Modal-headerHeading">
        <Heading>{heading}</Heading>
        <Icon
          size={20}
          name={'close'}
          className={'mx-2 cursor-pointer'}
          data-test="DesignSystem-ModalHeader--CloseIcon"
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClose(event, 'IconClick')}
        />
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
