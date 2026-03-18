import * as React from 'react';
import { Checkbox, ChoiceList } from '@/index';

export const Vertical = () => {
  const labelVertical = 'Vertical Alignment';
  const alignmentVertical = 'vertical';
  const days = [
    { label: 'Mon', name: 'days', value: 'mon', 'aria-label': 'Monday' },
    { label: 'Tue', name: 'days', value: 'tue', 'aria-label': 'Tuesday' },
    { label: 'Wed', name: 'days', value: 'wed', 'aria-label': 'Wednesday' },
    { label: 'Thu', name: 'days', value: 'thu', 'aria-label': 'Thursday' },
    { label: 'Fri', name: 'days', value: 'fri', 'aria-label': 'Friday' },
    { label: 'Sat', name: 'days', value: 'sat', 'aria-label': 'Saturday' },
    { label: 'Sun', name: 'days', value: 'sun', 'aria-label': 'Sunday' },
  ];

  return (
    <ChoiceList
      choices={days}
      selected={['mon', 'tue']}
      allowMultiple={true}
      title={labelVertical}
      alignment={alignmentVertical}
      onChange={() => {}}
      aria-label="Vertical day selection"
    />
  );
};

export default {
  title: 'Components/Checkbox/Checkbox Group/Vertical',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
