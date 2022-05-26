import * as React from 'react';
import GenericText from '../_text';
import { BaseProps, BaseHtmlProps } from '@/utils/types';

export interface TextFormatterProps extends BaseProps, BaseHtmlProps<HTMLElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactNode;
}

export const Bold = (props: TextFormatterProps) => {
  const { children, ...rest } = props;

  return (
    <GenericText data-test="DesignSystem-Bold" {...rest} componentType="b">
      {children}
    </GenericText>
  );
};

export const Italic = (props: TextFormatterProps) => {
  const { children, ...rest } = props;

  return (
    <GenericText data-test="DesignSystem-Italic" {...rest} componentType="i">
      {children}
    </GenericText>
  );
};

export const Underline = (props: TextFormatterProps) => {
  const { children, ...rest } = props;

  return (
    <GenericText data-test="DesignSystem-Underline" {...rest} componentType="u">
      {children}
    </GenericText>
  );
};

export const Strikethrough = (props: TextFormatterProps) => {
  const { children, ...rest } = props;

  return (
    <GenericText data-test="DesignSystem-Strikethrough" {...rest} componentType="s">
      {children}
    </GenericText>
  );
};
