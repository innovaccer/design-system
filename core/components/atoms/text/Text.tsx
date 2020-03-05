import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface ITextProps {
  children: string;
  weight?: 'strong' | 'medium';
  small?: boolean;
  appearance?: Appearance;
}

const Text: React.FunctionComponent<ITextProps> = props => {
  const {
    appearance = 'default',
    children,
    weight,
    small,
    ...rest
  } = props;

  const classes = classNames({
    Text: true,
    [`Text--${appearance}`]: appearance,
    [`Text--${weight}`]: weight,
    ['Text--small']: small,
  });

  return (
    <GenericText
      className={classes}
      componentType="span"
      {...rest}
    >
      {children}
    </GenericText>
  );
};

export default Text;
