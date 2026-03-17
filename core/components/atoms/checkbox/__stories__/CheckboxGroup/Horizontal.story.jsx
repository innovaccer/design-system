import * as React from 'react';
import { Checkbox, ChoiceList } from '@/index';

export const Horizontal = () => {
  const labelHorizontal = 'Horizontal Alignment';
  const alignmentHorizontal = 'horizontal';
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
      title={labelHorizontal}
      alignment={alignmentHorizontal}
      onChange={() => {}}
      aria-label="Horizontal day selection"
    />
  );
};

export default {
  title: 'Components/Checkbox/Checkbox Group/Horizontal',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
