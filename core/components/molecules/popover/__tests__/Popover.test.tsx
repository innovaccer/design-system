import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Popover, { PopoverProps as Props } from '../Popover';
import Button from '@/components/atoms/button';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const position = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];
const BooleanValue = [true, false];
const NumberValue = 10;
const FunctionValue = jest.fn();
const Style = {
  width: valueHelper('150px', { required: true }),
  height: valueHelper('150px', { required: true })
};
const trigger = <Button appearance="basic" data-test="DS-PopoverTrigger">Open Popup</Button>;

describe('Popover component', () => {
  const mapper = {
    appendToBody: valueHelper(false, { required: true }),
    trigger: valueHelper(trigger, { required: true }),
    customStyle: valueHelper(Style, { required: true }),
    open: valueHelper(true, { required: true }),
    verticalOffset: valueHelper(NumberValue, { required: true }),
    onToggle: valueHelper(FunctionValue, { required: true }),
    position: valueHelper(position, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <Popover
          {...attr}
        >
          Popover
        </Popover>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Popover component', () => {
  const mapper = {
    appendToBody: valueHelper(false, { required: true }),
    trigger: valueHelper(trigger, { required: true }),
    customStyle: valueHelper(Style, { required: true }),
    open: valueHelper(true, { required: true }),
    verticalOffset: valueHelper(NumberValue, { required: true }),
    onToggle: valueHelper(FunctionValue, { required: true }),
    dark: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <Popover
          {...attr}
        >
          Popover
        </Popover>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('renders Popover component', () => {

  it('renders children with dark: false', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} open={true}>
        <div data-test="DS-Popover">Popover</div>
      </Popover>
    );

    expect(getByTestId('DS-Popover')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Popover')).not.toHaveClass('Popover--dark');
  });

  it('Popover component with prop: dark', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} dark={true} open={true}>
        Popover
      </Popover>
    );

    expect(getByTestId('DesignSystem-Popover')).toHaveClass('Popover--dark');
  });

  it('Popover component with customStyle', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} open={true} customStyle={{ height: '100px', width: '100px' }}>
        Popover
      </Popover>
    );

    expect(getByTestId('DesignSystem-Popover')).toHaveStyle('height: 100px; width: 100px');
  });

});

describe('renders Popover component with prop: on', () => {

  it('renders Popover on trigger click', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger}>
        Popover
      </Popover>
    );

    const popoverTrigger = getByTestId('DS-PopoverTrigger');
    fireEvent.click(popoverTrigger);

    expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  });

  it('renders Popover on trigger hover', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} on="hover">
        Popover
      </Popover>
    );

    const popoverTrigger = getByTestId('DS-PopoverTrigger');
    fireEvent.mouseEnter(popoverTrigger);

    expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  });

});

describe('renders Popover component with prop: closeOnBackdropClick', () => {

  it('Popover component with default prop: closeOnBackdropClick', async () => {
    const { queryByTestId, getByTestId } = render(
      <>
        <div data-test="DS-OutsideClick" />
        <Popover trigger={trigger} appendToBody={false}>
          Popover
        </Popover>
      </>
    );

    const popoverTrigger = getByTestId('DS-PopoverTrigger');
    fireEvent.click(popoverTrigger);

    const outsideClick = getByTestId('DS-OutsideClick');
    fireEvent.click(outsideClick);
    cleanup();
    expect(queryByTestId('DesignSystem-Popover')).not.toBeInTheDocument();

  });

  it('Popover component with closeOnBackdropClick: false', () => {
    const { getByTestId } = render(
      <>
        <div data-test="DS-OutsideClick" />
        <Popover trigger={trigger} closeOnBackdropClick={false}>
          Popover
        </Popover>
      </>
    );

    const popoverTrigger = getByTestId('DS-PopoverTrigger');
    fireEvent.click(popoverTrigger);

    const outsideClick = getByTestId('DS-OutsideClick');
    fireEvent.click(outsideClick);

    expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  });

});

describe('renders Popover component with prop: open and onToggle', () => {

  it('Popover component with open: false', () => {
    const { queryByTestId } = render(
      <Popover trigger={trigger} open={false} onToggle={FunctionValue}>
        Popover
      </Popover>
    );

    expect(queryByTestId('DesignSystem-Popover')).not.toBeInTheDocument();
  });

  it('Popover component with open and onToggle', () => {
    const open = true;
    const { getByTestId, queryByTestId, rerender } = render(
      <Popover trigger={trigger} open={open} onToggle={FunctionValue}>
        Popover
      </Popover>
    );

    expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();

    const popoverTrigger = getByTestId('DS-PopoverTrigger');
    fireEvent.click(popoverTrigger);
    expect(FunctionValue).toHaveBeenCalledWith(!open, 'onClick');

    rerender(<Popover trigger={trigger} open={!open} onToggle={FunctionValue}>Popover</Popover>);
    cleanup();
    expect(queryByTestId('DesignSystem-Popover')).not.toBeInTheDocument();
  });

});

describe('Popover component with overwrite class', () => {
  const className = 'DS-Popover';

  it('overwrite Popover class', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} open={true} className={className}>
        Popover
      </Popover>
    );
    expect(getByTestId('DesignSystem-Popover')).toHaveClass(className);
  });

});
