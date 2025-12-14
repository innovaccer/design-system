import * as React from 'react';
import { MdsGrid, Text } from '@/index';

export const Alignment = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Align items to left (start)
          </Text>
        </div>
        <div>
          <MdsGrid
            templateColumns="repeat(3, 1fr)"
            gap="spacing-20"
            justifyItems="start"
            alignItems="start"
            className="border h-100"
          >
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>start</Text>
            </div>
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>start</Text>
            </div>
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>start</Text>
            </div>
          </MdsGrid>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Align items to center
          </Text>
        </div>
        <div>
          <MdsGrid
            templateColumns="repeat(3, 1fr)"
            gap="spacing-20"
            justifyItems="center"
            alignItems="center"
            className="border h-100"
          >
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>center</Text>
            </div>
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>center</Text>
            </div>
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>center</Text>
            </div>
          </MdsGrid>
        </div>
      </div>

      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Align items to right (end)
          </Text>
        </div>
        <div>
          <MdsGrid
            templateColumns="repeat(3, 1fr)"
            gap="spacing-20"
            justifyItems="end"
            alignItems="end"
            className="border h-100"
          >
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>end</Text>
            </div>
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>end</Text>
            </div>
            <div className="w-50 h-50 bg-secondary-lightest p-5 d-flex align-items-center justify-content-center">
              <Text>end</Text>
            </div>
          </MdsGrid>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Layout/MdsGrid/Alignment',
  component: MdsGrid,
  subcomponents: { 'MdsGrid.GridItem': MdsGrid.GridItem },
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates various alignment options for Mds grid.',
      },
      docPage: {
        title: 'MdsGrid Alignment',
      },
    },
  },
};
