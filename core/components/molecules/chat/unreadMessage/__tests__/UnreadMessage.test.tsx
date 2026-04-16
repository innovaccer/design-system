import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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

describe('Chat UnreadMessage component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(
      <Chat>
        <Chat.UnreadMessage text={text} />
      </Chat>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('is keyboard focusable and activatable', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Chat>
        <Chat.UnreadMessage text={text} onClick={onClick} />
      </Chat>
    );
    const el = getByTestId('DesignSystem-Chat-UnreadMessage');
    expect(el).toHaveAttribute('role', 'button');
    expect(el).toHaveAttribute('tabindex', '0');

    // Enter fires on keydown (non-repeat)
    fireEvent.keyDown(el, { key: 'Enter', repeat: false });
    expect(onClick).toHaveBeenCalledTimes(1);

    // Enter held down (repeat) must not fire again
    fireEvent.keyDown(el, { key: 'Enter', repeat: true });
    expect(onClick).toHaveBeenCalledTimes(1);

    // Space fires on keyup only when keydown originated on this element
    fireEvent.keyDown(el, { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.keyUp(el, { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(2);

    // Space keyup without prior keydown on this element must not activate
    fireEvent.keyUp(el, { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(2);

    // Space held (repeat) should not register a second press
    fireEvent.keyDown(el, { key: ' ', repeat: true });
    fireEvent.keyUp(el, { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('decorative icon is hidden from assistive technology', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.UnreadMessage text={text} />
      </Chat>
    );
    const icon = getByTestId('DesignSystem-Chat-UnreadMessage').querySelector('[aria-hidden="true"]');
    expect(icon).toBeInTheDocument();
  });
});
