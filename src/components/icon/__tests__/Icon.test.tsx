import * as React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProps as Props } from '../Icon';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = 50;
const appearance = [
  'destructive',
  'white',
  'subtle',
  'disabled',
  'alert',
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
const type = ['filled', 'outlined', 'round', 'two-tone', 'sharp'];
const FunctionValue = jest.fn();
const StringValue = 'events';

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

  describe('Unit tests', () => {
    it('add material icon type class when type is present and is filled', () => {
      const { getByTestId } = render(
        <Icon data-test="DesignSystem--Icon" type="outlined" size={50}>
          info
        </Icon>
      );
      expect(getByTestId('DesignSystem--Icon').className).toContain('material-icons-outlined');
    });

    it('to contain material-icon-round class when type is not present', () => {
      const { getByTestId } = render(
        <Icon data-test="DesignSystem--Icon" size={50}>
          info
        </Icon>
      );
      expect(getByTestId('DesignSystem--Icon').className).toContain('material-icons-round');
    });

    it('add icon appearance class when appearance is present', () => {
      const { getByTestId } = render(
        <Icon data-test="DesignSystem--Icon" size={50} appearance="accent1">
          info
        </Icon>
      );
      expect(getByTestId('DesignSystem--Icon').className).not.toContain('Mds-Icon-accent1');
    });
  });
});
