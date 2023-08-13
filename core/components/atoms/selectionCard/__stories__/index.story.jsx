import * as React from 'react';
import { SelectionCard, Icon, Text } from '@/index';
import { CardItem } from '../CardItem';

// CSF format story
export const all = () => {
  return (
    <SelectionCard>
      <SelectionCard.Item id="item1" className="pl-5 py-6 pr-6 w-25 d-flex">
        <Icon size={20} name="adjust" />
        <div className="ml-5">
          <Text weight="strong">Manual drop on SFTP disk</Text>
          <br />
          <Text appearance="subtle">Give access to a separate SFTP disk image</Text>
        </div>
      </SelectionCard.Item>
    </SelectionCard>
  );
};

export default {
  title: 'Card/Selection Card/All',
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
