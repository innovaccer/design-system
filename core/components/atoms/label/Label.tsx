import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export interface ILabelProps {
  /**
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  disabled?: boolean;
}

const Label = (props: ILabelProps) => {
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

export default Label;
