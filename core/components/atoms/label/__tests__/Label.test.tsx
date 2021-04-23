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

  it('renders children', () => {
    const { getByTestId } = render(<Label>Label</Label>);
    expect(getByTestId('DesignSystem-Label').textContent).toMatch('Label');
  });

  it('renders label element', () => {
    const { getByTestId } = render(<Label>Label</Label>);
    expect(getByTestId('DesignSystem-Label--Text').tagName).toMatch('LABEL');
  });

});

describe('Label Component with overwrite class', () => {

  it('overwrite Label class', () => {
    const { getByTestId } = render(<Label className="LabelClass">Label</Label>);
    expect(getByTestId('DesignSystem-Label')).toHaveClass('LabelClass');
  });

});

describe('Label component with prop: withInput', () => {
  it('should have Label--withInput class when withInput={true}', () => {
    const { getByTestId } = render(<Label withInput={true}>Label</Label>);
    expect(getByTestId('DesignSystem-Label')).toHaveClass('Label--withInput');
  });
});

describe('Label component with prop: disabled', () => {

  it('should be disabled', () => {
    const { getByTestId } = render(<Label disabled={true}>Label</Label>);
    expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--disabled');
  });

});

describe('Label component with prop: required', () => {

  it('renders required indicator', () => {
    const { getByTestId } = render(<Label required={true}>Label</Label>);
    expect(getByTestId('DesignSystem-Label--RequiredIndicator')).toBeInTheDocument();
  });
});

describe('Label component with prop: optional', () => {

  it('renders optional label', () => {
    const { getByTestId } = render(<Label optional={true}>Label</Label>);
    expect(getByTestId('DesignSystem-Label--OptionalText')).toBeInTheDocument();
  });
});
