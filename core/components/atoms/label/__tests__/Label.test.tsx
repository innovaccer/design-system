import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Label, { LabelProps as Props } from '../Label';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValue = [true, false];

describe('Label component', () => {
  const mapper = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Label>{'Label'}</Label>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Label component', () => {
  const mapper = {
    required: valueHelper(BooleanValue, { required: true, iterate: true })
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Label>{'Label'}</Label>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Label component', () => {

  const children = <div>Label</div>;

  it('renders children', () => {
    const { getByTestId } = render(<Label>{children}</Label>);
    expect(getByTestId('DesignSystem-Label')).toContainHTML('<div>Label</div>');
  });

  describe('Label Component with overwrite class', () => {

    it('overwrite Label class', () => {
      const { getByTestId } = render(<Label className="LabelClass">{children}</Label>);
      expect(getByTestId('DesignSystem-Label')).toHaveClass('LabelClass');
    });

  });

  describe('Label component with prop:withInput', () => {
    it('should have Label--withInput class when withInput={true}', () => {
      const { getByTestId } = render(<Label withInput={true}>{'Design System'}</Label>);
      expect(getByTestId('DesignSystem-Label')).toHaveClass('Label--withInput');
    });
  });

  describe('Label component with prop:disabled', () => {

    it('disabled', () => {
      const { getByTestId } = render(<Label disabled={true}>{'Design System'}</Label>);
      expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--disabled');
    });

  });

  describe('Label component with prop:required', () => {

    it('required', () => {
      const { getByTestId } = render(<Label required={true}>{'Design System'}</Label>);
      expect(getByTestId('DesignSystem-Label--RequiredIndicator').tagName).toMatch('SPAN');
    });
  });

});
