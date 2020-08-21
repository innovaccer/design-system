import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface ParagraphProps extends BaseProps {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Color of `Paragraph`
   * @default "default"
   */
  appearance?: Appearance;
}

export const Paragraph: React.FunctionComponent<ParagraphProps> = props => {
  const {
    appearance = 'default',
    children,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    Text: true,
    [`Text--${appearance}`]: appearance
  }, className);

  return (
    <GenericText data-test="DesignSystem-Paragraph" {...baseProps} className={classes} componentType="p">
      {children}
    </GenericText>
  );
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
