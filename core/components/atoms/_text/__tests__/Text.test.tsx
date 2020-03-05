import * as React from 'react';
import { shallow } from 'enzyme';
import Text from '../index';

describe('Text component', () => {
  it('should match the snapshot', () => {
    const tree = shallow(<Text componentType="span">{'Generic text component'}</Text>);
    expect(tree).toMatchSnapshot();
  });
});
