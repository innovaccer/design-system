import * as React from 'react';

export interface BreadcrumbProps {
  /**
   * Will be wrapped in a `list item`
   */
  children: React.ReactNode;
}

export const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = props => {
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
