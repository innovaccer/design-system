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
  const { title, description, removePadding, className } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-description': true,
    ['pl-6 pr-6']: !removePadding
  }, className);

  return (
    <div data-test="DesignSystem-ModalDescription" {...baseProps} className={classes}>
      {title && (
        <div>
          <Text weight="strong" data-test="DesignSystem-ModalDescription--Title">
            {title}
          </Text>
        </div>
      )}
      {description && (
        <div>
          <Text data-test="DesignSystem-ModalDescription--Description">
            {description}
          </Text>
        </div>
      )}
    </div>
  );
};

ModalDescription.displayName = 'ModalDescription';

export default ModalDescription;
