import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Chip } from '@/index';
import { ChipProps as Props } from '@/index.type';

const type = ['Action', 'Selection', 'Input'];
const BooleanValue = [true, false];
const FunctionValue = jest.fn();

describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper(type, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Chip {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper('Input', { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Chip {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper('Action', { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Chip {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper('Selection', { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Chip {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper('Selection', { required: true }),
    selected: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Chip {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Chip component', () => {
  it('renders chip component', () => {
    const { queryByTestId } = render(<Chip label="Chip" name="Chip" />);
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).toBeInTheDocument();
  });

  it('renders chip component with prop: disabled', () => {
    const { queryByTestId } = render(<Chip label="Chip" name="Chip" type="action" disabled={true} />);
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).toHaveClass('Chip-action--disabled');
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).not.toHaveClass('Chip--action');
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).not.toHaveClass('Chip-action--selected');
  });

  it('renders chip component with prop: selected and disabled', () => {
    const { queryByTestId } = render(<Chip label="Chip" name="Chip" type="action" disabled={false} selected={true} />);
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).not.toHaveClass('Chip-action--disabled');
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).toHaveClass('Chip--action');
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).toHaveClass('Chip-action--selected');
  });

  it('renders chip component with onClick', () => {
    const { getByTestId } = render(
      <Chip label="Chip" name="Chip" type="action" disabled={false} selected={true} onClick={FunctionValue} />
    );
    const onClick = getByTestId('DesignSystem-Chip--GenericChip');
    fireEvent.click(onClick);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('renders chip component with onClose', () => {
    const { getByTestId } = render(
      <Chip label="Chip" name="Chip" onClose={FunctionValue} clearButton={true} icon="events" />
    );
    const onClose = getByTestId('DesignSystem-GenericChip--clearButton');
    fireEvent.click(onClose);
    expect(FunctionValue).toHaveBeenCalled();
  });
});
