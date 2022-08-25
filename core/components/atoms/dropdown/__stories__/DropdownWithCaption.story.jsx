import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';
import Label from '../../label';
import Caption from '../../caption';

// CSF format story
export const dropdownWithCaption = () => {
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
      <Dropdown options={options} withSearch={true} className="w-25" placeholder="Select an area code" />
      <Caption withInput={true}>If the number with this code is not available, we will use the next best match</Caption>
    </>
  );
};

export default {
  title: 'Components/Dropdown/Dropdown With Caption',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
