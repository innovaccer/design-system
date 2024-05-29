import React from 'react';
import { AIIconButton } from '@/index';

export const All = () => {
  return <AIIconButton icon="import_contacts" tooltip="Import Contacts" />;
};

export default {
  title: 'Components/AI/AI Icon Button/All',
  component: AIIconButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIIconButton',
      },
    },
  },
};
