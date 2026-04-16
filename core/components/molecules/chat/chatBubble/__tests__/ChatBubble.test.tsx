import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import { Chat } from '@/index';
import { ChatBubbleProps as Props } from '../ChatBubble';
import { IncomingOptionProps } from '../IncomingBubble';
import { OutgoingOptionProps } from '../OutgoingBubble';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const chatMessage = 'Test Message';
const type = ['incoming', 'outgoing'];

const incomingOptions: IncomingOptionProps = {
  time: '1:00 AM',
  metaData: 'Meta Data',
  avatarData: {
    firstName: 'John',
    lastName: 'Doe',
  },
  showAvatar: true,
  urgentMessage: () => <div>Urgent</div>,
};

const outgoingOptions: OutgoingOptionProps = {
  status: true,
  time: '1:00 AM',
  metaData: 'Meta Data',
  urgentMessage: () => <div>Urgent</div>,
};

describe('ChatBubble component snapshot', () => {
  const mapper = {
    type: valueHelper(type, { required: true, iterate: true }),
    incomingOptions: valueHelper(incomingOptions, { required: true, iterate: false }),
    outgoingOptions: valueHelper(outgoingOptions, { required: true, iterate: false }),
    children: valueHelper(<div>{chatMessage}</div>, { required: true, iterate: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <Chat>
          <Chat.ChatBubble {...attr}>JD</Chat.ChatBubble>
        </Chat>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChatBubble Component type: Incoming', () => {
  it('renders incoming chat bubble correctly', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );

    expect(getByTestId('DesignSystem-IncomingChatBubble-Name')).toHaveTextContent('John Doe');
    expect(getByTestId('DesignSystem-IncomingChatBubble-Time')).toHaveTextContent('1:00 AM');
    expect(getByTestId('DesignSystem-IncomingChatBubble-MetaData')).toHaveTextContent('Meta Data');
    expect(getByTestId('DesignSystem-IncomingChatBubble-UrgentMessage')).toHaveTextContent('Urgent');
    expect(getByTestId('DesignSystem-IncomingChatBubble-ChatBox')).toHaveTextContent(chatMessage);

    expect(getByTestId('DesignSystem-IncomingChatBubble-Avatar')).toBeInTheDocument;
  });

  it('shows action bar on mouse enter and hides on mouse leave for incoming bubble', () => {
    const actionBar = () => <div>Action Bar</div>;
    const incomingOptions: IncomingOptionProps = {
      actionBar,
    };

    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );

    // Action bar is always in the DOM; wrapper collapses when hidden
    const actionBarEl = getByTestId('DesignSystem-IncomingChatBubble-ActionBar');
    expect(actionBarEl.parentElement).toHaveClass('ChatBubble-actionBarWrapper--hidden');

    fireEvent.mouseEnter(getByTestId('DesignSystem-IncomingChatBubble-Wrapper'));
    expect(actionBarEl.parentElement).not.toHaveClass('ChatBubble-actionBarWrapper--hidden');

    fireEvent.mouseLeave(getByTestId('DesignSystem-IncomingChatBubble-Wrapper'));
    expect(actionBarEl.parentElement).toHaveClass('ChatBubble-actionBarWrapper--hidden');
  });

  it('applies custom className to incoming chat bubble', () => {
    const incomingOptions: IncomingOptionProps = {
      time: '1:00 AM',
      metaData: 'Meta Data',
    };

    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions} className="custom-class">
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );

    expect(getByTestId('DesignSystem-ChatBubble-IncomingWrapper')).toHaveClass('custom-class');
  });
});

describe('ChatBubble Component type: Outgoing', () => {
  it('renders outgoing chat bubble correctly', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );

    expect(getByTestId('DesignSystem-OutgoingChatBubble-Time')).toHaveTextContent('1:00 AM');
    expect(getByTestId('DesignSystem-OutgoingChatBubble-Metadata')).toHaveTextContent('Meta Data');
    expect(getByTestId('DesignSystem-OutgoingChatBubble-UrgentMessage')).toHaveTextContent('Urgent');
    expect(getByTestId('DesignSystem-OutgoingChatBubble-BoxWrapper')).toHaveTextContent(chatMessage);
  });

  it('shows action bar on mouse enter and hides on mouse leave for outgoing bubble', () => {
    const actionBar = () => <div>Action Bar</div>;
    const outgoingOptions: OutgoingOptionProps = {
      actionBar,
    };

    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );

    // Action bar is always in the DOM; wrapper collapses when hidden
    const actionBarEl = getByTestId('DesignSystem-OutgoingChatBubble-ActionBar');
    expect(actionBarEl.parentElement).toHaveClass('ChatBubble-actionBarWrapper--hidden');

    fireEvent.mouseEnter(getByTestId('DesignSystem-OutgoingChatBubble-Wrapper'));
    expect(actionBarEl.parentElement).not.toHaveClass('ChatBubble-actionBarWrapper--hidden');

    fireEvent.mouseLeave(getByTestId('DesignSystem-OutgoingChatBubble-Wrapper'));
    expect(actionBarEl.parentElement).toHaveClass('ChatBubble-actionBarWrapper--hidden');
  });

  it('renders outgoing chat bubble with failed message correctly', () => {
    const outgoingOptions: OutgoingOptionProps = {
      failed: true,
      failedMessage: () => <div>Failed to send</div>,
    };

    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );

    expect(getByTestId('DesignSystem-OutgoingChatBubble-FailedMessage')).toHaveTextContent('Failed to send');
    expect(getByTestId('DesignSystem-OutgoingChatBubble-ChatBox')).toHaveTextContent(chatMessage);
  });

  it('applies custom className to outgoing chat bubble', () => {
    const outgoingOptions: OutgoingOptionProps = {
      status: true,
      time: '1:00 AM',
      metaData: 'Meta Data',
    };

    render(
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions} className="custom-class">
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );

    expect(screen.getByTestId('DesignSystem-ChatBubble-OutgoingWrapper')).toHaveClass('custom-class');
  });
});

describe('ChatBubble component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(
      <Chat>
        <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('incoming bubble has role="article"', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );
    expect(getByTestId('DesignSystem-ChatBubble-IncomingWrapper')).toHaveAttribute('role', 'article');
  });

  it('incoming bubble uses consumer-provided aria-label', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="incoming" incomingOptions={{ ...incomingOptions, 'aria-label': 'Message from John' }}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );
    expect(getByTestId('DesignSystem-ChatBubble-IncomingWrapper')).toHaveAttribute('aria-label', 'Message from John');
  });

  it('outgoing bubble has role="article"', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );
    expect(getByTestId('DesignSystem-ChatBubble-OutgoingWrapper')).toHaveAttribute('role', 'article');
  });

  it('outgoing bubble uses consumer-provided aria-label', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={{ ...outgoingOptions, 'aria-label': 'Sent message' }}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );
    expect(getByTestId('DesignSystem-ChatBubble-OutgoingWrapper')).toHaveAttribute('aria-label', 'Sent message');
  });

  it('row has no tabindex when no actionBar is provided (incoming)', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="incoming">{chatMessage}</Chat.ChatBubble>
      </Chat>
    );
    expect(getByTestId('DesignSystem-IncomingChatBubble-Wrapper')).not.toHaveAttribute('tabindex');
  });

  it('row has no tabindex when no actionBar is provided (outgoing)', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="outgoing">{chatMessage}</Chat.ChatBubble>
      </Chat>
    );
    expect(getByTestId('DesignSystem-OutgoingChatBubble-Wrapper')).not.toHaveAttribute('tabindex');
  });

  it('action bar is shown on focus and hidden only when focus leaves the row (incoming)', () => {
    const actionBar = () => <button data-test="DesignSystem-IncomingChatBubble-ActionButton">React</button>;
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="incoming" incomingOptions={{ actionBar }}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );
    const row = getByTestId('DesignSystem-IncomingChatBubble-Wrapper');
    // Row is no longer a tab stop — action bar buttons are the tab stops
    expect(row).not.toHaveAttribute('tabindex');

    const actionBarEl = getByTestId('DesignSystem-IncomingChatBubble-ActionBar');

    // Initially hidden (wrapper collapsed)
    expect(actionBarEl.parentElement).toHaveClass('ChatBubble-actionBarWrapper--hidden');

    // Focus the row — action bar becomes visible
    fireEvent.focus(row);
    expect(actionBarEl.parentElement).not.toHaveClass('ChatBubble-actionBarWrapper--hidden');

    // Blur toward a child inside the row — action bar must stay visible
    const actionButton = getByTestId('DesignSystem-IncomingChatBubble-ActionButton');
    fireEvent.blur(row, { relatedTarget: actionButton });
    expect(actionBarEl.parentElement).not.toHaveClass('ChatBubble-actionBarWrapper--hidden');

    // Blur toward an element outside the row — action bar is hidden again
    fireEvent.blur(row, { relatedTarget: document.body });
    expect(actionBarEl.parentElement).toHaveClass('ChatBubble-actionBarWrapper--hidden');
  });

  it('action bar is shown on focus and hidden only when focus leaves the row (outgoing)', () => {
    const actionBar = () => <button data-test="DesignSystem-OutgoingChatBubble-ActionButton">React</button>;
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={{ actionBar }}>
          {chatMessage}
        </Chat.ChatBubble>
      </Chat>
    );
    const row = getByTestId('DesignSystem-OutgoingChatBubble-Wrapper');
    // Row is no longer a tab stop — action bar buttons are the tab stops
    expect(row).not.toHaveAttribute('tabindex');

    const actionBarEl = getByTestId('DesignSystem-OutgoingChatBubble-ActionBar');

    // Initially hidden (wrapper collapsed)
    expect(actionBarEl.parentElement).toHaveClass('ChatBubble-actionBarWrapper--hidden');

    // Focus the row — action bar becomes visible
    fireEvent.focus(row);
    expect(actionBarEl.parentElement).not.toHaveClass('ChatBubble-actionBarWrapper--hidden');

    // Blur toward a child inside the row — action bar must stay visible
    const actionButton = getByTestId('DesignSystem-OutgoingChatBubble-ActionButton');
    fireEvent.blur(row, { relatedTarget: actionButton });
    expect(actionBarEl.parentElement).not.toHaveClass('ChatBubble-actionBarWrapper--hidden');

    // Blur toward an element outside the row — action bar is hidden again
    fireEvent.blur(row, { relatedTarget: document.body });
    expect(actionBarEl.parentElement).toHaveClass('ChatBubble-actionBarWrapper--hidden');
  });
});
