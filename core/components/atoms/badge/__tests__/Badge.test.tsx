import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Badge, { BadgeProps as Props } from '../Badge';
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

describe('Badge component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Badge {...attr}>Badge</Badge>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Badge component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Badge subtle={true} appearance="secondary">
        Badge
      </Badge>
    );
    expect(getByTestId('DesignSystem-Badge').textContent).toMatch('Badge');
  });

  describe('Badge Component with overwrite class', () => {
    it('overwrite badge class', () => {
      const { getByTestId } = render(
        <Badge className="BadgeClass" subtle={true} appearance="secondary">
          Design
        </Badge>
      );
      expect(getByTestId('DesignSystem-Badge')).toHaveClass('Badge BadgeClass');
    });
  });

  describe('Badge component tagName', () => {
    it('should have span element', () => {
      const { getByTestId } = render(
        <Badge subtle={true} appearance="secondary">
          Design
        </Badge>
      );
      expect(getByTestId('DesignSystem-Badge').tagName).toMatch('SPAN');
    });
  });

  describe('Badge component with prop:appearance', () => {
    appearances.forEach((appearance) => {
      it(`should have the Badge--${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(<Badge appearance={appearance}>Design</Badge>);
        expect(getByTestId('DesignSystem-Badge')).toHaveClass(`Badge--${appearance}`);
      });
    });
  });

  describe('Badge component with prop:subtle', () => {
    appearances.forEach((appearance) => {
      it(`should have the Badge--subtle-${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(
          <Badge appearance={appearance} subtle={true}>
            Design
          </Badge>
        );
        expect(getByTestId('DesignSystem-Badge')).toHaveClass(`Badge--subtle-${appearance}`);
      });
    });
  });
});

describe('Badge component hover event', () => {
  it('should handle mouse enter event', () => {
    const onMouseEnter = jest.fn();
    const { getByTestId } = render(
      <Badge appearance="primary" onMouseEnter={onMouseEnter}>
        Hover Badge
      </Badge>
    );

    const badge = getByTestId('DesignSystem-Badge');
    fireEvent.mouseEnter(badge);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it('should handle mouse leave event', () => {
    const onMouseLeave = jest.fn();
    const { getByTestId } = render(
      <Badge appearance="primary" onMouseLeave={onMouseLeave}>
        Hover Badge
      </Badge>
    );

    const badge = getByTestId('DesignSystem-Badge');
    fireEvent.mouseEnter(badge);
    fireEvent.mouseLeave(badge);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});

describe('Badge component accessibility', () => {
  it('supports aria-label for additional context', () => {
    const { getByTestId } = render(
      <Badge appearance="success" aria-label="Status: success">
        Success
      </Badge>
    );
    expect(getByTestId('DesignSystem-Badge')).toHaveAttribute('aria-label', 'Status: success');
  });

  it('allows passing a role attribute', () => {
    const { getByTestId } = render(
      <Badge appearance="warning" role="status">
        Warning
      </Badge>
    );
    expect(getByTestId('DesignSystem-Badge')).toHaveAttribute('role', 'status');
  });
});
