import * as React from 'react';
import { PageHeader, Row, Column } from '@/index';

export const resourceTableTemplate = () => {
  return (
    <div className="d-flex flex-column bg-secondary-lightest vh-100 pb-6">
      <PageHeader title="Page title" separator={false} />
      <Row className="px-6 h-100">
        <Column className="h-100 bg-light" />
      </Row>
    </div>
  );
};

const customCode = `() => {
  return(
    <div className="d-flex flex-column bg-secondary-lightest vh-100 pb-6">
      <PageHeader
        title="Page title"
        separator={false}
      />
      <Row className="px-6 h-100">
        <Column className="h-100 bg-light" />
      </Row>
    </div>
  );
}`;

export default {
  title: 'Patterns/Layouts/Resource Table Template',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Resource Table Template',
        noProps: true,
      },
    },
  },
};
