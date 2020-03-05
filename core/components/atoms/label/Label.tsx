import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export interface ILabelProps {
  children: React.ReactChild;
  disabled?: boolean;
}

const Label: React.FunctionComponent<ILabelProps> = props => {
  const {
    disabled = false,
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
