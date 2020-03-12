import * as React from 'react';
import Heading from '@/components/atoms/heading';

export interface IBreadcrumbsWrapperProps {
  heading?: string;
  children: React.ReactNode;
}

const BreadcrumbsWrapper: React.FunctionComponent<IBreadcrumbsWrapperProps> = props => {
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

export default BreadcrumbsWrapper;
