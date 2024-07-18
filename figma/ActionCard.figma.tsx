import React from 'react';
import { ActionCard, Icon, Text } from '@/index';
import figma from '@figma/code-connect';

figma.connect(ActionCard, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=30093-244', {
  imports: ["import { ActionCard, Text, Icon } from '@innovaccer/design-system'"],
  props: {
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: (props) => (
    <ActionCard {...props}>
      <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
        <Icon className="mb-4" name="store" size={24} />
        <Text className="mb-2" weight="strong">
          Title
        </Text>
        <Text appearance="subtle">Description goes here</Text>
      </div>
    </ActionCard>
  ),
});
