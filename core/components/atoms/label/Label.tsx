import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export interface LabelProps {
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
   */
  required?: boolean;
}

export const Label = (props: LabelProps) => {
  const {
    disabled,
    children,
    required,
    ...rest
  } = props;

  const classes = classNames({
    Label: true,
    'Label--disabled': disabled
  });

  return (
    <div>
      <GenericText className={classes} componentType="label" {...rest}>
        {children}
      </GenericText>
      {required && <span />}
    </div>
  );
};

Label.displayName = 'Label';

export default Label;
