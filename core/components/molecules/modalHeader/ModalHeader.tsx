import * as React from 'react';
import classNames from 'classnames';
import Heading from '@/components/atoms/heading';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';

export interface ModalHeaderProps {
  icon?: string;
  heading?: string;
  onClose: (reason?: string, event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  subHeading?: string;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { heading = '', icon = '', subHeading = '' } = props;

  const classes = classNames({
    'Modal-header': true
  });

  const subheaderClasses = classNames({
    'Modal-header-subheader': true,
    ['Modal-header-subheader--withIcon']: icon
  });

  const getCloseButton = () => {
    const { onClose } = props;

    return (
      <div
        className="Modal-close-icon"
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClose('IconClick', event)}
      >
        <Icon name={'close'} size={16}/>
      </div>
    );
  };

  const getHeaderIcon = () => {
    return (
      <div className="Modal-header-icon"><Icon name={icon} size={16}/></div>
    );
  };

  const closeButton = getCloseButton();

  return (
    <div className="Modal-header-wrapper">
      <div className={classes}>
        {icon && getHeaderIcon()}
        <div>
          <Heading size="m">
            {heading}
          </Heading>
        </div>
        {closeButton}
      </div>
      {subHeading && (
        <div className={subheaderClasses}>
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
