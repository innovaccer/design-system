import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import { ModalProps as Props } from '@/index.type';
import { ModalHeader, Modal, ModalBody, ModalFooter, Button, Text } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const flushRAF = () => act(() => new Promise((resolve) => requestAnimationFrame(() => resolve())));

const FunctionValue = jest.fn();
const onClose = jest.fn();
const dimension = ['small', 'medium', 'large'];

const modalHeaderOptions = {
  onClose: () => null,
  icon: 'pan_tool',
  heading: 'Heading',
  subHeading: 'Subheading',
};

const footer = (
  <>
    <Button appearance="primary" className="mr-4" data-test="DesignSystem-Modal--FooterButton">
      Primary
    </Button>
    <Button appearance="basic">Basic</Button>
  </>
);
const header = <Text data-test="DesignSystem-Modal--HeaderText">Heading</Text>;

const footerOptions = { actions: [] };

const headerOptions = {
  heading: 'this is heading',
  subHeading: 'this is subheading',
};

describe('Modal component', () => {
  const mapper = {
    backdropClose: valueHelper([FunctionValue], { iterate: true }),
    dimension: valueHelper(dimension, { required: true, iterate: true }),
    open: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Modal {...rest}>
          <ModalHeader {...modalHeaderOptions} />
        </Modal>
      );

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Modal component', () => {
  const mapper = {
    backdropClose: valueHelper([FunctionValue], { iterate: true }),
    dimension: valueHelper(dimension, { required: true, iterate: true }),
    open: valueHelper(true, { required: true }),
    header: valueHelper(header, { required: true }),
    footer: valueHelper(footer, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Modal {...rest}>
          <ModalHeader {...modalHeaderOptions} />
        </Modal>
      );

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Modal component', () => {
  const mapper = {
    backdropClose: valueHelper([FunctionValue], { iterate: true }),
    dimension: valueHelper(dimension, { required: true, iterate: true }),
    open: valueHelper(true, { required: true }),
    headerOptions: valueHelper(headerOptions, { required: true }),
    footerOptions: valueHelper(footerOptions, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Modal {...rest}>
          <ModalHeader {...modalHeaderOptions} />
        </Modal>
      );

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Modal component with props', () => {
  it('applies aria-labelledby on dialog container', () => {
    const { getByTestId } = render(<Modal open={true} aria-labelledby="modal-title" />);
    expect(getByTestId('DesignSystem-Modal')).toHaveAttribute('aria-labelledby', 'modal-title');
  });

  it('renders children', () => {
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true}>
        <ModalHeader {...modalHeaderOptions} data-test="DesignSystem-ModalHeader" />
        <ModalBody data-test="DesignSystem-ModalBody">
          <p>Modal Body</p>
        </ModalBody>
        <ModalFooter data-test="DesignSystem-ModalFooter">
          <Button appearance="basic">Basic</Button>
          <Button appearance="primary">Primary</Button>
        </ModalFooter>
      </Modal>
    );
    expect(getByTestId('DesignSystem-ModalHeader')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-ModalBody')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-ModalFooter')).toBeInTheDocument();
  });

  it('renders children with props : open', () => {
    const { getByTestId, queryByTestId } = render(<Modal open={true} />);
    expect(getByTestId('DesignSystem-ModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Modal--header')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Modal--footer')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Modal--HeaderText')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Modal--FooterButton')).not.toBeInTheDocument();
  });

  it('renders children with props : headerOptions and footerOptions', () => {
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true} footerOptions={footerOptions} headerOptions={headerOptions} />
    );
    expect(getByTestId('DesignSystem-ModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal--header')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal--footer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal--CloseButton')).toBeInTheDocument();
  });

  it('renders children with props : header and footer', () => {
    const { getByTestId } = render(<Modal backdropClose={FunctionValue} open={true} header={header} footer={footer} />);
    expect(getByTestId('DesignSystem-ModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal--HeaderText')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal--FooterButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal--CloseButton')).toBeInTheDocument();
  });

  it('renders children without header and footer props', () => {
    const { getByTestId, queryByTestId } = render(<Modal backdropClose={FunctionValue} open={true} />);
    expect(getByTestId('DesignSystem-ModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Modal--footer')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Modal--FooterButton')).not.toBeInTheDocument();
  });

  it('renders children without footer props', () => {
    const { getByTestId, queryByTestId } = render(<Modal backdropClose={FunctionValue} open={true} header={header} />);
    expect(getByTestId('DesignSystem-ModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Modal')).toBeInTheDocument();
    expect(queryByTestId('Modal-body--withMargin')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Modal--footer')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Modal--FooterButton')).not.toBeInTheDocument();
  });

  it('renders with prop: backdropClose', () => {
    const { getByTestId } = render(
      <>
        <div data-test="DesignSystem-OutsideClick">Outside Click</div>
        <Modal backdropClose={FunctionValue} open={true} />
      </>
    );

    const OutsideClick = getByTestId('DesignSystem-OutsideClick');
    fireEvent.click(OutsideClick);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('renders with prop: onClose', () => {
    const { getByTestId } = render(
      <>
        <div data-test="DesignSystem-OutsideClick">Outside Click</div>
        <Modal backdropClose={FunctionValue} open={true} onClose={onClose} />
      </>
    );

    const OutsideClick = getByTestId('DesignSystem-OutsideClick');
    fireEvent.click(OutsideClick);
    expect(onClose).toHaveBeenCalled();
  });

  it('renders with prop: onClose and header', () => {
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true} onClose={onClose} header={header} />
    );

    const closeIcon = getByTestId('DesignSystem-Modal--CloseButton');
    fireEvent.click(closeIcon);
    expect(onClose).toHaveBeenCalled();
  });
});

describe('Modal component with prop: dimension', () => {
  it('renders Modal with dimension: small', () => {
    const { getByTestId } = render(<Modal backdropClose={FunctionValue} open={true} dimension={'small'} />);

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Col Col--3 Col--xs-10');
  });

  it('renders Modal with dimension: medium', () => {
    const { getByTestId } = render(<Modal backdropClose={FunctionValue} open={true} dimension={'medium'} />);

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Col Col--4 Col--xs-10');
  });

  it('renders Modal with dimension: large', () => {
    const { getByTestId } = render(<Modal backdropClose={FunctionValue} open={true} dimension={'large'} />);

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Col Col--6 Col--xs-10');
  });
});

describe('Modal component with prop: open', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders Modal with open: true', () => {
    const { getByTestId } = render(<Modal backdropClose={FunctionValue} open={true} />);

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Modal--open');
    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Modal-animation--open');
    expect(getByTestId('DesignSystem-ModalContainer')).toHaveClass('Overlay-container--open');
  });

  it('renders Modal with open: false', () => {
    const { getByTestId } = render(<Modal backdropClose={FunctionValue} open={false} />);

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Modal-animation--close');
  });

  it('renders Modal with toggle of open', () => {
    const { getByTestId, rerender } = render(
      <Modal backdropClose={FunctionValue} open={true}>
        <ModalHeader heading={'Heading'} onClose={FunctionValue} />
      </Modal>
    );

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Modal--open');
    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Modal-animation--open');

    const closeIcon = getByTestId('DesignSystem-Modal--CloseButton');
    fireEvent.click(closeIcon);

    rerender(
      <Modal backdropClose={FunctionValue} open={false}>
        <ModalHeader heading={'Heading'} onClose={FunctionValue} />
      </Modal>
    );

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Modal-animation--close');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});

describe('Multiple modal components', () => {
  it('renders multiple modal components', () => {
    const { getAllByTestId, rerender, getByTestId } = render(
      <>
        <Modal backdropClose={FunctionValue} open={true} dimension="large">
          <ModalFooter>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary" data-test="DesignSystem-ModalButton">
              Primary
            </Button>
          </ModalFooter>
        </Modal>
        <Modal backdropClose={FunctionValue} open={false} />
      </>
    );

    const triggerButton = getByTestId('DesignSystem-ModalButton');
    fireEvent.click(triggerButton);

    rerender(
      <>
        <Modal backdropClose={FunctionValue} open={true} dimension="large">
          <ModalFooter>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary" data-test="DesignSystem-ModalButton">
              Primary
            </Button>
          </ModalFooter>
        </Modal>
        <Modal backdropClose={FunctionValue} open={true} />
      </>
    );

    const zIndexOne = getAllByTestId('DesignSystem-ModalContainer')[0].style.zIndex || 0;
    const zIndexTwo = getAllByTestId('DesignSystem-ModalContainer')[1].style.zIndex || 0;

    expect(Number(zIndexTwo)).toBeGreaterThan(Number(zIndexOne));
  });
});

describe('Modal Component with overwrite class', () => {
  const className = 'DS-Modal';

  it('overwrite Avatar class', () => {
    const { getByTestId } = render(<Modal backdropClose={FunctionValue} open={true} className={className} />);

    expect(getByTestId('DesignSystem-Modal')).toHaveClass(className);
  });
});

describe('Modal focus trap', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('focuses the heading (aria-labelledby target) when modal opens so VoiceOver announces the dialog title', async () => {
    const { getByTestId } = render(
      <Modal
        open={true}
        onClose={jest.fn()}
        headerOptions={{ heading: 'Heading', subHeading: 'Subheading' }}
        footer={
          <>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary">Primary</Button>
          </>
        }
      >
        <Text>Body</Text>
      </Modal>
    );

    await flushRAF();

    const heading = getByTestId('DesignSystem-OverlayHeader--heading');
    expect(document.activeElement).toBe(heading);
    expect(heading).toHaveAttribute('tabindex', '-1');
  });

  it('focuses container when modal has no focusable elements (content-only)', async () => {
    const { getByTestId } = render(
      <Modal open={true} onClose={jest.fn()}>
        <Text>Content only, no buttons or inputs</Text>
      </Modal>
    );

    await flushRAF();

    const modalContainer = getByTestId('DesignSystem-Modal');
    expect(document.activeElement).toBe(modalContainer);
    expect(modalContainer).toHaveAttribute('tabindex', '-1');
  });

  it('focuses container (not body children) when no header is present but body has focusable elements', async () => {
    const { getByTestId } = render(
      <Modal open={true} onClose={jest.fn()}>
        <Button data-test="body-btn">Action</Button>
      </Modal>
    );

    await flushRAF();

    const modalContainer = getByTestId('DesignSystem-Modal');
    expect(document.activeElement).toBe(modalContainer);
    expect(modalContainer).toHaveAttribute('tabindex', '-1');
  });

  it('focuses dialog container when aria-labelledby is set but no headerOptions (no matching heading in DOM)', async () => {
    const { getByTestId } = render(
      <Modal
        open={true}
        onClose={jest.fn()}
        aria-labelledby="modal-a11y-heading"
        footer={
          <>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary">Primary</Button>
          </>
        }
      >
        <Text>Modal Body</Text>
      </Modal>
    );

    await flushRAF();

    const modalContainer = getByTestId('DesignSystem-Modal');
    expect(document.activeElement).toBe(modalContainer);
    expect(modalContainer).toHaveAttribute('tabindex', '-1');
  });

  it('legacy ModalFooter open={open}: OverlayFooter focuses last secondary button (known limitation — use headerOptions + footer props for correct focus management)', async () => {
    const { getByTestId } = render(
      <Modal open={true} onClose={jest.fn()} aria-labelledby="legacy-heading">
        <ModalHeader heading="Heading" headingId="legacy-heading" onClose={jest.fn()} />
        <ModalBody>
          <Text>Body</Text>
        </ModalBody>
        <ModalFooter open={true}>
          <Button appearance="basic" data-test="basic-btn">
            Cancel
          </Button>
          <Button appearance="primary">Confirm</Button>
        </ModalFooter>
      </Modal>
    );

    await flushRAF();
    await flushRAF();

    const cancelButton = getByTestId('basic-btn');
    expect(document.activeElement).toBe(cancelButton);
  });

  it('prevents Tab from escaping content-only modal', async () => {
    const { getByTestId } = render(
      <Modal open={true} onClose={jest.fn()}>
        <Text>Content only</Text>
      </Modal>
    );

    await flushRAF();

    const modalContainer = getByTestId('DesignSystem-Modal');
    expect(document.activeElement).toBe(modalContainer);

    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
    const preventDefaultSpy = jest.spyOn(tabEvent, 'preventDefault');
    document.dispatchEvent(tabEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(document.activeElement).toBe(modalContainer);
  });

  it('prevents Shift+Tab from escaping content-only modal', async () => {
    const { getByTestId } = render(
      <Modal open={true} onClose={jest.fn()}>
        <Text>Content only</Text>
      </Modal>
    );

    await flushRAF();

    const modalContainer = getByTestId('DesignSystem-Modal');
    const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true });
    const preventDefaultSpy = jest.spyOn(shiftTabEvent, 'preventDefault');
    document.dispatchEvent(shiftTabEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(document.activeElement).toBe(modalContainer);
  });

  it('Tab from last focusable wraps to first', async () => {
    const { getByTestId } = render(
      <Modal
        open={true}
        onClose={jest.fn()}
        headerOptions={{ heading: 'Heading' }}
        footer={
          <>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary" data-test="primary-btn">
              Primary
            </Button>
          </>
        }
      >
        <Text>Body</Text>
      </Modal>
    );

    await flushRAF();

    const primaryButton = getByTestId('primary-btn');
    primaryButton.focus();
    expect(document.activeElement).toBe(primaryButton);

    fireEvent.keyDown(document, { key: 'Tab' });

    const closeButton = getByTestId('DesignSystem-Modal--CloseButton');
    expect(document.activeElement).toBe(closeButton);
  });

  it('Shift+Tab from first focusable wraps to last', async () => {
    const { getByTestId } = render(
      <Modal
        open={true}
        onClose={jest.fn()}
        headerOptions={{ heading: 'Heading' }}
        footer={
          <>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary" data-test="primary-btn">
              Primary
            </Button>
          </>
        }
      >
        <Text>Body</Text>
      </Modal>
    );

    await flushRAF();

    // Move focus to the close button (first interactive element) before testing the wrap
    const closeButton = getByTestId('DesignSystem-Modal--CloseButton');
    closeButton.focus();
    expect(document.activeElement).toBe(closeButton);

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });

    const primaryButton = getByTestId('primary-btn');
    expect(document.activeElement).toBe(primaryButton);
  });

  it('restores focus to trigger when modal closes via Escape', async () => {
    jest.useRealTimers();
    const TestComponent = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          <Button data-test="trigger" onClick={() => setOpen(true)}>
            Open
          </Button>
          <Modal open={open} onClose={() => setOpen(false)} closeOnEscape={true} backdropClose={true}>
            <Text>Content</Text>
          </Modal>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    const trigger = getByTestId('trigger');
    await act(async () => {
      trigger.focus();
      fireEvent.click(trigger);
    });
    await flushRAF();

    const modalContainer = getByTestId('DesignSystem-Modal');
    await act(async () => {
      fireEvent.keyDown(modalContainer, { key: 'Escape' });
    });
    await flushRAF();

    await act(async () => {
      await new Promise((r) => setTimeout(r, 150));
    });
    await flushRAF();

    expect(document.activeElement).toBe(trigger);
    jest.useFakeTimers();
  });

  it('restores focus to trigger when modal closes via close button', async () => {
    jest.useRealTimers();
    const TestComponent = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          <Button data-test="trigger" onClick={() => setOpen(true)}>
            Open
          </Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            headerOptions={{ heading: 'Heading' }}
            footer={<Button appearance="primary">Primary</Button>}
          >
            <Text>Content</Text>
          </Modal>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    const trigger = getByTestId('trigger');
    await act(async () => {
      trigger.focus();
      fireEvent.click(trigger);
    });
    await flushRAF();

    const closeButton = getByTestId('DesignSystem-Modal--CloseButton');
    await act(async () => {
      fireEvent.click(closeButton);
    });
    await flushRAF();

    await act(async () => {
      await new Promise((r) => setTimeout(r, 150));
    });
    await flushRAF();

    expect(document.activeElement).toBe(trigger);
    jest.useFakeTimers();
  });

  it('focus trap works without closeOnEscape or backdropClose', async () => {
    const { getByTestId } = render(
      <Modal
        open={true}
        onClose={jest.fn()}
        closeOnEscape={false}
        headerOptions={{ heading: 'Heading' }}
        footer={
          <>
            <Button appearance="basic" data-test="basic-btn">
              Basic
            </Button>
            <Button appearance="primary" data-test="primary-btn">
              Primary
            </Button>
          </>
        }
      >
        <Text>Body</Text>
      </Modal>
    );

    await flushRAF();

    const primaryButton = getByTestId('primary-btn');
    primaryButton.focus();
    fireEvent.keyDown(document, { key: 'Tab' });

    const closeButton = getByTestId('DesignSystem-Modal--CloseButton');
    expect(document.activeElement).toBe(closeButton);
  });

  it('Escape closes modal even when closeOnEscape={false} to prevent keyboard trap (WCAG 2.2.1)', async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal open={true} onClose={onClose} closeOnEscape={false} headerOptions={{ heading: 'Heading' }}>
        <Text>Body</Text>
      </Modal>
    );

    await flushRAF();

    const modalContainer = getByTestId('DesignSystem-Modal');
    fireEvent.keyDown(modalContainer, { key: 'Escape' });

    expect(onClose).toHaveBeenCalled();
  });

  it('focuses heading (aria-labelledby target) over first interactive element when heading is present', async () => {
    const { getByTestId } = render(
      <Modal
        open={true}
        onClose={jest.fn()}
        headerOptions={{ heading: 'Heading' }}
        footer={
          <>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary">Primary</Button>
          </>
        }
      >
        <Text>Body</Text>
      </Modal>
    );

    await flushRAF();

    const heading = getByTestId('DesignSystem-OverlayHeader--heading');
    expect(document.activeElement).toBe(heading);
    expect(heading).toHaveAttribute('tabindex', '-1');
  });

  it('uses aria-labelledby value as heading id when headerOptions.heading is provided without headingId', () => {
    const { getByTestId } = render(
      <Modal open={true} headerOptions={{ heading: 'Dialog Title' }} aria-labelledby="dialog-heading" />
    );
    expect(getByTestId('DesignSystem-Modal')).toHaveAttribute('aria-labelledby', 'dialog-heading');
    expect(getByTestId('DesignSystem-OverlayHeader--heading')).toHaveAttribute('id', 'dialog-heading');
  });

  it('does not write a multi-token aria-labelledby as heading id', () => {
    // aria-labelledby can be a space-separated list of IDs. Writing that list as a
    // single id attribute is invalid HTML. The heading must not receive an id in this case.
    const { getByTestId } = render(
      <Modal open={true} headerOptions={{ heading: 'Dialog Title' }} aria-labelledby="label-a label-b" />
    );
    expect(getByTestId('DesignSystem-Modal')).toHaveAttribute('aria-labelledby', 'label-a label-b');
    expect(getByTestId('DesignSystem-OverlayHeader--heading')).not.toHaveAttribute('id');
  });

  it('inner widget can stop Escape propagation to prevent modal from closing', async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal open={true} onClose={onClose} headerOptions={{ heading: 'Heading' }}>
        <button data-test="inner-widget">Inner</button>
      </Modal>
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
  });

  it('Shift+Tab from heading (initial static focus target) wraps to last focusable when no back button', async () => {
    // No back button: DOM order is [heading][closeButton…][footer buttons].
    // Heading precedes first tabbable (close button), so Shift+Tab must wrap to last.
    const { getByTestId } = render(
      <Modal
        open={true}
        onClose={jest.fn()}
        headerOptions={{ heading: 'Heading' }}
        footer={
          <>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary" data-test="last-btn">
              Primary
            </Button>
          </>
        }
      >
        <Text>Body</Text>
      </Modal>
    );

    await flushRAF();

    const heading = getByTestId('DesignSystem-OverlayHeader--heading');
    expect(document.activeElement).toBe(heading);

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });

    const lastButton = getByTestId('last-btn');
    expect(document.activeElement).toBe(lastButton);
  });

  it('Shift+Tab from heading falls through to back button when back button precedes heading in DOM', async () => {
    // Back button present: DOM order is [backButton][heading][closeButton…][footer].
    // Back button is first tabbable and comes before the heading, so Shift+Tab from the
    // heading should NOT wrap — the browser's natural reverse-tab lands on the back button.
    const { getByTestId } = render(
      <Modal
        open={true}
        onClose={jest.fn()}
        headerOptions={{ heading: 'Heading', backButton: true, backButtonCallback: jest.fn() }}
        footer={
          <>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary" data-test="last-btn">
              Primary
            </Button>
          </>
        }
      >
        <Text>Body</Text>
      </Modal>
    );

    await flushRAF();

    const heading = getByTestId('DesignSystem-OverlayHeader--heading');
    expect(document.activeElement).toBe(heading);

    // Shift+Tab should NOT wrap to last; the trap should not intercept this case.
    // After the keydown the focus stays on the heading because jsdom doesn't do
    // real tab navigation — what matters is that preventDefault was NOT called
    // (the trap did not hijack the event).
    const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true });
    const preventDefaultSpy = jest.spyOn(shiftTabEvent, 'preventDefault');
    document.dispatchEvent(shiftTabEvent);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });
});

describe('Modal component a11y', () => {
  it('has no detectable a11y violations', async () => {
    render(<Modal open={true} headerOptions={{ heading: 'Test Modal' }} />);
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
