import * as React from 'react';

import Row from '@/components/atoms/row';
import Column from '@/components/atoms/column';
import { optionsKnob } from '@storybook/addon-knobs';

export const all = () => {
  const size = optionsKnob(
    'size',
    {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    undefined,
    {
      display: 'inline-radio'
    }
  );
  const sizeXS = optionsKnob(
    'sizeXS',
    {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    undefined,
    {
      display: 'inline-radio'
    }
  );
  const sizeS = optionsKnob(
    'sizeS',
    {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    undefined,
    {
      display: 'inline-radio'
    }
  );
  const sizeM = optionsKnob(
    'sizeM',
    {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    undefined,
    {
      display: 'inline-radio'
    }
  );
  const sizeL = optionsKnob(
    'sizeL',
    {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    undefined,
    {
      display: 'inline-radio'
    }
  );
  const sizeXL = optionsKnob(
    'sizeXL',
    {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    undefined,
    {
      display: 'inline-radio'
    }
  );

  const columnOptions = {
    size,
    sizeXL,
    sizeL,
    sizeM,
    sizeS,
    sizeXS
  };
  return (
    <Row>
      <Column {...columnOptions}>1</Column>
      <Column {...columnOptions}>2</Column>
      <Column {...columnOptions}>3</Column>
      <Column {...columnOptions}>4</Column>
      <Column {...columnOptions}>5</Column>
      <Column {...columnOptions}>6</Column>
      <Column {...columnOptions}>7</Column>
      <Column {...columnOptions}>8</Column>
      <Column {...columnOptions}>9</Column>
      <Column {...columnOptions}>10</Column>
      <Column {...columnOptions}>11</Column>
      <Column {...columnOptions}>12</Column>
    </Row>
  );
};

export default {
  title: 'Others/Layout/All',
  component: Column,
  subcomponents: { Row }
};
