import * as React from 'react';
import { Button, Text, Heading, Sidesheet, Tooltip } from '@/index';
import { extractBaseProps } from '@/utils/types';
import classNames from 'classnames';
import styles from './documentPreview.module.css';

import FilePreview from './FilePreview';
import DocumentDetailView from './DocumentDetailView';
import NavigationButtons from './NavigationButtons';
import { cleanupZoomControls } from './ZoomControls';
import { DocumentPreviewProps, PreviewDocument } from './types';
import { extractMetadataFromUrl } from './utils/urlMetadataExtractor';

/**
 * DocumentPreview provides a unified full-screen viewing experience for multiple documents in a sidesheet overlay.
 *
 * This component supports navigation between documents and provides:
 * - Multiple file type support through FilePreview component
 * - Document navigation with previous/next controls
 * - Business logic controls for print, download permissions
 * - Zoom functionality
 * - Consistent interface across all content types
 * - Automatic metadata extraction from URLs
 */
const DocumentPreview: React.FC<DocumentPreviewProps> = (props) => {
  const {
    open,
    onClose,
    documents,
    documentUrls,
    initialDocumentIndex,
    onDocumentChange,
    initialZoom,
    minZoom,
    maxZoom,
    onZoomChange,
    disablePrint,
    disableDownload,
    disableFullscreen,
    showNavigation,
    showZoomControls,
    showBackNavigation,
    onFullscreen,
    onFetchDocumentData,
    expandedMode,
    setExpandedMode,
    loading,
    error,
    dimension,
    programSourceComponent: ProgramSourceComponent,
    attachmentInfo,
    attachmentTypes,
  } = props;

  const [attachmentBlob, setAttachmentBlob] = React.useState<Blob | undefined>(undefined);
  const [internalExpandedMode, setInternalExpandedMode] = React.useState<boolean>(expandedMode!);
  const [isNavigating, setIsNavigating] = React.useState<boolean>(false);

  const [currentDocumentIndex, setCurrentDocumentIndex] = React.useState<number>(initialDocumentIndex!);
  const [zoom, setZoom] = React.useState<number>(initialZoom!);

  const baseProps = extractBaseProps(props);

  const processedDocuments = React.useMemo((): PreviewDocument[] => {
    if (documents && documents.length > 0) {
      return documents;
    }

    if (documentUrls && documentUrls.length > 0) {
      return documentUrls.map((url, index) => {
        const metadata = extractMetadataFromUrl(url);
        return {
          src: url,
          title: metadata.title,
          filePath: metadata.filePath,
          fileType: metadata.fileType,
          contentType: metadata.contentType,
          encounterType: metadata.encounterType,
          uploadDate: new Date().toISOString().split('T')[0],
          programSourceId: `auto-${Date.now()}-${index}`,
          attachmentName: metadata.fileName,
          attachmentFilepath: metadata.filePath,
        };
      });
    }

    return [];
  }, [documents, documentUrls]);

  const currentExpandedMode = setExpandedMode ? expandedMode : internalExpandedMode;
  const handleSetExpandedMode = setExpandedMode || setInternalExpandedMode;

  const handlePreviousDocument = React.useCallback(() => {
    if (currentDocumentIndex > 0) {
      const newIndex = currentDocumentIndex - 1;
      setIsNavigating(true);
      setCurrentDocumentIndex(newIndex);
      setZoom(initialZoom!);
      if (onDocumentChange) {
        onDocumentChange(newIndex);
      }
    }
  }, [currentDocumentIndex, onDocumentChange, initialZoom]);

  const handleNextDocument = React.useCallback(() => {
    if (processedDocuments && currentDocumentIndex < processedDocuments.length - 1) {
      const newIndex = currentDocumentIndex + 1;
      setIsNavigating(true);
      setCurrentDocumentIndex(newIndex);
      setZoom(initialZoom!);
      if (onDocumentChange) {
        onDocumentChange(newIndex);
      }
    }
  }, [currentDocumentIndex, processedDocuments, onDocumentChange, initialZoom]);

  const handleDocumentChange = React.useCallback(
    (index: number) => {
      if (index >= 0 && processedDocuments && index < processedDocuments.length) {
        setIsNavigating(true);
        setCurrentDocumentIndex(index);
        setZoom(initialZoom!);
        if (onDocumentChange) {
          onDocumentChange(index);
        }
      }
    },
    [processedDocuments, onDocumentChange, initialZoom]
  );

  const handleZoomChange = React.useCallback(
    (newZoom: number) => {
      setZoom(newZoom);
      if (onZoomChange) {
        onZoomChange(newZoom);
      }
    },
    [onZoomChange]
  );

  const handleFetchDocumentData = React.useCallback(
    (document: PreviewDocument, callback: (blob: Blob) => void) => {
      if (onFetchDocumentData) {
        onFetchDocumentData(document, callback);
      } else {
        if (document.src instanceof Blob) {
          callback(document.src);
          return;
        }

        fetch(document.src)
          .then((response) => response.blob())
          .then((blob) => callback(blob))
          .catch((error) => {
            console.error('Error fetching document:', error);
          });
      }
    },
    [onFetchDocumentData]
  );

  const sidesheetDocumentCount = processedDocuments?.length || 0;
  const shouldShowDocumentNavigation = showNavigation && sidesheetDocumentCount > 1;

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && currentExpandedMode) {
        event.preventDefault();
        handleSetExpandedMode(false);
        return;
      }

      if (shouldShowDocumentNavigation) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          handlePreviousDocument();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          handleNextDocument();
        }
      }
    },
    [
      shouldShowDocumentNavigation,
      handlePreviousDocument,
      handleNextDocument,
      currentExpandedMode,
      handleSetExpandedMode,
    ]
  );

  const getCurrentDocument = React.useCallback((): PreviewDocument | null => {
    if (!processedDocuments || !processedDocuments.length) return null;
    return processedDocuments[currentDocumentIndex] || null;
  }, [processedDocuments, currentDocumentIndex]);

  const generateSubHeading = React.useCallback(
    (document: PreviewDocument): string => {
      const parts = [];

      if (document.encounterType) {
        parts.push(document.encounterType);
      }

      const documentsLength = processedDocuments?.length || 0;
      parts.push(`Document ${currentDocumentIndex + 1} of ${documentsLength}`);

      if (document.uploadDate) {
        parts.push(document.uploadDate);
      }

      return parts.join(' • ');
    },
    [currentDocumentIndex, processedDocuments]
  );

  const isPrintDisabled = React.useCallback((document: PreviewDocument): boolean => {
    if (!document || !document.fileType) return true;
    const unsupportedTypes = ['txt', 'xlsx', 'xls', 'tiff', 'link'];
    return unsupportedTypes.includes(document.fileType.toLowerCase());
  }, []);

  const isDownloadDisabled = React.useCallback((document: PreviewDocument): boolean => {
    if (!document || !document.fileType) return true;
    const unsupportedTypes = ['link'];
    return unsupportedTypes.includes(document.fileType.toLowerCase());
  }, []);

  const handlePrint = React.useCallback(() => {
    const currentDoc = getCurrentDocument();
    if (!currentDoc || !attachmentBlob || disablePrint) return;

    const blobUrl = URL.createObjectURL(attachmentBlob);

    if (currentDoc.fileType === 'pdf') {
      const printWindow = window.open(blobUrl, '_blank');
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.print();
        };
      }
    } else if (currentDoc.fileType === 'image') {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Print ${currentDoc.title || 'Document'}</title>
              <style>
                body { margin: 0; padding: 20px; text-align: center; }
                img { max-width: 100%; height: auto; }
                @media print { body { padding: 0; } }
              </style>
            </head>
            <body>
              <img src="${blobUrl}" alt="${currentDoc.title || 'Document'}" onload="window.print(); window.close();" />
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }

    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  }, [getCurrentDocument, attachmentBlob, disablePrint]);

  const handleDownload = React.useCallback(() => {
    const currentDoc = getCurrentDocument();
    if (!currentDoc || !attachmentBlob || disableDownload) return;

    try {
      const url = URL.createObjectURL(attachmentBlob);
      const link = document.createElement('a');
      link.href = url;

      const filename = currentDoc.attachmentName || currentDoc.title || `document.${currentDoc.fileType || 'bin'}`;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      const blobUrl = URL.createObjectURL(attachmentBlob);
      window.open(blobUrl, '_blank');
    }
  }, [getCurrentDocument, attachmentBlob, disableDownload]);

  React.useEffect(() => {
    setInternalExpandedMode(expandedMode!);
  }, [expandedMode]);

  React.useEffect(() => {
    setCurrentDocumentIndex(initialDocumentIndex!);
  }, [initialDocumentIndex, processedDocuments]);

  React.useEffect(() => {
    setZoom(initialZoom!);
  }, [initialZoom]);

  React.useEffect(() => {
    if ((open || currentExpandedMode) && shouldShowDocumentNavigation) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
    return undefined;
  }, [open, currentExpandedMode, shouldShowDocumentNavigation, handleKeyDown]);

  React.useEffect(() => {
    if (!open && !currentExpandedMode) {
      setZoom(initialZoom!);

      setTimeout(() => {
        cleanupZoomControls();
      }, 100);
    }
  }, [open, currentExpandedMode, initialZoom]);

  const currentDoc = getCurrentDocument();

  if (!currentDoc || !processedDocuments || !processedDocuments.length) {
    return null;
  }

  const subHeading = generateSubHeading(currentDoc);

  const previewClasses = classNames(styles.DocumentPreview, {
    [styles['DocumentPreview--expanded']]: currentExpandedMode,
    [styles['DocumentPreview--loading']]: loading,
    [styles['DocumentPreview--error']]: error,
  });

  const actualPrintDisabled = disablePrint;
  const actualDownloadDisabled = disableDownload;

  const printDisabled = !currentDoc || actualPrintDisabled || isPrintDisabled(currentDoc) || !attachmentBlob;
  const downloadDisabled = !currentDoc || actualDownloadDisabled || isDownloadDisabled(currentDoc) || !attachmentBlob;

  const headingWrapperStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const tooltipContainerStyle: React.CSSProperties = {
    flexGrow: 0,
    lineHeight: 'initial',
  };

  const printButton = (
    <Button
      appearance="basic"
      size="regular"
      icon="print"
      onClick={handlePrint}
      disabled={printDisabled}
      data-test="DocumentPreview--Print-Sidesheet"
    />
  );

  const downloadButton = (
    <Button
      appearance="basic"
      size="regular"
      icon="get_app"
      onClick={handleDownload}
      disabled={downloadDisabled}
      data-test="DocumentPreview--Download-Sidesheet"
    />
  );

  const headerContent = (
    <>
      <div className="ABC" style={headingWrapperStyle}>
        <div className="d-flex">
          <Tooltip
            tooltip={currentDoc.title || currentDoc.attachmentName || 'Document'}
            position="bottom"
            className="PopperWrapper-trigger"
            style={tooltipContainerStyle}
          >
            <Heading size="m" className={styles['DocumentPreview-title']}>
              {currentDoc.title || currentDoc.attachmentName || 'Document'}
            </Heading>
          </Tooltip>
        </div>
        <div className="d-flex" style={{ gap: '8px' }}>
          {printDisabled ? (
            <Tooltip
              tooltip="Printing is not supported for this file format"
              position="bottom"
              className="PopperWrapper-trigger"
              style={tooltipContainerStyle}
            >
              <div>{printButton}</div>
            </Tooltip>
          ) : (
            <div>{printButton}</div>
          )}

          {downloadDisabled ? (
            <Tooltip
              tooltip="Downloading is not supported for this file format"
              position="bottom"
              className="PopperWrapper-trigger"
              style={tooltipContainerStyle}
            >
              <div>{downloadButton}</div>
            </Tooltip>
          ) : (
            <div>{downloadButton}</div>
          )}

          {!disableFullscreen && (
            <Button
              appearance="basic"
              size="regular"
              icon="fullscreen"
              onClick={() => {
                handleSetExpandedMode(true);
                if (onFullscreen) onFullscreen();
              }}
              data-test="DocumentPreview--Fullscreen"
            />
          )}
        </div>
      </div>

      <div className="d-flex">
        {currentDoc.programSourceId && ProgramSourceComponent && (
          <ProgramSourceComponent
            sourceType="DOCUMENT"
            sourceId={currentDoc.programSourceId}
            showBullet={!!subHeading}
          />
        )}
        <Text size="regular" appearance="subtle">
          {subHeading}
        </Text>
      </div>
    </>
  );

  const sidesheetBody = (
    <div
      id="filePreviewParent"
      className={previewClasses}
      data-test="DocumentPreview--Content"
      style={{
        position: 'relative',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        minHeight: '85vh',
        display: 'inline-table',
        backgroundColor: '#f8f9fa',
      }}
    >
      {shouldShowDocumentNavigation && (
        <NavigationButtons
          currentIndex={currentDocumentIndex}
          totalDocuments={sidesheetDocumentCount}
          onPrevious={handlePreviousDocument}
          onNext={handleNextDocument}
          position="sidesheet"
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
        {currentDoc && (
          <FilePreview
            document={currentDoc}
            loading={false}
            error={error}
            zoom={zoom}
            onZoomChange={handleZoomChange}
            minZoom={minZoom!}
            maxZoom={maxZoom!}
            showZoomControls={Boolean(showZoomControls && (open || currentExpandedMode))}
            onFetchDocumentData={handleFetchDocumentData}
            setAttachmentBlob={setAttachmentBlob}
            onDocumentLoad={() => setIsNavigating(false)}
          />
        )}
      </div>
    </div>
  );

  return (
    <>
      {!currentExpandedMode ? (
        <Sidesheet
          className={classNames(styles['DocumentPreview-sidesheet'], dimension === 'large' ? 'Col--l-12' : 'Col--l-8')}
          open={open}
          onClose={onClose}
          headerOptions={{
            heading: headerContent as any,
            ...(showBackNavigation && {
              backIconCallback: onClose,
              backIcon: true,
            }),
          }}
          seperator
          data-test="DocumentPreview"
          {...baseProps}
        >
          {sidesheetBody}
        </Sidesheet>
      ) : (
        currentDoc && (
          <DocumentDetailView
            document={currentDoc}
            documentIndex={currentDocumentIndex}
            totalDocuments={processedDocuments.length}
            subHeading={subHeading}
            loading={loading || isNavigating}
            error={error}
            onClose={() => {
              handleSetExpandedMode(false);
            }}
            onDocumentChange={handleDocumentChange}
            onFetchDocumentData={handleFetchDocumentData}
            programSourceComponent={ProgramSourceComponent}
            disablePrint={disablePrint}
            disableDownload={disableDownload}
            onPrint={handlePrint}
            onDownload={handleDownload}
            zoom={zoom}
            minZoom={minZoom}
            maxZoom={maxZoom}
            onZoomChange={handleZoomChange}
            showZoomControls={Boolean(showZoomControls && currentExpandedMode)}
            attachmentInfo={attachmentInfo}
            attachmentTypes={attachmentTypes}
            onDocumentLoad={() => setIsNavigating(false)}
          />
        )
      )}
    </>
  );
};

DocumentPreview.displayName = 'DocumentPreview';
DocumentPreview.defaultProps = {
  documents: [],
  initialDocumentIndex: 0,
  initialZoom: 100,
  minZoom: 20,
  maxZoom: 200,
  disablePrint: false,
  disableDownload: false,
  disableFullscreen: false,
  showNavigation: true,
  showZoomControls: true,
  showBackNavigation: false,
  expandedMode: false,
  loading: false,
  dimension: 'large',
};

export { DocumentPreview, FilePreview, DocumentDetailView };
export default DocumentPreview;
