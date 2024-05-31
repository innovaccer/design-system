import * as React from 'react';
import { Chip, Row, Column } from '@/index';

export const overflowBehaviour = () => {
  const renderChips = (
    <>
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
    </>
  );

  return <div>{renderChips}</div>;
};

export default {
  title: 'Components/Chip/Chip/Overflow Behaviour',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
      },
    },
  },
};
