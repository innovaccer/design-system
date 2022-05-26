import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FullscreenModalProps as Props } from '@/index.type';
import { FullscreenModal, Button, Text } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const dimension = ['medium', 'large'];
const footer = (
  <>
    <Button appearance="primary" className="mr-4" data-test="DesignSystem-FullscreenModal--FooterButton">
      Primary
    </Button>
    <Button appearance="basic">Basic</Button>
  </>
);
const header = <Text data-test="DesignSystem-FullscreenModal--HeaderText">Heading</Text>;

const footerOptions = { actions: [] };

const headerOptions = {
  heading: 'this is heading',
  subHeading: 'this is subheading',
};

const onClose = jest.fn();

describe('FullscreenModal component', () => {
  const mapper = {
    dimension: valueHelper(dimension, { required: true, iterate: true }),
    open: valueHelper(true, { required: true }),
  };

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

describe('FullscreenModal component', () => {
  const mapper = {
    dimension: valueHelper(dimension, { required: true, iterate: true }),
    open: valueHelper(true, { required: true }),
    header: valueHelper(header, { required: true }),
    footer: valueHelper(footer, { required: true }),
  };

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

describe('FullscreenModal component', () => {
  const mapper = {
    dimension: valueHelper(dimension, { required: true, iterate: true }),
    open: valueHelper(true, { required: true }),
    headerOptions: valueHelper(headerOptions, { required: true }),
    footerOptions: valueHelper(footerOptions, { required: true }),
  };

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
  it('renders children with prop: open ', () => {
    const { getByTestId } = render(<FullscreenModal open={true} />);

    expect(getByTestId('DesignSystem-FullscreenModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal')).toBeInTheDocument();
  });

  it('renders children with props : headerOptions & footerOptions ', () => {
    const { getByTestId } = render(
      <FullscreenModal open={true} headerOptions={headerOptions} footerOptions={footerOptions}>
        <p>FullscreenModal Body</p>
      </FullscreenModal>
    );

    expect(getByTestId('DesignSystem-FullscreenModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal--CloseButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal--Body')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal--header')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal--footer')).toBeInTheDocument();
  });

  it('renders children with props : header & footer', () => {
    const { getByTestId } = render(
      <FullscreenModal open={true} header={header} footer={footer}>
        <p>FullscreenModal Body</p>
      </FullscreenModal>
    );

    expect(getByTestId('DesignSystem-FullscreenModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal--CloseButton')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal--Body')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal--HeaderText')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal--FooterButton')).toBeInTheDocument();
  });

  it('renders children without footer and footerOptions props', () => {
    const { getByTestId, queryByTestId } = render(
      <FullscreenModal open={true} header={header}>
        <p>FullscreenModal Body</p>
      </FullscreenModal>
    );
    expect(getByTestId('DesignSystem-FullscreenModalContainer')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-FullscreenModal')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-FullscreenModal--footer')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-FullscreenModal--FooterButton')).not.toBeInTheDocument();
  });

  it('renders with prop: onClose and header', () => {
    const { getByTestId } = render(<FullscreenModal open={true} header={header} onClose={onClose} />);

    const closeIcon = getByTestId('DesignSystem-FullscreenModal--CloseButton');
    fireEvent.click(closeIcon);
    expect(onClose).toHaveBeenCalled();
  });
});

describe('FullscreenModal component with prop: dimension', () => {
  it('renders FullscreenModal with dimension: medium', () => {
    const { getByTestId } = render(<FullscreenModal open={true} dimension={'medium'} />);

    expect(getByTestId('DesignSystem-FullscreenModal').childNodes[0].childNodes[0]).toHaveClass(
      'Col Col--4 Col--xs-12'
    );
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

    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass('FullscreenModal-animation--open');
    expect(getByTestId('DesignSystem-FullscreenModalContainer')).toHaveClass('Overlay-container--open');
  });

  it('renders FullscreenModal with open: false', () => {
    const { container } = render(<FullscreenModal open={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders FullscreenModal with toggle of open', () => {
    const { getByTestId, rerender } = render(<FullscreenModal open={true}>this is modal body</FullscreenModal>);

    expect(getByTestId('DesignSystem-FullscreenModal')).toHaveClass('FullscreenModal-animation--open');

    const closeIcon = getByTestId('DesignSystem-FullscreenModal--CloseButton');
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
          footer={
            <>
              <Button appearance="basic">Basic</Button>
              <Button appearance="primary" data-test="DesignSystem-ModalButton">
                Primary
              </Button>
            </>
          }
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
          footer={
            <>
              <Button appearance="basic">Basic</Button>
              <Button appearance="primary" data-test="DesignSystem-ModalButton">
                Primary
              </Button>
            </>
          }
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
