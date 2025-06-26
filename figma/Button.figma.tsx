import React from 'react';
import { Button } from '@/index';
import { ButtonProps } from '@/index.type';
import figma from '@figma/code-connect';

// Basic Button
figma.connect(Button, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=7-0', {
  imports: ["import { Button } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
      Large: 'large',
    }),
    selected: figma.boolean('Selected'),
    iconAlign: figma.enum('Variant', {
      'Icon Left': 'left',
      'Icon Right': 'right',
    }),
    icon: figma.enum('Variant', {
      'Icon Left': 'refresh',
      'Icon Right': 'refresh',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    loading: figma.enum('State', {
      Loading: true,
    }),
  },
  example: (props) => (
    <Button appearance="basic" {...(props as ButtonProps)}>
      {props.size}
    </Button>
  ),
});

// Primary Button
figma.connect(Button, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=7-98', {
  imports: ["import { Button } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
      Large: 'large',
    }),
    iconAlign: figma.enum('Variant', {
      'Icon Left': 'left',
      'Icon Right': 'right',
    }),
    icon: figma.enum('Variant', {
      'Icon Left': 'refresh',
      'Icon Right': 'refresh',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    loading: figma.enum('State', {
      Loading: true,
    }),
  },
  example: (props) => (
    <Button appearance="primary" {...(props as ButtonProps)}>
      {props.size}
    </Button>
  ),
});

// Alert Button
figma.connect(Button, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=7-142', {
  imports: ["import { Button } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
      Large: 'large',
    }),
    iconAlign: figma.enum('Variant', {
      'Icon Left': 'left',
      'Icon Right': 'right',
    }),
    icon: figma.enum('Variant', {
      'Icon Left': 'refresh',
      'Icon Right': 'refresh',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    loading: figma.enum('State', {
      Loading: true,
    }),
  },
  example: (props) => (
    <Button appearance="alert" {...(props as ButtonProps)}>
      {props.size}
    </Button>
  ),
});

// Transparent Button
figma.connect(Button, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=34-1090', {
  imports: ["import { Button } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
      Large: 'large',
    }),
    selected: figma.boolean('Selected'),
    iconAlign: figma.enum('Variant', {
      'Icon Left': 'left',
      'Icon Right': 'right',
    }),
    icon: figma.enum('Variant', {
      'Icon Left': 'refresh',
      'Icon Right': 'refresh',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    loading: figma.enum('State', {
      Loading: true,
    }),
  },
  example: (props) => (
    <Button appearance="transparent" {...(props as ButtonProps)}>
      {props.size}
    </Button>
  ),
});

// Icon Button
figma.connect(Button, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=34-1089', {
  imports: ["import { Button } from '@innovaccer/design-system'"],
  props: {
    selected: figma.boolean('Selected'),
    largeIcon: figma.enum('Icon Size', {
      Regular: false,
      Large: true,
    }),
    size: figma.enum('Button Size', {
      Regular: 'regular',
      Small: 'tiny',
      Large: 'large',
    }),
    appearance: figma.enum('Transparent', {
      true: 'transparent',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    loading: figma.enum('State', {
      Loading: true,
    }),
  },
  example: (props) => <Button icon="more_horiz" {...(props as ButtonProps)} />,
});

// Expanded Button
figma.connect(Button, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1682-9455', {
  imports: ["import { Button } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
      Large: 'large',
    }),
    selected: figma.boolean('Selected'),
    appearance: figma.enum('Appearance', {
      Basic: 'basic',
      Primary: 'primary',
      Alert: 'alert',
      Transparent: 'transparent',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    loading: figma.enum('State', {
      Loading: true,
    }),
  },
  example: (props) => (
    <Button expanded={true} {...(props as ButtonProps)}>
      {props.size}
    </Button>
  ),
});
