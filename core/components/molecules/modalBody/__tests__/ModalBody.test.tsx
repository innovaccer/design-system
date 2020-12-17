import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';
import { ModalBodyProps as Props } from '../ModalBody';
import { ModalBody } from '@/index';

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
