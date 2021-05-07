import * as React from 'react';
import { render } from '@testing-library/react';
import Text from '../index';

describe('Text component', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(<Text componentType="span">{'Generic text component'}</Text>);
    expect(baseElement).toMatchSnapshot();
  });
});
