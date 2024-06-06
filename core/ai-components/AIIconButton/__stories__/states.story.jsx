import React from 'react';
import { AIIconButton, Text, Row, Column } from '@/index';

export const States = () => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" disabled={true} tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Disabled
        </Text>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/AI/AI Icon Button/States',
  component: AIIconButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIIconButton',
      },
    },
  },
};
