import * as React from 'react';
import { MdsGrid, Text } from '@/index';

// CSF format story
export const all = () => {
  return (
    <MdsGrid templateColumns="repeat(3, 1fr)" gap="spacing-20">
      <div className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
        <Text>Item 1</Text>
      </div>
      <div className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
        <Text>Item 2</Text>
      </div>
      <div className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
        <Text>Item 3</Text>
      </div>
      <div className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
        <Text>Item 4</Text>
      </div>
      <div className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
        <Text>Item 5</Text>
      </div>
      <div className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
        <Text>Item 6</Text>
      </div>
    </MdsGrid>
  );
};

export default {
  title: 'Components/MdsGrid/All',
  component: MdsGrid,
  subcomponents: { 'MdsGrid.GridItem': MdsGrid.GridItem },
  parameters: {
    docs: {
      docPage: {
        title: 'MdsGrid',
      },
    },
  },
};
