import * as React from 'react';
import { ChoiceList, Radio } from '@/index';

export const Controlled = () => {
  const label = 'Days';
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
    <>
      <ChoiceList
        selected={['mon', 'wed', 'sat']}
        choices={days}
        title={label}
        alignment={alignmentHorizontal}
        onChange={() => {}}
        aria-label="Controlled day selection"
      />
    </>
  );
};

export default {
  title: 'Components/Radio/RadioGroup/Controlled',
  component: Radio,
  subcomponents: { ChoiceList },
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
