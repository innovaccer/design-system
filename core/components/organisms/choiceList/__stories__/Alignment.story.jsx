import * as React from 'react';
import ChoiceList from '../ChoiceList';

export const alignment = () => {
  const label = 'Gender';
  const alignmentHorizontal = 'horizontal';
  const gender = [
    { label: 'Male', name: 'gender', value: 'Male' },
    { label: 'Female', name: 'gender', value: 'Female' },
    { label: 'Other', name: 'gender', value: 'Other' },
  ];
  const alignmentVertical = 'vertical';
  const allGender = [
    { label: 'Male', name: 'allGender', value: 'Male' },
    { label: 'Female', name: 'allGender', value: 'Female' },
    { label: 'Other', name: 'allGender', value: 'Other' },
  ];

  return (
    <>
      <ChoiceList choices={gender} title={label} alignment={alignmentHorizontal} onChange={() => {}} />
      <div className="mt-8">
        <ChoiceList choices={allGender} title={label} alignment={alignmentVertical} onChange={() => {}} />
      </div>
    </>
  );
};

export default {
  title: 'Components/ChoiceList/Alignment',
  component: ChoiceList,
};
