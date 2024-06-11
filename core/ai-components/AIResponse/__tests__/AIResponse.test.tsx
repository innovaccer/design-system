import React from 'react';
import { render } from '@testing-library/react';
import { AIResponse } from '@/index';

const chatBoxLabel = 'Response Box Label';
const customClassName = 'custom-class';

describe('AI Response Component', () => {
  it('ChatBox renders with custom className', () => {
    const { getByTestId } = render(<AIResponse className={customClassName}>{chatBoxLabel}</AIResponse>);
    expect(getByTestId('DesignSystem-AIResponse-Box')).toHaveClass(customClassName);
    expect(getByTestId('DesignSystem-AIResponse-Box')).toHaveClass('AIResponse-box');
  });
});

describe('AI Response Action Button Component', () => {
  it('Response Action Button renders with custom className', () => {
    const { getByTestId } = render(
      <AIResponse>
        <AIResponse.Button className={customClassName}>Primary Action</AIResponse.Button>
      </AIResponse>
    );
    expect(getByTestId('DesignSystem-AIResponse-Button')).toHaveClass(customClassName);
    expect(getByTestId('DesignSystem-AIResponse-Button')).toHaveClass('AIResponse-button');
    expect(getByTestId('DesignSystem-AIResponse-Button')).toHaveClass('Button Button--tiny Button--transparent');
  });

  it('Response Action Button renders with selected state with className', () => {
    const { getByTestId } = render(
      <AIResponse>
        <AIResponse.Button className={customClassName} selected={true}>
          Primary Action
        </AIResponse.Button>
      </AIResponse>
    );
    expect(getByTestId('DesignSystem-AIResponse-Button')).toHaveClass(customClassName);
    expect(getByTestId('DesignSystem-AIResponse-Button')).toHaveClass('AIResponse-button--selected');
  });
});

describe('AI Response ActionBar Component', () => {
  it('Response ActionBar renders with custom className', () => {
    const { getByTestId } = render(
      <AIResponse>
        <AIResponse.Body>{chatBoxLabel}</AIResponse.Body>
        <AIResponse.ActionBar className={customClassName}>
          <AIResponse.Button>Primary Action</AIResponse.Button>
        </AIResponse.ActionBar>
      </AIResponse>
    );
    expect(getByTestId('DesignSystem-AIResponse-ActionBar')).toHaveClass(customClassName);
    expect(getByTestId('DesignSystem-AIResponse-ActionBar')).toHaveClass('AIResponse-actionBar');
  });
});
