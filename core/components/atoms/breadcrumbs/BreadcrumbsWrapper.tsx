import * as React from 'react';
import Heading from '@/components/atoms/heading';

export interface BreadcrumbsWrapperProps {
  /**
   * Heading of breadcrumb
   */
  heading?: string;
  /**
   * All `Breadcrumb` Component will be wrapped in a `list`
   */
  children: React.ReactNode;
}

export const BreadcrumbsWrapper: React.FunctionComponent<BreadcrumbsWrapperProps> = props => {
  const {
    children,
    heading,
  } = props;

  return (
    <div className="BreadcrumbsWrapper">
      <ul className="BreadcrumbsWrapper-list">
        {children}
      </ul>
      {heading && <Heading>{heading}</Heading>}
    </div>
  );
};

BreadcrumbsWrapper.displayName = 'BreadcrumbsWrapper';

export default BreadcrumbsWrapper;
