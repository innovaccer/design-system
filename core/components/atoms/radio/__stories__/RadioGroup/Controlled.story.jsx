import * as React from 'react';
import { ChoiceList, Radio } from '@/index';

export const Controlled = () => {
  const label = 'Days';
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
    <>
      <ChoiceList
        selected={['mon', 'wed', 'sat']}
        choices={days}
        title={label}
        alignment={alignmentHorizontal}
        onChange={() => {}}
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
