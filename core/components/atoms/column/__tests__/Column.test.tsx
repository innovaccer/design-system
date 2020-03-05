import * as React from 'react';
import { shallow } from 'enzyme';
import Column from '../Column';

describe('Column component', () => {
  it('should match the snapshot without columns', () => {
    const tree = shallow(<Column>Primary</Column>);
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot with columns', () => {
    const tree = shallow(<Column size="12">Primary</Column>);
    expect(tree).toMatchSnapshot();
  });
});
