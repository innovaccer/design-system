import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ColumnProps as Props } from '@/index.type';
import { Column } from '@/index';
import { filterUndefined, testHelper, testMessageHelper, valueHelper } from '@/utils/testHelper';

const onClick = jest.fn();

const sizes = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  'auto',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
];

describe('Column component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Column {...attr}>
          <div>Masala Design System</div>
        </Column>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Column component', () => {
  const mapper: Record<string, any> = {
    sizeXS: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Column {...attr}>
          <div>Masala Design System</div>
        </Column>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Column component', () => {
  const mapper: Record<string, any> = {
    sizeS: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Column {...attr}>
          <div>Masala Design System</div>
        </Column>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Column component', () => {
  const mapper: Record<string, any> = {
    sizeM: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Column {...attr}>
          <div>Masala Design System</div>
        </Column>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Column component', () => {
  const mapper: Record<string, any> = {
    sizeL: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Column {...attr}>
          <div>Masala Design System</div>
        </Column>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Column component', () => {
  const mapper: Record<string, any> = {
    sizeXL: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Column {...attr}>
          <div>Masala Design System</div>
        </Column>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Column component', () => {
  const children = <div>Masala Design System</div>;

  it('renders children', () => {
    const { getByTestId } = render(<Column>{children}</Column>);
    expect(getByTestId('DesignSystem-Column')).toContainHTML('<div>Masala Design System</div>');
  });

  it('with className', () => {
    const { getByTestId } = render(<Column className="ColumnClass">{children}</Column>);
    expect(getByTestId('DesignSystem-Column')).toHaveClass('ColumnClass');
  });

  it('accepts other attributes', () => {
    const { getByTestId } = render(<Column onClick={onClick}>{children}</Column>);

    fireEvent.click(getByTestId('DesignSystem-Column'));
    expect(onClick).toBeCalled();
  });
});
