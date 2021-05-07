import * as React from 'react';
import { render } from '@testing-library/react';
import Column from '../Column';

describe('Column component', () => {
  it('should match the snapshot without columns', () => {
    const { baseElement } = render(<Column>Primary</Column>);
    expect(baseElement).toMatchSnapshot();
  });

  it('should match the snapshot with columns', () => {
    const { baseElement } = render(<Column size="12">Primary</Column>);
    expect(baseElement).toMatchSnapshot();
  });
});
