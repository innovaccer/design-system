import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import Text from '../index';

describe('Text component', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(<Text componentType="span">{'Generic text component'}</Text>);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Text component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<Text componentType="span">{'Generic text component'}</Text>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
