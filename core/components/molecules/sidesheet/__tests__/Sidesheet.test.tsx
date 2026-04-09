import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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

  it('close button has accessible aria-label', () => {
    const { getByTestId } = render(<Sidesheet dimension="regular" headerOptions={headerOptions} open={true} />);

    const closeButton = getByTestId('DesignSystem-Sidesheet--CloseButton');
    expect(closeButton).toHaveAttribute('aria-label', 'Close');
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

  it('focuses heading (aria-labelledby target) when Sidesheet opens so VoiceOver announces the dialog title', async () => {
    jest.useRealTimers();
    const flushRAF = () => act(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));

    const { getByTestId } = render(
      <Sidesheet dimension="large" headerOptions={headerOptions} open={true} footer={footer} onClose={jest.fn()}>
        <Text>Body</Text>
      </Sidesheet>
    );

    await flushRAF();

    const heading = getByTestId('DesignSystem-OverlayHeader--heading');
    expect(document.activeElement).toBe(heading);
    expect(heading).toHaveAttribute('tabindex', '-1');
    jest.useFakeTimers();
  });

  it('Tab wraps focus within Sidesheet (header, body, footer)', async () => {
    const flushRAF = () => act(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));

    const footerWithIds = (
      <>
        <Button appearance="primary" className="mr-4" data-test="DesignSystem-Sidesheet--PrimaryBtn">
          Primary
        </Button>
        <Button appearance="basic" data-test="DesignSystem-Sidesheet--BasicBtn">
          Basic
        </Button>
      </>
    );

    const { getByTestId } = render(
      <Sidesheet dimension="large" headerOptions={headerOptions} open={true} footer={footerWithIds} onClose={jest.fn()}>
        <Text>Body</Text>
      </Sidesheet>
    );

    await flushRAF();

    const lastFocusable = getByTestId('DesignSystem-Sidesheet--BasicBtn');
    lastFocusable.focus();
    fireEvent.keyDown(document, { key: 'Tab' });

    const closeButton = getByTestId('DesignSystem-Sidesheet--CloseButton');
    expect(document.activeElement).toBe(closeButton);
  });

  it('Escape closes Sidesheet', async () => {
    const flushRAF = () => act(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));
    const onClose = jest.fn();

    const { getByTestId } = render(
      <Sidesheet dimension="large" headerOptions={headerOptions} open={true} footer={footer} onClose={onClose}>
        <Text>Body</Text>
      </Sidesheet>
    );

    await flushRAF();

    const sidesheetContainer = getByTestId('DesignSystem-Sidesheet');
    fireEvent.keyDown(sidesheetContainer, { key: 'Escape' });

    expect(onClose).toHaveBeenCalled();
  });

  it('Escape closes Sidesheet even when closeOnEscape={false} to prevent keyboard trap (WCAG 2.2.1)', async () => {
    jest.useRealTimers();
    const flushRAF = () => act(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));
    const onClose = jest.fn();

    render(
      <Sidesheet
        dimension="large"
        headerOptions={headerOptions}
        open={true}
        footer={footer}
        onClose={onClose}
        closeOnEscape={false}
      >
        <Text>Body</Text>
      </Sidesheet>
    );

    await flushRAF();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalled();
    jest.useFakeTimers();
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

  it('inner widget can stop Escape propagation to prevent sidesheet from closing', async () => {
    jest.useRealTimers();
    const flushRAF = () => act(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));
    const onClose = jest.fn();

    const { getByTestId } = render(
      <Sidesheet dimension="large" headerOptions={headerOptions} open={true} onClose={onClose}>
        <button data-test="inner-widget">Inner</button>
      </Sidesheet>
    );

    await flushRAF();

    const innerWidget = getByTestId('inner-widget');
    innerWidget.focus();

    const stopEscape = (e: Event) => {
      if ((e as KeyboardEvent).key === 'Escape') e.stopPropagation();
    };
    innerWidget.addEventListener('keydown', stopEscape);
    fireEvent.keyDown(innerWidget, { key: 'Escape' });
    innerWidget.removeEventListener('keydown', stopEscape);

    expect(onClose).not.toHaveBeenCalled();
    jest.useFakeTimers();
  });

  it('Shift+Tab from heading (initial static focus target) wraps to last focusable when no back button', async () => {
    // No back button: DOM order is [heading][closeButton…][footer buttons].
    // Heading precedes first tabbable (close button), so Shift+Tab must wrap to last.
    jest.useRealTimers();
    const flushRAF = () => act(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));

    const footerWithLastBtn = (
      <>
        <Button appearance="basic">Basic</Button>
        <Button appearance="primary" data-test="last-btn">
          Primary
        </Button>
      </>
    );

    const { getByTestId } = render(
      <Sidesheet
        dimension="large"
        headerOptions={headerOptions}
        open={true}
        footer={footerWithLastBtn}
        onClose={jest.fn()}
      >
        <Text>Body</Text>
      </Sidesheet>
    );

    await flushRAF();

    const heading = getByTestId('DesignSystem-OverlayHeader--heading');
    expect(document.activeElement).toBe(heading);

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });

    const lastButton = getByTestId('last-btn');
    expect(document.activeElement).toBe(lastButton);
    jest.useFakeTimers();
  });

  it('Shift+Tab from heading falls through to back button when back button precedes heading in DOM', async () => {
    // Back button present: DOM order is [backButton][heading][closeButton…][footer].
    // Back button is first tabbable and comes before the heading, so Shift+Tab from the
    // heading should NOT wrap — the browser's natural reverse-tab lands on the back button.
    jest.useRealTimers();
    const flushRAF = () => act(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));

    const footerWithLastBtn = (
      <>
        <Button appearance="basic">Basic</Button>
        <Button appearance="primary" data-test="last-btn">
          Primary
        </Button>
      </>
    );

    const { getByTestId } = render(
      <Sidesheet
        dimension="large"
        headerOptions={{ ...headerOptions, backButton: true, backButtonCallback: jest.fn() }}
        open={true}
        footer={footerWithLastBtn}
        onClose={jest.fn()}
      >
        <Text>Body</Text>
      </Sidesheet>
    );

    await flushRAF();

    const heading = getByTestId('DesignSystem-OverlayHeader--heading');
    expect(document.activeElement).toBe(heading);

    // Shift+Tab should NOT wrap; the trap should not intercept (no preventDefault).
    const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true });
    const preventDefaultSpy = jest.spyOn(shiftTabEvent, 'preventDefault');
    document.dispatchEvent(shiftTabEvent);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    jest.useFakeTimers();
  });
});

describe('Sidesheet component a11y', () => {
  it('has no detectable a11y violations', async () => {
    render(<Sidesheet dimension="regular" headerOptions={{ heading: 'Heading' }} open={true} />);
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
