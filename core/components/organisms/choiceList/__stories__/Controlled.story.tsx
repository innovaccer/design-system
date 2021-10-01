import * as React from 'react';
import ChoiceList from '../ChoiceList';

export const Controlled = () => {
  const label = 'Gender';
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
        allowMultiple={true}
        title={label}
        alignment={alignmentHorizontal}
        onChange={() => {}}
      />
    </>
  );
};

export default {
  title: 'Components/ChoiceList/Controlled',
  component: ChoiceList,
};
