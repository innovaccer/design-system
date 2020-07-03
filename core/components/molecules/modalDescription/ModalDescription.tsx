import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface ModalDescriptionProps extends BaseProps {
  title?: string;
  description?: string;
  removePadding?: boolean;
}

export const ModalDescription = (props: ModalDescriptionProps) => {
  const { title = '', description = '', removePadding = false, className } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-description': true,
    ['pl-6 pr-6']: !removePadding
  }, className);

  return (
    <div {...baseProps} className={classes}>
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

ModalDescription.displayName = 'ModalDescription';

export default ModalDescription;
