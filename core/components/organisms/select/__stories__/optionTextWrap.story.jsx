import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

const longOptionList = [
  { label: 'Aspirin', value: 'Aspirin' },
  { label: 'Paracetamol with extended release formula for chronic pain management', value: 'Paracetamol' },
  {
    label: 'Lisinopril Anasthesia combined therapy for hypertension and cardiac rehabilitation program',
    value: 'Lisinopril',
  },
  { label: 'Simvastatin', value: 'Simvastatin' },
  {
    label: 'Amoxicillin trihydrate dispersible tablets for pediatric bacterial infections and prophylaxis',
    value: 'Amoxicillin',
  },
  { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
];

const onSelectHandler = (selectedOption) => {
  action('selectedOption', selectedOption)();
};

// Full wrap: text wraps completely without truncation
export const fullWrap = () => {
  return (
    <Select onSelect={onSelectHandler} optionTextWrap triggerOptions={{ 'aria-label': 'Medication selector' }}>
      <Select.List aria-label="Medication options list">
        {longOptionList.map((item, key) => (
          <Select.Option key={key} option={item} aria-label={`${item.label} option`}>
            {item.label}
          </Select.Option>
        ))}
      </Select.List>
    </Select>
  );
};

// Line clamp: text wraps up to 2 lines, then truncates with ellipsis
export const lineClamp = () => {
  return (
    <Select onSelect={onSelectHandler} optionTextWrap={2} triggerOptions={{ 'aria-label': 'Medication selector' }}>
      <Select.List aria-label="Medication options list">
        {longOptionList.map((item, key) => (
          <Select.Option key={key} option={item} aria-label={`${item.label} option`}>
            {item.label}
          </Select.Option>
        ))}
      </Select.List>
    </Select>
  );
};

// Per-option override: Select-level full wrap with a specific option clamped to 1 line
export const perOptionOverride = () => {
  return (
    <Select onSelect={onSelectHandler} optionTextWrap triggerOptions={{ 'aria-label': 'Medication selector' }}>
      <Select.List aria-label="Medication options list">
        {longOptionList.map((item, key) => (
          <Select.Option
            key={key}
            option={item}
            aria-label={`${item.label} option`}
            optionTextWrap={key === 2 ? 1 : undefined}
          >
            {item.label}
          </Select.Option>
        ))}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {
  const longOptionList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol with extended release formula for chronic pain management', value: 'Paracetamol' },
    {
      label: 'Lisinopril Anasthesia combined therapy for hypertension and cardiac rehabilitation program',
      value: 'Lisinopril',
    },
    { label: 'Simvastatin', value: 'Simvastatin' },
    {
      label: 'Amoxicillin trihydrate dispersible tablets for pediatric bacterial infections and prophylaxis',
      value: 'Amoxicillin',
    },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler} optionTextWrap={2} triggerOptions={{ 'aria-label': 'Medication selector' }}>
      <Select.List aria-label="Medication options list">
        {longOptionList.map((item, key) => (
          <Select.Option key={key} option={item} aria-label={\`\${item.label} option\`}>
            {item.label}
          </Select.Option>
        ))}
      </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Option Text Wrap',
  component: Select,
  subcomponents: {
    'Select.List': Select.List,
    'Select.Option': Select.Option,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Select',
        customCode,
      },
    },
  },
};
