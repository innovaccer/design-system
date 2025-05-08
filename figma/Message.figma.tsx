import React from 'react';
import { Message, LinkButton } from '@/index';
import { MessageProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Message, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=444-1446&m=dev', {
  imports: ["import { Message, LinkButton } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Appearance', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Alert: 'alert',
    }),
    title: figma.enum('Title', {
      true: 'Title goes here',
      false: undefined,
    }),
    actions: figma.boolean('Actions', {
      true: (
        <>
          <LinkButton>Action 1</LinkButton>
          <LinkButton className="ml-5">Action 2</LinkButton>
        </>
      ),
      false: undefined,
    }),
  },
  example: (props) => <Message {...(props as MessageProps)} description="Message goes here" />,
});
