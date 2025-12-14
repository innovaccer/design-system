import * as React from 'react';
import { MdsGrid, Text } from '@/index';

// CSF format story
export const responsive = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Responsive Columns (Mobile-first)
          </Text>
        </div>
        <Text size="small" className="mb-3">
          Resize your browser to see the layout adapt. On mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
        </Text>
        <MdsGrid
          templateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={{ xs: 'spacing-10', md: 'spacing-20' }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-secondary-lightest p-4 d-flex align-items-center justify-content-center">
              <Text>Item {i + 1}</Text>
            </div>
          ))}
        </MdsGrid>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Responsive Gap Spacing
          </Text>
        </div>
        <Text size="small" className="mb-3">
          Gap spacing adapts: Mobile (spacing-10), Tablet (spacing-20), Desktop (spacing-40)
        </Text>
        <MdsGrid templateColumns="repeat(3, 1fr)" gap={{ xs: 'spacing-10', sm: 'spacing-20', md: 'spacing-40' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-secondary-lightest p-4 d-flex align-items-center justify-content-center">
              <Text>Item {i + 1}</Text>
            </div>
          ))}
        </MdsGrid>
      </div>

      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Complex Responsive Layout
          </Text>
        </div>
        <Text size="small" className="mb-3">
          Different column layouts at different breakpoints
        </Text>
        <MdsGrid
          templateColumns={{
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: '200px 1fr 1fr',
            lg: '250px 1fr 1fr 1fr',
          }}
          gap="spacing-20"
        >
          <div className="bg-secondary-lightest p-4 d-flex align-items-center justify-content-center">
            <Text size="small">Sidebar</Text>
          </div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-secondary-lightest p-4 d-flex align-items-center justify-content-center">
              <Text size="small">Content {i + 1}</Text>
            </div>
          ))}
        </MdsGrid>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Layout/MdsGrid/Responsive',
  component: MdsGrid,
  subcomponents: { 'MdsGrid.GridItem': MdsGrid.GridItem },
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates responsive grid layouts that adapt to different screen sizes.',
      },
      docPage: {
        title: 'MdsGrid Responsive',
      },
    },
  },
};
