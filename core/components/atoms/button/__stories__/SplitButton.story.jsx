import * as React from 'react';
import Button from '@/components/atoms/button';
import Dropdown from '@/components/atoms/dropdown';

export const splitButton = () => {
  const options = [
    {
      label: 'Download All',
      value: 'Download All',
    },
    {
      label: 'Download Selected',
      value: 'Download Selected',
    },
  ];

  return (
    <div className="d-flex">
      <Button className="mr-2" aria-label="Request review">
        Request review
      </Button>
      <div className="mb-10">
        <Dropdown menu={true} icon="expand_more" options={options} width={150} />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Split Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Split button.',
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Request review'\` to describe the action of button 
         `,
      },
    },
  },
};
