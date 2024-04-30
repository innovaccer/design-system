import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const dropdownOptionsLessThan50 = () => {
  const options = [];
  for (let i = 1; i <= 50; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option${i}`,
    });
  }
  return <Dropdown options={options} withCheckbox={true} withSearch={true} className="w-25" placeholder="Select" />;
};

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
  title: 'Components/Dropdown (Deprecated)/Dropdown Options Less Than 50',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
