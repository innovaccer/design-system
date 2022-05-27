import * as React from 'react';
import { render } from '@testing-library/react';
import Heading, { HeadingProps as Props, HeadingSize } from '../Heading';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { HeadingAppearance } from '@/common.type';

const appearance: HeadingAppearance[] = ['default', 'subtle', 'disabled', 'white'];
const sizes: HeadingSize[] = ['s', 'm', 'l', 'xl', 'xxl'];
const sizeMap = {
  s: 'H5',
  m: 'H4',
  l: 'H3',
  xl: 'H2',
  xxl: 'H1',
};

describe('Heading component Snapshot for prop:appearance', () => {
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

describe('Heading component Snapshot for prop:size', () => {
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

describe('Heading component Unit Tests', () => {
  it('renders children', () => {
    const { getByTestId } = render(<Heading>{'Heading'}</Heading>);
    expect(getByTestId('DesignSystem-Heading')).toHaveTextContent('Heading');
  });

  it('overwrite Heading class', () => {
    const { getByTestId } = render(<Heading className="HeadingClass">{'Heading'}</Heading>);
    expect(getByTestId('DesignSystem-Heading')).toHaveClass('HeadingClass');
  });
});

describe('Heading component with prop:appearance', () => {
  appearance.forEach((appear) => {
    it(`should have the Heading--${appear} class when appearance=${appear} `, () => {
      const { getByTestId } = render(<Heading appearance={appear}>{'Heading'}</Heading>);
      expect(getByTestId('DesignSystem-Heading')).toHaveClass(`Mds-Heading--${appear}`);
    });
  });
});

describe('Heading component with prop:size', () => {
  sizes.forEach((size) => {
    it(`should have the Heading--${size} class when appearance=${size} `, () => {
      const { getByTestId } = render(<Heading size={size}>{'Heading'}</Heading>);
      expect(getByTestId('DesignSystem-Heading')).toHaveClass(`Mds-Heading--${size}`);
    });
  });
});

describe('Heading component attribute componentType', () => {
  sizes.forEach((size) => {
    it(`should have the Heading tagname`, () => {
      const { getByTestId } = render(<Heading size={size}>{'Heading'}</Heading>);
      expect(getByTestId('DesignSystem-Heading').tagName).toEqual(`${sizeMap[size]}`);
    });
  });
});
