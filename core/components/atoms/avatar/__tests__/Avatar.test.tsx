import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Avatar, { AvatarProps as Props } from '../Avatar';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance = ['primary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'];

describe('Avatar component', () => {
  const mapper = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
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

  it('renders initials', () => {
    const { getByTestId } = render(<Avatar firstName="Design" lastName="System" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('DS');
  });

});
