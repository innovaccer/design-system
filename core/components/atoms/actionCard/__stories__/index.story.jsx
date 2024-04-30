import * as React from 'react';
import { ActionCard, Icon, Text } from '@/index';

export const all = () => {
  return (
    <ActionCard className="w-25">
      <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
        <Icon name="store" size={24} className="mb-4" />
        <Text weight="strong" className="mb-2">
          Marketplace
        </Text>
        <Text appearance="subtle">Explore and purchase apps and add-ons</Text>
      </div>
    </ActionCard>
  );
};

export default {
  title: 'Components/Interactive Card/Action Card/All',
  component: ActionCard,
  parameters: {
    docs: {
      docPage: {
        propDescription: `Note: All the valid properties of HTML DIV elements are acceptable as a prop`,
        title: 'Action Card',
      },
    },
  },
};
