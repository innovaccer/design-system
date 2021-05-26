import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface ParagraphProps extends BaseProps, BaseHtmlProps<HTMLParagraphElement> {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Color of `Paragraph`
   */
  appearance: Appearance;
}

export const Paragraph = (props: ParagraphProps) => {
  const {
    appearance,
    children,
    className,
    ...rest
  } = props;

  const classes = classNames({
    Text: true,
    [`Text--${appearance}`]: appearance
  }, className);

  return (
    <GenericText data-test="DesignSystem-Paragraph" {...rest} className={classes} componentType="p">
      {children}
    </GenericText>
  );
};

Paragraph.displayName = 'Paragraph';
Paragraph.defaultProps = {
  appearance: 'default'
};

export default Paragraph;
