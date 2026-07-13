import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';
import Checkbox from '@/components/atoms/checkbox';
import { Uncontrolled, Controlled } from '../_common_/types';
import { storyOptions } from '../Options';

// CSF format story
export const customOption = () => {
  const customOptionRenderer = (props) => {
    const { label, icon } = props.optionData;
    return (
      <div className="px-5 py-4 d-flex cursor-pointer justify-content-between">
        <Text>{label}</Text>
        <Icon name={props.selected ? 'done' : icon} />
      </div>
    );
  };

  const customCheckboxRenderer = (props) => {
    const { label } = props.optionData;

    return (
      <div className="px-5 py-4 d-flex cursor-pointer justify-content-between">
        <Checkbox checked={props.selected} onChange={props.onChange} label={label} id={props.id} tabIndex={-1} />
        {props.selected && <Icon name="done" />}
      </div>
    );
  };

  return (
    <div className="d-flex pb-14">
      <div className="mr-10 w-25">
        <Text weight="strong">Without Checkbox</Text> <br />
        <br />
        <Dropdown
          options={storyOptions}
          optionRenderer={customOptionRenderer}
          aria-label="Select option"
          optionsAriaLabel="Options"
        />
      </div>
      <div className="w-25">
        <Text weight="strong">With Checkbox</Text> <br />
        <br />
        <Dropdown
          options={storyOptions}
          optionRenderer={customCheckboxRenderer}
          withCheckbox={true}
          aria-label="Select option"
          optionsAriaLabel="Options"
        />
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
      icon: 'event',
      subInfo: 'subInfo'
    });
  }

  const customOptionRenderer = (props) => {
    const { label, icon } = props.optionData;
    return (
      <div className="px-5 py-4 d-flex cursor-pointer justify-content-between">
        <Text>{label}</Text>
        <Icon name={props.selected ? 'done' : icon} />
      </div>
    );
  };

  const customCheckboxRenderer = (props) => {
    const { label } = props.optionData;
    return (
      <div className="px-5 py-4 d-flex cursor-pointer justify-content-between">
        <Checkbox
          checked={props.selected}
          onChange={props.onChange}
          label={label}
          id={props.id}
          tabIndex={-1}
        />
        {props.selected && <Icon name="done" />}
      </div>
    );
  };

  return (
    <div className='d-flex'>
      <div className='mr-10 w-25'>
        <Text weight="strong">Without Checkbox</Text> <br /><br />
        <Dropdown options={storyOptions} optionRenderer={customOptionRenderer} aria-label="Select option" optionsAriaLabel="Options" />
      </div>
      <div className='w-25'>
        <Text weight="strong">With Checkbox</Text> <br /><br />
        <Dropdown
          options={storyOptions}
          optionRenderer={customCheckboxRenderer}
          withCheckbox={true}
          aria-label="Select option"
          optionsAriaLabel="Options"
        />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Custom Option',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
        description:
          'Pass `checked`, `onChange`, and `id` (from renderer props) to `Checkbox` so selection and the wrapping label work. For single-select custom rows, clicks bubble to the option wrapper; arrow keys and Enter or Space are handled on the wrapper. Do not put `onClick` on the whole row when `withCheckbox` is true (it would call the wrong handler for multi-select).',
      },
    },
  },
};
