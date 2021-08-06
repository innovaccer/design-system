import * as React from 'react';
import { render } from '@testing-library/react';
import OverlayFooter, { OverlayFooterProps as Props } from '../OverlayFooter';
import { Button } from '@/index';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';

describe('OverlayFooter component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <OverlayFooter>
          <Button appearance="basic" onClick={() => null}>
            Basic
          </Button>
          <Button appearance="primary" onClick={() => null}>
            Primary
          </Button>
        </OverlayFooter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper({}, testFunc);
});

describe('OverlayFooter component with props: children', () => {
  it('renders children', () => {
    const { getAllByTestId } = render(
      <OverlayFooter>
        <Button appearance="basic" data-test="Modal-Button">
          Basic
        </Button>
        <Button appearance="primary" data-test="Modal-Button">
          Primary
        </Button>
      </OverlayFooter>
    );

    expect(getAllByTestId('Modal-Button')).toHaveLength(2);
  });
});

describe('OverlayFooter with overwrite class', () => {
  const className = 'DS-OverlayFooter';

  it('overwrite OverlayFooter class', () => {
    const { getByTestId } = render(
      <OverlayFooter className={className}>
        <Button appearance="basic" data-test="Modal-Button">
          Basic
        </Button>
        <Button appearance="primary" data-test="Modal-Button">
          Primary
        </Button>
      </OverlayFooter>
    );

    expect(getByTestId('DesignSystem-OverlayFooter')).toHaveClass(className);
  });
});
