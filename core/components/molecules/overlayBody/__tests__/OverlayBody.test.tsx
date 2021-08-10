import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';
import { OverlayBody, OverlayBodyProps as Props } from '../OverlayBody';

describe('OverlayBody component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <OverlayBody>
          <div>Overlay Body</div>
        </OverlayBody>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper({}, testFunc);
});

describe('OverlayBody with overwrite class', () => {
  const className = 'DS-OverlayBody';

  it('overwrite ModalBody class', () => {
    const { getByTestId } = render(
      <OverlayBody className={className}>
        <div>Modal Body</div>
      </OverlayBody>
    );
    expect(getByTestId('DesignSystem-OverlayBody')).toHaveClass(className);
  });
});
