import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

const options: any[] = [];
for (let i = 1; i <= 50; i++) {
  options.push({
    label: `Option ${i}`,
    value: `Option${i}`,
  });
}

// CSF format story
export const dropdownOptionsLessThan50 = () => (
  <Dropdown options={options} withCheckbox={true} withSearch={true} className="w-25" placeholder="Select" />
);

const customCode = `() => {
  const options = [];
  for (let i=1; i <= 50; i++) {
    options.push({
      label: \`Option \${i}\`,
      value: \`Option\${i}\`
    })
  }

  return (
    <Dropdown
      options={options}
      withCheckbox={true}
      withSearch={true}
      className="w-25"
      placeholder="Select"
  />
  );
}`;

export default {
  title: 'Components/Dropdown/Dropdown Options Less Than 50',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
