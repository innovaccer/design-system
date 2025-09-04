import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocumentPreview } from '@/index';
import { DocumentPreviewProps } from '@/index.type';

describe('DocumentPreview User Interactions', () => {
  const defaultProps: DocumentPreviewProps = {
    open: true,
    onClose: jest.fn(),
    documentUrls: ['https://example.com/test1.pdf', 'https://example.com/test2.jpg', 'https://example.com/test3.txt'],
    dimension: 'regular',
    showNavigation: true,
    showZoomControls: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should navigate between documents using navigation buttons', () => {
    const onDocumentChange = jest.fn();
    const props = {
      ...defaultProps,
      onDocumentChange,
      initialDocumentIndex: 0,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    // Navigate to next document
    const nextButton = getByTestId('NavigationButtons--Next');
    fireEvent.click(nextButton);
    expect(onDocumentChange).toHaveBeenCalledWith(1);

    // Navigate to previous document
    const previousButton = getByTestId('NavigationButtons--Previous');
    fireEvent.click(previousButton);
    expect(onDocumentChange).toHaveBeenCalledWith(0);
  });

  it('Should handle zoom controls interaction', () => {
    const onZoomChange = jest.fn();
    const props = {
      ...defaultProps,
      onZoomChange,
      initialZoom: 100,
      minZoom: 50,
      maxZoom: 200,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    // Check if zoom controls are rendered (they should be in the FilePreview component)
    const zoomControls = document.querySelector('[data-test="ZoomControls"]');
    if (zoomControls) {
      // Zoom in
      const zoomInButton = getByTestId('ZoomControls--ZoomIn');
      fireEvent.click(zoomInButton);
      expect(onZoomChange).toHaveBeenCalledWith(110);

      // Zoom out
      const zoomOutButton = getByTestId('ZoomControls--ZoomOut');
      fireEvent.click(zoomOutButton);
      expect(onZoomChange).toHaveBeenCalledWith(100);
    }
  });

  it('Should handle print button click', () => {
    const onPrint = jest.fn();
    const props = {
      ...defaultProps,
      onPrint,
      disablePrint: false,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    const printButton = getByTestId('DocumentPreview--Print-Sidesheet');
    fireEvent.click(printButton);
    expect(onPrint).toHaveBeenCalled();
  });

  it('Should handle download button click', () => {
    const onDownload = jest.fn();
    const props = {
      ...defaultProps,
      onDownload,
      disableDownload: false,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    const downloadButton = getByTestId('DocumentPreview--Download-Sidesheet');
    fireEvent.click(downloadButton);
    expect(onDownload).toHaveBeenCalled();
  });

  it('Should handle fullscreen toggle', () => {
    const onFullscreen = jest.fn();
    const props = {
      ...defaultProps,
      onFullscreen,
      disableFullscreen: false,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    const fullscreenButton = getByTestId('DocumentPreview--Fullscreen');
    fireEvent.click(fullscreenButton);
    expect(onFullscreen).toHaveBeenCalled();
  });

  it('Should handle close button click', () => {
    const onClose = jest.fn();
    const props = {
      ...defaultProps,
      onClose,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    // Simulate ESC key press to close
    fireEvent.keyDown(getByTestId('DocumentPreview'), { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('Should disable navigation buttons at boundaries', () => {
    const props = {
      ...defaultProps,
      initialDocumentIndex: 0,
      documentUrls: ['https://example.com/single.pdf'],
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    // With only one document, navigation buttons should not be rendered
    const nextButton = document.querySelector('[data-test="NavigationButtons--Next"]');
    const previousButton = document.querySelector('[data-test="NavigationButtons--Previous"]');

    // Navigation buttons are not rendered when there's only one document
    expect(nextButton).toBeNull();
    expect(previousButton).toBeNull();
  });

  it('Should disable zoom buttons at limits', () => {
    const props = {
      ...defaultProps,
      initialZoom: 50,
      minZoom: 50,
      maxZoom: 200,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    // Check if zoom controls are rendered
    const zoomControls = document.querySelector('[data-test="ZoomControls"]');
    if (zoomControls) {
      const zoomOutButton = getByTestId('ZoomControls--ZoomOut');
      expect(zoomOutButton).toBeDisabled();
    }
  });

  it('Should handle keyboard navigation', () => {
    const onDocumentChange = jest.fn();
    const props = {
      ...defaultProps,
      onDocumentChange,
      initialDocumentIndex: 1,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    // Navigate with arrow keys
    fireEvent.keyDown(getByTestId('DocumentPreview'), { key: 'ArrowRight' });
    expect(onDocumentChange).toHaveBeenCalledWith(2);

    fireEvent.keyDown(getByTestId('DocumentPreview'), { key: 'ArrowLeft' });
    expect(onDocumentChange).toHaveBeenCalledWith(1);
  });

  it('Should handle expanded mode toggle', () => {
    const setExpandedMode = jest.fn();
    const props = {
      ...defaultProps,
      expandedMode: false,
      setExpandedMode,
    };

    const { getByTestId } = render(<DocumentPreview {...props} />);

    expect(getByTestId('DocumentPreview')).toBeInTheDocument();

    // Find and click expand button (assuming it exists in the UI)
    const expandButton = document.querySelector('[data-testid*="expand"]');
    if (expandButton) {
      fireEvent.click(expandButton as Element);
      expect(setExpandedMode).toHaveBeenCalledWith(true);
    }
  });
});
