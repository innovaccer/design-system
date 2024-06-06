import React from 'react';
import { AIIconButton, Text, Row, Column } from '@/index';

export const IconPosition = () => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Top
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="edit" position="bottom" tooltip="Edit" />
        <Text appearance="subtle" className="mt-6">
          Bottom
        </Text>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/AI/AI Icon Button/Icon Position',
  component: AIIconButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIIconButton',
      },
    },
  },
};
