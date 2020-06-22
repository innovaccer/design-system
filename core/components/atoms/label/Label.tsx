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
   * @default false
   */
  required?: boolean;
  /**
   * Adds className to `Label` component
   */
  className?: string;
}

export const Label = (props: LabelProps) => {
  const {
    required = false,
    disabled,
    children,
    className,
    ...rest
  } = props;

  const LabelClass = classNames({
    Label: true,
    [`${className}`]: className,
  });

  const classes = classNames({
    'Label-label': true,
    'Label--disabled': disabled
  });

  return (
    <div className={LabelClass}>
      <GenericText className={classes} componentType="label" {...rest}>
        {children}
      </GenericText>
      {required && <span className="Label-requiredIndicator"/>}
    </div>
  );
};

Label.displayName = 'Label';

export default Label;
