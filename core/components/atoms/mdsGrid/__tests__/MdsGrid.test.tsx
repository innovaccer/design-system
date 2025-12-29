import * as React from 'react';
import { render } from '@testing-library/react';
import MdsGrid, { GridGap, GridJustifyItems, GridAlignItems, GridAutoFlow } from '../MdsGrid';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const spacingTokenMap: Record<GridGap, string> = {
  'spacing-10': 'var(--spacing-10)',
  'spacing-20': 'var(--spacing-20)',
  'spacing-30': 'var(--spacing-30)',
  'spacing-40': 'var(--spacing-40)',
  'spacing-60': 'var(--spacing-60)',
  'spacing-80': 'var(--spacing-80)',
  'spacing-120': 'var(--spacing-120)',
  'spacing-160': 'var(--spacing-160)',
};

const getSpacingValue = (spacing: GridGap): string => {
  return spacingTokenMap[spacing];
};

// Define test values for props
const templateColumns = ['1fr', 'repeat(3, 1fr)', '200px 1fr 1fr', '2fr 1fr 1fr', 'repeat(12, 1fr)'];
const templateRows = ['auto', 'repeat(3, auto)', '100px auto 200px', '1fr 2fr'];
const gap: GridGap[] = [
  'spacing-10',
  'spacing-20',
  'spacing-30',
  'spacing-40',
  'spacing-60',
  'spacing-80',
  'spacing-120',
  'spacing-160',
];
const justifyItems: GridJustifyItems[] = ['start', 'center', 'end', 'stretch'];
const alignItems: GridAlignItems[] = ['start', 'center', 'end', 'stretch'];
const autoFlow: GridAutoFlow[] = ['row', 'column', 'row dense', 'column dense'];

describe('MdsGrid component', () => {
  const mapper = {
    templateColumns: valueHelper(templateColumns, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <MdsGrid {...attr}>
          <div>Grid Item 1</div>
          <div>Grid Item 2</div>
        </MdsGrid>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MdsGrid component with templateRows', () => {
  const mapper = {
    templateRows: valueHelper(templateRows, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <MdsGrid templateColumns="repeat(3, 1fr)" {...attr}>
          <div>Grid Item 1</div>
          <div>Grid Item 2</div>
        </MdsGrid>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MdsGrid component with gap', () => {
  const mapper = {
    gap: valueHelper(gap, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <MdsGrid {...attr}>
          <div>Grid Item 1</div>
          <div>Grid Item 2</div>
        </MdsGrid>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MdsGrid component specifics', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <MdsGrid>
        <div data-test="test-child">Child 1</div>
        <div>Child 2</div>
      </MdsGrid>
    );
    expect(getByTestId('DesignSystem-MdsGrid')).toBeInTheDocument();
    expect(getByTestId('test-child')).toBeInTheDocument();
  });

  describe('MdsGrid Component with overwrite class', () => {
    it('applies custom className', () => {
      const { getByTestId } = render(<MdsGrid className="custom-grid-class">Grid Content</MdsGrid>);
      expect(getByTestId('DesignSystem-MdsGrid')).toHaveClass('custom-grid-class');
    });
  });

  describe('MdsGrid component with prop:templateColumns', () => {
    templateColumns.forEach((columns) => {
      it(`applies inline style for templateColumns=${columns}`, () => {
        const { getByTestId } = render(<MdsGrid templateColumns={columns}>Grid Content</MdsGrid>);
        const gridElement = getByTestId('DesignSystem-MdsGrid');
        expect(gridElement).toHaveStyle({ gridTemplateColumns: columns });
      });
    });
  });

  describe('MdsGrid component with prop:templateRows', () => {
    templateRows.forEach((rows) => {
      it(`applies inline style for templateRows=${rows}`, () => {
        const { getByTestId } = render(
          <MdsGrid templateColumns="repeat(3, 1fr)" templateRows={rows}>
            Grid Content
          </MdsGrid>
        );
        const gridElement = getByTestId('DesignSystem-MdsGrid');
        expect(gridElement).toHaveStyle({ gridTemplateRows: rows });
      });
    });
  });

  describe('MdsGrid component with responsive values', () => {
    it('applies responsive templateColumns', () => {
      const { getByTestId } = render(
        <MdsGrid templateColumns={{ xs: '1fr', md: 'repeat(2, 1fr)' }}>Grid Content</MdsGrid>
      );
      const gridElement = getByTestId('DesignSystem-MdsGrid');
      expect(gridElement).toHaveStyle({ gridTemplateColumns: '1fr' });
    });

    it('applies responsive templateRows', () => {
      const { getByTestId } = render(
        <MdsGrid templateColumns="repeat(3, 1fr)" templateRows={{ xs: 'auto', md: 'repeat(2, auto)' }}>
          Grid Content
        </MdsGrid>
      );
      const gridElement = getByTestId('DesignSystem-MdsGrid');
      expect(gridElement).toHaveStyle({ gridTemplateRows: 'auto' });
    });

    it('applies responsive gap', () => {
      const { getByTestId } = render(<MdsGrid gap={{ xs: 'spacing-10', md: 'spacing-20' }}>Grid Content</MdsGrid>);
      const gridElement = getByTestId('DesignSystem-MdsGrid');
      expect(gridElement).toHaveStyle({ gap: 'var(--spacing-10)' });
    });
  });

  describe('MdsGrid component with prop:gap', () => {
    gap.forEach((gapValue) => {
      it(`applies inline style and className for gap=${gapValue}`, () => {
        const { getByTestId } = render(<MdsGrid gap={gapValue}>Grid Content</MdsGrid>);
        const gridElement = getByTestId('DesignSystem-MdsGrid');
        expect(gridElement).toHaveClass(`MdsGrid-gap--${gapValue}`);
        expect(gridElement).toHaveStyle({ gap: getSpacingValue(gapValue) });
      });
    });
  });

  describe('MdsGrid component with prop:columnGap', () => {
    gap.forEach((gapValue) => {
      it(`applies className for columnGap=${gapValue}`, () => {
        const { getByTestId } = render(<MdsGrid columnGap={gapValue}>Grid Content</MdsGrid>);
        const gridElement = getByTestId('DesignSystem-MdsGrid');
        expect(gridElement).toHaveClass(`MdsGrid-columnGap--${gapValue}`);
      });
    });
  });

  describe('MdsGrid component with prop:rowGap', () => {
    gap.forEach((gapValue) => {
      it(`applies className for rowGap=${gapValue}`, () => {
        const { getByTestId } = render(<MdsGrid rowGap={gapValue}>Grid Content</MdsGrid>);
        const gridElement = getByTestId('DesignSystem-MdsGrid');
        expect(gridElement).toHaveClass(`MdsGrid-rowGap--${gapValue}`);
      });
    });
  });

  describe('MdsGrid component with prop:justifyItems', () => {
    justifyItems.forEach((justify) => {
      it(`applies className for justifyItems=${justify}`, () => {
        const { getByTestId } = render(<MdsGrid justifyItems={justify}>Grid Content</MdsGrid>);
        expect(getByTestId('DesignSystem-MdsGrid')).toHaveClass(`MdsGrid-justifyItems--${justify}`);
      });
    });
  });

  describe('MdsGrid component with prop:alignItems', () => {
    alignItems.forEach((align) => {
      it(`applies className for alignItems=${align}`, () => {
        const { getByTestId } = render(<MdsGrid alignItems={align}>Grid Content</MdsGrid>);
        expect(getByTestId('DesignSystem-MdsGrid')).toHaveClass(`MdsGrid-alignItems--${align}`);
      });
    });
  });

  describe('MdsGrid component with prop:autoFlow', () => {
    autoFlow.forEach((flow) => {
      it(`applies className for autoFlow=${flow}`, () => {
        const { getByTestId } = render(<MdsGrid autoFlow={flow}>Grid Content</MdsGrid>);
        expect(getByTestId('DesignSystem-MdsGrid')).toHaveClass(`MdsGrid-autoFlow--${flow}`);
      });
    });
  });
});
