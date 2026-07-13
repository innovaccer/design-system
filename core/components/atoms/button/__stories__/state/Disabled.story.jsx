import * as React from 'react';
import { Button, Flex } from '@/index';

export const Disabled = () => {
  const tooltipText = 'Please fill all the required fields to submit this task';
  const appearances = ['primary', 'basic', 'alert'];

  return (
    <>
      {appearances.map((appearance) => (
        <Flex key={appearance} gap="spacing-120" className="m-8">
          <Button disabled tooltip={tooltipText} appearance={appearance} aria-label={`${appearance} Filled`}>
            {appearance.charAt(0).toUpperCase() + appearance.slice(1)} Filled
          </Button>
          <Button
            disabled
            tooltip={tooltipText}
            appearance={appearance}
            styleType="outlined"
            aria-label={`${appearance} Outlined`}
          >
            {appearance.charAt(0).toUpperCase() + appearance.slice(1)} Outlined
          </Button>
        </Flex>
      ))}
      <Flex gap="spacing-120" className="m-8">
        <Button disabled tooltip={tooltipText} appearance="transparent" aria-label="Transparent">
          Transparent
        </Button>
      </Flex>
    </>
  );
};

export default {
  title: 'Components/Button/Button/State/Disabled',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
      },
    },
  },
};
