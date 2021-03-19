import * as React from 'react';

export const blankTemplate = () => <></>;

const customCode = `() => {
  return(
    <Row className="d-flex flex-column bg-secondary-lightest vh-100 py-6 px-4">
      <Column size={12} className="px-4">
        <div className="h-100 v-100 bg-light" />
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Patterns/Layouts',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Blank Template',
        noProps: true
      }
    }
  }
};
