import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import ChatMessage, { ChatMessageProps as Props, MessageType } from '../ChatMessage';

const type: MessageType[] = ['incoming', 'outgoing'];
const BooleanValue = [true, false];
const timeStr = '3:30 AM';
const timeNum = 25;
const TextValues = {
  readText: 'Read Text',
  failedText: 'Failed Text',
  sendingText: 'Sending Text',
  typingText: 'Typing Text',
  msgText: 'Message Text',
};

describe('ChatMessage component prop:type snapshot', () => {
  const mapper: Record<string, any> = {
    type: valueHelper(type, { required: true, iterate: true }),
    text: valueHelper(TextValues.msgText, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<ChatMessage {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChatMessage component prop:isTyping snapshot', () => {
  const mapper: Record<string, any> = {
    isTyping: valueHelper(BooleanValue, { iterate: true, required: false }),
    typingText: valueHelper(TextValues.typingText, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<ChatMessage {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChatMessage component prop:text snapshot', () => {
  const mapper: Record<string, any> = {
    text: valueHelper(TextValues.msgText, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<ChatMessage {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChatMessage component with different values of prop:type ', () => {
  type.forEach((value) => {
    it(`check for Message Box to have class Box--${value} if type is ${value}`, () => {
      const { getByTestId } = render(
        <ChatMessage text={TextValues.msgText} type={value} typingText={TextValues.typingText} />
      );
      expect(getByTestId('DesignSystem-ChatMessage--Box')).toHaveClass(`Box--${value}`);
    });
  });
});

describe('ChatMessage component prop:isTyping', () => {
  it('check for properties when isTyping is true', () => {
    const { getByTestId } = render(
      <ChatMessage type="incoming" text={TextValues.msgText} isTyping={true} typingText={TextValues.typingText} />
    );
    expect(getByTestId('DesignSystem-Text').textContent).toMatch(TextValues.typingText);
    expect(getByTestId('DesignSystem-ChatMessage--Box')).toHaveClass('Box-incoming--withStatus');
    expect(getByTestId('DesignSystem-ChatMessage--Box')).toHaveClass('Box--typing');
  });

  it('check for text Message when isTyping is false', () => {
    const { getByTestId } = render(
      <ChatMessage type="incoming" text={TextValues.msgText} isTyping={false} typingText={TextValues.typingText} />
    );
    expect(getByTestId('DesignSystem-Text').textContent).toMatch(TextValues.msgText);
    expect(getByTestId('DesignSystem-ChatMessage--Box')).not.toHaveClass('Box-incoming--withStatus');
    expect(getByTestId('DesignSystem-ChatMessage--Box')).not.toHaveClass('Box--typing');
  });
});

describe('ChatMessage Component with overwrite class', () => {
  it('overwrite DesignSystem-ChatMessage class', () => {
    const { getByTestId } = render(
      <ChatMessage
        className="ChatCustomClass"
        type="incoming"
        text={TextValues.msgText}
        typingText={TextValues.typingText}
      />
    );
    expect(getByTestId('DesignSystem-ChatMessage--Box')).toHaveClass('ChatCustomClass');
  });
});

describe('ChatMessage component prop:statusOptions with type:failed', () => {
  it('check for statusOptions type:failed', () => {
    const { getAllByTestId, getByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'failed',
          failedText: TextValues.failedText,
        }}
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch('Failed');
    expect(getByTestId('DesignSystem-MetaList--MetaLabel').textContent).toMatch(TextValues.failedText);
  });

  it('check for statusOptions type:failed default props', () => {
    const { getByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'failed',
        }}
      />
    );
    expect(getByTestId('DesignSystem-MetaList--MetaLabel').textContent).toMatch('Click to retry');
  });
});

describe('ChatMessage component prop:statusOptions with type:sending', () => {
  it('check for statusOptions type:sending', () => {
    const { getAllByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'sending',
          sendingText: TextValues.sendingText,
        }}
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch(TextValues.sendingText);
  });

  it('check for statusOptions type:sending default props', () => {
    const { getAllByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'sending',
        }}
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch('Sending..');
  });
});

describe('ChatMessage component prop:statusOptions with type:sent', () => {
  it('check for statusOptions type:sent with time:string', () => {
    const { getAllByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'sent',
          time: timeStr,
        }}
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch(timeStr);
    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveClass('ChatMessage-status');
  });

  it('check for statusOptions type:sent with time:number', () => {
    const { getAllByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'sent',
          time: timeNum,
        }}
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch('12:0 AM');
    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveClass('ChatMessage-status');
  });
});

describe('ChatMessage component prop:statusOptions with type:read', () => {
  it('check for statusOptions type:read', () => {
    const { getByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'read',
          readText: TextValues.readText,
        }}
      />
    );
    expect(getByTestId('DesignSystem-MetaList--MetaLabel').textContent).toMatch(TextValues.readText);
  });

  it('check for statusOptions type:read default props', () => {
    const { getByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'read',
        }}
      />
    );
    expect(getByTestId('DesignSystem-MetaList--MetaLabel').textContent).toMatch('Read');
  });

  it('check for statusOptions type:read with time prop', () => {
    const { getAllByTestId, getByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'read',
          readText: TextValues.readText,
          time: timeStr,
        }}
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch(timeStr);
    expect(getByTestId('DesignSystem-MetaList--MetaLabel').textContent).toMatch(TextValues.readText);
  });
});

describe('ChatMessage component prop:statusOptions with type:urgent', () => {
  it('check for statusOptions type:urgent', () => {
    const { getAllByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'urgent',
        }}
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch('Urgent');
  });

  it('check for statusOptions type:urgent with time prop', () => {
    const { getAllByTestId, getByTestId } = render(
      <ChatMessage
        text={TextValues.msgText}
        type="incoming"
        typingText={TextValues.typingText}
        statusOptions={{
          type: 'urgent',
          time: timeStr,
        }}
      />
    );
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch('Urgent');
    expect(getByTestId('DesignSystem-MetaList--MetaLabel').textContent).toMatch(timeStr);
  });
});
