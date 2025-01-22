import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Chat } from '@/index';
import { ChatProps as Props } from '@/index.type';

const text = '2 Unread Messages';

const mapper = {
  text: valueHelper(text, { required: true, iterate: false }),
};

describe('Chat Unread Message component snapshot', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chat>
          <Chat.UnreadMessage text={text} {...attr} />
        </Chat>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Chat Unread Message component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.UnreadMessage text={text} />
      </Chat>
    );
    expect(getByTestId('DesignSystem-Chat-UnreadMessage')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Chat-UnreadMessage').textContent).toMatch(text);
  });

  it('overwrite Chat Unread Message class', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.UnreadMessage text={text} className="custom-class" />
      </Chat>
    );
    expect(getByTestId('DesignSystem-Chat-UnreadMessage')).toHaveClass('custom-class');
  });

  it('Chat Unread Message Component with overwrite data-test attribute', () => {
    const testDataValue = 'DesignSystem-UnreadMessage-TestValue';
    const { getByTestId } = render(
      <Chat>
        <Chat.UnreadMessage text={text} data-test={testDataValue} />
      </Chat>
    );

    const dateElement = getByTestId(testDataValue);
    expect(dateElement.getAttribute('data-test')).toBe(testDataValue);
  });
});
