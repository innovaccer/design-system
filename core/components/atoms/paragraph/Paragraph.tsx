import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface ParagraphProps {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Color of `Paragraph`
   * @default "default"
   */
  appearance?: Appearance ;
}

export const Paragraph: React.FunctionComponent<ParagraphProps> = props => {
  const {
    appearance = 'default',
    children,
    ...rest
  } = props;

  const classes = classNames({
    Text: true,
    [`Text--${appearance}`]: appearance
  });

  return (
    <GenericText className={classes} componentType="p" {...rest}>
      {children}
    </GenericText>
  );
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
