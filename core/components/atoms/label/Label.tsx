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
}

export const Label = (props: LabelProps) => {
  const {
    disabled,
    children,
    ...rest
  } = props;

  const classes = classNames({
    Label: true,
    'Label--disabled': disabled
  });

  return (
    <GenericText className={classes} componentType="label" {...rest}>
      {children}
    </GenericText>
  );
};

Label.displayName = 'Label';

export default Label;
