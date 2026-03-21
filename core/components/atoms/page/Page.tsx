import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import styles from '@css/components/page.module.css';

export interface PageProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Content to be rendered inside Page
   */
  children?: React.ReactNode;
}

export const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  const { children, className, ...rest } = props;

  const pageClass = classNames(
    {
      [styles.Page]: true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-Page" ref={ref} className={pageClass} {...rest}>
      {children}
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
