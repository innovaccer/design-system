import * as React from 'react';
import { render } from '@testing-library/react';
import Badge, { BadgeProps as Props, Appearance } from '../Badge';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearances: Appearance[] = ['primary', 'alert', 'warning', 'success', 'accent1',
  'accent2', 'accent3', 'accent4'];
const BooleanValue = [true, false];

const mapper = {
  appearance: valueHelper(appearances, { required: true, iterate: true }),
  subtle: valueHelper(BooleanValue, { required: true, iterate: true }),
};

describe('Badge component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Badge
          {...attr}
        >
          Badge
        </Badge>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Badge component', () => {

  it('renders children', () => {
    const { getByTestId } = render(<Badge children="Badge" subtle={true} appearance="secondary" />);
    expect(getByTestId('DesignSystem-Badge').textContent).toMatch('Badge');

  });

  describe('Badge Component with overwrite class', () => {

    it('overwrite badge class', () => {
      const { getByTestId } = render(
        <Badge className="BadgeClass" children="Design" subtle={true} appearance="secondary" />
      );
      expect(getByTestId('DesignSystem-Badge')).toHaveClass('Badge BadgeClass');
    });

  });

  describe('Badge component tagName', () => {

    it('should have span element', () => {
      const { getByTestId } = render(<Badge children="Design" subtle={true} appearance="secondary" />);
      expect(getByTestId('DesignSystem-Badge').tagName).toMatch('SPAN');
    });

  });

  describe('Badge component with prop:appearance', () => {

    appearances.forEach(appearance => {
      it(`should have the Badge--${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(<Badge children="Design" appearance={appearance} />);
        expect(getByTestId('DesignSystem-Badge')).toHaveClass(`Badge--${appearance}`);
      });
    });
  });

  describe('Badge component with prop:subtle', () => {

    appearances.forEach(appearance => {
      it(`should have the Badge--subtle-${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(<Badge children="Design" appearance={appearance} subtle={true} />);
        expect(getByTestId('DesignSystem-Badge')).toHaveClass(`Badge--subtle-${appearance}`);
      });
    });
  });
});
