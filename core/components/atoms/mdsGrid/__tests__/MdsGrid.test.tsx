import * as React from 'react';
import { render } from '@testing-library/react';
import MdsGrid, { GridGap, GridJustifyItems, GridAlignItems, GridAutoFlow } from '../MdsGrid';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

// Define test values for props
const templateColumns = ['1fr', 'repeat(3, 1fr)', '200px 1fr 1fr', '2fr 1fr 1fr', 'repeat(12, 1fr)'];
const gap: GridGap[] = ['spacing-10', 'spacing-20', 'spacing-40', 'spacing-80'];
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
      it(`applies className for templateColumns=${columns}`, () => {
        const { getByTestId } = render(<MdsGrid templateColumns={columns}>Grid Content</MdsGrid>);
        expect(getByTestId('DesignSystem-MdsGrid')).toHaveClass(`MdsGrid-templateColumns--${columns}`);
      });
    });
  });

  describe('MdsGrid component with prop:gap', () => {
    gap.forEach((gapValue) => {
      it(`applies className for gap=${gapValue}`, () => {
        const { getByTestId } = render(<MdsGrid gap={gapValue}>Grid Content</MdsGrid>);
        expect(getByTestId('DesignSystem-MdsGrid')).toHaveClass(`MdsGrid-gap--${gapValue}`);
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
