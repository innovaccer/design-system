import React from 'react';
import { EmptyState, Button } from '@/index';
import { EmptyStateProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(EmptyState, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=46322-5927', {
  imports: ["import { EmptyState } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Standard: 'standard',
      Compressed: 'compressed',
      Tight: 'tight',
    }),
    description: figma.enum('Description', {
      true: <EmptyState.Description>Description goes here</EmptyState.Description>,
    }),
    primaryAction: figma.enum('Primary Action', {
      true: <Button appearance="primary">Primary action</Button>,
      false: undefined,
    }),
    secondaryAction: figma.enum('Secondary Action', {
      true: <Button className="mr-4">Secondary action</Button>,
      false: undefined,
    }),
    illustration: figma.enum('Illustration', {
      true: <EmptyState.Image src="" />,
    }),
  },
  example: ({ illustration, description, primaryAction, secondaryAction, ...rest }) => (
    <EmptyState {...(rest as EmptyStateProps)}>
      {illustration}
      <EmptyState.Title>Title goes here</EmptyState.Title>
      {description}
      <EmptyState.Actions>
        {secondaryAction}
        {primaryAction}
      </EmptyState.Actions>
    </EmptyState>
  ),
});
