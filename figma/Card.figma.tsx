import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@/index';
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
    <Card shadow={props.shadow}>
      <CardHeader>Card Header</CardHeader>
      <CardBody>Card Body</CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  ),
});
