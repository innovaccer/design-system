import * as React from 'react';
import { Select, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const optionItemWithInfo = () => {
  const medicineList = [
    { label: 'Smith, John', subInfo: 'Patient', value: 'Smith_John' },
    { label: 'Jones, Emily', subInfo: 'Primary Care Physician', value: 'Jones_Emily' },
    { label: 'Davis, Michael', subInfo: 'Care Manager', value: 'Davis_Michael' },
    { label: 'Taylor, Jessica', subInfo: 'Patient', value: 'Taylor_Jessica' },
    { label: 'Miller, Robert', subInfo: 'Primary Care Physician', value: 'Miller_Robert' },
    { label: 'Clark, Ashley', subInfo: 'Care Manager', value: 'Clark_Ashley' },
    { label: 'Baker, Christopher', subInfo: 'Patient', value: 'Baker_Christopher' },
    { label: 'Ward, Kimberly', subInfo: 'Primary Care Physician', value: 'Ward_Kimberly' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.List>
        {medicineList.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className="d-flex flex-column">
                <Text>{item.label}</Text>
                <Text size="small" appearance="subtle">
                  {item.subInfo}
                </Text>
              </div>
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {
  const medicineList = [
    { label: 'Smith, John', subInfo: 'Patient', value: 'Smith_John' },
    { label: 'Jones, Emily', subInfo: 'Primary Care Physician', value: 'Jones_Emily' },
    { label: 'Davis, Michael', subInfo: 'Care Manager', value: 'Davis_Michael' },
    { label: 'Taylor, Jessica', subInfo: 'Patient', value: 'Taylor_Jessica' },
    { label: 'Miller, Robert', subInfo: 'Primary Care Physician', value: 'Miller_Robert' },
    { label: 'Clark, Ashley', subInfo: 'Care Manager', value: 'Clark_Ashley' },
    { label: 'Baker, Christopher', subInfo: 'Patient', value: 'Baker_Christopher' },
    { label: 'Ward, Kimberly', subInfo: 'Primary Care Physician', value: 'Ward_Kimberly' }
  ]

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler}>
        <Select.List>
          {medicineList.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className='d-flex flex-column'>
                <Text>{item.label}</Text>
                <Text size="small" appearance="subtle">
                {item.subInfo}
                </Text>
              </div>
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );

}`;

export default {
  title: 'Components/Select/OptionItemWithInfo',
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
