import React from 'react';
import { SelectionCard, Icon, Text } from '@/index';
import figma from '@figma/code-connect';

figma.connect(
  SelectionCard,
  'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=30071-131561&m=dev',
  {
    imports: ["import { SelectionCard, Icon, Text } from '@innovaccer/design-system'"],
    props: {
      selected: figma.boolean('Selected'),
      disabled: figma.enum('State', {
        Default: undefined,
        Hover: undefined,
        Active: undefined,
        Focus: undefined,
        Disabled: true,
      }),
    },
    example: (props) => (
      <SelectionCard id="test" {...props}>
        <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
          <Icon className="mb-4" name="events" size={24} />
          <Text className="mb-2" weight="strong">
            Title
          </Text>
          <Text appearance="subtle">Description goes here</Text>
        </div>
      </SelectionCard>
    ),
  }
);
