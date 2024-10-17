import * as React from 'react';
import { Button, Popover, Select } from '@/index';

// CSF format story
const options = [
  { label: 'Draft', value: 'draft' },
  { label: 'In Progress', value: 'in_progress' },
  { label: 'Sent', value: 'sent' },
  { label: 'Scheduled', value: 'scheduled' },
  { label: 'Partially Failed', value: 'partially_failed' },
  { label: 'Completely Failed', value: 'completely_failed' },
];

export const layering = () => {
  return (
    <div className="mb-9">
      <Popover position="bottom" on="click" trigger={<Button appearance="basic">Open Popover</Button>} open={false}>
        <div className="pb-11 pr-10">
          <Select
            className="p-6"
            width={100}
            popoverWidth={176} /* back to default */
            triggerOptions={{
              placeholder: 'Status',
            }}
          >
            <Select.List>
              {options.map((option, key) => {
                return (
                  <Select.Option key={key} option={{ label: option.label, value: option.value }}>
                    {option.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
        </div>
      </Popover>
    </div>
  );
};

const customCode = `() => {
  const options = [
    { label: 'Draft', value: 'draft' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Sent', value: 'sent' },
    { label: 'Scheduled', value: 'scheduled' },
    { label: 'Partially Failed', value: 'partially_failed' },
    { label: 'Completely Failed', value: 'completely_failed' },
  ];

  return (
    <div className="mb-9">
      <Popover position="bottom" on="click" trigger={<Button appearance="basic">Open Popover</Button>} open={false}>
        <div className="pb-11 pr-10">
          <Select
            className="p-6"
            width={100}
            popoverWidth={176}
            triggerOptions={{
              placeholder: 'Status',
            }}
          >
            <Select.List>
              {options.map((option, key) => {
                return (
                  <Select.Option key={key} option={{ label: option.label, value: option.value }}>
                    {option.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
        </div>
      </Popover>
    </div>
  );
}
`;

export default {
  title: 'Components/Popover/Layering',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
        customCode,
      },
    },
  },
};
