import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface CardFooterProps extends BaseProps {
  /**
   * Button/Button Group to be rendered inside `Card Footer`
   */
  children: React.ReactNode;
  /**
   * Determines if seperator is visible
   */
  withSeperator: boolean;
}

export const CardFooter = (props: CardFooterProps) => {
  const { className, children, withSeperator } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      'Card-footer': true,
      ['Card-footer--withSeperator']: withSeperator,
    },
    className
  );

  return (
    <div data-test="DesignSystem-CardFooter" {...baseProps} className={classes}>
      {children}
    </div>
  );
};

CardFooter.displayName = 'CardFooter';

CardFooter.defaultProps = {
  withSeperator: true,
};

export default CardFooter;
