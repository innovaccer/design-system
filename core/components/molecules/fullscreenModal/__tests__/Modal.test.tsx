import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FullscreenModalProps as Props } from '@/index.type';
import { FullscreenModal, Button } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const dimension = ['medium', 'large'];

const mapper = {
  dimension: valueHelper(dimension, { required: true, iterate: true }),
  open: valueHelper(true, { required: true })
};

describe('FullscreenModal component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<FullscreenModal {...rest}>this is modal body</FullscreenModal>);

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('FullscreenModal component with props', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <FullscreenModal
        open={true}
        headerOptions={{
          heading: 'this is heading',
          subHeading: 'this is subheading'
        }}
        footerOptions={{ actions: [] }}
      >
        <p>FullscreenModal Body</p>
      </FullscreenModal>
    );

    expect(getByTestId('DesignSystem-ModalHeader')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-ModalBody')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-ModalFooter')).toBeInTheDocument();
  });
});

describe('FullscreenModal component with prop: dimension', () => {
  it('renders FullscreenModal with dimension: medium', () => {
    const { getByTestId } = render(<FullscreenModal open={true} dimension={'medium'} />);

    expect(getByTestId('DesignSystem-FullscreenModal').childNodes[0].childNodes[0])
    .toHaveClass('Col Col--4 Col--xs-12');
  });

  it('renders FullscreenModal with dimension: large', () => {
    const { getByTestId } = render(<FullscreenModal open={true} dimension={'large'} />);

    expect(getByTestId('DesignSystem-FullscreenModal').childNodes[0].childNodes[0]).toHaveClass(
      'Col Col--6 Col--xs-12'
    );
  });
});

describe('FullscreenModal component with prop: open', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders FullscreenModal with open: true', () => {
    const { getByTestId } = render(<FullscreenModal open={true} />);

    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass('FullscreenModal--open');
    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass('FullscreenModal-animation--open');
    expect(getByTestId('DesignSystem-FullscreenModalContainer')).toHaveClass('Overlay-container--open');
  });

  it('renders FullscreenModal with open: false', () => {
    const { getByTestId } = render(<FullscreenModal open={false} />);

    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass('FullscreenModal-animation--close');
  });

  it('renders FullscreenModal with toggle of open', () => {
    const { getByTestId, rerender } = render(<FullscreenModal open={true}>this is modal body</FullscreenModal>);

    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass('FullscreenModal--open');
    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass('FullscreenModal-animation--open');

    const closeIcon = getByTestId('DesignSystem-ModalHeader--CloseIcon');
    fireEvent.click(closeIcon);

    rerender(<FullscreenModal open={false}>this is modal body</FullscreenModal>);

    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass('FullscreenModal-animation--close');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});

describe('Multiple modal components', () => {
  it('renders multiple modal components', () => {
    const { getAllByTestId, rerender, getByTestId } = render(
      <>
        <FullscreenModal
          open={true}
          dimension="large"
          footer={(
            <>
              <Button appearance="basic">Basic</Button>
              <Button appearance="primary" data-test="DesignSystem-ModalButton">
                Primary
              </Button>
            </>
          )}
        >
          this is modal body.
        </FullscreenModal>
        <FullscreenModal open={false} />
      </>
    );

    const triggerButton = getByTestId('DesignSystem-ModalButton');
    fireEvent.click(triggerButton);

    rerender(
      <>
        <FullscreenModal
          open={true}
          dimension="large"
          footer={(
            <>
              <Button appearance="basic">Basic</Button>
              <Button appearance="primary" data-test="DesignSystem-ModalButton">
                Primary
              </Button>
            </>
          )}
        >
          this is modal body.
        </FullscreenModal>
        <FullscreenModal open={true} />
      </>
    );

    const zIndexOne = getAllByTestId('DesignSystem-FullscreenModalContainer')[0].style.zIndex || 0;
    const zIndexTwo = getAllByTestId('DesignSystem-FullscreenModalContainer')[1].style.zIndex || 0;

    expect(Number(zIndexTwo)).toBeGreaterThan(Number(zIndexOne));
  });
});

describe('FullscreenModal Component with overwrite className', () => {
  const className = 'DS-FullscreenModal';

  it('overwrite Avatar className', () => {
    const { getByTestId } = render(<FullscreenModal open={true} className={className} />);

    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass(className);
  });
});
