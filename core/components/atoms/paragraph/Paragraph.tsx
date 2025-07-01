import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';
import styles from '@css/components/text.module.css';

export type ParagraphAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface ParagraphProps extends BaseProps, BaseHtmlProps<HTMLParagraphElement> {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * State of `Paragraph`
   * @default default
   */
  appearance?: ParagraphAppearance;
  /**
   * Color of `Paragraph`
   */
  color?: TextColor;
}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  const { appearance = 'default', children, className, color, ...rest } = props;

  const classes = classNames(
    {
      [styles.Text]: true,
      [styles[`Text--${appearance}`]]: !color && appearance,
      [`color-${color}`]: color,
    },
    className
  );

  return (
    <GenericText ref={ref} data-test="DesignSystem-Paragraph" {...rest} className={classes} componentType="p">
      {children}
    </GenericText>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;
