import * as React from 'react';
import GenericText from '../_text';
import { TextFormatterProps } from '@/utils/types';

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
