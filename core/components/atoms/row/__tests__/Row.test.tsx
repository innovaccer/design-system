import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Row } from '@/index';

const onClick = jest.fn();

describe('Row component', () => {
  const children = <div>Masala Design System</div>;

  it('renders children', () => {
    const { getByTestId } = render(<Row>{children}</Row>);
    expect(getByTestId('DesignSystem-Row')).toContainHTML('<div>Masala Design System</div>');
  });

  it('with className', () => {
    const { getByTestId } = render(<Row className="RowClass">{children}</Row>);
    expect(getByTestId('DesignSystem-Row')).toHaveClass('RowClass');
  });

  it('accepts other attributes', () => {
    const { getByTestId } = render(<Row onClick={onClick}>{children}</Row>);

    fireEvent.click(getByTestId('DesignSystem-Row'));
    expect(onClick).toBeCalled();
  });
});
