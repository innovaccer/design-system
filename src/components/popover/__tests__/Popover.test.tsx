import * as React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { Button, Popover } from '@/index';
import { PopoverProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const trigger = (
  <Button appearance="basic" data-test="DesignSystem-PopoverTrigger">
    Open Popup
  </Button>
);

const popoverElement = <span>Popover</span>;

describe('Popover component snapshots', () => {
  const mapper = {
    trigger: valueHelper(trigger, { required: true }),
    placement: valueHelper('bottom', { required: true }),
    open: valueHelper(true, { required: true }),
    onToggle: valueHelper(FunctionValue, { required: true }),
    dark: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<Popover {...attr}>{popoverElement}</Popover>);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Popover props tests', () => {
  it('renders children with dark: false', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} open={true}>
        <div data-test="DesignSystem-Popover--Content">{popoverElement}</div>
      </Popover>
    );

    expect(getByTestId('DesignSystem-Popover--Content')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Popover--Content')).not.toHaveClass('Mds-Popover--dark');
  });

  it('Popover component with prop: dark', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} dark={true} open={true}>
        {popoverElement}
      </Popover>
    );

    expect(getByTestId('DesignSystem-Popover')).toHaveClass('Mds-Popover--dark');
  });

  it('Popover component with customStyle', () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} open={true} style={{ height: '100px', width: '100px' }}>
        {popoverElement}
      </Popover>
    );

    expect(getByTestId('DesignSystem-Popover')).toHaveStyle('height: 100px; width: 100px');
  });

  it('renders Popover on trigger click', async () => {
    const { getByTestId } = render(<Popover trigger={trigger}>{popoverElement}</Popover>);

    const popoverTrigger = getByTestId('DesignSystem-PopoverTrigger');
    fireEvent.click(popoverTrigger);
    await waitFor(() => {
      expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
    });
  });

  it('renders Popover on trigger hover', async () => {
    const { getByTestId } = render(
      <Popover trigger={trigger} hoverable={true}>
        {popoverElement}
      </Popover>
    );

    const popoverTrigger = getByTestId('DesignSystem-PopoverTrigger');
    fireEvent.mouseEnter(popoverTrigger);

    await waitFor(() => {
      expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
    });
  });

  it('Popover component with outsidePointerDown true', async () => {
    const { queryByTestId, getByTestId } = render(
      <>
        <div data-test="DesignSystem-OutsideClick" />
        <Popover dismissOptions={{ outsidePointerDown: true }} trigger={trigger}>
          {popoverElement}
        </Popover>
      </>
    );

    const popoverTrigger = getByTestId('DesignSystem-PopoverTrigger');
    fireEvent.click(popoverTrigger);

    const outsideClick = getByTestId('DesignSystem-OutsideClick');
    fireEvent.click(outsideClick);

    await waitFor(() => {
      expect(queryByTestId('DesignSystem-Popover')).not.toBeInTheDocument();
    });
  });

  it('Popover component with outsidePointerDown false', async () => {
    const { getByTestId } = render(
      <>
        <div data-test="DesignSystem-OutsideClick" />
        <Popover dismissOptions={{ outsidePointerDown: false }} trigger={trigger}>
          {popoverElement}
        </Popover>
      </>
    );

    const popoverTrigger = getByTestId('DesignSystem-PopoverTrigger');
    fireEvent.click(popoverTrigger);

    const outsideClick = getByTestId('DesignSystem-OutsideClick');
    fireEvent.click(outsideClick);

    await waitFor(() => {
      expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
    });
  });

  it('Popover component with escapeKey', async () => {
    const { getByTestId, queryByTestId } = render(
      <>
        <div data-test="DesignSystem-OutsideClick" />
        <Popover dismissOptions={{ escapeKey: false }} trigger={trigger}>
          {popoverElement}
        </Popover>
      </>
    );

    const popoverTrigger = getByTestId('DesignSystem-PopoverTrigger');
    fireEvent.keyDown(popoverTrigger, { keyCode: 27 });

    await waitFor(() => {
      expect(queryByTestId('DesignSystem-Popover')).toBe(null);
    });
  });

  it('Popover component with open: false', async () => {
    const { queryByTestId } = render(
      <Popover trigger={trigger} open={false} onToggle={FunctionValue}>
        {popoverElement}
      </Popover>
    );

    await waitFor(() => {
      expect(queryByTestId('DesignSystem-Popover')).not.toBeInTheDocument();
    });
  });

  it('Popover component with open and onToggle', async () => {
    const open = true;
    const { getByTestId, queryByTestId, rerender } = render(
      <Popover trigger={trigger} open={open} onToggle={FunctionValue}>
        {popoverElement}
      </Popover>
    );

    await waitFor(() => {
      expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
    });

    const popoverTrigger = getByTestId('DesignSystem-PopoverTrigger');
    fireEvent.click(popoverTrigger);
    await waitFor(() => {
      expect(FunctionValue).toHaveBeenCalled();
    });

    rerender(
      <Popover trigger={trigger} open={!open} onToggle={FunctionValue}>
        {popoverElement}
      </Popover>
    );

    cleanup();

    await waitFor(() => {
      expect(queryByTestId('DesignSystem-Popover')).not.toBeInTheDocument();
    });
  });
});
