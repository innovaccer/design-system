import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import HelpText, { HelpTextProps as Props } from '../HelpText';

const booleanValues = [true, false];
const message = 'Help Text Component';

describe('HelpText component snapshot', () => {
  const mapper = {
    error: valueHelper(booleanValues, { required: true, iterate: true }),
    message: valueHelper(message, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<HelpText {...attr}>HelpText</HelpText>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('HelpText component prop:error', () => {
  it('check for message when error=true', () => {
    const { getByTestId } = render(<HelpText error={true} message={message} />);
    expect(getByTestId('DesignSystem-InlineMessage')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InlineMessage--Description').textContent).toMatch(message);
  });

  it('check for css class when error=true', () => {
    const { getByTestId } = render(<HelpText error={true} message={message} />);
    expect(getByTestId('DesignSystem-InlineMessage')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InlineMessage--Description')).toHaveClass('Text--small InlineMessage-text--alert');
  });

  it('check for message when error=false', () => {
    const { getByTestId } = render(<HelpText error={false} message={message} />);
    expect(getByTestId('DesignSystem-Text')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Text').textContent).toMatch(message);
  });

  it('check for css class when error=false', () => {
    const { getByTestId } = render(<HelpText error={false} message={message} />);
    expect(getByTestId('DesignSystem-Text')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Text')).toHaveClass('Text--small Text--medium Text--subtle');
  });
});
