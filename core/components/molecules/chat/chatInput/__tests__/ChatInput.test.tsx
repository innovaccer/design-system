import * as React from 'react';
import { Button } from '@/index';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import ChatInput, { ChatInputProps as Props } from '../ChatInput';

const StringValue = 'Sample message';
const FunctionValue = jest.fn();
const BooleanValue = [true, false];

describe('ChatInput component', () => {
  const mapper: Record<string, any> = {
    placeholder: valueHelper('Custom placeholder', { required: true }),
    defaultValue: valueHelper(StringValue, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    showStopButton: valueHelper(BooleanValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
    onBlur: valueHelper(FunctionValue, { required: true }),
    onFocus: valueHelper(FunctionValue, { required: true }),
    onKeyDown: valueHelper(FunctionValue, { required: true }),
    onSend: valueHelper(FunctionValue, { required: true }),
    onStopGenerating: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ChatInput {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ChatInput component', () => {
  it('renders with default props', () => {
    const { getByPlaceholderText, getByTestId } = render(<ChatInput />);
    expect(getByPlaceholderText('Start typing...')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-SendButton')).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<ChatInput onChange={onChange} />);
    const input = getByPlaceholderText('Start typing...');

    fireEvent.change(input, { target: { value: 'New message' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('handles send button click correctly', () => {
    const onSend = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(<ChatInput onSend={onSend} />);
    const input = getByPlaceholderText('Start typing...');
    const sendButton = getByTestId('DesignSystem-SendButton');

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);
    expect(onSend).toHaveBeenCalled();
  });

  it('shows stop button when showStopButton is true', () => {
    const { getByTestId } = render(<ChatInput showStopButton={true} />);
    expect(getByTestId('DesignSystem-StopButton')).toBeInTheDocument();
  });

  it('handles stop generating button click correctly', () => {
    const onStopGenerating = jest.fn();
    const { getByTestId } = render(<ChatInput showStopButton={true} onStopGenerating={onStopGenerating} />);

    const stopButton = getByTestId('DesignSystem-StopButton');
    fireEvent.click(stopButton);
    expect(onStopGenerating).toHaveBeenCalled();
  });

  it('disables input and buttons when disabled prop is true', () => {
    const { getByPlaceholderText, getByTestId } = render(<ChatInput disabled={true} />);
    const input = getByPlaceholderText('Start typing...');
    const sendButton = getByTestId('DesignSystem-SendButton');

    expect(input).toBeDisabled();
    expect(sendButton).toBeDisabled();
  });

  it('renders custom action renderer when provided', () => {
    const actionRenderer = () => <button data-test="DesignSystem-CustomAction">Custom Action</button>;
    const { getByTestId } = render(<ChatInput actionRenderer={actionRenderer} />);

    expect(getByTestId('DesignSystem-CustomAction')).toBeInTheDocument();
  });

  it('clears input after sending message', () => {
    const { getByPlaceholderText, getByTestId } = render(<ChatInput />);
    const input = getByPlaceholderText('Start typing...');
    const sendButton = getByTestId('DesignSystem-SendButton');

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);
    expect(input).toHaveValue('');
  });

  describe('customSubmitRenderer', () => {
    it('Should render custom submit renderer when provided', () => {
      const CustomSubmitRenderer = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
        <button data-test="DesignSystem-CustomSubmit" onClick={onClick}>
          Custom Submit
        </button>
      );

      const { getByTestId, queryByTestId } = render(<ChatInput customSubmitRenderer={CustomSubmitRenderer} />);

      expect(getByTestId('DesignSystem-CustomSubmit')).toBeInTheDocument();
      expect(queryByTestId('DesignSystem-SendButton')).not.toBeInTheDocument();
    });

    it('Should clear input when custom submit renderer is clicked', () => {
      const CustomSubmitRenderer = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
        <Button data-test="DesignSystem-CustomSubmit" onClick={onClick}>
          Custom Submit
        </Button>
      );

      const { getByTestId, getByPlaceholderText } = render(<ChatInput customSubmitRenderer={CustomSubmitRenderer} />);

      const input = getByPlaceholderText('Start typing...');
      const customButton = getByTestId('DesignSystem-CustomSubmit');

      fireEvent.change(input, { target: { value: 'Test message' } });
      expect(input).toHaveValue('Test message');

      fireEvent.click(customButton);
      expect(input).toHaveValue('');
    });

    it('Should maintain proper spacing with actionRenderer', () => {
      const CustomSubmitRenderer = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
        <button data-test="DesignSystem-CustomSubmit" onClick={onClick}>
          Custom Submit
        </button>
      );

      const actionRenderer = () => <button data-test="DesignSystem-CustomAction">Action</button>;

      const { container } = render(
        <ChatInput customSubmitRenderer={CustomSubmitRenderer} actionRenderer={actionRenderer} />
      );

      const customSubmitWrapper = container.querySelector('.ml-3');
      expect(customSubmitWrapper).toBeInTheDocument();
    });

    it('Should take precedence over showStopButton', () => {
      const CustomSubmitRenderer = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
        <button data-test="DesignSystem-CustomSubmit" onClick={onClick}>
          Custom Submit
        </button>
      );

      const { queryByTestId } = render(<ChatInput customSubmitRenderer={CustomSubmitRenderer} showStopButton={true} />);

      expect(queryByTestId('DesignSystem-CustomSubmit')).toBeInTheDocument();
      expect(queryByTestId('DesignSystem-StopButton')).not.toBeInTheDocument();
      expect(queryByTestId('DesignSystem-SendButton')).not.toBeInTheDocument();
    });
  });

  describe('className and data-test attributes', () => {
    it('applies custom className to the container', () => {
      const customClass = 'custom-chat-input';
      const { getByTestId } = render(<ChatInput className={customClass} />);
      const chatInputContainer = getByTestId('DesignSystem-ChatInput');
      expect(chatInputContainer).toHaveClass(customClass);
    });

    it('applies correct classes when disabled', () => {
      const { getByTestId } = render(<ChatInput disabled={true} />);
      const chatInputContainer = getByTestId('DesignSystem-ChatInput');
      expect(chatInputContainer).toHaveClass('ChatInput--disabled');
    });

    it('verifies data-test attributes on all interactive elements', () => {
      const { getByTestId } = render(<ChatInput />);

      expect(getByTestId('DesignSystem-ChatInput')).toBeInTheDocument();

      expect(getByTestId('DesignSystem-ChatInput-textarea')).toBeInTheDocument();

      expect(getByTestId('DesignSystem-ChatInput-actions')).toBeInTheDocument();

      expect(getByTestId('DesignSystem-SendButton')).toBeInTheDocument();

      const { getByTestId: getByTestIdWithStop } = render(<ChatInput showStopButton={true} />);
      expect(getByTestIdWithStop('DesignSystem-StopButton')).toBeInTheDocument();
    });

    it('verifies textarea has correct data-test attribute and class', () => {
      const { getByTestId } = render(<ChatInput />);
      const textarea = getByTestId('DesignSystem-ChatInput-textarea');
      expect(textarea).toBeInTheDocument();
      expect(textarea).toHaveClass('ChatInput-textarea');
    });
  });
});
