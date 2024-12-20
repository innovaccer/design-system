import * as React from 'react';
import classNames from 'classnames';
import { Button } from '@/index';
import { ButtonProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/overlay.module.css';
import buttonStyles from '@css/components/button.module.css';

export interface OverlayFooterProps extends BaseProps {
  open?: boolean;
  children?: React.ReactNode;
  actions?: ButtonProps[];
}

export const OverlayFooter = (props: OverlayFooterProps) => {
  const { open, className, children, actions } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles.OverlayFooter]: true,
    },
    className
  );

  const wrapperRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (open) {
      if (wrapperRef.current) {
        const secondaryBtns: NodeListOf<HTMLButtonElement> = wrapperRef.current?.querySelectorAll(
          `.${buttonStyles['Button--basic']}`
        );
        const secondaryBtn = secondaryBtns[secondaryBtns.length - 1];
        if (secondaryBtn) {
          window.requestAnimationFrame(() => secondaryBtn.focus({ preventScroll: true }));
        }
      }
    }
  }, [open]);

  if (actions) {
    return (
      <div ref={wrapperRef} {...baseProps} className={classes}>
        {actions.map(({ label, ...options }, index) => {
          return <Button type="button" {...options} key={index} />;
        })}
      </div>
    );
  }

  return (
    <div data-test="DesignSystem-OverlayFooter" ref={wrapperRef} {...baseProps} className={classes}>
      {children}
    </div>
  );
};

OverlayFooter.displayName = 'OverlayFooter';

export default OverlayFooter;
