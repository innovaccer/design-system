import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const search = () => {
  return (
    <div className="d-flex" style={{ minHeight: '300px' }}>
      <div className="mr-9">
        <Text weight="strong">{'Search'}</Text><br /><br />
        <Dropdown withSearch={true} options={storyOptions} width={128} />
      </div>
      <div className="mr-9">
        <Text weight="strong">{'Loading'}</Text><br /><br />
        <Dropdown withSearch={true} loading={true} width={128} />
      </div>
      <div>
        <Text weight="strong">{'No Result'}</Text><br /><br />
        <Dropdown withSearch={true} noResultMessage={'No result found'} width={128} />
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
