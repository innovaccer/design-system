import * as React from 'react';
import { render } from '@testing-library/react';
import { Link } from '@/index';
import { LinkProps } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const target = ['_blank', '_self', '_parent', '_top'];
const appearances: LinkProps['appearance'][] = ['default', 'subtle'];
const sizes: LinkProps['size'][] = ['regular', 'tiny'];
const StringValue = 'Sample string';
const FunctionValue = jest.fn();

const Mapper = {
  id: valueHelper(StringValue, { required: true }),
  href: valueHelper(StringValue, { required: true }),
  target: valueHelper(target, { required: true, iterate: true }),
  rel: valueHelper(StringValue, { required: true }),
  onClick: valueHelper(FunctionValue, { required: true }),
};

describe('Link component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as LinkProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Link {...attr}>Link</Link>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('Link component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<Link>Click on Link</Link>);
    expect(getByTestId('DesignSystem-Link').textContent).toMatch('Click on Link');
  });

  it('renders tag name', () => {
    const { getByTestId } = render(<Link>Click on Link</Link>);
    expect(getByTestId('DesignSystem-Link').tagName).toMatch('A');
  });

  it('renders default props', () => {
    const { getByTestId } = render(<Link>Click on Link</Link>);
    expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--regular');
    expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--default');
  });

  describe('Link Component with overwrite class', () => {
    it('overwrite Link class', () => {
      const { getByTestId } = render(<Link className="LinkClass">Click on Link</Link>);
      expect(getByTestId('DesignSystem-Link')).toHaveClass('Link LinkClass');
    });
  });

  describe('Link component with prop:appearance', () => {
    appearances.forEach((appearance) => {
      it(`should have the Link--${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(<Link appearance={appearance}>Click on Link</Link>);
        expect(getByTestId('DesignSystem-Link')).toHaveClass(`Link--${appearance}`);
      });
    });
  });

  describe('Link component with prop:size', () => {
    sizes.forEach((size) => {
      it(`should have the Link--${size} class when appearance=${size} `, () => {
        const { getByTestId } = render(<Link size={size}>Click on Link</Link>);
        expect(getByTestId('DesignSystem-Link')).toHaveClass(`Link--${size}`);
      });
    });
  });

  describe('Link component with prop:disabled and with no appearance', () => {
    it('link should be disabled', () => {
      const { getByTestId } = render(<Link disabled={true}>Click on Link</Link>);
      expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--default-disabled');
    });
  });

  describe('Link component with prop:disabled and with default appearance', () => {
    it('link should be disabled', () => {
      const { getByTestId } = render(
        <Link disabled={true} appearance="default">
          Click on Link
        </Link>
      );
      expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--default-disabled');
    });
  });

  describe('Link component with prop:disabled and with subtle appearance', () => {
    it('link should be disabled', () => {
      const { getByTestId } = render(
        <Link disabled={true} appearance="subtle">
          Click on Link
        </Link>
      );
      expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--subtle-disabled');
    });
  });
});
