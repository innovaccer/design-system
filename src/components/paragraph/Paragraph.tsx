import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export type ParagraphAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface ParagraphProps extends BaseProps, BaseHtmlProps<HTMLParagraphElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText;
  /**
   * Color of `Paragraph`
   */
  appearance: ParagraphAppearance;
}

export const Paragraph = (props: ParagraphProps) => {
  const { appearance, children, className, ...rest } = props;

  const classes = classNames(
    {
      [`Mds-Text`]: true,
      [`Mds-Text--${appearance}`]: appearance,
    },
    className
  );

  return (
    <GenericText data-test="DesignSystem-Paragraph" {...rest} className={classes} componentType="p">
      {children}
    </GenericText>
  );
};

Paragraph.displayName = 'Paragraph';
Paragraph.defaultProps = {
  appearance: 'default',
};

export default Paragraph;
