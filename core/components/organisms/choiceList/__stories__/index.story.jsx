import * as React from 'react';
import ChoiceList from '../ChoiceList';

export const all = () => {
  const label = 'Gender';
  const gender = [
    { label: 'Male', name: 'gender', value: 'Male' },
    { label: 'Female', name: 'gender', value: 'Female' },
    { label: 'Other', name: 'gender', value: 'Other' },
  ];

  return <ChoiceList choices={gender} title={label} onChange={() => {}} />;
};

export default {
  title: 'Components/ChoiceList/All',
  component: ChoiceList,
};
