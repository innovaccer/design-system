import * as React from 'react';
import { render } from '@testing-library/react';
import { Typography, emphasisWrapperMap, componentTypeMap, Heading, Subheading, Text, Paragraph } from '@/index';

describe('Typography component', () => {
  it('should render with default text type when no prop is provided', () => {
    const { getByTestId } = render(<Typography>Test Text</Typography>);
    expect(getByTestId('DesignSystem-Typography')).toHaveClass('Text Text--default');
  });

  describe('Emphasis map', () => {
    const testElement = <span>Test text</span>;
    it('should return bold element', () => {
      const Element = render(emphasisWrapperMap['b'](testElement));
      const renderedComponent = Element.baseElement.innerHTML;
      const expectedComponent = '<div><b><span>Test text</span></b></div>';
      expect(renderedComponent).toBe(expectedComponent);
    });

    it('should return italic element', () => {
      const Element = render(emphasisWrapperMap['i'](testElement));
      const renderedComponent = Element.baseElement.innerHTML;
      const expectedComponent = '<div><i><span>Test text</span></i></div>';
      expect(renderedComponent).toEqual(expectedComponent);
    });

    it('should return underlined element', () => {
      const Element = render(emphasisWrapperMap['u'](testElement));
      const renderedComponent = Element.baseElement.innerHTML;
      const expectedComponent = '<div><u><span>Test text</span></u></div>';
      expect(renderedComponent).toEqual(expectedComponent);
    });
  });

  describe('Component map', () => {
    const typographyProps = {
      type: 'text',
      appearance: 'default',
    };
    it('should return Text component when text type is passed', () => {
      type TextAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled' | 'success' | 'link';
      const textAppearance: TextAppearance = 'default';
      const { getByTestId, rerender } = render(componentTypeMap['text']({ ...typographyProps, size: 'small' }));
      const TextComponent = getByTestId('DesignSystem-Text');
      rerender(
        <Text appearance={textAppearance} size="small">
          Test Text
        </Text>
      );
      const ExpectedComponent = getByTestId('DesignSystem-Text');
      expect(TextComponent).toBe(ExpectedComponent);
    });
    it('should return Heading component when text type is passed', () => {
      const { getByTestId, rerender } = render(componentTypeMap['heading']({ ...typographyProps, size: 'xl' }));
      const HeadingComponent = getByTestId('DesignSystem-Heading');
      rerender(
        <Heading appearance="default" size="xl">
          Test Heading
        </Heading>
      );
      const ExpectedComponent = getByTestId('DesignSystem-Heading');
      expect(HeadingComponent).toBe(ExpectedComponent);
    });
    it('should return Subheading component when text type is passed', () => {
      const { getByTestId, rerender } = render(componentTypeMap['subheading'](typographyProps));
      const SubheadingComponent = getByTestId('DesignSystem-Subheading');
      rerender(<Subheading appearance="default">Test Subheading</Subheading>);
      const ExpectedComponent = getByTestId('DesignSystem-Subheading');
      expect(SubheadingComponent).toBe(ExpectedComponent);
    });
    it('should return Paragraph component when text type is passed', () => {
      const { getByTestId, rerender } = render(componentTypeMap['paragraph'](typographyProps));
      const ParagraphComponent = getByTestId('DesignSystem-Paragraph');
      rerender(<Paragraph appearance="default">Test Paragraph</Paragraph>);
      const ExpectedComponent = getByTestId('DesignSystem-Paragraph');
      expect(ParagraphComponent).toBe(ExpectedComponent);
    });
  });

  it('Typography should only wrap with emphasis when provided', () => {
    const { getByTestId } = render(<Typography emphasis="b">Test</Typography>);
    const Component = getByTestId('DesignSystem-Typography');
    const Markup = `<b>${Component.parentElement?.innerHTML}</b>`;
    expect(Component.parentElement).toContainHTML(Markup);
  });

  it('Typography should not wrap with emphasis when not provided', () => {
    const { getByTestId } = render(<Typography>Test</Typography>);
    const Component = getByTestId('DesignSystem-Typography');
    const Markup = `<b>${Component.parentElement?.innerHTML}</b>`;
    expect(Component.parentElement).not.toContainHTML(Markup);
  });
});
