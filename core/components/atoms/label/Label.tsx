import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface LabelProps extends BaseProps {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Disables the `Label`
   */
  disabled?: boolean;
  /**
   * Shows the user that this field id required
   * @default false
   */
  required?: boolean;
  /**
   * Adds default bottom margin of 4px
   * @default false
   */
  withInput?: boolean;
}

export const Label = (props: LabelProps) => {
  const {
    required = false,
    withInput = false,
    disabled,
    children,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const LabelClass = classNames({
    Label: true,
    ['Label--withInput']: withInput,
    [`${className}`]: className
  });

  const classes = classNames({
    'Label-label': true,
    'Label--disabled': disabled
  });

  return (
    <div {...baseProps} className={LabelClass}>
      <GenericText className={classes} componentType="label">
        {children}
      </GenericText>
      {required && <span className="Label-requiredIndicator" />}
    </div>
  );
};

Label.displayName = 'Label';

export default Label;
