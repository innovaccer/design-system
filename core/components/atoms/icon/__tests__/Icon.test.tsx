import * as React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProps as Props, IconAppearance } from '../Icon';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = 50;
const appearance: IconAppearance[] = [
  'destructive',
  'white',
  'subtle',
  'disabled',
  'alert',
  'info',
  'success',
  'warning',
  'primary',
  'primary_dark',
  'primary_lighter',
  'alert_dark',
  'alert_lighter',
  'success_dark',
  'success_lighter',
  'warning_dark',
  'warning_lighter',
  'accent1',
  'accent1_dark',
  'accent1_lighter',
  'accent2',
  'accent2_dark',
  'accent2_lighter',
  'accent3',
  'accent3_dark',
  'accent3_lighter',
  'accent4',
  'accent4_dark',
  'accent4_lighter',
  'inverse',
];
const type = ['filled', 'outline', 'rounded', 'outlined', 'round', 'two-tone', 'sharp'];
const FunctionValue = jest.fn();
const StringValue = 'events';

const getIconAppearance = (iconColor: string) => {
  const x = iconColor.indexOf('_');
  return iconColor.slice(0, x) + iconColor.charAt(x + 1).toUpperCase() + iconColor.slice(x + 2);
};

describe('Icon component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(StringValue, { required: true }),
    size: valueHelper(size, { required: true }),
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Icon {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Icon component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(StringValue, { required: true }),
    size: valueHelper(size, { required: true }),
    type: valueHelper(type, { required: true, iterate: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Icon {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Icon component', () => {
  it('should render the Icon', () => {
    const { getByTestId } = render(<Icon size={size} name={StringValue} />);
    expect(getByTestId('DesignSystem-Icon')).toHaveTextContent('events_round');
  });

  it('should render componentType="i"', () => {
    const { getByTestId } = render(<Icon size={size} name={StringValue} />);
    expect(getByTestId('DesignSystem-Icon').tagName).toEqual('I');
  });

  describe('Icon Component with overwrite class', () => {
    it('overwrite Icon class', () => {
      const { getByTestId } = render(<Icon className="IconClass" size={size} name={StringValue} />);
      expect(getByTestId('DesignSystem-Icon')).toHaveClass('IconClass');
    });
  });

  describe('Icon Component with Prop:type', () => {
    it('should have the class material-icons-outlined when type="outlined"', () => {
      const { getByTestId } = render(<Icon size={size} name={StringValue} type="outlined" />);
      expect(getByTestId('DesignSystem-Icon')).toHaveClass('material-icons-outlined');
    });

    it('should have the class material-icons-two-tone when type="two-tone"', () => {
      const { getByTestId } = render(<Icon size={size} name={StringValue} type="two-tone" />);
      expect(getByTestId('DesignSystem-Icon')).toHaveClass('material-icons-two-tone');
    });
  });

  describe('Icon Component with Prop:appearances', () => {
    it('should have the class Icon--primary when appearances="primary"', () => {
      const { getByTestId } = render(<Icon appearance="primary" size={size} name={StringValue} />);
      expect(getByTestId('DesignSystem-Icon')).toHaveClass('Icon--primary');
    });

    appearance.forEach((state) => {
      const iconAppearance = state && state.includes('_') ? getIconAppearance(state) : state;
      it(`should have the Icon--${iconAppearance} class when appearances=${state} `, () => {
        const { getByTestId } = render(<Icon appearance={state} size={size} name={StringValue} />);
        expect(getByTestId('DesignSystem-Icon')).toHaveClass(`Icon--${iconAppearance}`);
      });
    });
  });

  describe('Icon Component with Prop:color', () => {
    it('should have the icon color as accent1 when prop color="accent1"', () => {
      const { getByTestId } = render(<Icon color="accent1" size={size} name={StringValue} />);
      expect(getByTestId('DesignSystem-Icon')).toHaveClass('color-accent1');
    });

    it('should given preference to color over appearance prop', () => {
      const { getByTestId } = render(<Icon color="accent1" size={size} name={StringValue} appearance="inverse" />);
      expect(getByTestId('DesignSystem-Icon')).toHaveClass('color-accent1');
    });
  });
});
