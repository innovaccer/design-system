import * as React from 'react';
import { Checkbox, ChoiceList } from '@/index';

export const Horizontal = () => {
  const labelHorizontal = 'Horizontal Alignment';
  const alignmentHorizontal = 'horizontal';
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
      title={labelHorizontal}
      alignment={alignmentHorizontal}
      onChange={() => {}}
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
