import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Heading, Text, Icon } from '@/index';

export interface ModalHeaderProps extends BaseProps {
  heading: string;
  onClose: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  subHeading?: string;
  seperator?: boolean;
  backIcon?: boolean;
  backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { className, heading, subHeading, onClose, seperator, backIcon, backIconCallback } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-header': true,
    ['Modal-header--backIcon']: backIcon,
    ['Modal-header--seperator']: seperator
  }, className);

  const wrapperClass = classNames({
    'Modal-headerWrapper': true,
    ['Modal-headerWrapper--backIcon']: backIcon,
  });

  return (
    <div data-test="DesignSystem-ModalHeader" {...baseProps} className={classes}>
      <div className={wrapperClass}>
        {backIcon && (
          <Icon
            name="keyboard_backspace"
            size={20}
            className="ml-3 mr-5 my-3 px-2 py-2 cursor-pointer"
            onClick={backIconCallback}
          />
        )}
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
      </div>
      {subHeading && (
        <Text data-test="DesignSystem-ModalHeader--Subheading" appearance="subtle" className="mt-2 ml-7">
          {subHeading}
        </Text>
      )}
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
