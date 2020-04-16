import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Link from '@/components/atoms/link';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbsWrapper from '../BreadcrumbsWrapper';

// CSF format story
export const all = () => {

  const heading = text(
    'heading',
    'Heading'
  );

  return (
    <div style={{ background: 'black', padding: '20px' }}>
      <BreadcrumbsWrapper
        heading={heading}
      >
        <Breadcrumb>
          <div className="Breadcrumb-link">
            <Link>Test</Link>
          </div>
        </Breadcrumb>
        <Breadcrumb>
          <div className="Breadcrumb-link">
            <Link>Test Again</Link>
          </div>
        </Breadcrumb>
      </BreadcrumbsWrapper>
    </div>
  );
};

export default {
  title: 'Atoms|Breadcrumbs',
  component: BreadcrumbsWrapper,
  subcomponents: { Breadcrumb }
};
