import * as React from 'react';
import { Divider, Row, Column, Text } from '@/index';

export const all = () => {
  return (
    <div>
      <Row>
        <Column className="p-6">
          <Divider />
          <br />
          <Text weight="strong">Basic Divider</Text>
        </Column>

        <Column className="p-6">
          <Divider appearance="header" />
          <br />
          <Text weight="strong">Header Divider</Text>
        </Column>
      </Row>
    </div>
  );
};

export default {
  title: 'Components/Divider/Horizontal/All',
  component: Divider,
};
