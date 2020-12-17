import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ModalProps as Props } from '@/index.type';
import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const FunctionValue = jest.fn();
const dimension = ['small', 'medium', 'large'];

const modalHeaderOptions = {
  onClose: () => null,
  icon: 'pan_tool',
  heading: 'Heading',
  subHeading: 'Subheading'
};

const mapper = {
  backdropClose: valueHelper([FunctionValue], { iterate: true }),
  dimension: valueHelper(dimension, { required: true, iterate: true }),
  open: valueHelper(true, { required: true }),
};

describe('Modal component', () => {
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

  it('renders children', () => {
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true}>
        <ModalHeader {...modalHeaderOptions} data-test="DS-ModalHeader" />
        <ModalBody data-test="DS-ModalBody">
          <p>Modal Body</p>
        </ModalBody>
        <ModalFooter data-test="DS-ModalFooter">
          <Button appearance="basic">Basic</Button>
          <Button appearance="primary">Primary</Button>
        </ModalFooter>
      </Modal>
    );

    expect(getByTestId('DS-ModalHeader')).toBeInTheDocument();
    expect(getByTestId('DS-ModalBody')).toBeInTheDocument();
    expect(getByTestId('DS-ModalFooter')).toBeInTheDocument();
  });

  it('renders with prop: backdropClose', () => {
    const { getByTestId } = render(
      <>
        <div data-test="DS-OutsideClick">Outside Click</div>
        <Modal backdropClose={FunctionValue} open={true} />
      </>
    );

    const OutsideClick = getByTestId('DS-OutsideClick');
    fireEvent.click(OutsideClick);
    expect(FunctionValue).toHaveBeenCalled();
  });

});

describe('Modal component with prop: dimension', () => {

  it('renders Modal with dimension: small', () => {
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true} dimension={'small'}/>
    );

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Col Col--3 Col--xs-10');
  });

  it('renders Modal with dimension: medium', () => {
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true} dimension={'medium'} />
    );

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Col Col--4 Col--xs-10');
  });

  it('renders Modal with dimension: large', () => {
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true} dimension={'large'} />
    );

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
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true} />
    );

    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Modal--open');
    expect(getByTestId('DesignSystem-Modal')).toHaveClass('Modal-animation--open');
    expect(getByTestId('DesignSystem-ModalContainer')).toHaveClass('Modal-container--open');
  });

  it('renders Modal with open: false', () => {
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={false} />
    );

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

    const closeIcon = getByTestId('DesignSystem-ModalHeader--CloseIcon');
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
            <Button appearance="primary" data-test="DS-ModalButton">Primary</Button>
          </ModalFooter>
        </Modal>
        <Modal backdropClose={FunctionValue} open={false} />
      </>
    );

    const triggerButton = getByTestId('DS-ModalButton');
    fireEvent.click(triggerButton);

    rerender(
      <>
        <Modal backdropClose={FunctionValue} open={true} dimension="large">
          <ModalFooter>
            <Button appearance="basic">Basic</Button>
            <Button appearance="primary" data-test="DS-ModalButton">Primary</Button>
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
    const { getByTestId } = render(
      <Modal backdropClose={FunctionValue} open={true} className={className} />
    );

    expect(getByTestId('DesignSystem-Modal')).toHaveClass(className);
  });

});
