import * as React from 'react';
import { Box, Text } from '@/index';

export const layout = () => {
  return (
    <Box>
      <Text weight="strong">Basic Grid Layout</Text>
      <Box display="grid" gap="s" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Box background="light" borderRadius="20" shadow="s">
          <Text>Item 1</Text>
        </Box>
        <Box background="secondary-lightest" borderRadius="20" shadow="s">
          <Text>Item 2</Text>
        </Box>
        <Box background="primary" borderRadius="20" shadow="s">
          <Text color="inverse">Item 3</Text>
        </Box>
      </Box>

      <Box></Box>

      <Text weight="strong">Flexbox Layout</Text>
      <Box display="flex" gap="s">
        <Box background="light" borderRadius="20" shadow="s" flex={1}>
          <Text>Flex Item 1</Text>
        </Box>
        <Box background="secondary-lightest" borderRadius="20" shadow="s" flex={2}>
          <Text>Flex Item 2 (2x width)</Text>
        </Box>
        <Box background="primary" borderRadius="20" shadow="s" flex={1}>
          <Text color="inverse">Flex Item 3</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default {
  title: 'Components/Box/Layout',
  component: Box,
  parameters: {
    docs: {
      docPage: {
        title: 'Box Layout Examples',
        description: 'Box can be used to create different layout patterns using display prop.',
      },
    },
  },
};
