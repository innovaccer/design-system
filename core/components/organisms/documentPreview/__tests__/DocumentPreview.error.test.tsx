import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocumentPreview } from '@/index';
import { DocumentPreviewProps } from '@/index.type';

describe('DocumentPreview Error Handling', () => {
  const defaultProps: DocumentPreviewProps = {
    open: true,
    onClose: jest.fn(),
    documentUrls: ['https://example.com/test.pdf'],
    dimension: 'regular',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should display error message when error prop is provided', () => {
    const errorMessage = 'Failed to load document';
    const props = {
      ...defaultProps,
      error: errorMessage,
    };

    const { getByText } = render(<DocumentPreview {...props} />);
    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('Should handle empty document URLs array', () => {
    const props = {
      ...defaultProps,
      documentUrls: [],
    };

    const { container } = render(<DocumentPreview {...props} />);
    // Component returns null when no documents are provided
    expect(container.firstChild).toBeNull();
  });

  it('Should handle invalid document URLs', () => {
    const props = {
      ...defaultProps,
      documentUrls: ['invalid-url', 'another-invalid-url'],
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);
    expect(getByTestId('DocumentPreview')).toBeInTheDocument();
  });

  it('Should handle missing required props gracefully', () => {
    const props = {
      open: true,
      onClose: jest.fn(),
    } as DocumentPreviewProps;

    const { container } = render(<DocumentPreview {...props} />);
    // Component returns null when no documents are provided
    expect(container.firstChild).toBeNull();
  });

  it('Should handle network errors gracefully', async () => {
    const props = {
      ...defaultProps,
      documentUrls: ['https://non-existent-domain.com/test.pdf'],
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);
    expect(getByTestId('DocumentPreview')).toBeInTheDocument();
  });

  it('Should handle loading state timeout', async () => {
    const props = {
      ...defaultProps,
      loading: true,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);
    expect(getByTestId('DocumentPreview')).toBeInTheDocument();
  });

  it('Should handle invalid zoom values', () => {
    const props = {
      ...defaultProps,
      initialZoom: -100, // Invalid negative zoom
      minZoom: -50,
      maxZoom: -10,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);
    expect(getByTestId('DocumentPreview')).toBeInTheDocument();
  });

  it('Should handle invalid document index', () => {
    const props = {
      ...defaultProps,
      initialDocumentIndex: 999, // Index out of bounds
    };

    const { container } = render(<DocumentPreview {...props} />);
    // Component returns null when document index is out of bounds
    expect(container.firstChild).toBeNull();
  });

  it('Should handle malformed document objects', () => {
    const documents = [
      { src: '', title: '' }, // Empty values
      { src: null, title: null }, // Null values
      {}, // Missing required properties
    ] as any;

    const props = {
      ...defaultProps,
      documents,
      documentUrls: undefined,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);
    expect(getByTestId('DocumentPreview')).toBeInTheDocument();
  });

  it('Should handle callback errors gracefully', () => {
    const onClose = jest.fn(() => {
      throw new Error('Callback error');
    });

    const props = {
      ...defaultProps,
      onClose,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    // This should not crash the component
    fireEvent.keyDown(getByTestId('DocumentPreview'), { key: 'Escape' });
    expect(getByTestId('DocumentPreview')).toBeInTheDocument();
  });

  it('Should handle unsupported file types', () => {
    const props = {
      ...defaultProps,
      documentUrls: ['https://example.com/test.unknown'],
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);
    expect(getByTestId('DocumentPreview')).toBeInTheDocument();
  });

  it('Should handle very large file URLs', () => {
    const longUrl = 'https://example.com/' + 'a'.repeat(1000) + '.pdf';
    const props = {
      ...defaultProps,
      documentUrls: [longUrl],
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);
    expect(getByTestId('DocumentPreview')).toBeInTheDocument();
  });
});
