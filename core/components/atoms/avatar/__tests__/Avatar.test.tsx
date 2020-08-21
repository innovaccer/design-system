import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Avatar, { AvatarProps as Props, Appearance } from '../Avatar';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearances: Appearance[] = ['primary', 'alert', 'warning', 'success', 'accent1',
  'accent2', 'accent3', 'accent4'];

describe('Avatar component', () => {
  const mapper = {
    appearance: valueHelper(appearances, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Avatar
          {...attr}
        >
          JD
        </Avatar>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Avatar component', () => {

  it('renders initials when firstName,lastName,children are given', () => {
    const { getByTestId } = render(<Avatar firstName="Design" lastName="System" children="Hey" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('He');
  });

  it('renders initials when only firstName is given', () => {
    const { getByTestId } = render(<Avatar firstName="Design" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('D');
  });

  it('renders initials when only lastName is given', () => {
    const { getByTestId } = render(<Avatar lastName="System" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('S');
  });

  it('renders initials when only children is given', () => {
    const { getByTestId } = render(<Avatar children="Design System" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('De');
  });

  describe('Avatar component tagName', () => {

    it('renders tagName', () => {
      const { getByTestId } = render(<Avatar children="Design System" />);
      expect(getByTestId('DesignSystem-Avatar').tagName).toMatch('SPAN');
    });

  });

  describe('Avatar Component with overwrite class', () => {

    it('overwrite Avatar class', () => {
      const { getByTestId } = render(<Avatar className="AvatarClass">{'Avatar'}</Avatar>);
      expect(getByTestId('DesignSystem-Avatar')).toHaveClass('AvatarClass');
    });

  });

  describe('Avatar component with prop:appearance', () => {

    appearances.forEach(color => {
      it(`should have the Avatar--${color} class when appearance=${color} `, () => {
        const { getByTestId } = render(<Avatar children="Design" appearance={color} />);
        expect(getByTestId('DesignSystem-Avatar')).toHaveClass(`Avatar--${color}`);
      });
    });
  });

});
