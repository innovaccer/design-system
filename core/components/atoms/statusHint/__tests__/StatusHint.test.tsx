import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import StatusHint, { StatusHintProps as IProps, Appearance } from '../StatusHint';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const label = 'StatusHint';
const appearances: Appearance[] = ['default', 'alert', 'info', 'warning', 'success'];

describe('StatusHint component', () => {
  const mapper = {
    appearance: valueHelper(appearances, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <StatusHint {...attr}>
          {label}
        </StatusHint>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('StatusHint component', () => {

  it('renders children', () => {

    const { getByTestId } = render(<StatusHint appearance="info">{'Design System'}</StatusHint>);
    expect(getByTestId('DesignSystem-StatusHint--Text').textContent).toMatch('Design System');

  });

  it('renders children', () => {

    const { getByTestId } = render(<StatusHint appearance="info">{'Design System'}</StatusHint>);
    expect(getByTestId('DesignSystem-StatusHint--Icon').tagName).toMatch('SPAN');

  });

  describe('StatusHint Component with overwrite class', () => {

    it('overwrite StatusHint class', () => {
      const { getByTestId } = render(<StatusHint className="StatusHintClass">{'StatusHint'}</StatusHint>);
      expect(getByTestId('DesignSystem-StatusHint')).toHaveClass('StatusHintClass');
    });

  });

  describe('StatusHint component with prop:appearance', () => {
    appearances.forEach(appearance => {
      it(`should have the StatusHint--${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(<StatusHint appearance={appearance}>{'Design'}</StatusHint>);
        expect(getByTestId('DesignSystem-StatusHint--Icon')).toHaveClass(`StatusHint--${appearance}`);
      });
    });
  });

});
