import * as React from 'react';
import { Box, Text } from '@/index';

// CSF format story
export const all = () => {
  return (
    <Box background="light" shadow="s" borderRadius="20">
      <Text>Box is a versatile container component for layout and design</Text>
    </Box>
  );
};

export default {
  title: 'Components/Box/All',
  component: Box,
  parameters: {
    docs: {
      docPage: {
        title: 'Box',
        description: 'A versatile layout container component with various display, styling, and positioning options.',
      },
    },
  },
};
