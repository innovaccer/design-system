import React from 'react';
import { AIChip } from '@/index';

export const All = () => {
  return <AIChip icon="edit_note" label="AI chip" />;
};

export default {
  title: 'Components/AI/AI Chip/All',
  component: AIChip,
  parameters: {
    docs: {
      docPage: {
        title: 'AIChip',
      },
    },
  },
};
