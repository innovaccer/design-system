import * as React from 'react';
import { MdsGrid, Text } from '@/index';

// CSF format story
export const columns = () => {
  return (
    <div className="d-flex flex-column mb-7">
      <div className="mb-5">
        <Text appearance="strong" size="large" className="mb-2">
          Equal Width Columns (3 columns)
        </Text>
        <MdsGrid templateColumns="repeat(3, 1fr)" gap="spacing-20">
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Column 1</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">Equal width (1fr)</Text>
            </div>
          </div>
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Column 2</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">Equal width (1fr)</Text>
            </div>
          </div>
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Column 3</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">Equal width (1fr)</Text>
            </div>
          </div>
        </MdsGrid>
      </div>

      <div className="mb-5">
        <Text appearance="strong" size="large" className="mb-2">
          Different Width Columns
        </Text>
        <MdsGrid templateColumns="2fr 1fr 1fr" gap="spacing-20">
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Wider Column</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">Double width (2fr)</Text>
            </div>
          </div>
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Column 2</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">1fr</Text>
            </div>
          </div>
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Column 3</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">1fr</Text>
            </div>
          </div>
        </MdsGrid>
      </div>

      <div className="mb-5">
        <Text appearance="strong" size="large" className="mb-2">
          Fixed Width First Column
        </Text>
        <MdsGrid templateColumns="200px 1fr 1fr" gap="spacing-20">
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Fixed Column</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">Fixed 200px</Text>
            </div>
          </div>
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Column 2</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">Flexible (1fr)</Text>
            </div>
          </div>
          <div className="bg-secondary-lightest d-flex flex-column">
            <div className="p-3 text-center border-bottom">
              <Text>Column 3</Text>
            </div>
            <div className="p-3 bg-secondary-lighter">
              <Text size="small">Flexible (1fr)</Text>
            </div>
          </div>
        </MdsGrid>
      </div>

      <div className="mb-5">
        <Text appearance="strong" size="large" className="mb-2">
          12-Column Grid
        </Text>
        <MdsGrid templateColumns="repeat(12, 1fr)" gap="spacing-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-secondary-lightest p-3 d-flex align-items-center justify-content-center">
              <Text>{i + 1}</Text>
            </div>
          ))}
        </MdsGrid>
      </div>
    </div>
  );
};

export default {
  title: 'Components/MdsGrid/Columns',
  component: MdsGrid,
  subcomponents: { 'MdsGrid.GridItem': MdsGrid.GridItem },
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates various columns options for Mds grid.',
      },
    },
  },
};
