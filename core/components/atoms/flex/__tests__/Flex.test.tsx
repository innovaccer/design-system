import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper } from '@/utils/testHelper';
import { Flex } from '../Flex';
import { FlexProps } from '../index';

describe('Flex component', () => {
  const mapper = {
    direction: valueHelper(['row', 'column', 'row-reverse', 'column-reverse'], { required: false, iterate: true }),
    justifyContent: valueHelper(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'], {
      required: false,
      iterate: true,
    }),
    alignItems: valueHelper(['flex-start', 'flex-end', 'center', 'baseline', 'stretch'], {
      required: false,
      iterate: true,
    }),
    wrap: valueHelper(['wrap', 'nowrap', 'wrap-reverse'], { required: false, iterate: true }),
    gap: valueHelper([0, 2, 4, 8, 12, 16, 20, 24, 32, 40], { required: false, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const flexProps = filterUndefined(props) as FlexProps;
    render(
      <Flex data-testid="DesignSystem-Flex" {...flexProps}>
        Flex Content
      </Flex>
    );

    const flex = screen.getByTestId('DesignSystem-Flex');
    expect(flex).toBeInTheDocument();
  };

  testHelper(mapper, testFunc);

  describe('direction', () => {
    test('renders Flex component with direction row', () => {
      render(
        <Flex direction="row" data-testid="DesignSystem-Flex">
          Flex Content
        </Flex>
      );
      const flex = screen.getByTestId('DesignSystem-Flex');
      expect(flex.className).toContain('Flex--row');
    });

    test('renders Flex component with direction column', () => {
      render(
        <Flex direction="column" data-testid="DesignSystem-Flex">
          Flex Content
        </Flex>
      );
      const flex = screen.getByTestId('DesignSystem-Flex');
      expect(flex.className).toContain('Flex--column');
    });
  });

  describe('justifyContent', () => {
    test('renders Flex component with justifyContent center', () => {
      render(
        <Flex justifyContent="center" data-testid="DesignSystem-Flex">
          Flex Content
        </Flex>
      );
      const flex = screen.getByTestId('DesignSystem-Flex');
      expect(flex.className).toContain('Flex--justifyCenter');
    });
  });

  describe('alignItems', () => {
    test('renders Flex component with alignItems center', () => {
      render(
        <Flex alignItems="center" data-testid="DesignSystem-Flex">
          Flex Content
        </Flex>
      );
      const flex = screen.getByTestId('DesignSystem-Flex');
      expect(flex.className).toContain('Flex--alignCenter');
    });
  });

  describe('wrap', () => {
    test('renders Flex component with wrap', () => {
      render(
        <Flex wrap="wrap" data-testid="DesignSystem-Flex">
          Flex Content
        </Flex>
      );
      const flex = screen.getByTestId('DesignSystem-Flex');
      expect(flex.className).toContain('Flex--wrap');
    });
  });

  describe('gap', () => {
    test('renders Flex component with gap 8', () => {
      render(
        <Flex gap={8} data-testid="DesignSystem-Flex">
          Flex Content
        </Flex>
      );
      const flex = screen.getByTestId('DesignSystem-Flex');
      expect(flex.className).toContain('Flex--gap8');
    });
  });
});
