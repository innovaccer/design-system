import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';
import { ModalBodyProps as Props } from '../ModalBody';
import { ModalBody } from '@/index';

const scrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight') || 0;
const clientHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight') || 0;

describe('ModalBody component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <ModalBody>
          <div>
            <p>Modal Body</p>
          </div>
        </ModalBody>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper({}, testFunc);
});

describe('renders ModalBody component', () => {

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', scrollHeight);
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', clientHeight);
  });

  it('renders children without scroll', () => {

    const { getByTestId } = render(
      <ModalBody>
        <div data-test="DS-ModalBody">
          <p>Modal Body</p>
        </div>
      </ModalBody>
    );

    expect(getByTestId('DS-ModalBody')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-ModalBody')).not.toHaveClass('Modal-body--border');
  });

  it('renders children with scroll', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 500 });
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 480 });

    const { getByTestId } = render(
      <ModalBody>
        <div style={{ height: '500px' }} data-test="DS-ModalBody">
          <p>Modal Body</p>
        </div>
      </ModalBody>
    );

    expect(getByTestId('DesignSystem-ModalBody')).toHaveClass('Modal-body--border');
  });

});

describe('ModalBody with overwrite class', () => {
  const className = 'DS-ModalBody';

  it('overwrite ModalBody class', () => {
    const { getByTestId } = render(
      <ModalBody className={className}>
        <div>
          <p>Modal Body</p>
        </div>
      </ModalBody>
    );
    expect(getByTestId('DesignSystem-ModalBody')).toHaveClass(className);
  });

});
