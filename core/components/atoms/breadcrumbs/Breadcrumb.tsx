import * as React from 'react';

export interface IBreadcrumbProps {
  children: React.ReactNode;
}

const Breadcrumb: React.FunctionComponent<IBreadcrumbProps> = props => {
  const {
    children,
  } = props;

  return (
    <li className="Breadcrumb">
      {children}
    </li>
  );
};

export default Breadcrumb;
