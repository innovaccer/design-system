import * as React from 'react';
import { MdsGrid, Text } from '@/index';

// CSF format story
export const gridItem = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Grid with Various Column Spans
          </Text>
        </div>
        <MdsGrid templateColumns="repeat(12, 1fr)" gap="spacing-20">
          <MdsGrid.GridItem columnSpan={12} className="bg-secondary-lightest p-5">
            <Text>Full Width (span 12)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={6} className="bg-secondary-lightest p-5">
            <Text>Half Width (span 6)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={6} className="bg-secondary-lightest p-5">
            <Text>Half Width (span 6)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} className="bg-secondary-lightest p-5">
            <Text>1/4 Width (span 3)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} className="bg-secondary-lightest p-5">
            <Text>1/4 Width (span 3)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} className="bg-secondary-lightest p-5">
            <Text>1/4 Width (span 3)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} className="bg-secondary-lightest p-5">
            <Text>1/4 Width (span 3)</Text>
          </MdsGrid.GridItem>
        </MdsGrid>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Grid with Mixed Column Spans and Alignments
          </Text>
        </div>
        <MdsGrid
          templateColumns="repeat(12, 1fr)"
          templateRows="auto auto auto"
          gap="spacing-20"
          className="border h-100"
        >
          <MdsGrid.GridItem columnSpan={8} rowSpan={2} className="bg-secondary-lightest p-5">
            <Text>Main Content Area (span 8x2)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>Sidebar Top (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} alignSelf="end" className="bg-secondary-lightest p-5">
            <Text>Sidebar Bottom (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>Left Footer (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>Middle Footer (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>Right Footer (span 4)</Text>
          </MdsGrid.GridItem>
        </MdsGrid>
      </div>

      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Dashboard Layout
          </Text>
        </div>
        <MdsGrid templateColumns="repeat(12, 1fr)" templateRows="auto auto auto auto" gap="spacing-20">
          <MdsGrid.GridItem columnSpan={12} className="bg-secondary-lightest p-5">
            <Text>Header Area</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} rowSpan={2} className="bg-secondary-lightest p-5">
            <Text>Left Sidebar</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnStart={4} columnSpan={9} className="bg-secondary-lightest p-5">
            <Text>Top Content Area</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnStart={10} columnSpan={3} rowSpan={2} className="bg-secondary-lightest p-5">
            <Text>Right Sidebar</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnStart={4} columnSpan={6} className="bg-secondary-lightest p-5">
            <Text>Main Content Area</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={12} className="bg-secondary-lightest p-5">
            <Text>Footer Area</Text>
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
            Grid with Various Column Spans
          </Text>
        </div>
        <MdsGrid templateColumns="repeat(12, 1fr)" gap="spacing-20">
          <MdsGrid.GridItem columnSpan={12} className="bg-secondary-lightest p-5">
            <Text>Full Width (span 12)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={6} className="bg-secondary-lightest p-5">
            <Text>Half Width (span 6)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={6} className="bg-secondary-lightest p-5">
            <Text>Half Width (span 6)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>1/3 Width (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} className="bg-secondary-lightest p-5">
            <Text>1/4 Width (span 3)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} className="bg-secondary-lightest p-5">
            <Text>1/4 Width (span 3)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} className="bg-secondary-lightest p-5">
            <Text>1/4 Width (span 3)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} className="bg-secondary-lightest p-5">
            <Text>1/4 Width (span 3)</Text>
          </MdsGrid.GridItem>
        </MdsGrid>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Grid with Mixed Column Spans and Alignments
          </Text>
        </div>
        <MdsGrid
          templateColumns="repeat(12, 1fr)"
          templateRows="auto auto auto"
          gap="spacing-20"
          className="border h-100"
        >
          <MdsGrid.GridItem columnSpan={8} rowSpan={2} className="bg-secondary-lightest p-5">
            <Text>Main Content Area (span 8x2)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>Sidebar Top (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} alignSelf="end" className="bg-secondary-lightest p-5">
            <Text>Sidebar Bottom (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>Left Footer (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>Middle Footer (span 4)</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={4} className="bg-secondary-lightest p-5">
            <Text>Right Footer (span 4)</Text>
          </MdsGrid.GridItem>
        </MdsGrid>
      </div>

      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Dashboard Layout
          </Text>
        </div>
        <MdsGrid templateColumns="repeat(12, 1fr)" templateRows="auto auto auto auto" gap="spacing-20">
          <MdsGrid.GridItem columnSpan={12} className="bg-secondary-lightest p-5">
            <Text>Header Area</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={3} rowSpan={2} className="bg-secondary-lightest p-5">
            <Text>Left Sidebar</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnStart={4} columnSpan={9} className="bg-secondary-lightest p-5">
            <Text>Top Content Area</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnStart={10} columnSpan={3} rowSpan={2} className="bg-secondary-lightest p-5">
            <Text>Right Sidebar</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnStart={4} columnSpan={6} className="bg-secondary-lightest p-5">
            <Text>Main Content Area</Text>
          </MdsGrid.GridItem>
          <MdsGrid.GridItem columnSpan={12} className="bg-secondary-lightest p-5">
            <Text>Footer Area</Text>
          </MdsGrid.GridItem>
        </MdsGrid>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Layout/MdsGrid/GridItem',
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
