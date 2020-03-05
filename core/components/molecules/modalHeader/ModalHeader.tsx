import * as React from 'react';
import classNames from 'classnames';
import Heading from '@/components/atoms/heading';
import Text from '@/components/atoms/text';

export interface IModalHeaderProps {
  icon?: string;
  heading?: string;
  onClose: (reason?: string, event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  subHeading?: string;
}

const ModalHeader: React.FunctionComponent<IModalHeaderProps> = props => {
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
      <i
        className="material-icons Modal-close-icon"
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClose('IconClick', event)}
      >
        close
      </i>
    );
  };

  const getHeaderIcon = () => {
    return (
      <i className="material-icons Modal-header-icon">{icon}</i>
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

export default ModalHeader;
