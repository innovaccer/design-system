import * as React from 'react';
import { Checkbox, Label, Row, Column, Text } from '@/index';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const AlignmentOfCheckboxGroup = () => (
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
      <Column>
        <Label>Days</Label>
        <div className="d-flex">
          {days.map((day, index) => {
            return (
              <Checkbox className={index !== 0 ? 'ml-7' : ''} key={index} label={day} defaultChecked={index < 2} />
            );
          })}
        </div>
        <div className="pt-5">
          <Text>Horizontal Alignment</Text>
        </div>
      </Column>
    </Row>
  </div>
);

export default {
  title: 'Components/Checkbox/Alignment Of Checkbox Group',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
