import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/overlay.module.css';

export interface OverlayBodyProps extends BaseProps {
  children: React.ReactNode;
}

export const OverlayBody = (props: OverlayBodyProps) => {
  const { children, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles.OverlayBody]: true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-OverlayBody" {...baseProps} className={classes}>
      {children}
    </div>
  );
};

OverlayBody.defaultProps = {
  stickFooter: true,
  withFooter: true,
};

OverlayBody.displayName = 'OverlayBody';

export default OverlayBody;
