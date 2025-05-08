import React from 'react';
import { Toast } from '@/index';
import { ToastProps } from '@/index.type';
import figma from '@figma/code-connect';
import { Action } from '@/components/atoms/toast';

figma.connect(Toast, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=694-632&m=dev', {
  imports: ["import { Toast } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Appearance', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Alert: 'alert',
    }),
    message: figma.enum('Description', {
      true: 'Description goes here',
      false: undefined,
    }),
    actions: figma.enum('Actions', {
      true: [
        { label: 'Action', onClick: function () {} },
        { label: 'Action', onClick: function () {} },
      ],
      false: undefined,
    }),
  },
  example: (props) => <Toast {...(props as ToastProps)} title="Title goes here" actions={props.actions as Action[]} />,
});
