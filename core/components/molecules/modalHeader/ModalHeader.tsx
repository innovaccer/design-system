import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import Heading from '@/components/atoms/heading';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';

export interface ModalHeaderProps extends BaseProps {
  icon?: string;
  heading?: string;
  onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  subHeading?: string;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { className, heading, icon, subHeading, onClose } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-header': true
  }, className);

  const subheaderClasses = classNames({
    'Modal-header-subheader': true,
    ['Modal-header-subheader--withIcon']: icon
  });

  return (
    <div className="Modal-header-wrapper">
      <div data-test="DesignSystem-ModalHeader" {...baseProps} className={classes}>
        {icon && (
          <Icon
            className="Modal-header-icon"
            name={icon}
            data-test="DesignSystem-ModalHeader--Icon"
          />
        )}
        {heading && (
          <div>
            <Heading size="s">
              {heading}
            </Heading>
          </div>
        )}
        <Icon
          name={'close'}
          className="Modal-close-icon"
          data-test="DesignSystem-ModalHeader--CloseIcon"
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClose(event, 'IconClick')}
        />
      </div>
      {subHeading && (
        <div className={subheaderClasses} data-test="DesignSystem-ModalHeader--Subheading">
          <Text appearance="subtle">
            {subHeading}
          </Text>
        </div>
      )}
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
