import * as React from 'react';
import { render } from '@testing-library/react';
import Paragraph, { ParagraphProps as Props, ParagraphAppearance } from '../Paragraph';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance: ParagraphAppearance[] = ['default', 'white', 'destructive', 'subtle', 'disabled'];

const mapper = {
  appearance: valueHelper(appearance, { required: true, iterate: true }),
};

describe('Paragraph component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Paragraph {...attr}>Sample string</Paragraph>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Paragraph component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<Paragraph>{'Paragraph'}</Paragraph>);
    expect(getByTestId('DesignSystem-Paragraph')).toHaveTextContent('Paragraph');
  });

  describe('Paragraph Component with overwrite class', () => {
    it('overwrite Paragraph class', () => {
      const { getByTestId } = render(<Paragraph className="ParagraphClass">{'Paragraph'}</Paragraph>);
      expect(getByTestId('DesignSystem-Paragraph')).toHaveClass('ParagraphClass');
    });
  });

  describe('Paragraph component with prop:appearance', () => {
    appearance.forEach((appear) => {
      it(`should have the Text--${appear} class when appearance=${appear} `, () => {
        const { getByTestId } = render(<Paragraph appearance={appear}>{'Paragraph'}</Paragraph>);
        expect(getByTestId('DesignSystem-Paragraph')).toHaveClass(`Text--${appear}`);
      });
    });
  });

  describe('Paragraph component tagName', () => {
    it('should have the tagname p', () => {
      const { getByTestId } = render(<Paragraph>{'Paragraph'}</Paragraph>);
      expect(getByTestId('DesignSystem-Paragraph').tagName).toMatch('P');
    });
  });
});

describe('Paragraph Component with Prop:color', () => {
  it('should have the paragraph color as accent1 when prop color="accent1"', () => {
    const { getByTestId } = render(<Paragraph color="accent1">{'Design System'}</Paragraph>);
    expect(getByTestId('DesignSystem-Paragraph')).toHaveClass('color-accent1');
  });

  it('should given preference to color over appearance prop', () => {
    const { getByTestId } = render(
      <Paragraph color="accent1-lightest" appearance="destructive">
        {'Design System'}
      </Paragraph>
    );
    expect(getByTestId('DesignSystem-Paragraph')).toHaveClass('color-accent1-lightest');
  });
});
