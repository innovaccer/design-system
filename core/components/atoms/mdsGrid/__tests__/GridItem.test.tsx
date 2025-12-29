import * as React from 'react';
import { render } from '@testing-library/react';
import MdsGrid from '../MdsGrid';
import { GridColumnSpan, GridRowSpan, GridJustifySelf, GridAlignSelf } from '../GridItem';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

// Define test values for props
const columnSpan: GridColumnSpan[] = [1, 2, 3, 4, 6, 12];
const rowSpan: GridRowSpan[] = [1, 2, 3];
const columnStart = [1, 2, 3, 4];
const rowStart = [1, 2, 3];
const justifySelf: GridJustifySelf[] = ['start', 'center', 'end', 'stretch'];
const alignSelf: GridAlignSelf[] = ['start', 'center', 'end', 'stretch'];

describe('GridItem component', () => {
  const mapper = {
    columnSpan: valueHelper(columnSpan, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <MdsGrid templateColumns="repeat(12, 1fr)">
          <MdsGrid.GridItem {...attr}>Grid Item Content</MdsGrid.GridItem>
        </MdsGrid>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('GridItem component with rowSpan', () => {
  const mapper = {
    rowSpan: valueHelper(rowSpan, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props);

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <MdsGrid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, auto)">
          <MdsGrid.GridItem {...attr}>Grid Item Content</MdsGrid.GridItem>
        </MdsGrid>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('GridItem component specifics', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <MdsGrid>
        <MdsGrid.GridItem>
          <div data-test="test-child">Child Content</div>
        </MdsGrid.GridItem>
      </MdsGrid>
    );
    expect(getByTestId('DesignSystem-MdsGridItem')).toBeInTheDocument();
    expect(getByTestId('test-child')).toBeInTheDocument();
  });

  describe('GridItem Component with overwrite class', () => {
    it('applies custom className', () => {
      const { getByTestId } = render(
        <MdsGrid>
          <MdsGrid.GridItem className="custom-grid-item-class">Grid Item Content</MdsGrid.GridItem>
        </MdsGrid>
      );
      expect(getByTestId('DesignSystem-MdsGridItem')).toHaveClass('custom-grid-item-class');
    });
  });

  describe('GridItem component with prop:columnSpan', () => {
    columnSpan.forEach((span) => {
      it(`applies className for columnSpan=${span}`, () => {
        const { getByTestId } = render(
          <MdsGrid>
            <MdsGrid.GridItem columnSpan={span}>Grid Item Content</MdsGrid.GridItem>
          </MdsGrid>
        );
        expect(getByTestId('DesignSystem-MdsGridItem')).toHaveClass(`MdsGridItem-columnSpan--${span}`);
      });
    });
  });

  describe('GridItem component with prop:rowSpan', () => {
    rowSpan.forEach((span) => {
      it(`applies className for rowSpan=${span}`, () => {
        const { getByTestId } = render(
          <MdsGrid>
            <MdsGrid.GridItem rowSpan={span}>Grid Item Content</MdsGrid.GridItem>
          </MdsGrid>
        );
        expect(getByTestId('DesignSystem-MdsGridItem')).toHaveClass(`MdsGridItem-rowSpan--${span}`);
      });
    });
  });

  describe('GridItem component with prop:columnStart', () => {
    columnStart.forEach((start) => {
      it(`applies className for columnStart=${start}`, () => {
        const { getByTestId } = render(
          <MdsGrid>
            <MdsGrid.GridItem columnStart={start}>Grid Item Content</MdsGrid.GridItem>
          </MdsGrid>
        );
        expect(getByTestId('DesignSystem-MdsGridItem')).toHaveClass(`MdsGridItem-columnStart--${start}`);
      });
    });
  });

  describe('GridItem component with prop:rowStart', () => {
    rowStart.forEach((start) => {
      it(`applies className for rowStart=${start}`, () => {
        const { getByTestId } = render(
          <MdsGrid>
            <MdsGrid.GridItem rowStart={start}>Grid Item Content</MdsGrid.GridItem>
          </MdsGrid>
        );
        expect(getByTestId('DesignSystem-MdsGridItem')).toHaveClass(`MdsGridItem-rowStart--${start}`);
      });
    });
  });

  describe('GridItem component with prop:justifySelf', () => {
    justifySelf.forEach((justify) => {
      it(`applies className for justifySelf=${justify}`, () => {
        const { getByTestId } = render(
          <MdsGrid>
            <MdsGrid.GridItem justifySelf={justify}>Grid Item Content</MdsGrid.GridItem>
          </MdsGrid>
        );
        expect(getByTestId('DesignSystem-MdsGridItem')).toHaveClass(`MdsGridItem-justifySelf--${justify}`);
      });
    });
  });

  describe('GridItem component with prop:alignSelf', () => {
    alignSelf.forEach((align) => {
      it(`applies className for alignSelf=${align}`, () => {
        const { getByTestId } = render(
          <MdsGrid>
            <MdsGrid.GridItem alignSelf={align}>Grid Item Content</MdsGrid.GridItem>
          </MdsGrid>
        );
        expect(getByTestId('DesignSystem-MdsGridItem')).toHaveClass(`MdsGridItem-alignSelf--${align}`);
      });
    });
  });
});
