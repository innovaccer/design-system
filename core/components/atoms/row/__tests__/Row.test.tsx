import * as React from 'react';
import { shallow } from 'enzyme';
import Row from '../Row';

describe('Row component', () => {
  it('should match the snapshot without RowColumns', () => {
    const tree = shallow(<Row>Row</Row>);
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot with RowColumns', () => {
    const tree = shallow(<Row group="2">Row</Row>);
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot with rowColumnsSM', () => {
    const tree = shallow(<Row groupS="2">Row</Row>);
    expect(tree).toMatchSnapshot();
  });
});
