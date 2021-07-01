import * as React from 'react';
import { render } from '@testing-library/react';
import { Separator } from '@/index';

describe('Separator component', () => {

  it('renders with class Separator', () => {
    const { getByTestId } = render(<Separator />);
    expect(getByTestId('DesignSystem-Separator')).toHaveClass('Separator');
  });

  it('accepts other className', () => {
    const { getByTestId } = render(<Separator className="TestClass" />);
    expect(getByTestId('DesignSystem-Separator')).toHaveClass('TestClass');
  });

});
