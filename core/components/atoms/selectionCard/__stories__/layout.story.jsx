import * as React from 'react';
import { SelectionCard, Icon, Text } from '@/index';

// CSF format story
export const layout = () => {
  return (
    <div>
      <Text weight="strong">Left Content Alignment:</Text>
      <SelectionCard name="item1" className="p-6 w-25 d-flex mb-8 mt-6" selected={true}>
        <Icon size={24} name="adjust" />
        <div className="ml-5">
          <Text weight="strong">Manual drop on SFTP disk</Text>
          <br />
          <Text className="pt-2" appearance="subtle">
            Give access to a separate SFTP disk image
          </Text>
        </div>
      </SelectionCard>

      <Text weight="strong">Center Content Alignment:</Text>
      <SelectionCard
        name="item2"
        className="p-6 w-25 mt-6 d-flex flex-column align-items-center text-align-center"
        selected={true}
      >
        <Icon size={24} name="adjust" className="mb-4" />
        <Text weight="strong" className="mb-2">
          Manual drop on SFTP disk
        </Text>
        <Text appearance="subtle">Give access to a separate SFTP disk image</Text>
      </SelectionCard>
    </div>
  );
};

export default {
  title: 'Components/Interactive Card/Selection Card/Layout',
  component: SelectionCard,
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
        propDescription: `Note: All the valid properties of HTML DIV elements are acceptable as a prop`,
      },
    },
  },
};
