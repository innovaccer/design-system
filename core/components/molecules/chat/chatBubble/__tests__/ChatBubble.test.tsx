import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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

    fireEvent.mouseEnter(getByTestId('DesignSystem-IncomingChatBubble-Wrapper'));
    expect(getByTestId('DesignSystem-IncomingChatBubble-ActionBar')).toBeInTheDocument();

    fireEvent.mouseLeave(getByTestId('DesignSystem-IncomingChatBubble-Wrapper'));
    expect(screen.queryByTestId('DesignSystem-IncomingChatBubble-ActionBar')).not.toBeInTheDocument();
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

    fireEvent.mouseEnter(getByTestId('DesignSystem-OutgoingChatBubble-Wrapper'));
    expect(getByTestId('DesignSystem-OutgoingChatBubble-ActionBar')).toBeInTheDocument();

    fireEvent.mouseLeave(getByTestId('DesignSystem-OutgoingChatBubble-Wrapper'));
    expect(screen.queryByTestId('DesignSystem-OutgoingChatBubble-ActionBar')).not.toBeInTheDocument();
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
