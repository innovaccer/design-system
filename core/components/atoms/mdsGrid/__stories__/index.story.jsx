import * as React from 'react';
import { MdsGrid, Text } from '@/index';

export const all = () => {
  return (
    <div className="d-flex flex-column mb-7">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Basic Grid Layout
          </Text>
        </div>
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
      </div>

      <div className="mb-5">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Using GridItem for Precise Control
          </Text>
        </div>
        <MdsGrid templateColumns="repeat(12, 1fr)" gap="spacing-20">
          <MdsGrid.GridItem columnSpan={12} className="bg-secondary-lightest p-4">
            <Text>Full Width (span 12)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={6} className="bg-secondary-lightest p-4">
            <Text>Half Width (span 6)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={6} className="bg-secondary-lightest p-4">
            <Text>Half Width (span 6)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-4">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-4">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-4">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
        </MdsGrid>
      </div>
    </div>
  );
};

const customCode = `() => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Basic Grid Layout
          </Text>
        </div>
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
      </div>

      <div className="mb-5">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Using GridItem for Precise Control
          </Text>
        </div>
        <MdsGrid templateColumns="repeat(12, 1fr)" gap="spacing-20">
          <MdsGrid.GridItem columnSpan={12} className="bg-secondary-lightest p-4">
            <Text>Full Width (span 12)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={6} className="bg-secondary-lightest p-4">
            <Text>Half Width (span 6)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={6} className="bg-secondary-lightest p-4">
            <Text>Half Width (span 6)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-4">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-4">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-4">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
        </MdsGrid>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Layout/MdsGrid/All',
  component: MdsGrid,
  subcomponents: {
    'MdsGrid.GridItem': MdsGrid.GridItem,
  },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
