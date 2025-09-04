/**
 * Utility functions for document actions in DocumentPreview
 * These functions provide working implementations for print and download functionality
 */

import { PreviewDocument } from '../types';

export interface DocumentActionOptions {
  filename?: string;
  autoShowPrintDialog?: boolean;
  printStyles?: string;
  fallbackBehavior?: 'open-new-tab' | 'show-error' | 'silent';
}

/**
 * Downloads a document (PDF or image) from the given URL
 * Works with both same-origin and cross-origin resources (with CORS)
 */
export const downloadDocument = async (
  document: PreviewDocument,
  options: DocumentActionOptions = {}
): Promise<void> => {
  const { filename, fallbackBehavior = 'open-new-tab' } = options;

  try {
    const downloadFilename = filename || generateFilename(document);

    let blob: Blob;

    if (document.src instanceof Blob) {
      blob = document.src;
    } else {
      const response = await fetch(document.src);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      blob = await response.blob();
    }
    const url = window.URL.createObjectURL(blob);

    const downloadLink = window.document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = downloadFilename;
    downloadLink.style.display = 'none';

    window.document.body.appendChild(downloadLink);
    downloadLink.click();
    window.document.body.removeChild(downloadLink);

    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error('❌ Download failed:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    switch (fallbackBehavior) {
      case 'open-new-tab':
        if (typeof document.src === 'string') {
          window.open(document.src, '_blank');
        }
        break;
      case 'show-error':
        alert(`Download failed: ${errorMessage}`);
        break;
      case 'silent':
        break;
    }
  }
};

/**
 * Prints a document (PDF or image)
 * For PDFs: Opens in new window with print dialog
 * For Images: Creates a print-optimized view
 */
export const printDocument = (document: PreviewDocument, options: DocumentActionOptions = {}): void => {
  const { autoShowPrintDialog = true, printStyles, fallbackBehavior = 'open-new-tab' } = options;

  try {
    const contentType = getDocumentContentType(document);

    if (contentType === 'pdf') {
      printPDF(document, autoShowPrintDialog);
    } else {
      printImage(document, { printStyles, autoShowPrintDialog });
    }
  } catch (error) {
    console.error('❌ Print failed:', error);

    if (fallbackBehavior === 'open-new-tab' && typeof document.src === 'string') {
      window.open(document.src, '_blank');
    }
  }
};

const printPDF = (document: PreviewDocument, autoShowPrintDialog: boolean): void => {
  if (!(typeof document.src === 'string')) {
    throw new Error('PDF printing requires a URL string, not a Blob');
  }

  const printWindow = window.open(document.src, '_blank', 'width=800,height=600');

  if (!printWindow) {
    throw new Error('Popup blocked - please allow popups for this site');
  }

  if (autoShowPrintDialog) {
    printWindow.onload = () => {
      printWindow.print();
    };
  }
};

const printImage = (
  document: PreviewDocument,
  options: { printStyles?: string; autoShowPrintDialog: boolean }
): void => {
  const { printStyles, autoShowPrintDialog } = options;

  const defaultStyles = `
    body {
      margin: 0;
      padding: 20px;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .document-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #333;
      page-break-after: avoid;
    }
    .document-subtitle {
      font-size: 14px;
      color: #666;
      margin-bottom: 30px;
      page-break-after: avoid;
    }
    .document-image {
      max-width: 100%;
      max-height: 90vh;
      height: auto;
      border: 1px solid #ddd;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    @media print {
      body { padding: 0; }
      .document-title { font-size: 20px; margin-bottom: 15px; }
      .document-subtitle { font-size: 12px; margin-bottom: 20px; }
      .document-image { max-height: none; box-shadow: none; border: none; }
    }
  `;

  const finalStyles = printStyles || defaultStyles;

  const printWindow = window.open('', '_blank', 'width=800,height=600');

  if (!printWindow) {
    throw new Error('Popup blocked - please allow popups for this site');
  }

  const imageUrl = document.src instanceof Blob ? window.URL.createObjectURL(document.src) : document.src;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print - ${document.title}</title>
        <meta charset="utf-8">
        <style>${finalStyles}</style>
      </head>
      <body>
        <div class="document-title">${document.title}</div>
        ${document.subtitle ? `<div class="document-subtitle">${document.subtitle}</div>` : ''}
        <img 
          class="document-image" 
          src="${imageUrl}" 
          alt="${document.title}"
          onload="${autoShowPrintDialog ? 'window.print()' : ''}"
          onerror="document.body.innerHTML='<p>Error loading image for print</p>'"
        />
      </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();

  if (document.src instanceof Blob) {
    setTimeout(() => {
      window.URL.revokeObjectURL(imageUrl);
    }, 5000);
  }
};

const generateFilename = (document: PreviewDocument): string => {
  const extension = getFileExtension(document);
  const sanitizedTitle = document.title
    .replace(/[^a-z0-9\s]/gi, '')
    .replace(/\s+/g, '_')
    .toLowerCase();

  return `${sanitizedTitle}${extension}`;
};

const getDocumentContentType = (document: PreviewDocument): string => {
  if (document.contentType) {
    return document.contentType;
  }

  const fileType = document.fileType?.toLowerCase();
  const srcLower = typeof document.src === 'string' ? document.src.toLowerCase() : '';

  if (fileType === 'pdf' || srcLower.includes('.pdf')) {
    return 'pdf';
  }

  if (
    fileType === 'image' ||
    ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].some((ext) => fileType === ext || srcLower.includes(`.${ext}`))
  ) {
    return 'image';
  }

  return 'auto';
};

const getFileExtension = (document: PreviewDocument): string => {
  const contentType = getDocumentContentType(document);

  switch (contentType) {
    case 'pdf':
      return '.pdf';
    case 'image': {
      const srcLower = typeof document.src === 'string' ? document.src.toLowerCase() : '';
      const fileType = document.fileType?.toLowerCase();

      if (fileType === 'png' || srcLower.includes('.png')) return '.png';
      if (fileType === 'gif' || srcLower.includes('.gif')) return '.gif';
      if (fileType === 'webp' || srcLower.includes('.webp')) return '.webp';
      if (fileType === 'svg' || srcLower.includes('.svg')) return '.svg';
      return '.jpg';
    }
    default:
      return '.file';
  }
};

export const downloadMultipleDocuments = async (
  documents: PreviewDocument[],
  options: DocumentActionOptions = {}
): Promise<void> => {
  const { fallbackBehavior = 'silent' } = options;

  for (let i = 0; i < documents.length; i++) {
    const doc = documents[i];

    await downloadDocument(doc, { ...options, fallbackBehavior });

    if (i < documents.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
};

export const isDownloadSupported = (): boolean => {
  const a = window.document.createElement('a');
  return typeof a.download !== 'undefined';
};

export const isPrintSupported = (): boolean => {
  return typeof window.print === 'function';
};
