import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { InlineMessage } from '../InlineMessage';
import { InlineMessageProps as Props } from '@/index.type';
import { MessageAppearance } from '@/common.type';

const appearance: MessageAppearance[] = ['default', 'alert', 'info', 'success', 'warning'];

const description = 'Inline Message here.';

describe('InlineMessage component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    description: valueHelper(description, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<InlineMessage {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('InlineMessage Component with overwrite class', () => {
  it('overwrite InlineMessage class', () => {
    const { getByTestId } = render(<InlineMessage className="CustomClass" />);
    expect(getByTestId('DesignSystem-InlineMessage')).toHaveClass('CustomClass');
  });
});

describe('InlineMessage component with prop:appearance', () => {
  appearance.forEach((color) => {
    it(`should have the InlineMessage-text--${color} class when appearance=${color} `, () => {
      const { getByTestId } = render(<InlineMessage appearance={color} />);
      expect(getByTestId('DesignSystem-InlineMessage--Description')).toHaveClass(`InlineMessage-text--${color}`);
    });
  });
});

describe('InlineMessage component ', () => {
  it('check for icon when appearance:default', () => {
    render(<InlineMessage appearance="default" description={description} />);
    const IconComponent = screen.queryByText('DesignSystem-InlineMessage--Icon');
    expect(IconComponent).not.toBeInTheDocument();
  });

  it('render component when appearance is not default', () => {
    const { getByTestId } = render(<InlineMessage appearance="info" description={description} />);
    const descriptionID = getByTestId('DesignSystem-InlineMessage--Description');
    expect(descriptionID).toBeInTheDocument();
    expect(descriptionID.textContent).toMatch(description);
    expect(getByTestId('DesignSystem-InlineMessage--Icon')).toBeInTheDocument();
  });

  it('check for icon in case of default props', () => {
    render(<InlineMessage />);

    const IconComponent = screen.queryByText('DesignSystem-InlineMessage--Icon');
    expect(IconComponent).not.toBeInTheDocument();
  });

  it('check for description in case of default props', () => {
    const { getByTestId } = render(<InlineMessage />);

    const descriptionID = getByTestId('DesignSystem-InlineMessage--Description');
    expect(descriptionID).toBeInTheDocument();
    expect(descriptionID).toHaveClass('InlineMessage-text--default');
    expect(descriptionID.textContent).toMatch('');
  });
});

describe('InlineMessage component with prop:size', () => {
  it('check for text size with prop size=small', () => {
    const { getByTestId } = render(<InlineMessage size="small" description={description} />);
    const descriptionID = getByTestId('DesignSystem-InlineMessage--Description');
    expect(descriptionID).toHaveClass('Text--small');
  });

  it('check for text size with prop size=regular', () => {
    const { getByTestId } = render(<InlineMessage size="regular" description={description} />);
    const descriptionID = getByTestId('DesignSystem-InlineMessage--Description');
    expect(descriptionID).toHaveClass('Text--regular');
  });

  it('check for text weight with prop size=small', () => {
    const { getByTestId } = render(<InlineMessage size="small" description={description} />);
    const descriptionID = getByTestId('DesignSystem-InlineMessage--Description');
    expect(descriptionID).toHaveClass('Text--medium');
  });

  it('check for icon size with prop size=small', () => {
    const { getByTestId } = render(<InlineMessage appearance="info" size="small" description={description} />);
    expect(getByTestId('DesignSystem-InlineMessage--Icon')).toHaveStyle('font-size: 14px ');
  });

  it('check for icon size with prop size=regular', () => {
    const { getByTestId } = render(<InlineMessage appearance="info" size="regular" description={description} />);
    expect(getByTestId('DesignSystem-InlineMessage--Icon')).toHaveStyle('font-size: 16px ');
  });
});
