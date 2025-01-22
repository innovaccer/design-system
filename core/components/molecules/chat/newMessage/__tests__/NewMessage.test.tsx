import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Chat } from '@/index';
import { ChatProps as Props } from '@/index.type';

const text = '2 New Messages';

const mapper = {
  text: valueHelper(text, { required: true, iterate: false }),
};

describe('Chat New Message component snapshot', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chat>
          <Chat.NewMessage text={text} {...attr} />
        </Chat>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Chat New Message component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.NewMessage text={text} />
      </Chat>
    );
    expect(getByTestId('DesignSystem-Chat-NewMessage')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Chat-NewMessage').textContent).toMatch(text);
  });

  it('overwrite Chat New Message class', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.NewMessage text={text} className="custom-class" />
      </Chat>
    );
    expect(getByTestId('DesignSystem-Chat-NewMessage')).toHaveClass('custom-class');
  });

  it('Chat New Message Component with overwrite data-test attribute', () => {
    const testDataValue = 'DesignSystem-NewMessage-TestValue';
    const { getByTestId } = render(
      <Chat>
        <Chat.NewMessage text={text} data-test={testDataValue} />
      </Chat>
    );

    const messageElement = getByTestId(testDataValue);
    expect(messageElement.getAttribute('data-test')).toBe(testDataValue);
  });
});
