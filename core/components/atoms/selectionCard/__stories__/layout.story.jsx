import * as React from 'react';
import { SelectionCard, Icon, Text } from '@/index';
import { CardItem } from '../CardItem';

// CSF format story
export const layout = () => {
  return (
    <div>
      <Text weight="strong">Left Content Alignment:</Text>
      <SelectionCard className="mb-8 mt-6">
        <SelectionCard.Item id="item1" className="pl-5 py-6 pr-6 w-25 d-flex">
          <Icon size={24} name="adjust" />
          <div className="ml-5">
            <Text weight="strong">Manual drop on SFTP disk</Text>
            <br />
            <Text appearance="subtle">Give access to a separate SFTP disk image</Text>
          </div>
        </SelectionCard.Item>
      </SelectionCard>

      <Text weight="strong">Center Content Alignment:</Text>
      <SelectionCard className="mt-6">
        <SelectionCard.Item id="item1" className="p-6 w-25 d-flex flex-column align-items-center text-align-center">
          <Icon size={24} name="adjust" className="mb-4" />
          <Text weight="strong" className="mb-2">
            Manual drop on SFTP disk
          </Text>
          <Text appearance="subtle">Give access to a separate SFTP disk image</Text>
        </SelectionCard.Item>
      </SelectionCard>
    </div>
  );
};

export default {
  title: 'Card/Selection Card/Layout',
  component: SelectionCard,
  subcomponents: { CardItem },
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
      },
    },
  },
};
