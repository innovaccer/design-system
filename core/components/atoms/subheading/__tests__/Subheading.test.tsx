import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Subheading, { SubheadingProps as Props, Appearance } from '../Subheading';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance: Appearance[] = ['default', 'subtle', 'disabled', 'white'];

const mapper = {
  appearance: valueHelper(appearance, { required: true, iterate: true }),
};

describe('Subheading component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Subheading
          {...attr}
        >
          Subheading
        </Subheading>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Subheading component', () => {

  it('renders children', () => {
    const { getByTestId } = render(<Subheading>{'Subheading'}</Subheading>);
    expect(getByTestId('DesignSystem-Subheading')).toHaveTextContent('Subheading');
  });

  describe('Subheading Component with overwrite class', () => {

    it('overwrite Subheading class', () => {
      const { getByTestId } = render(<Subheading className="SubheadingClass">{'Subheading'}</Subheading>);
      expect(getByTestId('DesignSystem-Subheading')).toHaveClass('SubheadingClass');
    });

  });

  describe('Subheading Component tagName', () => {

    it('renders tagName', () => {
      const { getByTestId } = render(<Subheading>{'Subheading'}</Subheading>);
      expect(getByTestId('DesignSystem-Subheading').tagName).toMatch('H4');
    });

  });

  describe('Subheading component with prop:appearance', () => {

    appearance.forEach(appear => {
      it(`should have the Subheading--${appear} class when appearance=${appear} `, () => {
        const { getByTestId } = render(<Subheading appearance={appear}>{'Subheading'}</Subheading>);
        expect(getByTestId('DesignSystem-Subheading')).toHaveClass(`Subheading--${appear}`);

      });
    });
  });
});
