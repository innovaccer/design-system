import * as React from 'react';
import { Box, Text } from '@/index';

export const background = () => {
  const backgrounds = [
    'transparent',
    'light',
    'secondary-lightest',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];

  return (
    <Box>
      {backgrounds.map((bg, index) => (
        <React.Fragment key={bg}>
          <Box borderRadius="20" background={bg} width="100%">
            <Text>Background: {bg}</Text>
          </Box>
          {/* Add spacer Box between items */}
          {index < backgrounds.length - 1 && <Box></Box>}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default {
  title: 'Components/Box/Background',
  component: Box,
  parameters: {
    docs: {
      docPage: {
        title: 'Box Background',
        description: 'Box can have different background colors to highlight content or set mood.',
      },
    },
  },
};
