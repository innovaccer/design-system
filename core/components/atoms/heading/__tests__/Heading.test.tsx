import * as React from 'react';
import { render } from '@testing-library/react';
import Heading, { HeadingProps as Props, Appearance, Size } from '../Heading';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance: Appearance[] = ['default', 'subtle', 'disabled', 'white'];
const sizes: Size[] = ['s', 'm', 'l', 'xl', 'xxl'];

describe('Heading component', () => {
  const mapper = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Heading {...attr}>Heading</Heading>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Heading component', () => {
  const mapper = {
    size: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Heading {...attr}>Heading</Heading>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Heading component', () => {
  const sizeMap = {
    s: 'H5',
    m: 'H4',
    l: 'H3',
    xl: 'H2',
    xxl: 'H1',
  };

  it('renders children', () => {
    const { getByTestId } = render(<Heading>{'Heading'}</Heading>);
    expect(getByTestId('DesignSystem-Heading')).toHaveTextContent('Heading');
  });

  describe('Heading Component with overwrite class', () => {
    it('overwrite Heading class', () => {
      const { getByTestId } = render(<Heading className="HeadingClass">{'Heading'}</Heading>);
      expect(getByTestId('DesignSystem-Heading')).toHaveClass('HeadingClass');
    });
  });

  describe('Heading component with prop:appearance', () => {
    appearance.forEach((appear) => {
      it(`should have the Heading--${appear} class when appearance=${appear} `, () => {
        const { getByTestId } = render(<Heading appearance={appear}>{'Heading'}</Heading>);
        expect(getByTestId('DesignSystem-Heading')).toHaveClass(`Heading--${appear}`);
      });
    });
  });

  describe('Heading component with prop:size', () => {
    sizes.forEach((size) => {
      it(`should have the Heading--${size} class when appearance=${size} `, () => {
        const { getByTestId } = render(<Heading size={size}>{'Heading'}</Heading>);
        expect(getByTestId('DesignSystem-Heading')).toHaveClass(`Heading--${size}`);
      });
    });
  });
  describe('Heading component attribute componentType', () => {
    sizes.forEach((size) => {
      it(`should have the Heading--${size} class when appearance=${size} `, () => {
        const { getByTestId } = render(<Heading size={size}>{'Heading'}</Heading>);
        expect(getByTestId('DesignSystem-Heading').tagName).toEqual(`${sizeMap[size]}`);
      });
    });
  });
});
