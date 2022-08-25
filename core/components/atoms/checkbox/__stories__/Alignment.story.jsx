import * as React from 'react';
import { Checkbox, Label, Row, Column, Heading } from '@/index';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const AlignmentOfCheckboxGroup = () => (
  <div>
    <Row>
      <Column>
        <Heading size="s">Horizontal Alignment</Heading>
        <Label>Days</Label>
        <div className="d-flex">
          {days.map((day, index) => {
            return (
              <Checkbox className={index !== 0 ? 'ml-7' : ''} key={index} label={day} defaultChecked={index < 2} />
            );
          })}
        </div>
      </Column>
    </Row>
    <Row>
      <Column className="pt-5 mt-8">
        <Heading size="s">Vertical Alignment</Heading>
        <Label>Days</Label>
        {days.map((day, index) => {
          return <Checkbox key={index} label={day} defaultChecked={index < 2} className={index !== 0 ? 'mt-4' : ''} />;
        })}
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
