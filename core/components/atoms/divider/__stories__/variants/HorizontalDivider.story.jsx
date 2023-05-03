import * as React from 'react';
import { Divider, Row, Column, Text } from '@/index';

export const HorizontalDivider = () => {
  return (
    <div>
      <Row>
        <Column className="p-6">
          <Divider />
          <br />
          <Text weight="strong">Default Divider</Text>
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
  title: 'Layout/Divider/variants/Horizontal Divider',
  component: Divider,
};
