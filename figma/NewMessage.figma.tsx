import React from 'react';
import { Chat } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Chat, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=59053-13653', {
  imports: ["import { Chat } from '@innovaccer/design-system'"],
  example: () => {
    return (
      <Chat>
        <Chat.NewMessage text="1 New Message" />
      </Chat>
    );
  },
});
