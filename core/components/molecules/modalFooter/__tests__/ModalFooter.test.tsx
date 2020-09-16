import * as React from 'react';
import { render } from '@testing-library/react';
import ModalFooter, { ModalFooterProps as Props } from '../ModalFooter';
import { Button } from '@/index';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';

describe('ModalFooter component', () => {

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <ModalFooter>
          <Button appearance="basic" onClick={() => null}>Basic</Button>
          <Button appearance="primary" onClick={() => null}>Primary</Button>
        </ModalFooter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper({}, testFunc);
});

describe('ModalFooter component with props: children', () => {

  it('renders children', () => {
    const { getAllByTestId } = render(
      <ModalFooter>
        <Button appearance="basic" data-test="Modal-Button">Basic</Button>
        <Button appearance="primary" data-test="Modal-Button">Primary</Button>
      </ModalFooter>
    );

    expect(getAllByTestId('Modal-Button')).toHaveLength(2);
  });
});

describe('ModalFooter with overwrite class', () => {
  const className = 'DS-ModalFooter';

  it('overwrite ModalFooter class', () => {
    const { getByTestId } = render(
      <ModalFooter className={className}>
        <Button appearance="basic" data-test="Modal-Button">Basic</Button>
        <Button appearance="primary" data-test="Modal-Button">Primary</Button>
      </ModalFooter>
    );

    expect(getByTestId('DesignSystem-ModalFooter')).toHaveClass(className);
  });

});
