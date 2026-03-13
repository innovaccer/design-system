import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const search = () => {
  return (
    <div className="d-flex">
      <div className="mr-9 w-25">
        <Text weight="strong">{'Search'}</Text>
        <br />
        <br />
        <Dropdown withSearch={true} options={storyOptions} aria-label="Select option" optionsAriaLabel="Options" />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'Loading'}</Text>
        <br />
        <br />
        <Dropdown withSearch={true} loading={true} aria-label="Select option" optionsAriaLabel="Options" />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'No Result'}</Text>
        <br />
        <br />
        <Dropdown
          withSearch={true}
          noResultMessage={'No result found'}
          aria-label="Select option"
          optionsAriaLabel="Options"
        />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Search',
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
