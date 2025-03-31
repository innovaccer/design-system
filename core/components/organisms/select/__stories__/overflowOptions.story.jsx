import * as React from 'react';
import { Select, Text, Tooltip } from '@/index';
import { action } from '@/utils/action';
import './style.css';

// CSF format story
export const overflowBehavior = () => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril Anasthesia', value: 'Lisinopril Anasthesia' },
    { label: 'Simvastatin Anasthesia', value: 'Simvastatin Anasthesia' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption)();
  };

  const SelectItem = ({ item }) => {
    const elementRef = React.useRef(null);
    const [showTooltip, setShowTooltip] = React.useState(false);

    return (
      <Tooltip showOnTruncation={true} tooltip={item.label} elementRef={elementRef} open={showTooltip}>
        <Select.Option
          option={{ label: item.label, value: item.value }}
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Text ref={elementRef} className="ellipsis--noWrap d-block w-100 Select-Option-label">
            {item.label}
          </Text>
        </Select.Option>
      </Tooltip>
    );
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.List>
        {medicineList.map((item, key) => {
          return <SelectItem item={item} key={key} />;
        })}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {

  /*
    .Select-Option-label {
      max-width: var(--spacing-320);
    }
  */
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril Anasthesia', value: 'Lisinopril' },
    { label: 'Simvastatin Anasthesia', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const SelectItem = ({ item }) => {
    const elementRef = React.useRef(null);
    const [showTooltip, setShowTooltip] = React.useState(false);

    return (
      <Tooltip showOnTruncation={true} tooltip={item.label} elementRef={elementRef} open={showTooltip}>
        <Select.Option
          option={{ label: item.label, value: item.value }}
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Text ref={elementRef} className="ellipsis--noWrap d-block w-100 Select-Option-label">
            {item.label}
          </Text>
        </Select.Option>
      </Tooltip>
    );
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.List>
        {medicineList.map((item, key) => {
          return <SelectItem item={item} key={key} />;
        })}
      </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Overflow Behavior',
  component: Select,
  subcomponents: {
    'Select.List': Select.List,
    'Select.Option': Select.Option,
    'Select.SearchInput': Select.SearchInput,
    'Select.EmptyTemplate': Select.EmptyTemplate,
    'Select.Footer': Select.Footer,
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
