import * as React from 'react';
import { shallow } from 'enzyme';
import Row from '../Row';

describe('Row component', () => {
  it('should match the snapshot without RowColumns', () => {
    const tree = shallow(<Row>Row</Row>);
    expect(tree).toMatchSnapshot();
  });
});
