import * as React from 'react';

export const blankTemplate = () => <></>;

const customCode = `() => {
  return(
    <Row className="d-flex flex-column bg-secondary-lightest vh-100 p-6">
      <Column>
        <div className="h-100 bg-light" />
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Patterns/Layouts/Blank Template',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Blank Template',
        noProps: true,
      },
    },
  },
};
