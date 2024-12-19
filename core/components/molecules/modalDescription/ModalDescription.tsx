import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/modal.module.css';

export interface ModalDescriptionProps extends BaseProps {
  title?: string;
  description?: string;
}

export const ModalDescription = (props: ModalDescriptionProps) => {
  const { title, description, className } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['Modal-description']]: true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-ModalDescription" {...baseProps} className={classes}>
      {title && (
        <Text weight="strong" data-test="DesignSystem-ModalDescription--Title">
          {title}
        </Text>
      )}
      {title && description && <br />}
      {description && <Text data-test="DesignSystem-ModalDescription--Description">{description}</Text>}
    </div>
  );
};

ModalDescription.displayName = 'ModalDescription';

export default ModalDescription;
