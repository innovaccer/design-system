import React from 'react';
import { Chat } from '@/index';
import figma from '@figma/code-connect';

figma.connect(
  Chat,
  'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=59167-87&t=t5YGKMRhqcoMHmcg-0',
  {
    imports: ["import { Chat } from '@innovaccer/design-system'"],
    props: {
      disabled: figma.enum('State', {
        Disabled: true,
      }),
      showStopButton: figma.enum('State', {
        'Stop Generating': true,
      }),
    },
    example: (props) => (
      <Chat>
        <Chat.ChatInput {...props} placeholder="Placeholder" />
      </Chat>
    ),
  }
);
