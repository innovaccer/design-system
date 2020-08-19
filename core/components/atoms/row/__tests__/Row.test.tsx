import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Row from '../Row';

describe('Row component', () => {
  it('should match the snapshot without RowColumns', () => {
    const tree = shallow(<Row>Row</Row>);
    expect(tree).toMatchSnapshot();
  });
});
describe('Row component', () => {

  const children = <div>Masala Design System</div>;

  it('renders children', () => {
    const { getByTestId } = render(<Row>{children}</Row>);
    expect(getByTestId('DesignSystem-Row')).toContainHTML('<div>Masala Design System</div>');
  });

  describe('Row Component with overwrite class', () => {

    it('overwrite Row class', () => {
      const { getByTestId } = render(<Row className="RowClass">{children}</Row>);
      expect(getByTestId('DesignSystem-Row')).toHaveClass('RowClass');
    });
  });

});
