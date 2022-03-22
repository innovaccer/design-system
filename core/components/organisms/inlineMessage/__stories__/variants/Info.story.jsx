import * as React from 'react';
import { InlineMessage, Row, Column } from '@/index';

// CSF format story
export const infoMessage = () => (
  <Row>
    <Column size="4">
      <InlineMessage appearance="info" description="There are two new referral requests." />
    </Column>
  </Row>
);

export default {
  title: 'Components/InlineMessage/Variants/Info Message',
  component: InlineMessage,
};
