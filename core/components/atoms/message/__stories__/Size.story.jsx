import * as React from 'react';
import { Message, LinkButton, Text, Row, Column } from '@/index';

// CSF format story
export const Size = () => {
  const messageProps = {
    title: 'Design System',
    description: 'Design System is a library of reusable components',
    appearance: 'info',
  };

  const sizeVariants = [
    { size: 'regular', label: 'Regular' },
    { size: 'small', label: 'Small' },
  ];

  const getActionsForSize = (messageSize) => {
    const buttonSize = messageSize === 'small' ? 'tiny' : 'regular';
    return (
      <>
        <LinkButton size={buttonSize}>Action 1</LinkButton>
        <LinkButton size={buttonSize} className="ml-5">
          Action 2
        </LinkButton>
      </>
    );
  };

  return (
    <Row className="w-100">
      {sizeVariants.map(({ size, label }) => (
        <Column key={size} size="6" className="pr-6">
          <div className="mb-5">
            <Text weight="strong" size="m">
              Size: {label}
            </Text>
          </div>
          <Message {...messageProps} size={size} actions={getActionsForSize(size)} />
        </Column>
      ))}
    </Row>
  );
};

export default {
  title: 'Components/Message/Size',
  component: Message,
};
