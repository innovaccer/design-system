import * as React from 'react';
import { Button, Text, Heading } from '@/index';
import { DocumentDetailViewProps, PreviewDocument } from './types';
import FilePreview from './FilePreview';
import NavigationButtons from './NavigationButtons';
import DocumentInfoPanel from './DocumentInfoPanel';

/**
 * DocumentDetailView component that provides detailed document information
 * Similar to AttachmentDetail from the original implementation
 */
const DocumentDetailView: React.FC<DocumentDetailViewProps> = ({
  document,
  documentIndex,
  totalDocuments,
  subHeading,
  error,
  onClose,
  onDocumentChange,
  onFetchDocumentData,
  programSourceComponent: ProgramSourceComponent,
  disablePrint = false,
  disableDownload = false,
  onPrint,
  onDownload,
  zoom = 100,
  minZoom = 20,
  maxZoom = 200,
  onZoomChange,
  showZoomControls = true,
  attachmentInfo,
  attachmentTypes,
  onDocumentLoad,
}) => {
  const [attachmentBlob, setAttachmentBlob] = React.useState<Blob | undefined>(undefined);

  const isPrintDisabled = React.useCallback((doc: PreviewDocument): boolean => {
    if (!doc || !doc.fileType) return true;
    const unsupportedTypes = ['txt', 'xlsx', 'xls', 'tiff', 'link'];
    return unsupportedTypes.includes(doc.fileType.toLowerCase());
  }, []);

  const isDownloadDisabled = React.useCallback((doc: PreviewDocument): boolean => {
    if (!doc || !doc.fileType) return true;
    const unsupportedTypes = ['link'];
    return unsupportedTypes.includes(doc.fileType.toLowerCase());
  }, []);

  const handlePrint = React.useCallback(() => {
    if (onPrint) {
      onPrint();
      return;
    }

    if (!document || !attachmentBlob || disablePrint) return;

    const blobUrl = URL.createObjectURL(attachmentBlob);

    if (document.fileType === 'pdf') {
      const printWindow = window.open(blobUrl, '_blank');
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.print();
        };
      }
    } else if (document.fileType === 'image') {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Print ${document.title || 'Document'}</title>
              <style>
                body { margin: 0; padding: 20px; text-align: center; }
                img { max-width: 100%; height: auto; }
                @media print { body { padding: 0; } }
              </style>
            </head>
            <body>
              <img src="${blobUrl}" alt="${document.title || 'Document'}" onload="window.print(); window.close();" />
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }

    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  }, [document, attachmentBlob, disablePrint, onPrint]);

  const handleDownload = React.useCallback(() => {
    if (onDownload) {
      onDownload();
      return;
    }

    if (!document || !attachmentBlob || disableDownload) return;

    try {
      const url = URL.createObjectURL(attachmentBlob);
      const link = window.document.createElement('a');
      link.href = url;

      const filename = document.attachmentName || document.title || `document.${document.fileType || 'bin'}`;
      link.download = filename;

      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      const blobUrl = URL.createObjectURL(attachmentBlob);
      window.open(blobUrl, '_blank');
    }
  }, [document, attachmentBlob, disableDownload, onDownload]);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (onDocumentChange && totalDocuments > 1) {
        if (event.key === 'ArrowLeft' && documentIndex > 0) {
          event.preventDefault();
          onDocumentChange(documentIndex - 1);
        } else if (event.key === 'ArrowRight' && documentIndex < totalDocuments - 1) {
          event.preventDefault();
          onDocumentChange(documentIndex + 1);
        }
      }
    },
    [documentIndex, totalDocuments, onDocumentChange, onClose]
  );

  React.useEffect(() => {
    window.document.addEventListener('keydown', handleKeyDown);
    return () => window.document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  React.useEffect(() => {
    return () => {
      // React will handle zoom controls cleanup automatically
    };
  }, []);

  const printDisabled = !document || disablePrint || isPrintDisabled(document) || !attachmentBlob;
  const downloadDisabled = !document || disableDownload || isDownloadDisabled(document) || !attachmentBlob;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--white)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
      }}
      data-test="DocumentDetailView"
    >
      <div
        style={{
          padding: 'var(--spacing-40) var(--spacing-60)',
          borderBottom: 'var(--border-width-2-5) solid var(--secondary-light)',
          backgroundColor: 'var(--white)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          <div style={{ flex: 1 }}>
            <Heading size="s" style={{ marginBottom: 'var(--spacing-10)' }}>
              {document.title}
            </Heading>
            <div className="d-flex align-items-center" style={{ gap: 'var(--spacing-20)' }}>
              {document.programSourceId && ProgramSourceComponent && (
                <ProgramSourceComponent
                  sourceType="DOCUMENT"
                  sourceId={document.programSourceId}
                  showBullet={!!subHeading}
                />
              )}
              <Text appearance="subtle" size="small">
                {subHeading}
              </Text>
            </div>
          </div>

          <div className="d-flex align-items-center" style={{ gap: 'var(--spacing-20)', flexShrink: 0 }}>
            <div
              title={
                disablePrint
                  ? 'Print functionality disabled'
                  : !attachmentBlob
                  ? 'Document not loaded yet'
                  : isPrintDisabled(document)
                  ? 'Printing not supported for this file format'
                  : 'Print document'
              }
            >
              <Button
                appearance="basic"
                size="regular"
                icon="print"
                iconAlign="left"
                onClick={handlePrint}
                disabled={printDisabled}
                data-test="DocumentDetailView--Print"
              >
                Print
              </Button>
            </div>

            <div
              title={
                disableDownload
                  ? 'Download functionality disabled'
                  : !attachmentBlob
                  ? 'Document not loaded yet'
                  : isDownloadDisabled(document)
                  ? 'Download not supported for this file format'
                  : 'Download document'
              }
            >
              <Button
                appearance="basic"
                size="regular"
                icon="get_app"
                iconAlign="left"
                onClick={handleDownload}
                disabled={downloadDisabled}
                data-test="DocumentDetailView--Download"
              >
                Download
              </Button>
            </div>

            <Button
              appearance="basic"
              size="regular"
              icon="fullscreen_exit"
              onClick={onClose}
              data-test="DocumentDetailView--ExitDetail"
              title="Exit detail view"
            />

            <Button
              appearance="transparent"
              size="regular"
              icon="close"
              largeIcon={true}
              onClick={onClose}
              data-test="DocumentDetailView--CloseDetail"
              title="Close detail view"
            />
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <div
          style={{
            flex: 1,
            backgroundColor: 'var(--secondary-lightest)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {totalDocuments > 1 && onDocumentChange && (
            <NavigationButtons
              currentIndex={documentIndex}
              totalDocuments={totalDocuments}
              onPrevious={() => onDocumentChange(documentIndex - 1)}
              onNext={() => onDocumentChange(documentIndex + 1)}
              position="detail"
              showAriaLabels={true}
            />
          )}

          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              overflow: 'auto',
            }}
          >
            <FilePreview
              document={document}
              loading={false}
              error={error}
              zoom={zoom}
              onZoomChange={onZoomChange}
              minZoom={minZoom}
              maxZoom={maxZoom}
              showZoomControls={showZoomControls}
              zoomControlsPosition="detail"
              onFetchDocumentData={onFetchDocumentData}
              setAttachmentBlob={setAttachmentBlob}
              onDocumentLoad={onDocumentLoad}
            />
          </div>
        </div>

        <DocumentInfoPanel
          document={document}
          attachmentInfo={attachmentInfo}
          attachmentTypes={attachmentTypes}
          onClose={onClose}
          loading={attachmentInfo?.loading}
        />
      </div>
    </div>
  );
};

DocumentDetailView.displayName = 'DocumentDetailView';

export default DocumentDetailView;
