import React from 'react';
import { AIIconButton, Text, Row, Column } from '@/index';

export const IconSize = () => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" />
        <Text appearance="subtle" className="mt-6">
          Regular
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" size="large" />
        <Text appearance="subtle" className="mt-6">
          Large
        </Text>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/AI/AI Icon Button/Icon Size',
  component: AIIconButton,
  parameters: {
    docs: {
      docPage: {
        a11yPropsTable: [
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-disabled',
          'aria-expanded',
          'aria-pressed',
          'aria-haspopup',
          'aria-controls',
          'aria-hidden',
          'aria-busy',
          'role',
          'tabIndex',
          'id',
          'title',
        ],
        title: 'AIIconButton',
      },
    },
  },
};
