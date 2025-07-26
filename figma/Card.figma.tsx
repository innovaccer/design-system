import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardSubdued } from '@/index';
import { CardProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Card, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=39-315', {
  imports: ["import { Card } from '@innovaccer/design-system'"],
  props: {
    shadow: figma.enum('Style', {
      'No shadow': 'none',
      'Shadow 10': 'shadow10',
      'Shadow 20': 'shadow20',
      'Shadow 30': 'shadow30',
    }),
  },
  example: (props) => (
    <Card shadow={props.shadow as CardProps['shadow']}>
      <CardHeader>Card Header</CardHeader>
      <CardBody>Card Body</CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  ),
});

// Subdued Card
figma.connect(Card, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1857-12808', {
  imports: ["import { Card } from '@innovaccer/design-system'"],
  props: {
    cardSubdued: figma.enum('Subdued on', {
      Bottom: <CardSubdued border="bottom">Subdued section.</CardSubdued>,
      Right: <CardSubdued border="right">Subdued section.</CardSubdued>,
      Top: <CardSubdued border="top">Subdued section.</CardSubdued>,
      Left: <CardSubdued border="left">Subdued section.</CardSubdued>,
    }),
  },
  example: (props) => (
    <Card>
      <CardHeader>Card Header</CardHeader>
      <CardBody>Card Body</CardBody>
      {props.cardSubdued}
    </Card>
  ),
});
