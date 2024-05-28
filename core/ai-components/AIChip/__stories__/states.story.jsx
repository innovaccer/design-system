import React from 'react';
import { AIChip } from '@/index';

export const States = () => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIChip icon="edit_note" label="Default chip" />
      <AIChip icon="edit_note" label="Disabled chip" disabled={true} />
    </div>
  );
};

export default {
  title: 'Components/AI/AI Chip/States',
  component: AIChip,
  parameters: {
    docs: {
      docPage: {
        title: 'AIChip',
      },
    },
  },
};
