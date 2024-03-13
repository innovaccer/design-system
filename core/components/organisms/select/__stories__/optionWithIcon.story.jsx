import * as React from 'react';
import { Select, Icon, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const optionItemWithIcon = () => {
  const options = [
    { icon: 'more_horiz', label: 'Not yet helped', value: 'not_yet_helped' },
    { icon: 'add', label: 'Eligible', value: 'eligible' },
    { icon: 'horizontal_rule', label: 'Not Eligible', value: 'not_eligible' },
    { icon: 'check', label: 'Got help', value: 'got_help' },
    { icon: 'cancel', label: 'Denied', value: 'denied' },
    { icon: 'info', label: 'Pending', value: 'info_pending' },
    { icon: 'priority_high', label: 'Urgent Needed', value: 'urgent_assistance' },
    { icon: 'history', label: 'History', value: 'prev_helped' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.List>
        {options.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className="d-flex align-items-center">
                <Icon className="mr-4" name={item.icon} />
                <Text> {item.label} </Text>
              </div>
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {

  const options = [
    { icon: 'more_horiz', label: 'Not yet helped', value: 'not_yet_helped' },
    { icon: 'add', label: 'Eligible', value: 'eligible' },
    { icon: 'horizontal_rule', label: 'Not Eligible', value: 'not_eligible' },
    { icon: 'check', label: 'Got help', value: 'got_help' },
    { icon: 'cancel', label: 'Denied', value: 'denied' },
    { icon: 'info', label: 'Pending', value: 'info_pending' },
    { icon: 'priority_high', label: 'Urgent Needed', value: 'urgent_assistance' },
    { icon: 'history', label: 'History', value: 'prev_helped' },
  ];
  
  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler} >
        <Select.List>
          {options.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className="d-flex align-items-center">
                <Icon
                className="mr-4"
                name={item.icon}
                />
                <Text> {item.label} </Text>
              </div>
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/OptionItemWithIcon',
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
