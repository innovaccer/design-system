import * as React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';

describe('Tab component', () => {
  it('with Label', () => {
    const tree = shallow(
      <Tab label={<></>}>Tab</Tab>
    );
    expect(tree).toMatchSnapshot();
  });

  it('with Label and disabled', () => {
    const tree = shallow(
      <Tab label={<></>} disabled={true}>Tab</Tab>
    );
    expect(tree).toMatchSnapshot();
  });
});
