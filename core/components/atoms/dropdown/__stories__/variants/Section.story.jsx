import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const sections = () => {
  const options = [];

  for (let i = 1; i <= 10; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: 'Group',
    });
  }
  const BooleanValue = [true, false];

  return (
    <div className="d-flex">
      {BooleanValue.map((value, index) => {
        return (
          <div key={index} className="d-flex flex-column align-items-center">
            <Text weight="strong">{value ? ' Multi Select' : 'Single Select'}</Text>
            <br />
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center mr-7">
                <Text weight="strong">{'With Sections'}</Text>
                <br />
                <Dropdown options={options} withCheckbox={value} />
              </div>
              <div className="d-flex flex-column align-items-center mr-7">
                <Text weight="strong">{'Without Sections'}</Text> <br />
                <Dropdown options={storyOptions} withCheckbox={value} />
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Sections',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
