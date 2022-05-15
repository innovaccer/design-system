import * as React from 'react';
import GenericText from '../_text';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export interface ItalicsProps extends BaseProps, BaseHtmlProps<HTMLElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText;
}

export const Italics = (props: ItalicsProps) => {
  const { children, className, ...rest } = props;

  return (
    <GenericText data-test="DesignSystem-Italics" {...rest} className={className} componentType="i">
      {children}
    </GenericText>
  );
};

Italics.displayName = 'Italics';
Italics.defaultProps = {
  appearance: 'default',
};

export default Italics;
