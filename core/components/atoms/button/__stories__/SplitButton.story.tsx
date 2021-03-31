import * as React from 'react';
import Button from '@/components/atoms/button';
import Dropdown from '@/components/atoms/dropdown';

const options = [
  {
    label: 'Download All',
    value: 'Download All'
  },
  {
    label: 'Download Selected',
    value: 'Download Selected'
  }
];

export const splitButton = () => (
  <div className="d-flex">
    <Button
      appearance="basic"
      size="regular"
      expanded={false}
      disabled={false}
      loading={false}
      className="mr-2"
    >
      Request review
    </Button>
    <div className="mb-10" style={{ width: '150px' }}>
      <Dropdown
        menu={true}
        icon="expand_more"
        options={options}
      />
    </div>
  </div>
);

export default {
  title: 'Components/Button/Split Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Split button.'
      }
    }
  }
};
