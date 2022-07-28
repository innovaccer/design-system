import * as React from 'react';
import { Checkbox, Label, Row, Column, Text } from '@/index';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const VerticalAlignmentOfCheckboxGroup = () => (
  <div>
    <Row>
      <Column>
        <Label>Days</Label>
        {days.map((day, index) => {
          return <Checkbox key={index} label={day} defaultChecked={index < 2} className={index !== 0 ? 'mt-4' : ''} />;
        })}
        <div className="pt-5">
          <Text>Vertical Alignment</Text>
        </div>
      </Column>
    </Row>
  </div>
);

export default {
  title: 'Components/Checkbox/Vertical Alignment Of Checkbox Group',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
