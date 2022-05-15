import * as React from 'react';
import { render } from '@testing-library/react';
import { Bold, Italics, Underline } from '@/index';

describe('Bold component', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(<Bold>Bold Text</Bold>);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Italics component', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(<Italics>Italics text</Italics>);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Underline component', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(<Underline>Underline Text</Underline>);
    expect(baseElement).toMatchSnapshot();
  });
});
