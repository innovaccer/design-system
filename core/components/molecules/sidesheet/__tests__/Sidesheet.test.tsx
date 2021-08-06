import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SidesheetProps as Props } from '@/index.type';
import { Button, Sidesheet, Text } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const dimension = ['regular', 'large'];
const FunctionValue = jest.fn();
const seperator = false;
const backIcon = false;
const stickFooter = false;
const backdropClose = false;
const footer = (
  <>
    <Button appearance="primary" className="mr-4" data-test="DesignSystem-Sidesheet--SidesheetButton">
      Primary
    </Button>
    <Button appearance="basic">Basic</Button>
  </>
);
const header = <Text data-test="DesignSystem-Sideheet--SidesheetText">Heading</Text>;

const headerOptions = {
  backIcon,
  heading: 'Heading',
  subHeading: 'Subheading',
};

const mapper = {
  open: valueHelper(true, { required: true }),
  backdropClose: valueHelper(backdropClose, { required: true }),
  dimension: valueHelper(dimension, { required: true, iterate: true }),
  headerOptions: valueHelper(headerOptions, { required: true }),
  seperator: valueHelper(seperator, { required: true }),
  stickFooter: valueHelper(stickFooter, { required: true }),
};

describe('Sidesheet component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Sidesheet {...attr} />);

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('sidesheet component', () => {
  it('renders children with props: headerOptions and footerOptions', () => {
    const { getByTestId } = render(
      <Sidesheet dimension="large" headerOptions={headerOptions} open={true} footerOptions={{ actions: [] }} />
    );

    expect(getByTestId('DesignSystem-SidesheetContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet--Header')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet--CloseButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Sidesheet--open');
  });

  it('renders children with props: header and footer', () => {
    const { getByTestId } = render(<Sidesheet dimension="large" header={header} open={true} footer={footer} />);

    expect(getByTestId('DesignSystem-SidesheetContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet--Header')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet--CloseButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet--Footer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet--SidesheetButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sideheet--SidesheetText')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Sidesheet--open');
  });

  it('renders children without footer and footerOptions', () => {
    const { queryByTestId } = render(<Sidesheet dimension="large" header={header} open={true} stickFooter={false} />);
    expect(queryByTestId('DesignSystem-Sidesheet--Footer')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Sidesheet--OverlayBody')).not.toHaveClass('Sidesheet-body--withMargin');
    expect(
      queryByTestId('DesignSystem-Sidesheet--Footer')?.classList.contains('Sidesheet-footer--stickToBottom')
    ).toBeFalsy();
  });

  it('renders children with footer sticked to bottom', () => {
    const { getByTestId } = render(
      <Sidesheet dimension="large" header={header} open={true} footer={footer} stickFooter={true} />
    );
    expect(getByTestId('DesignSystem-Sidesheet--Footer')).toHaveClass('Sidesheet-footer--stickToBottom');
    expect(getByTestId('DesignSystem-Sidesheet--OverlayBody')).toHaveClass('Sidesheet-body--withMargin');
  });

  it('renders children with seperator', () => {
    const { getByTestId } = render(
      <Sidesheet dimension="large" header={header} open={true} footer={footer} seperator={true} />
    );
    expect(getByTestId('DesignSystem-Sidesheet--Footer')).toHaveClass('Sidesheet-footer--withSeperator');
    expect(getByTestId('DesignSystem-Sidesheet--Header')?.parentNode).toHaveClass('Sidesheet-header--withSeperator');
  });

  it('calls onClose function with backdropClose being true', () => {
    const { getByTestId } = render(
      <>
        <div data-test="DesignSystem-OutsideClick">Outside Click</div>
        <Sidesheet
          backdropClose={true}
          dimension="large"
          headerOptions={headerOptions}
          open={true}
          footer={footer}
          onClose={FunctionValue}
        >
          <Text>Modal Body</Text>
        </Sidesheet>
      </>
    );

    const OutsideClick = getByTestId('DesignSystem-OutsideClick');
    fireEvent.click(OutsideClick);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('Sidesheet component with prop: dimension', () => {
  it('renders Sidesheet with dimension: large', () => {
    const { getByTestId } = render(
      <Sidesheet dimension="large" headerOptions={headerOptions} open={true} footer={footer} />
    );
    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Col--10');
  });

  it('renders Sidesheet with dimension: regular', () => {
    const { getByTestId } = render(
      <Sidesheet dimension="regular" headerOptions={headerOptions} open={true} footer={footer} />
    );
    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Col--6');
  });
});

describe('Sidesheet component with prop: open', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders Sidesheet with open: true', () => {
    const { getByTestId } = render(
      <Sidesheet dimension="large" headerOptions={headerOptions} open={true} footer={footer} />
    );

    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Sidesheet--open');
    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Sidesheet-animation--open');
    expect(getByTestId('DesignSystem-SidesheetContainer')).toHaveClass('Overlay-container--open');
  });

  it('renders Sidesheet with open: false', () => {
    const { getByTestId } = render(
      <Sidesheet dimension="large" headerOptions={headerOptions} open={false} footer={footer} />
    );

    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Sidesheet-animation--close');
  });

  it('renders Sidesheet with toggle of open', () => {
    const { getByTestId, rerender } = render(
      <Sidesheet
        backdropClose={backdropClose}
        dimension="large"
        headerOptions={headerOptions}
        seperator={seperator}
        open={true}
        footer={footer}
      >
        <Text>Modal Body</Text>
      </Sidesheet>
    );

    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Sidesheet--open');
    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Sidesheet-animation--open');

    const closeIcon = getByTestId('DesignSystem-Sidesheet--CloseButton');
    fireEvent.click(closeIcon);

    rerender(
      <Sidesheet
        backdropClose={backdropClose}
        dimension="large"
        headerOptions={headerOptions}
        seperator={seperator}
        open={false}
        footer={footer}
      >
        <Text>Modal Body</Text>
      </Sidesheet>
    );

    expect(getByTestId('DesignSystem-Sidesheet')).toHaveClass('Sidesheet-animation--close');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
