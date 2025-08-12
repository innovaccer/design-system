import * as React from 'react';
import { MdsGrid, Text } from '@/index';

// CSF format story
export const gap = () => {
  const spacingOptions = [
    'spacing-10',
    'spacing-20',
    'spacing-30',
    'spacing-40',
    'spacing-60',
    'spacing-80',
    'spacing-120',
    'spacing-160',
  ];

  return (
    <div className="d-flex flex-column mb-7">
      {spacingOptions.map((spacing) => (
        <div key={spacing} className="mb-5">
          <Text appearance="strong" size="large" className="mb-2">
            Gap: {spacing}
          </Text>
          <MdsGrid templateColumns="repeat(3, 1fr)" gap={spacing}>
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
        </div>
      ))}
    </div>
  );
};

const customCode = `() => {
  // These are the available gap options for MdsGrid
  const spacingOptions = [
    'spacing-10',   // 4px
    'spacing-20',   // 8px
    'spacing-40',   // 16px
    'spacing-80',   // 32px
  ];

  return (
    <div className="d-flex flex-column">
      {spacingOptions.map((spacing) => (
        <div key={spacing} className="mb-4">
          <Text appearance="strong" size="medium" className="mb-2">
            Gap: {spacing}
          </Text>
          <MdsGrid templateColumns="repeat(3, 1fr)" gap={spacing}>
            <div className="bg-secondary-lightest p-4 d-flex align-items-center justify-content-center">
              <Text>Item 1</Text>
            </div>
            <div className="bg-secondary-lightest p-4 d-flex align-items-center justify-content-center">
              <Text>Item 2</Text>
            </div>
            <div className="bg-secondary-lightest p-4 d-flex align-items-center justify-content-center">
              <Text>Item 3</Text>
            </div>
          </MdsGrid>
        </div>
      ))}
    </div>
  );
}`;

export default {
  title: 'Components/MdsGrid/Gap',
  component: MdsGrid,
  subcomponents: { 'MdsGrid.GridItem': MdsGrid.GridItem },
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates various gap options for Mds grid.',
      },
      docPage: {
        title: 'MdsGrid Gap',
        customCode,
      },
    },
  },
};
