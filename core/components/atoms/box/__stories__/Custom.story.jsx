import * as React from 'react';
import { Box, Text } from '@/index';

export const custom = () => {
  return (
    <Box>
      <Box background="light" borderRadius="20" shadow="s" as="section">
        <Box>
          <Text>This is a section element with light background</Text>
        </Box>
      </Box>

      <Box>{/* Spacer */}</Box>

      <Box background="secondary-lightest" borderRadius="20" as="aside">
        <Box>
          <Text>This is an aside element with secondary-lightest background</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default {
  title: 'Components/Box/Custom',
  component: Box,
  parameters: {
    docs: {
      docPage: {
        title: 'Custom Box',
        description: 'Box component can be customized with different HTML elements and styles.',
      },
    },
  },
};
