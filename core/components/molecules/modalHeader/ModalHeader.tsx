import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Heading, Text, Icon } from '@/index';
import { IconProps } from '@/index.type';

export interface ModalHeaderProps extends BaseProps {
  icon?: IconProps['name'];
  iconAppearance: IconProps['appearance'];
  heading?: string;
  onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  subHeading?: string;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { className, heading, icon, iconAppearance, subHeading, onClose } = props;
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
            appearance={iconAppearance}
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
ModalHeader.defaultProps = {
  iconAppearance: Icon.defaultProps.appearance
};

export default ModalHeader;
