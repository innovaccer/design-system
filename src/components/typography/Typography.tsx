import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import {
  Heading,
  HeadingProps,
  Subheading,
  SubheadingProps,
  Text,
  TextProps,
  Paragraph,
  ParagraphProps,
} from '@/index';

export interface TypographyComponentProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
  /**
   * Type of component to be used
   */
  type: 'heading' | 'subheading' | 'text' | 'paragraph';
  /**
   * To provide emphasis/design to the component
   * b - bold, i - italics, u - underline
   */
  emphasis?: 'b' | 'i' | 'u';
}

type ComponentProps = TextProps | ParagraphProps | HeadingProps | SubheadingProps;

export type TypographyProps = TypographyComponentProps & ComponentProps;

export const emphasisWrapperMap = {
  b: (element: JSX.Element) => <b>{element}</b>,
  i: (element: JSX.Element) => <i>{element}</i>,
  u: (element: JSX.Element) => <u>{element}</u>,
};

export const componentTypeMap: {
  [key: string]: (arg: any) => JSX.Element;
} = {
  heading: ({ children, ...headingProps }: HeadingProps) => <Heading {...headingProps}>{children}</Heading>,
  subheading: ({ children, ...subheadingProps }: SubheadingProps) => (
    <Subheading {...subheadingProps}>{children}</Subheading>
  ),
  text: ({ children, ...textProps }: TextProps) => <Text {...textProps}>{children}</Text>,
  paragraph: ({ children, ...paragraphProps }: ParagraphProps) => <Paragraph {...paragraphProps}>{children}</Paragraph>,
};

export const Typography = (props: TypographyProps) => {
  const { type, emphasis, ...componentProps } = props;

  const Component = componentTypeMap[type]({ ...componentProps, 'data-test': 'DesignSystem-Typography' });
  return emphasis ? emphasisWrapperMap[emphasis](Component) : Component;
};

Typography.displayName = 'Typography';
Typography.defaultProps = {
  type: 'text',
  appearance: 'default',
};

export default Typography;
