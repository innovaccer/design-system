import * as React from 'react';
import ChoiceList from '../ChoiceList';

export const allowMultiple = () => {
  const label = 'Days';
  const alignment = 'horizontal';
  const days = [
    { label: 'Mon', name: 'days', value: 'mon' },
    { label: 'Tue', name: 'days', value: 'tue' },
    { label: 'Wed', name: 'days', value: 'wed' },
    { label: 'Thu', name: 'days', value: 'thu' },
    { label: 'Fri', name: 'days', value: 'fri' },
    { label: 'Sat', name: 'days', value: 'sat' },
    { label: 'Sun', name: 'days', value: 'sun' },
  ];

  return <ChoiceList choices={days} title={label} alignment={alignment} allowMultiple={true} onChange={() => {}} />;
};

export default {
  title: 'Components/ChoiceList/Allow Multiple',
  component: ChoiceList,
};
