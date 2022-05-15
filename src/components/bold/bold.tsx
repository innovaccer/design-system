import * as React from 'react';
import GenericText from '../_text';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export interface BoldProps extends BaseProps, BaseHtmlProps<HTMLElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText;
}

export const Bold = (props: BoldProps) => {
  const { children, className, ...rest } = props;

  return (
    <GenericText data-test="DesignSystem-Bold" {...rest} className={className} componentType="b">
      {children}
    </GenericText>
  );
};

Bold.displayName = 'Bold';
Bold.defaultProps = {
  appearance: 'default',
};

export default Bold;
