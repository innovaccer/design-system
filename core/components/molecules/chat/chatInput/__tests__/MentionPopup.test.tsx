import * as React from 'react';
import { render, screen } from '@testing-library/react';
import MentionPopup from '../MentionPopup';
import { MentionItemType } from '../ChatInput';

const mockSetShowMention = jest.fn();
const mockSetContent = jest.fn();
const mockTextareaRef = { current: document.createElement('div') };
const mockMentionRangeRef = { current: null };

const mentionPosition = { top: 100, left: 200 };
const filteredMentions: MentionItemType[] = [
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

describe('MentionPopup Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the mention popup with filtered mentions', () => {
    const { getAllByTestId } = render(
      <MentionPopup
        mentionPosition={mentionPosition}
        textareaRef={mockTextareaRef}
        setShowMention={mockSetShowMention}
        filteredMentions={filteredMentions}
        setContent={mockSetContent}
        mentionRangeRef={mockMentionRangeRef}
      />
    );

    const popup = screen.getByTestId('DesignSystem-Popover');
    expect(popup).toBeInTheDocument();

    const listbox = screen.getByTestId('DesignSystem-MentionPopup-Listbox');
    expect(listbox).toBeInTheDocument();

    // const options = screen.getAllByRole('option');
    const options = getAllByTestId('DesignSystem-Listbox-Item');
    expect(options.length).toBe(2);
    expect(options[0]).toHaveTextContent('John Doe');
    expect(options[1]).toHaveTextContent('Jane Smith');
  });

  it('should handle empty filtered mentions gracefully', () => {
    render(
      <MentionPopup
        mentionPosition={mentionPosition}
        textareaRef={mockTextareaRef}
        setShowMention={mockSetShowMention}
        filteredMentions={[]}
        setContent={mockSetContent}
        mentionRangeRef={mockMentionRangeRef}
      />
    );

    const popup = screen.getByTestId('DesignSystem-Popover');
    expect(popup).toBeInTheDocument();

    const listbox = screen.queryByTestId('DesignSystem-MentionPopup-Listbox');
    const options = screen.queryByTestId('DesignSystem-Listbox-Item');

    expect(listbox).toBeInTheDocument();
    expect(options).not.toBeInTheDocument();
  });

  // it('should call handleMentionClick when a mention is clicked', async () => {
  //   const { getByTestId } = render(
  //     <MentionPopup
  //       mentionPosition={mentionPosition}
  //       textareaRef={mockTextareaRef}
  //       setShowMention={mockSetShowMention}
  //       filteredMentions={filteredMentions}
  //       setContent={mockSetContent}
  //       mentionRangeRef={mockMentionRangeRef}
  //     />
  //   );

  //   const option = screen.getByText('John Doe');
  //   fireEvent.click(option);

  //   await waitFor(() => {
  //     expect(getByTestId('DesignSystem-ChatInput-MentionChip')).toBeInTheDocument();
  //   });
  //   // expect(mockSetContent).toHaveBeenCalledWith([{ type: 'mention', data: { label: 'John Doe', value: 'john' } }]);
  //   // expect(mockSetShowMention).toHaveBeenCalledWith(false);
  // });

  // it('should handle invalid mentionRangeRef gracefully', () => {
  //   const invalidRangeRef = { current: { deleteContents: jest.fn() } };

  //   render(
  //     <MentionPopup
  //       mentionPosition={mentionPosition}
  //       textareaRef={mockTextareaRef}
  //       setShowMention={mockSetShowMention}
  //       filteredMentions={filteredMentions}
  //       setContent={mockSetContent}
  //       mentionRangeRef={invalidRangeRef}
  //     />
  //   );

  //   const option = screen.getByText('John Doe');
  //   fireEvent.mouseDown(option);

  //   expect(mockSetContent).toHaveBeenCalledWith([{ type: 'mention', data: { label: 'John Doe', value: 'john' } }]);
  //   // expect(mockSetShowMention).toHaveBeenCalledWith(false);
  // });

  // it('should handle invalid mentionRangeRef gracefully', () => {
  //   const mockMentionRangeRef = {
  //     current: {
  //       setStart: jest.fn(),
  //       setEnd: jest.fn(),
  //       deleteContents: jest.fn(),
  //       selectNodeContents: jest.fn(),
  //       collapse: jest.fn(),
  //     },
  //   };

  //   render(
  //     <MentionPopup
  //       mentionPosition={mentionPosition}
  //       textareaRef={mockTextareaRef}
  //       setShowMention={mockSetShowMention}
  //       filteredMentions={filteredMentions}
  //       setContent={mockSetContent}
  //       mentionRangeRef={mockMentionRangeRef}
  //     />
  //   );

  //   const option = screen.getByText('John Doe');
  //   fireEvent.mouseDown(option);

  //   expect(mockSetContent).toHaveBeenCalledWith([{ type: 'mention', data: { label: 'John Doe', value: 'john' } }]);
  //   expect(mockSetShowMention).toHaveBeenCalledWith(false);

  //   // Verify that Range methods are not called if the range is invalid
  //   expect(mockMentionRangeRef.current.selectNodeContents).not.toHaveBeenCalled();
  // });

  it('should render customPopoverRenderer when provided', () => {
    const customPopoverRenderer = jest.fn((mentions) => (
      <div data-test="CustomPopover">
        {mentions.map((mention: any) => (
          <div key={mention.value}>{mention.label}</div>
        ))}
      </div>
    ));

    render(
      <MentionPopup
        mentionPosition={mentionPosition}
        textareaRef={mockTextareaRef}
        setShowMention={mockSetShowMention}
        filteredMentions={filteredMentions}
        setContent={mockSetContent}
        mentionRangeRef={mockMentionRangeRef}
        customPopoverRenderer={customPopoverRenderer}
      />
    );

    const customPopover = screen.getByTestId('CustomPopover');
    expect(customPopover).toBeInTheDocument();
    // expect(customPopoverRenderer).toHaveBeenCalledWith(filteredMentions);
  });

  it('should apply custom popover styles', () => {
    render(
      <MentionPopup
        mentionPosition={mentionPosition}
        textareaRef={mockTextareaRef}
        setShowMention={mockSetShowMention}
        filteredMentions={filteredMentions}
        setContent={mockSetContent}
        mentionRangeRef={mockMentionRangeRef}
        popoverMaxHeight={300}
        popoverMinWidth={200}
      />
    );

    const popup = screen.getByTestId('DesignSystem-Popover');
    expect(popup).toHaveStyle('min-width: 200px');

    const listbox = screen.getByTestId('DesignSystem-MentionPopup-Listbox');
    expect(listbox).toHaveStyle('max-height: 300px');
  });
});
