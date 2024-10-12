import * as React from 'react';
import { HelpText, Label, Select } from '@/index';

// CSF format story
export const all = () => {
  const options = [
    {
      label: 'Alabama (205)',
      value: 'Alabama (205)',
    },
    {
      label: 'Alabama (251)',
      value: 'Alabama (251)',
    },
    {
      label: 'Alabama (256)',
      value: 'Alabama (256)',
    },
    {
      label: 'Alabama (334)',
      value: 'Alabama (334)',
    },
    {
      label: 'Alabama (938)',
      value: 'Alabama (938)',
    },
    {
      label: 'Arizona (520)',
      value: 'Arizona (520)',
    },
    {
      label: 'California (209)',
      value: 'California (209)',
    },
    {
      label: 'California (408)',
      value: 'California (408)',
    },
    {
      label: 'Colorado (719)',
      value: 'Colorado (719)',
    },
    {
      label: 'Connecticut (860)',
      value: 'Connecticut (860)',
    },
  ];

  return (
    <>
      <Label withInput={true}>Area code</Label>
      <div className="w-25">
        <Select
          triggerOptions={{
            placeholder: 'Select an area code',
          }}
        >
          <Select.List>
            {options.map((item, key) => {
              return (
                <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Select.Option>
              );
            })}
          </Select.List>
        </Select>
        <HelpText message={'If the number with this code is not available, we will use the next best match'} />
      </div>
    </>
  );
};

const customCode = `() => {
  const options = [
    {
      label: 'Alabama (205)',
      value: 'Alabama (205)',
    },
    {
      label: 'Alabama (251)',
      value: 'Alabama (251)',
    },
    {
      label: 'Alabama (256)',
      value: 'Alabama (256)',
    },
    {
      label: 'Alabama (334)',
      value: 'Alabama (334)',
    },
    {
      label: 'Alabama (938)',
      value: 'Alabama (938)',
    },
    {
      label: 'Arizona (520)',
      value: 'Arizona (520)',
    },
    {
      label: 'California (209)',
      value: 'California (209)',
    },
    {
      label: 'California (408)',
      value: 'California (408)',
    },
    {
      label: 'Colorado (719)',
      value: 'Colorado (719)',
    },
    {
      label: 'Connecticut (860)',
      value: 'Connecticut (860)',
    },
  ];

  return (
    <>
      <Label withInput={true}>Area code</Label>
      <div className="w-25">
        <Select
          triggerOptions={{
            placeholder: 'Select an area code',
          }}
        >
          <Select.List>
            {options.map((item, key) => {
              return (
                <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Select.Option>
              );
            })}
          </Select.List>
        </Select>
        <HelpText message={'If the number with this code is not available, we will use the next best match'} />
      </div>
    </>
  );
}`;

export default {
  title: 'Components/HelpText/All',
  component: HelpText,
  parameters: {
    docs: {
      docPage: {
        title: 'HelpText',
        customCode,
      },
    },
  },
};
