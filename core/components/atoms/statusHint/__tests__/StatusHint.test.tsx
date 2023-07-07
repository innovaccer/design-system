import * as React from 'react';
import { render } from '@testing-library/react';
import StatusHint, { StatusHintProps as IProps } from '../StatusHint';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MessageAppearance } from '@/common.type';

const label = 'StatusHint';
const appearances: MessageAppearance[] = ['default', 'alert', 'info', 'warning', 'success'];
const text = 'Status hint is used to highlight the status of an item.';

describe('StatusHint component', () => {
  const mapper = {
    appearance: valueHelper(appearances, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<StatusHint {...attr}>{label}</StatusHint>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('StatusHint component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<StatusHint appearance="info">{'Design System'}</StatusHint>);
    expect(getByTestId('DesignSystem-StatusHint--Text').textContent).toMatch('Design System');
  });

  it('renders children', () => {
    const { getByTestId } = render(<StatusHint appearance="info">{'Design System'}</StatusHint>);
    expect(getByTestId('DesignSystem-StatusHint--Icon').tagName).toMatch('SPAN');
  });
});

describe('StatusHint Component with overwrite class', () => {
  it('overwrite StatusHint class', () => {
    const { getByTestId } = render(<StatusHint className="StatusHintClass">{'StatusHint'}</StatusHint>);
    expect(getByTestId('DesignSystem-StatusHint')).toHaveClass('StatusHintClass');
  });
});

describe('StatusHint component with prop:appearance', () => {
  appearances.forEach((appearance) => {
    it(`should have the StatusHint--${appearance} class when appearance=${appearance} `, () => {
      const { getByTestId } = render(<StatusHint appearance={appearance}>{'Design'}</StatusHint>);
      expect(getByTestId('DesignSystem-StatusHint--Icon')).toHaveClass(`StatusHint--${appearance}`);
    });
  });
});

describe('StatusHint component with prop:truncateLabel', () => {
  it('check for label truncate', () => {
    const { getByTestId } = render(
      <StatusHint className="w-25" truncateLabel={true}>
        {text}
      </StatusHint>
    );

    expect(getByTestId('DesignSystem-StatusHint--Text')).toHaveClass('ellipsis--noWrap');
  });

  it('check for label wrap', () => {
    const { getByTestId } = render(
      <StatusHint className="w-25" truncateLabel={false}>
        {text}
      </StatusHint>
    );

    expect(getByTestId('DesignSystem-StatusHint--Text')).not.toHaveClass('ellipsis--noWrap');
  });
});
