import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Chat } from '@/index';
import { ChatInputProps as Props } from '../ChatInput';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const chatMessage = 'Test Message';
const booleanValues = [true, false];
const placeholder = 'Placeholder Value';
const onChange = jest.fn();
const mentionList = [
  { label: 'John Doe', value: 'john' },
  { label: 'Jane Smith', value: 'jane' },
];

beforeAll(() => {
  Object.defineProperty(window, 'getSelection', {
    value: jest.fn(() => ({
      anchorNode: {
        textContent: '@john',
      },
      focusOffset: 5,
      removeAllRanges: jest.fn(),
      addRange: jest.fn(),
    })),
    writable: true,
  });
});

describe('ChatInput component snapshot', () => {
  const mapper = {
    disabled: valueHelper(booleanValues, { required: false, iterate: true }),
    value: valueHelper(chatMessage, { required: true, iterate: false }),
    placeholder: valueHelper(placeholder, { required: true, iterate: false }),
    onChange: valueHelper(() => {}, { required: true, iterate: false }),
    onKeyDown: valueHelper(() => {}, { required: true, iterate: false }),
    showStopButton: valueHelper(booleanValues, { required: false, iterate: true }),
    enableMention: valueHelper(booleanValues, { required: false, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <Chat>
          <Chat.ChatInput {...attr} />
        </Chat>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChatInput Component', () => {
  it('renders the ChatInput component correctly', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput value={chatMessage} onChange={onChange} />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    expect(chatInput).toBeInTheDocument();
  });

  it('should not be editable when disabled prop is true', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput value={chatMessage} onChange={onChange} disabled />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    expect(chatInput).toHaveAttribute('contenteditable', 'false');
  });

  it('should be editable when disabled prop is false', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput value={chatMessage} disabled={false} />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    expect(chatInput).toHaveAttribute('contenteditable', 'true');
  });

  // test for showStopButton prop
  it('should show stop button when showStopButton prop is true', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput value={chatMessage} onChange={onChange} showStopButton />
      </Chat>
    );

    const stopButton = getByTestId('DesignSystem-StopButton');
    expect(stopButton).toBeInTheDocument();
  });

  // support enableMention prop when user types the @ symbol in contenteditable div
  // it('should show mention popup when @ symbol is typed', () => {
  //   const { getByTestId } = render(
  //     <Chat>
  //       <Chat.ChatInput value={chatMessage} onChange={onChange} enableMention />
  //     </Chat>
  //   );
  //   const chatInput = getByTestId('DesignSystem-ChatInput');
  //   fireEvent.input(chatInput, { target: { innerText: '@' } });
  //   const mentionPopup = getByTestId('DesignSystem-Popover');
  //   expect(mentionPopup).toBeInTheDocument();
  // });

  // it('should show mention popup when @ symbol is typed', () => {
  //   const { getByTestId } = render(
  //     <Chat>
  //       <Chat.ChatInput value={chatMessage} onChange={onChange} enableMention />
  //     </Chat>
  //   );

  //   const chatInput = getByTestId('DesignSystem-ChatInput');
  //   fireEvent.input(chatInput, { target: { innerText: '@' } });

  //   const mentionPopup = getByTestId('DesignSystem-Popover');
  //   expect(mentionPopup).toBeInTheDocument();
  // });

  // it('should show mention popup when enableMention prop is true', () => {
  //   const { getByTestId } = render(
  //     <Chat>
  //       <Chat.ChatInput value={chatMessage} onChange={onChange} enableMention />
  //     </Chat>
  //   );

  //   const mentionPopup = getByTestId('DesignSystem-Popover');
  //   expect(mentionPopup).toBeInTheDocument();
  // });
});

describe('ChatInput sendButtonRenderer functionality', () => {
  it('should render the stop button when showStopButton is true', () => {
    const onStopGenerating = jest.fn();
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput value="" onChange={jest.fn()} showStopButton onStopGenerating={onStopGenerating} />
      </Chat>
    );

    const stopButton = getByTestId('DesignSystem-StopButton');
    expect(stopButton).toBeInTheDocument();
    fireEvent.click(stopButton);
    expect(onStopGenerating).toHaveBeenCalled();
  });

  it('should render the send button when showStopButton is false', () => {
    const onSend = jest.fn();
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput value="Hello" onChange={jest.fn()} showStopButton={false} onSend={onSend} />
      </Chat>
    );

    const sendButton = getByTestId('DesignSystem-SendButton');
    expect(sendButton).toBeInTheDocument();
    fireEvent.click(sendButton);
    expect(onSend).toHaveBeenCalled();
  });

  it('should disable the send button when input is empty', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput value="" onChange={jest.fn()} />
      </Chat>
    );

    const sendButton = getByTestId('DesignSystem-SendButton');
    expect(sendButton).toBeDisabled();
  });

  it('should enable the send button when input is not empty', () => {
    const { getByLabelText } = render(
      <Chat>
        <Chat.ChatInput value="Hello" onChange={jest.fn()} />
      </Chat>
    );

    const sendButton = getByLabelText('Send');
    expect(sendButton).not.toBeDisabled();
  });
});

describe('ChatInput mention functionality', () => {
  it('should show mention popup when "@" is typed', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput value="" onChange={jest.fn()} enableMention mentionProps={{ mentionList }} />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    fireEvent.input(chatInput, { target: { textContent: '@' } });

    const mentionPopup = getByTestId('DesignSystem-Popover');
    expect(mentionPopup).toBeInTheDocument();
  });

  it('should filter mentions based on input after "@"', () => {
    const { getByTestId, queryByText } = render(
      <Chat>
        <Chat.ChatInput value="" onChange={jest.fn()} enableMention mentionProps={{ mentionList }} />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    fireEvent.input(chatInput, { target: { textContent: '@j' } });

    expect(queryByText('John Doe')).toBeInTheDocument();
    // expect(queryByText('Jane Smith')).toBeInTheDocument();

    fireEvent.input(chatInput, { target: { textContent: '@jo' } });
    expect(queryByText('John Doe')).toBeInTheDocument();
    expect(queryByText('Jane Smith')).not.toBeInTheDocument();
  });

  it('should handle backspace in mention suggestion', () => {
    const { getByTestId, queryByTestId } = render(
      <Chat>
        <Chat.ChatInput value="" onChange={jest.fn()} enableMention mentionProps={{ mentionList }} />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    fireEvent.input(chatInput, { target: { textContent: '@' } });

    expect(queryByTestId('DesignSystem-Popover')).toBeInTheDocument();

    fireEvent.keyDown(chatInput, { key: 'Backspace' });
    expect(queryByTestId('DesignSystem-Popover')).not.toBeInTheDocument();
  });

  it('should render customPopoverRenderer when provided', () => {
    const customPopoverRenderer = jest.fn((mentions) => (
      <div data-test="CustomPopover">
        {mentions.map((mention: any) => (
          <div key={mention.value}>{mention.label}</div>
        ))}
      </div>
    ));

    const { getByTestId, queryByTestId } = render(
      <Chat>
        <Chat.ChatInput
          value=""
          onChange={jest.fn()}
          enableMention
          mentionProps={{
            mentionList,
            customPopoverRenderer,
          }}
        />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    fireEvent.input(chatInput, { target: { textContent: '@' } });

    expect(queryByTestId('CustomPopover')).toBeInTheDocument();
    // expect(customPopoverRenderer).toHaveBeenCalledWith(mentionList);
  });

  it('should apply custom popoverMaxHeight when provided', () => {
    const popoverMaxHeight = 300;

    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput
          value=""
          onChange={jest.fn()}
          enableMention
          mentionProps={{
            mentionList,
            popoverMaxHeight,
          }}
        />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    fireEvent.input(chatInput, { target: { textContent: '@' } });

    const mentionListbox = getByTestId('DesignSystem-MentionPopup-Listbox');
    expect(mentionListbox).toHaveStyle(`max-height: ${popoverMaxHeight}px`);
  });

  it('should apply custom popoverMinWidth when provided', () => {
    const popoverMinWidth = 200;

    const { getByTestId } = render(
      <Chat>
        <Chat.ChatInput
          value=""
          onChange={jest.fn()}
          enableMention
          mentionProps={{
            mentionList,
            popoverMinWidth,
          }}
        />
      </Chat>
    );

    const chatInput = getByTestId('DesignSystem-ChatInput');
    fireEvent.input(chatInput, { target: { textContent: '@' } });

    const mentionPopup = getByTestId('DesignSystem-Popover');
    expect(mentionPopup).toHaveStyle(`min-width: ${popoverMinWidth}px`);
  });
});
