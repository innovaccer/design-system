import * as React from 'react';
import { SelectionCard, Icon, Text } from '@/index';

// CSF format story
export const all = () => {
  const { selectedItemList = [], updateSelection } = SelectionCard.useSingleSelect();

  return (
    <SelectionCard
      id="item1"
      className="pl-5 py-6 pr-6 w-25 d-flex"
      onClick={(e, id) => updateSelection(id)}
      selected={selectedItemList.includes('item1')}
    >
      <Icon size={20} name="adjust" />
      <div className="ml-5">
        <Text weight="strong">Manual drop on SFTP disk</Text>
        <br />
        <Text appearance="subtle">Give access to a separate SFTP disk image</Text>
      </div>
    </SelectionCard>
  );
};

export default {
  title: 'Card/Selection Card/All',
  component: SelectionCard,
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
      },
    },
  },
};
