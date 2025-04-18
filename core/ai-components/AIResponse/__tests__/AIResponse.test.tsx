import React from 'react';
import { render } from '@testing-library/react';
import { AIResponse } from '@/index';

const chatBoxLabel = 'Response Box Label';
const customClassName = 'custom-class';

describe('AI Response Component', () => {
  it('ChatBox renders with custom className', () => {
    const { getByTestId } = render(<AIResponse className={customClassName}>{chatBoxLabel}</AIResponse>);
    expect(getByTestId('DesignSystem-AIResponse-Container')).toHaveClass(customClassName);
    expect(getByTestId('DesignSystem-AIResponse-Box')).toHaveClass('AIResponse-box--glow');
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

describe('AI Response with showAvatar prop', () => {
  it('AI Response renders with showAvatar prop', () => {
    const { getByTestId } = render(
      <AIResponse showAvatar>
        <AIResponse.Body>{chatBoxLabel}</AIResponse.Body>
      </AIResponse>
    );
    expect(getByTestId('DesignSystem-AIResponse-Avatar')).toBeInTheDocument();
  });
});

describe('AI Response with metaData prop', () => {
  it('AI Response renders with metaData prop', () => {
    const metaData = () => <div>Metadata</div>;
    const { getByText, getByTestId } = render(
      <AIResponse metaData={metaData}>
        <AIResponse.Body>{chatBoxLabel}</AIResponse.Body>
      </AIResponse>
    );
    expect(getByText('Metadata')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AIResponse-Metadata')).not.toHaveClass('AIResponse-metaData');
  });
});

describe('AI Response with showAvatar and metaData prop', () => {
  it('AI Response renders with showAvatar and metaData prop', () => {
    const metaData = () => <div>Metadata</div>;
    const { getByText, getByTestId } = render(
      <AIResponse showAvatar metaData={metaData}>
        <AIResponse.Body>{chatBoxLabel}</AIResponse.Body>
      </AIResponse>
    );
    expect(getByText('Metadata')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AIResponse-Metadata')).toHaveClass('AIResponse-metaData');
    expect(getByTestId('DesignSystem-AIResponse-Avatar')).toBeInTheDocument();
  });

  it('AI Response renders with showAvatar, showGlow and metaData prop', () => {
    const metaData = () => <div>Metadata</div>;
    const { getByText, getByTestId } = render(
      <AIResponse showAvatar metaData={metaData}>
        <AIResponse.Body>{chatBoxLabel}</AIResponse.Body>
      </AIResponse>
    );
    expect(getByText('Metadata')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AIResponse-Metadata')).toHaveClass('AIResponse-metaData');
    expect(getByTestId('DesignSystem-AIResponse-Avatar')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AIResponse-Box')).toHaveClass('AIResponse-box--glow');
    expect(getByTestId('DesignSystem-AIResponse-Container')).toHaveClass('AIResponse-container--glow');
  });
});

describe('AI Response with prop: showGlow', () => {
  it('AI Response renders with showGlow prop', () => {
    const { getByTestId } = render(
      <AIResponse showGlow>
        <AIResponse.Body>{chatBoxLabel}</AIResponse.Body>
      </AIResponse>
    );
    expect(getByTestId('DesignSystem-AIResponse-Box')).toHaveClass('AIResponse-box--glow');
    expect(getByTestId('DesignSystem-AIResponse-Container')).toHaveClass('AIResponse-container--glow');
  });

  it('AI Response renders default showGlow prop', () => {
    const { getByTestId } = render(
      <AIResponse>
        <AIResponse.Body>{chatBoxLabel}</AIResponse.Body>
      </AIResponse>
    );
    expect(getByTestId('DesignSystem-AIResponse-Box')).toHaveClass('AIResponse-box--glow');
    expect(getByTestId('DesignSystem-AIResponse-Container')).toHaveClass('AIResponse-container--glow');
  });

  it('AI Response renders with showGlow prop as false', () => {
    const { getByTestId } = render(
      <AIResponse showGlow={false}>
        <AIResponse.Body>{chatBoxLabel}</AIResponse.Body>
      </AIResponse>
    );
    expect(getByTestId('DesignSystem-AIResponse-Box')).not.toHaveClass('AIResponse-box--glow');
    expect(getByTestId('DesignSystem-AIResponse-Container')).not.toHaveClass('AIResponse-container--glow');
  });
});
