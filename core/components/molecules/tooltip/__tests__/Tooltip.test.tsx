import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Tooltip, Button } from '@/index';
import { TooltipProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const Position = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'];
const StringValue = 'Sample string';
const Size = ['small', 'regular'];

const mapper = {
  position: valueHelper(Position, { required: true, iterate: true }),
  size: valueHelper(Size, { required: true, iterate: true }),
  tooltip: valueHelper(StringValue, { required: true }),
};

describe('Tooltip component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Tooltip {...rest}>
          <Button>Button</Button>
        </Tooltip>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);

  it('should not render tooltip when showTooltip is false', () => {
    const { baseElement, getByRole, queryByText } = render(
      <Tooltip showTooltip={false} tooltip="A tooltip">
        <Button>Button</Button>
      </Tooltip>
    );
    const button = getByRole('button');
    fireEvent.mouseOver(button);
    const tooltipText = queryByText('A tooltip');
    expect(tooltipText).not.toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Tooltip component with text overflow', () => {
  // it('should render tooltip when showOnTruncation is false', () => {
  //   const { getByRole, queryByText } = render(
  //     <Tooltip showOnTruncation={false} tooltip="A tooltip">
  //       <Button style={{ maxWidth: 150 }} className="ellipsis--noWrap d-inline-block w-100">
  //         show me the tooltip on hover
  //       </Button>
  //     </Tooltip>
  //   );
  //   const button = getByRole('button');
  //   fireEvent.mouseOver(button);
  //   const tooltipText = queryByText('A tooltip');
  //   expect(tooltipText).toBeInTheDocument();
  // });

  it('should render tooltip when showOnTruncation is true with text overflow', () => {
    const { getByRole, queryByText } = render(
      <Tooltip showOnTruncation={true} tooltip="show me the tooltip on hover">
        <Button style={{ maxWidth: 150 }} className="ellipsis--noWrap d-inline-block w-100">
          show me the tooltip on hover
        </Button>
      </Tooltip>
    );
    const button = getByRole('button');
    fireEvent.mouseOver(button);
    const tooltipText = queryByText('show me the tooltip on hover');
    expect(tooltipText).toBeInTheDocument();
  });

  it('should not render tooltip when showOnTruncation is true and no text overflow', () => {
    const { getByRole, queryByText } = render(
      <Tooltip showOnTruncation={true} tooltip="A tooltip">
        <Button style={{ maxWidth: 300 }} className="ellipsis--noWrap d-inline-block w-100">
          show me the tooltip on hover
        </Button>
      </Tooltip>
    );
    const button = getByRole('button');
    fireEvent.mouseOver(button);
    const tooltipText = queryByText('A tooltip');
    expect(tooltipText).not.toBeInTheDocument();
  });

  // it('should support custom class', () => {
  //   const { getByRole, getByTestId } = render(
  //     <Tooltip tooltip="A tooltip" className="custom-class">
  //       <Button>show me the tooltip on hover</Button>
  //     </Tooltip>
  //   );
  //   const button = getByRole('button');
  //   fireEvent.mouseOver(button);
  //   getByTestId('DesignSystem-Popover').classList.contains('custom-class');
  // });
});

// describe('Tooltip component with size prop', () => {
//   it('should render tooltip with small size', () => {
//     const { getByRole, getByTestId } = render(
//       <Tooltip size="small" tooltip="A tooltip">
//         <Button>show me the tooltip on hover</Button>
//       </Tooltip>
//     );
//     const button = getByRole('button');
//     fireEvent.mouseOver(button);
//     const tooltipWrapper = getByTestId('DesignSystem-Tooltip-Wrapper');
//     expect(tooltipWrapper).toHaveClass('Tooltip--small');
//   });

//   it('should render tooltip with regular size', () => {
//     const { getByRole, getByTestId } = render(
//       <Tooltip size="regular" tooltip="A tooltip">
//         <Button>show me the tooltip on hover</Button>
//       </Tooltip>
//     );
//     const button = getByRole('button');
//     fireEvent.mouseOver(button);
//     const tooltipWrapper = getByTestId('DesignSystem-Tooltip-Wrapper');
//     expect(tooltipWrapper).not.toHaveClass('Tooltip--small');
//     expect(tooltipWrapper).toHaveClass('Tooltip');
//   });
// });

describe('Tooltip component keyboard accessibility', () => {
  // `fireEvent.focus` dispatches a synthetic FocusEvent but does not actually focus the
  // element, so `:focus-visible` stays false and useFocus doesn't trigger.
  // `act(() => button.focus())` genuinely focuses the element in jsdom.
  it('should show tooltip when trigger receives keyboard focus', () => {
    const { getByRole, queryByText } = render(
      <Tooltip tooltip="A tooltip">
        <Button>Hover over me</Button>
      </Tooltip>
    );
    const button = getByRole('button');
    act(() => button.focus());
    expect(queryByText('A tooltip')).toBeInTheDocument();
  });

  it('should close tooltip when Escape key is pressed', () => {
    const { getByRole, getByTestId } = render(
      <Tooltip tooltip="A tooltip">
        <Button>Hover over me</Button>
      </Tooltip>
    );
    const button = getByRole('button');
    act(() => button.focus());
    expect(getByTestId('DesignSystem-Tooltip-Wrapper')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    // After Escape, the popover closes: data-opened flips to false
    const popover = getByTestId('DesignSystem-Popover');
    expect(popover).toHaveAttribute('data-opened', 'false');
  });

  it('should not close tooltip when other keys are pressed', () => {
    const { getByRole, getByTestId } = render(
      <Tooltip tooltip="A tooltip">
        <Button>Hover over me</Button>
      </Tooltip>
    );
    const button = getByRole('button');
    act(() => button.focus());
    expect(getByTestId('DesignSystem-Tooltip-Wrapper')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Enter' });
    expect(getByTestId('DesignSystem-Popover')).toHaveAttribute('data-opened', 'true');

    fireEvent.keyDown(document, { key: 'a' });
    expect(getByTestId('DesignSystem-Popover')).toHaveAttribute('data-opened', 'true');
  });
});
