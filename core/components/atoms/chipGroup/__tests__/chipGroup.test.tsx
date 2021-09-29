import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { ChipGroup } from '@/index';
import { ChipGroupProps as Props } from '@/index.type';
import { ChipType } from '../../chip/Chip';

const type: ChipType[] = ['action', 'input', 'selection'];
const FunctionValue = jest.fn();
const onClick = jest.fn();
const onClose = jest.fn();

const list = [
  {
    label: 'Action',
    icon: 'assessment',
    clearButton: true,
    disabled: false,
    name: '1',
    type: type[0],
  },
  {
    label: 'Input',
    icon: 'assessment',
    clearButton: true,
    disabled: false,
    name: '2',
    type: type[1],
  },
  {
    label: 'Selection',
    icon: 'assessment',
    clearButton: true,
    disabled: false,
    selected: true,
    name: '3',
    type: type[2],
  },
  {
    label: 'Selection',
    icon: 'assessment',
    clearButton: true,
    disabled: false,
    name: '4',
    type: type[2],
  },
];

describe('ChipGroup component', () => {
  const mapper: Record<string, any> = {
    list: valueHelper(list, { required: true }),
    onclick: valueHelper(onClick, { required: true }),
    onClose: valueHelper(onClose, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ChipGroup {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChipGroup component', () => {
  it('renders chipGroup component', () => {
    const { getByTestId, getAllByTestId } = render(<ChipGroup list={list} />);
    expect(getByTestId('DesignSystem-ChipGroup')).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-ChipGroup--Chip')).toHaveLength(list.length);
  });

  it('renders ChipGroup component with prop onClick', () => {
    const { getAllByTestId } = render(<ChipGroup list={list} onClick={FunctionValue} />);
    const onClickFunction = getAllByTestId('DesignSystem-ChipGroup--Chip')[0];
    fireEvent.click(onClickFunction);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('renders ChipGroup component with prop onClose', () => {
    const { getAllByTestId } = render(<ChipGroup list={list} onClose={FunctionValue} />);
    const onCloseFunction = getAllByTestId('DesignSystem-GenericChip--clearButton')[0];
    fireEvent.click(onCloseFunction);
    expect(FunctionValue).toHaveBeenCalled();
  });
});
