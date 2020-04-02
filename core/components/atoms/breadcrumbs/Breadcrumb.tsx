import * as React from 'react';

export interface IBreadcrumbProps {
  /**
   * Will be wrapped in a `list item`
   */
  children: React.ReactNode;
}

export const Breadcrumb: React.FunctionComponent<IBreadcrumbProps> = props => {
  const {
    children,
  } = props;

  return (
    <li className="Breadcrumb">
      {children}
    </li>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
