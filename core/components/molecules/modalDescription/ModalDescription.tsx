import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';

export interface IModalDescriptionProps {
  title?: string;
  description?: string;
  removePadding?: boolean;
}

const ModalDescription: React.FunctionComponent<IModalDescriptionProps> = props => {
  const { title = '', description = '', removePadding = false } = props;

  const classes = classNames({
    'Modal-description': true,
    ['pl-6 pr-6']: !removePadding
  });

  return (
    <div className={classes}>
      {title && (
        <div>
          <Text weight="strong">
            {title}
          </Text>
        </div>
      )}
      {description && (
        <div>
          <Text>
            {description}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ModalDescription;
