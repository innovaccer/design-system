import React from 'react';
import { Chat } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Chat, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=59053-14056', {
  imports: ["import { Chat } from '@innovaccer/design-system'"],
  props: {
    text: figma.enum('Type', {
      Three: 'Joy, Jeff and Thomas are typing...',
      'More than three': 'Joy, Jeff and 2 others are typing...',
    }),
  },
  example: (props) => {
    return (
      <Chat>
        <Chat.TypingIndicator {...props} />
      </Chat>
    );
  },
});
