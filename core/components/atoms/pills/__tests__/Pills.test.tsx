import * as React from 'react';
import { render } from '@testing-library/react';
import Pills, { PillsProps as Props } from '../Pills';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { AccentAppearance } from '@/common.type';

const appearances: AccentAppearance[] = [
  'primary',
  'alert',
  'warning',
  'success',
  'accent1',
  'accent2',
  'accent3',
  'accent4',
];
const BooleanValue = [true, false];

const mapper = {
  appearance: valueHelper(appearances, { required: true, iterate: true }),
  subtle: valueHelper(BooleanValue, { required: true, iterate: true }),
};

describe('Pills component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Pills {...attr}>Pills</Pills>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Pills component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Pills subtle={true} appearance="secondary">
        {'Pills'}
      </Pills>
    );
    expect(getByTestId('DesignSystem-Pills').textContent).toMatch('Pills');
  });

  describe('Pill component tagName', () => {
    it('renders tagName', () => {
      const { getByTestId } = render(
        <Pills subtle={true} appearance="secondary">
          {'Design System'}
        </Pills>
      );
      expect(getByTestId('DesignSystem-Pills').tagName).toMatch('SPAN');
    });
  });

  describe('Pills Component with overwrite class', () => {
    it('overwrite Pills class', () => {
      const { getByTestId } = render(<Pills className="PillsClass">{'Pills'}</Pills>);
      expect(getByTestId('DesignSystem-Pills')).toHaveClass('PillsClass');
    });
  });

  describe('Pills component with prop:appearance', () => {
    appearances.forEach((appearance) => {
      it(`should have the Badge--${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(<Pills appearance={appearance}>{'Design'}</Pills>);
        expect(getByTestId('DesignSystem-Pills')).toHaveClass(`Badge--${appearance}`);
      });
    });
  });

  describe('Pills component with prop:subtle', () => {
    appearances.forEach((appearance) => {
      it(`should have the Badge--subtle-${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(
          <Pills appearance={appearance} subtle={true}>
            {'Design'}
          </Pills>
        );
        expect(getByTestId('DesignSystem-Pills')).toHaveClass(`Badge--subtle-${appearance}`);
      });
    });
  });
});
