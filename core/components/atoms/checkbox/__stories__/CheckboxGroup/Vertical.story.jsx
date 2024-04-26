import * as React from 'react';
import { Checkbox, ChoiceList } from '@/index';

export const Vertical = () => {
  const labelVertical = 'Vertical Alignment';
  const alignmentVertical = 'vertical';
  const days = [
    { label: 'Mon', name: 'days', value: 'mon' },
    { label: 'Tue', name: 'days', value: 'tue' },
    { label: 'Wed', name: 'days', value: 'wed' },
    { label: 'Thu', name: 'days', value: 'thu' },
    { label: 'Fri', name: 'days', value: 'fri' },
    { label: 'Sat', name: 'days', value: 'sat' },
    { label: 'Sun', name: 'days', value: 'sun' },
  ];

  return (
    <ChoiceList
      choices={days}
      selected={['mon', 'tue']}
      allowMultiple={true}
      title={labelVertical}
      alignment={alignmentVertical}
      onChange={() => {}}
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
