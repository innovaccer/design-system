import * as React from 'react';
import { Chip, Row, Column } from '@/index';

export const overflowBehavior = () => {
  return (
    <Row>
      <Column>
        <Chip
          label="Dan Mckenzie Farland Bartholomew"
          clearButton={true}
          name="Dan Mckenzie Farland Bartholomew"
          type="input"
        />
      </Column>
      <Column>
        <Chip
          labelPrefix="Provider city :"
          label="Los Angeles, California"
          clearButton={true}
          name="Provider city :"
          type="input"
        />
      </Column>
      <Column>
        <Chip
          label="LA"
          labelPrefix="Provider city is very very very long :"
          name="Provider city is very very very long :"
          clearButton={true}
          type="input"
        />
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Chip/Chip/Overflow Behavior',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
      },
    },
  },
};
