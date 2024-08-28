import React from 'react';
import { VerificationCodeInput } from '@/index';
import figma from '@figma/code-connect';

figma.connect(
  VerificationCodeInput,
  'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1229-2831',
  {
    imports: ["import { VerificationCodeInput } from '@innovaccer/design-system'"],
    props: {
      fields: figma.enum('No. of digits', {
        '4': 4,
        '6': 6,
      }),
    },
    example: (props) => <VerificationCodeInput {...props} />,
  }
);
