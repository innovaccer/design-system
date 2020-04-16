import * as React from 'react';

import Row from '@/components/atoms/row';
import Column from '@/components/atoms/column';
import { optionsKnob } from '@storybook/addon-knobs';

// CSF format story
export const RowGroup = () => {
  const group = optionsKnob('group', { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' }, undefined, {
    display: 'inline-radio'
  });
  const groupXS = optionsKnob('groupXS', { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' }, undefined, {
    display: 'inline-radio'
  });
  const groupS = optionsKnob('groupS', { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' }, undefined, {
    display: 'inline-radio'
  });
  const groupM = optionsKnob('groupM', { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' }, undefined, {
    display: 'inline-radio'
  });
  const groupL = optionsKnob('groupL', { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' }, undefined, {
    display: 'inline-radio'
  });
  const groupXL = optionsKnob('groupXL', { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' }, undefined, {
    display: 'inline-radio'
  });

  const rowOptions = {
    group,
    groupXL,
    groupL,
    groupM,
    groupS,
    groupXS
  };
  return (
    <Row {...rowOptions}>
      <Column>1</Column>
      <Column>2</Column>
      <Column>3</Column>
      <Column>4</Column>
      <Column>5</Column>
      <Column>6</Column>
      <Column>7</Column>
      <Column>8</Column>
      <Column>9</Column>
      <Column>10</Column>
      <Column>11</Column>
      <Column>12</Column>
    </Row>
  );
};

export const ColumnSize = () => {
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
      auto: 'auto'
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
      auto: 'auto'
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
      auto: 'auto'
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
      auto: 'auto'
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
      auto: 'auto'
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
      auto: 'auto'
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
  title: 'Layout',
  component: Column,
  subcomponents: { Row }
};
