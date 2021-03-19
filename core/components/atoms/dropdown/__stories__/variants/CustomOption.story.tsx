import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';
import Checkbox from '@/components/atoms/checkbox';
import { Uncontrolled, Controlled } from '../_common_/types';
import { storyOptions } from '../Options';

// CSF format story
export const cutsomOption = () => {
  const optionStyle = {
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 6,
    paddingBottom: 6,
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'space-between',
  };

  const customOptionRenderer = (props: any) => {
    const { label, icon } = props.optionData;
    return (
      <div style={optionStyle}>
        <Text>{label}</Text>
        <Icon name={props.selected ? 'done' : icon} />
      </div>
    );
  };

  const customCheckboxRenderer = (props: any) => {
    const { label } = props.optionData;

    return (
      <div style={optionStyle}>
        <Checkbox checked={props.selected} onChange={props.onChange} label={label} />
        {props.selected && <Icon name="done" />}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      <div style={{ marginRight: '20%', width: '200px' }}>
        <Text weight="strong">Without Checkbox</Text> <br /><br />
        <Dropdown options={storyOptions} optionRenderer={customOptionRenderer} />
      </div>
      <div style={{ marginRight: '20%', width: '200px' }}>
        <Text weight="strong">With Checkbox</Text> <br /><br />
        <Dropdown options={storyOptions} optionRenderer={customCheckboxRenderer} withCheckbox={true} />
      </div>
    </div>
  );
};

const customCode = `() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      icon: 'events',
      subInfo: 'subInfo'
    });
  }
  const optionStyle = {
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 6,
    paddingBottom: 6,
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'space-between',
  };

  const customOptionRenderer = (props) => {
    const { label, icon } = props.optionData;
    return (
      <div style={optionStyle} onClick={props.onClick}>
        <Text>{label}</Text>
        <Icon name={props.selected ? 'done' : icon} />
      </div>
    );
  };

  const customCheckboxRenderer = (props) => {
    const { label } = props.optionData;
    return (
      <div style={optionStyle} onClick={props.onClick}>
        <Checkbox checked={props.selected} onChange={props.onChange} label={label} />
        {props.selected && <Icon name="done" />}
      </div>
    );
  };

  return (
    <div className='d-flex'>
      <div className='mr-10 w-25'>
        <Text weight="strong">Without Checkbox</Text> <br /><br />
        <Dropdown options={storyOptions} optionRenderer={customOptionRenderer} />
      </div>
      <div className='mr-10 w-25'>
        <Text weight="strong">With Checkbox</Text> <br /><br />
        <Dropdown options={storyOptions} optionRenderer={customCheckboxRenderer} withCheckbox={true} />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        },
        description: 'In case of custom option with checkbox, developer needs to pass checked and onChange props to checkbox component like in the example below for the indeterminate state and other functionalities to work. ',
      }
    }
  }
};
