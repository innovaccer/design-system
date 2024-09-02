import React from 'react';
import { KeyValuePair } from '@/index';
import figma from '@figma/code-connect';

figma.connect(KeyValuePair, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=48595-1880', {
  imports: ["import { KeyValuePair } from '@innovaccer/design-system'"],
  props: {
    children: figma.enum('Arrangement', {
      'Top-Bottom': (
        <KeyValuePair>
          <KeyValuePair.Key label="Key" />
          <KeyValuePair.Value value="Value" />
        </KeyValuePair>
      ),
      'Left-Right': (
        <KeyValuePair className="d-flex">
          <KeyValuePair.Key label="Key" />
          <KeyValuePair.Value value="Value" />
        </KeyValuePair>
      ),
    }),
  },
  example: (props) => <KeyValuePair {...props} />,
});
