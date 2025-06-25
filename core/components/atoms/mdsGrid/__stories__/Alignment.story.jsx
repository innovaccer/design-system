import * as React from 'react';
import { MdsGrid, Text } from '@/index';

export const Alignment = () => {
  return (
    <>
      <Text appearance="strong" size="large" className="mb-2">
        Align items to left (start)
      </Text>
      <div className="mb-5">
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

      <Text appearance="strong" size="large" className="mb-2">
        Align items to center
      </Text>
      <div className="mb-5">
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

      <Text appearance="strong" size="large" className="mb-2">
        Align items to right (end)
      </Text>
      <div className="mb-5">
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
    </>
  );
};

const customCode = `() => {
  const alignmentOptions = ['start', 'center', 'end', 'stretch'];
  
  return (
    <div className="d-flex flex-column">
      {alignmentOptions.map(alignment => (
        <div key={alignment} className="mb-4">
          <Text appearance="strong" size="medium" className="mb-2">
            Alignment: {alignment}
          </Text>
          <MdsGrid
            templateColumns="repeat(3, 1fr)"
            gap="spacing-20"
            justifyItems={alignment}
            alignItems={alignment}
            className="border"
            style={{ height: '150px' }}
          >
            <div className="w-50 h-50 bg-secondary-lightest p-3 d-flex align-items-center justify-content-center">
              <Text>{alignment}</Text>
            </div>
            <div className="w-50 h-50 bg-secondary-lightest p-3 d-flex align-items-center justify-content-center">
              <Text>{alignment}</Text>
            </div>
            <div className="w-50 h-50 bg-secondary-lightest p-3 d-flex align-items-center justify-content-center">
              <Text>{alignment}</Text>
            </div>
          </MdsGrid>
        </div>
      ))}
    </div>
  );
}`;

export default {
  title: 'Components/MdsGrid/Alignment',
  component: MdsGrid,
  subcomponents: { 'MdsGrid.GridItem': MdsGrid.GridItem },
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates various alignment options for Mds grid.',
      },
      docPage: {
        title: 'MdsGrid Alignment',
        customCode,
      },
    },
  },
};
