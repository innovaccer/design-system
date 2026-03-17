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
  /**
   * When true, skips the built-in focus-on-open behavior.
   * Use when the parent (e.g. Modal) manages focus via a focus trap.
   */
  skipFocusOnOpen?: boolean;
}

export const OverlayFooter = (props: OverlayFooterProps) => {
  const { open, className, children, actions, skipFocusOnOpen } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles.OverlayFooter]: true,
    },
    className
  );

  const wrapperRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (open && !skipFocusOnOpen && wrapperRef.current) {
      const secondaryBtns: NodeListOf<HTMLButtonElement> = wrapperRef.current?.querySelectorAll(
        `.${buttonStyles['Button--basic']}`
      );
      const secondaryBtn = secondaryBtns[secondaryBtns.length - 1];
      if (secondaryBtn) {
        window.requestAnimationFrame(() => secondaryBtn.focus({ preventScroll: true }));
      }
    }
  }, [open, skipFocusOnOpen]);

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
