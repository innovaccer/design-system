import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Chat } from '@/index';
import { ChatProps as Props } from '@/index.type';

const text = 'John Doe is Typing...';

const mapper = {
  text: valueHelper(text, { required: true, iterate: false }),
};

describe('Chat Typing Indicator component snapshot', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chat>
          <Chat.TypingIndicator text={text} {...attr} />
        </Chat>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Chat Typing Indicator component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.TypingIndicator text={text} />
      </Chat>
    );
    expect(getByTestId('DesignSystem-Chat-TypingIndicator')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Chat-TypingIndicator').textContent).toMatch(text);
  });

  it('overwrite Chat Typing Indicator class', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.TypingIndicator text={text} className="custom-class" />
      </Chat>
    );
    expect(getByTestId('DesignSystem-Chat-TypingIndicator')).toHaveClass('custom-class');
  });

  it('Chat Typing Indicator Component with overwrite data-test attribute', () => {
    const testDataValue = 'DesignSystem-TypingIndicator-TestValue';
    const { getByTestId } = render(
      <Chat>
        <Chat.TypingIndicator text={text} data-test={testDataValue} />
      </Chat>
    );

    const messageElement = getByTestId(testDataValue);
    expect(messageElement.getAttribute('data-test')).toBe(testDataValue);
  });
});
