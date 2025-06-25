import * as React from 'react';
import { Box, Text } from '@/index';

export const shadow = () => {
  const shadows = ['none', 's', 'm', 'l'];

  return (
    <Box>
      {shadows.map((shadow, index) => (
        <React.Fragment key={shadow}>
          <Box shadow={shadow} borderRadius="20" background="light" width="100%">
            <Text>Shadow: {shadow}</Text>
          </Box>
          {index < shadows.length - 1 && <Box></Box>}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default {
  title: 'Components/Box/Shadow',
  component: Box,
  parameters: {
    docs: {
      docPage: {
        title: 'Box Shadow',
        description: 'Box can have different shadow levels to create a sense of depth.',
      },
    },
  },
};
