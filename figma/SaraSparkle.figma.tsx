import React from 'react';
import { SaraSparkle } from '@/index';
import { SaraSparkleProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(SaraSparkle, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=48860-181690', {
  imports: ["import { SaraSparkle } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      '16': 16,
      '24': 24,
      '32': 32,
      '48': 48,
      '64': 64,
      Custom: 48,
    }),
    state: figma.enum('State', {
      Default: 'default',
      Listening: 'listening',
      'Short-Processing': 'short-processing',
      'Long-Processing': 'long-processing',
    }),
  },
  example: (props) => <SaraSparkle {...(props as SaraSparkleProps)} />,
});
