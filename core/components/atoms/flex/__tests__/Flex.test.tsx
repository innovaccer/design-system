import * as React from 'react';
import { render } from '@testing-library/react';
import Flex, { FlexGap, FlexDirection, FlexJustifyContent, FlexAlignItems, FlexWrap } from '../Flex';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const spacingTokenMap: Record<FlexGap, string> = {
  'spacing-10': 'var(--spacing-10)',
  'spacing-20': 'var(--spacing-20)',
  'spacing-30': 'var(--spacing-30)',
  'spacing-40': 'var(--spacing-40)',
  'spacing-60': 'var(--spacing-60)',
  'spacing-80': 'var(--spacing-80)',
  'spacing-120': 'var(--spacing-120)',
  'spacing-160': 'var(--spacing-160)',
};

const getSpacingValue = (spacing: FlexGap): string => {
  return spacingTokenMap[spacing];
};

const direction: FlexDirection[] = ['row', 'column', 'row-reverse', 'column-reverse'];
const justifyContent: FlexJustifyContent[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignItems: FlexAlignItems[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const wrap: FlexWrap[] = ['wrap', 'nowrap', 'wrap-reverse'];
const gap: FlexGap[] = [
  'spacing-10',
  'spacing-20',
  'spacing-30',
  'spacing-40',
  'spacing-60',
  'spacing-80',
  'spacing-120',
  'spacing-160',
];

describe('Flex component', () => {
  const mapper = {
    direction: valueHelper(direction, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Flex {...attr}>Flex Content</Flex>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Flex component with justifyContent', () => {
  const mapper = {
    justifyContent: valueHelper(justifyContent, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Flex {...attr}>Flex Content</Flex>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Flex component with alignItems', () => {
  const mapper = {
    alignItems: valueHelper(alignItems, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Flex {...attr}>Flex Content</Flex>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Flex component with wrap', () => {
  const mapper = {
    wrap: valueHelper(wrap, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Flex {...attr}>Flex Content</Flex>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Flex component with gap', () => {
  const mapper = {
    gap: valueHelper(gap, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Flex {...attr}>Flex Content</Flex>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Flex component with columnGap', () => {
  const mapper = {
    columnGap: valueHelper(gap, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Flex {...attr}>Flex Content</Flex>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Flex component with rowGap', () => {
  const mapper = {
    rowGap: valueHelper(gap, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Flex {...attr}>Flex Content</Flex>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Flex component specifics', () => {
  it('renders children', () => {
    const { getByTestId } = render(<Flex>Child Content</Flex>);
    expect(getByTestId('DesignSystem-Flex')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Flex')).toHaveTextContent('Child Content');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(<Flex className="custom-flex-class">Flex Content</Flex>);
    expect(getByTestId('DesignSystem-Flex')).toHaveClass('custom-flex-class');
  });

  it('applies inline style for direction', () => {
    const { getByTestId } = render(<Flex direction="column">Flex Content</Flex>);
    expect(getByTestId('DesignSystem-Flex')).toHaveStyle({ flexDirection: 'column' });
  });

  it('applies inline style for justifyContent', () => {
    const { getByTestId } = render(<Flex justifyContent="center">Flex Content</Flex>);
    expect(getByTestId('DesignSystem-Flex')).toHaveStyle({ justifyContent: 'center' });
  });

  it('applies inline style for alignItems', () => {
    const { getByTestId } = render(<Flex alignItems="center">Flex Content</Flex>);
    expect(getByTestId('DesignSystem-Flex')).toHaveStyle({ alignItems: 'center' });
  });

  it('applies inline style for wrap', () => {
    const { getByTestId } = render(<Flex wrap="wrap">Flex Content</Flex>);
    expect(getByTestId('DesignSystem-Flex')).toHaveStyle({ flexWrap: 'wrap' });
  });

  it('applies responsive direction', () => {
    const { getByTestId } = render(<Flex direction={{ xs: 'column', md: 'row' }}>Flex Content</Flex>);
    const flexElement = getByTestId('DesignSystem-Flex');
    expect(flexElement).toHaveStyle({ flexDirection: 'column' });
  });

  it('applies responsive justifyContent', () => {
    const { getByTestId } = render(<Flex justifyContent={{ xs: 'flex-start', md: 'center' }}>Flex Content</Flex>);
    const flexElement = getByTestId('DesignSystem-Flex');
    expect(flexElement).toHaveStyle({ justifyContent: 'flex-start' });
  });

  it('applies responsive alignItems', () => {
    const { getByTestId } = render(<Flex alignItems={{ xs: 'flex-start', md: 'center' }}>Flex Content</Flex>);
    const flexElement = getByTestId('DesignSystem-Flex');
    expect(flexElement).toHaveStyle({ alignItems: 'flex-start' });
  });

  it('applies responsive wrap', () => {
    const { getByTestId } = render(<Flex wrap={{ xs: 'nowrap', md: 'wrap' }}>Flex Content</Flex>);
    const flexElement = getByTestId('DesignSystem-Flex');
    expect(flexElement).toHaveStyle({ flexWrap: 'nowrap' });
  });

  it('applies responsive gap', () => {
    const { getByTestId } = render(<Flex gap={{ xs: 'spacing-10', md: 'spacing-20' }}>Flex Content</Flex>);
    const flexElement = getByTestId('DesignSystem-Flex');
    expect(flexElement).toHaveStyle({ gap: 'var(--spacing-10)' });
  });

  describe('Flex component with prop:gap', () => {
    gap.forEach((gapValue) => {
      it(`applies inline style and className for gap=${gapValue}`, () => {
        const { getByTestId } = render(<Flex gap={gapValue}>Flex Content</Flex>);
        const flexElement = getByTestId('DesignSystem-Flex');
        expect(flexElement).toHaveClass(`Flex--gap--${gapValue}`);
        expect(flexElement).toHaveStyle({ gap: getSpacingValue(gapValue) });
      });
    });
  });

  describe('Flex component with prop:columnGap', () => {
    gap.forEach((gapValue) => {
      it(`applies className for columnGap=${gapValue}`, () => {
        const { getByTestId } = render(<Flex columnGap={gapValue}>Flex Content</Flex>);
        const flexElement = getByTestId('DesignSystem-Flex');
        expect(flexElement).toHaveClass(`Flex--columnGap--${gapValue}`);
      });
    });
  });

  describe('Flex component with prop:rowGap', () => {
    gap.forEach((gapValue) => {
      it(`applies className for rowGap=${gapValue}`, () => {
        const { getByTestId } = render(<Flex rowGap={gapValue}>Flex Content</Flex>);
        const flexElement = getByTestId('DesignSystem-Flex');
        expect(flexElement).toHaveClass(`Flex--rowGap--${gapValue}`);
      });
    });
  });

  describe('Flex component with prop:direction', () => {
    direction.forEach((dir) => {
      it(`applies className for direction=${dir}`, () => {
        const { getByTestId } = render(<Flex direction={dir}>Flex Content</Flex>);
        const expectedClass = dir === 'row-reverse' ? 'rowReverse' : dir === 'column-reverse' ? 'columnReverse' : dir;
        expect(getByTestId('DesignSystem-Flex')).toHaveClass(`Flex--${expectedClass}`);
      });
    });
  });

  describe('Flex component with prop:justifyContent', () => {
    justifyContent.forEach((justify) => {
      it(`applies className for justifyContent=${justify}`, () => {
        const { getByTestId } = render(<Flex justifyContent={justify}>Flex Content</Flex>);
        const expectedClass =
          justify === 'flex-start'
            ? 'Flex--justifyStart'
            : justify === 'flex-end'
              ? 'Flex--justifyEnd'
              : justify === 'center'
                ? 'Flex--justifyCenter'
                : justify === 'space-between'
                  ? 'Flex--justifyBetween'
                  : justify === 'space-around'
                    ? 'Flex--justifyAround'
                    : 'Flex--justifyEvenly';
        expect(getByTestId('DesignSystem-Flex')).toHaveClass(expectedClass);
      });
    });
  });

  describe('Flex component with prop:alignItems', () => {
    alignItems.forEach((align) => {
      it(`applies className for alignItems=${align}`, () => {
        const { getByTestId } = render(<Flex alignItems={align}>Flex Content</Flex>);
        const expectedClass =
          align === 'flex-start'
            ? 'Flex--alignStart'
            : align === 'flex-end'
              ? 'Flex--alignEnd'
              : align === 'center'
                ? 'Flex--alignCenter'
                : align === 'baseline'
                  ? 'Flex--alignBaseline'
                  : 'Flex--alignStretch';
        expect(getByTestId('DesignSystem-Flex')).toHaveClass(expectedClass);
      });
    });
  });

  describe('Flex component with prop:wrap', () => {
    wrap.forEach((wrapValue) => {
      it(`applies className for wrap=${wrapValue}`, () => {
        const { getByTestId } = render(<Flex wrap={wrapValue}>Flex Content</Flex>);
        const expectedClass = wrapValue === 'wrap-reverse' ? 'Flex--wrapReverse' : `Flex--${wrapValue}`;
        expect(getByTestId('DesignSystem-Flex')).toHaveClass(expectedClass);
      });
    });
  });
});
