import * as React from 'react';
import { MdsGrid, Text } from '@/index';

// CSF format story
export const gap = () => {
  const spacingOptions = ['spacing-10', 'spacing-20', 'spacing-30', 'spacing-40', 'spacing-60'];

  const spacingValueMap = {
    'spacing-10': '4px',
    'spacing-20': '8px',
    'spacing-30': '12px',
    'spacing-40': '16px',
    'spacing-60': '24px',
  };

  return (
    <div className="d-flex flex-column">
      {spacingOptions.map((spacing, index) => (
        <div key={spacing} className={index < spacingOptions.length - 1 ? 'mb-8' : ''}>
          <div className="mb-5">
            <Text appearance="strong" size="large">
              Gap: {spacing} ({spacingValueMap[spacing]})
            </Text>
          </div>
          <MdsGrid templateColumns="repeat(3, 1fr)" gap={spacing}>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 1</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 2</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 3</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 4</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 5</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 6</Text>
            </MdsGrid.GridItem>
          </MdsGrid>
        </div>
      ))}
    </div>
  );
};

const customCode = `() => {
  const spacingOptions = [
    'spacing-10',
    'spacing-20',
    'spacing-30',
    'spacing-40',
    'spacing-60',
  ];

  const spacingValueMap = {
    'spacing-10': '4px',
    'spacing-20': '8px',
    'spacing-30': '12px',
    'spacing-40': '16px',
    'spacing-60': '24px',
  };

  return (
    <div className="d-flex flex-column">
      {spacingOptions.map((spacing, index) => (
        <div key={spacing} className={index < spacingOptions.length - 1 ? 'mb-8' : ''}>
          <div className="mb-5">
            <Text appearance="strong" size="large">
              Gap: {spacing} ({spacingValueMap[spacing]})
            </Text>
          </div>
          <MdsGrid templateColumns="repeat(3, 1fr)" gap={spacing}>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 1</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 2</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 3</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 4</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 5</Text>
            </MdsGrid.GridItem>
            <MdsGrid.GridItem className="bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>Item 6</Text>
            </MdsGrid.GridItem>
          </MdsGrid>
        </div>
      ))}
    </div>
  );
}`;

export default {
  title: 'Components/Layout/MdsGrid/Gap',
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
