import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface CardBodyProps extends BaseProps {
  /**
   * React Node to be rendered inside `Card Body`
   */
  children: React.ReactNode;
}

export const CardBody = (props: CardBodyProps) => {
  const { className, children } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      'Card-body': true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-CardBody" {...baseProps} className={classes}>
      {children}
    </div>
  );
};

CardBody.displayName = 'CardBody';

export default CardBody;
