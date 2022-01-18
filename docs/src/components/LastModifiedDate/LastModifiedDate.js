import React from 'react';
import { Row, Column, Text } from '@innovaccer/design-system';

const LastModifiedDate = ({ date }) => {
  const options = {
    day: '2-digit',
    year: 'numeric',
    month: 'long',
  };

  const lastModified = new Date(date);

  return date ? (
    <Row>
      <Column>
        <Text>
          Page last updated: {lastModified.toLocaleDateString('en-GB', options)}
          {/* // https://www-03preprod.ibm.com/support/knowledgecenter/ibm_style/dates-and-times.html */}
        </Text>
      </Column>
    </Row>
  ) : null;
};
export default LastModifiedDate;
