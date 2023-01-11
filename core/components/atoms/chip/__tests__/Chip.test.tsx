import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Chip, Text } from '@/index';
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

  it('renders chip component with prop: selected, disabled and type selection', () => {
    const { queryByTestId } = render(
      <Chip label="Chip" name="Chip" type="selection" disabled={true} selected={true} />
    );
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).toHaveClass('Chip-selection--selectedDisabled');
  });

  it('renders chip component with custom label', () => {
    const labelText = 'Chip';
    const customLabel = <Text>{labelText}</Text>;
    const { queryByTestId } = render(<Chip label={customLabel} name={labelText} />);
    expect(queryByTestId('DesignSystem-Chip--GenericChip')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Text')).toHaveTextContent(labelText);
  });

  it('renders chip component with multiple labels', () => {
    const labelText1 = 'Chip1';
    const labelText2 = 'Chip2';
    const customLabel = (
      <span>
        <Text>{labelText1}</Text>
        <Text>{labelText2}</Text>
      </span>
    );
    const { queryAllByTestId } = render(<Chip label={customLabel} name="Chip" />);
    const labels = queryAllByTestId('DesignSystem-Text');
    expect(labels[0]).toHaveTextContent(labelText1);
    expect(labels[1]).toHaveTextContent(labelText2);
  });

  it('renders chip component with styled labels', () => {
    const labelText = 'Chip';
    const customLabel = <Text color="primary">{labelText}</Text>;
    const { queryByTestId } = render(<Chip label={customLabel} name={labelText} />);
    expect(queryByTestId('DesignSystem-Text')).toHaveClass('color-primary');
  });

  it('renders chip component with onClick event trigger', () => {
    const handleOnClick = jest.fn();
    const customLabel = <Text>Custom Label</Text>;
    const nameObject = { custom: 'label' };
    const { getByTestId } = render(
      <Chip
        label={customLabel}
        name={nameObject}
        type="action"
        disabled={false}
        selected={true}
        onClick={handleOnClick}
      />
    );
    const onClick = getByTestId('DesignSystem-Chip--GenericChip');
    fireEvent.click(onClick);
    expect(handleOnClick.mock.calls[0][0]).toBe(nameObject);
  });

  it('renders chip component with onClose event trigger', () => {
    const handleOnClose = jest.fn();
    const customLabel = <Text>Custom Label</Text>;
    const nameObject = { custom: 'label' };
    const { getByTestId } = render(
      <Chip
        label={customLabel}
        name={nameObject}
        disabled={false}
        selected={true}
        onClose={handleOnClose}
        clearButton={true}
      />
    );
    const onClose = getByTestId('DesignSystem-GenericChip--clearButton');
    fireEvent.click(onClose);
    expect(handleOnClose.mock.calls[0][0]).toBe(nameObject);
  });

  it('renders chip component with label of type string', () => {
    const { getByTestId } = render(<Chip label="ChipLabel" name="Chip" />);
    const stringLabel = getByTestId('DesignSystem-GenericChip--Text');
    expect(stringLabel).toHaveClass('Chip-text');
  });

  it('renders chip component with label of type ReactElement', () => {
    const labelText = 'Chip';
    const { getByTestId } = render(
      <Chip
        label={<Text>{labelText}</Text>}
        name={{
          Custom: 'Label',
        }}
        type="selection"
      />
    );
    const customLabel = getByTestId('DesignSystem-Text');
    expect(customLabel).not.toHaveClass('Chip-text');
  });
});
