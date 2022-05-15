import React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

interface Props {
  componentType: string;
  'data-test'?: string;
}

export interface TextFormatProps extends BaseProps, BaseHtmlProps<HTMLElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText;
}

type Component = (x: TextFormatProps) => React.ReactElement;

const withTextFormatter = (props: Props):Component => {
  const TextFormat = (textProps: TextFormatProps) => {
    const dataTestID = textProps['data-test'] || props['data-test'];

    return React.createElement(props.componentType, { ...textProps, 'data-test': dataTestID });
  };
  return TextFormat;
};

export default withTextFormatter;
