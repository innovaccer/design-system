import * as React from 'react';
import { Button, Text } from '@/index';
import { FilePreviewProps, PreviewContentType } from './types';
import ZoomControls, { cleanupZoomControls } from './ZoomControls';

const LazyDocument = React.lazy(() =>
  import('react-pdf')
    .then(({ Document, pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      return { default: Document as any };
    })
    .catch(() => {
      const FallbackComponent = () => (
        <div style={{ padding: '20px', textAlign: 'center' }}>PDF viewer not available</div>
      );
      return { default: FallbackComponent as any };
    })
);

const LazyPage = React.lazy(() =>
  import('react-pdf')
    .then(({ Page }) => ({ default: Page as any }))
    .catch(() => {
      const FallbackComponent = () => <div />;
      return { default: FallbackComponent as any };
    })
);

/**
 * Determines content type based on file extension or MIME type
 */
const detectContentType = (src: string | Blob, fileType?: string): PreviewContentType => {
  if (fileType) {
    return fileType.toLowerCase() as PreviewContentType;
  }

  if (typeof src === 'string') {
    const url = src.toLowerCase();

    if (url.match(/\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i)) {
      return 'image';
    }

    if (url.match(/\.pdf(\?.*)?$/i)) {
      return 'pdf';
    }

    if (url.match(/\.txt(\?.*)?$/i)) {
      return 'txt';
    }

    if (url.match(/\.(xlsx|xls)(\?.*)?$/i)) {
      return 'xlsx';
    }

    if (url.match(/\.tiff?(\?.*)?$/i)) {
      return 'tiff';
    }
  }

  return 'pdf';
};

/**
 * FilePreview component that handles various file types
 */
const FilePreview: React.FC<FilePreviewProps> = ({
  document,
  zoom,
  onZoomChange,
  minZoom,
  maxZoom,
  showZoomControls,
  zoomControlsPosition = 'sidesheet',
  onFetchDocumentData,
  setAttachmentBlob,
  onDocumentLoad,
}) => {
  const [fileBlob, setFileBlob] = React.useState<Blob | undefined>();
  const [text, setText] = React.useState<string>('');
  const [fallback, setFallback] = React.useState<'image' | 'none' | undefined>();
  const [numPages, setNumPages] = React.useState<number>(0);
  const [pdfKey, setPdfKey] = React.useState<number>(0); // Add this for forcing PDF re-render
  const [isPdfReady, setIsPdfReady] = React.useState<boolean>(false);
  const [isDocumentLoading, setIsDocumentLoading] = React.useState<boolean>(true);
  const [documentLoadError, setDocumentLoadError] = React.useState<string | null>(null);
  const isMountedRef = React.useRef(true);
  const currentDocumentRef = React.useRef<string | Blob | null>(null);
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const pdfWorkerRef = React.useRef<any>(null);

  const onPdfError = React.useCallback(
    (error: any) => {
      console.error('PDF Error:', error);
      if (isMountedRef.current && currentDocumentRef.current === document.src) {
        setDocumentLoadError('Failed to render PDF');
        setFallback('image');
        setIsPdfReady(false);
        setIsDocumentLoading(false);
        if (onDocumentLoad) {
          onDocumentLoad();
        }
      }
    },
    [document.src, onDocumentLoad]
  );

  const onDocumentLoadSuccess = React.useCallback(
    ({ numPages: pages }: { numPages: number }) => {
      if (isMountedRef.current && currentDocumentRef.current === document.src) {
        setNumPages(pages);
        setIsPdfReady(true);
        if (onDocumentLoad) {
          onDocumentLoad();
        }
      }
    },
    [document.src, onDocumentLoad]
  );

  const onImageError = React.useCallback(() => {
    if (isMountedRef.current) {
      setDocumentLoadError('Failed to load image');
      setFallback('none');
      setIsDocumentLoading(false);
      if (onDocumentLoad) {
        onDocumentLoad();
      }
    }
  }, [onDocumentLoad]);

  const contentType =
    document.contentType === 'auto' || !document.contentType
      ? detectContentType(document.src, document.fileType)
      : document.contentType;

  React.useEffect(() => {
    return () => {
      isMountedRef.current = false;
      cleanupZoomControls();

      // Cancel any ongoing fetch requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Clean up PDF worker
      if (pdfWorkerRef.current) {
        try {
          pdfWorkerRef.current.terminate();
        } catch (error) {
          // Ignore termination errors
        }
        pdfWorkerRef.current = null;
      }
    };
  }, []);

  React.useEffect(() => {
    // Cancel any previous requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();

    // Reset all state when document changes
    setFileBlob(undefined);
    setText('');
    setFallback(undefined);
    setNumPages(0);
    setIsPdfReady(false);
    setPdfKey((prev) => prev + 1); // Force PDF component to re-render
    setIsDocumentLoading(true);
    setDocumentLoadError(null);

    // Update current document reference
    currentDocumentRef.current = document.src;

    const loadDocument = async () => {
      // Set a timeout to prevent infinite loading
      const timeoutId = setTimeout(() => {
        if (isMountedRef.current && currentDocumentRef.current === document.src) {
          console.warn('Document loading timeout');
          setDocumentLoadError('Document loading timeout');
          setIsDocumentLoading(false);
          if (onDocumentLoad) {
            onDocumentLoad();
          }
        }
      }, 10000); // 10 second timeout for faster debugging

      try {
        let blob: Blob | undefined;

        if (
          document.src &&
          typeof document.src === 'object' &&
          document.src.constructor &&
          document.src.constructor.name === 'Blob'
        ) {
          // Create a fresh blob to avoid corruption issues
          blob = new Blob([document.src], { type: document.src.type });
        } else if (onFetchDocumentData && typeof document.src === 'string') {
          // Use the provided fetch function
          await new Promise<void>((resolve, reject) => {
            onFetchDocumentData(document, (fetchedBlob: Blob) => {
              if (isMountedRef.current && currentDocumentRef.current === document.src) {
                blob = new Blob([fetchedBlob], { type: fetchedBlob.type });
                resolve();
              } else {
                reject(new Error('Document changed during fetch'));
              }
            });
          });
        } else if (typeof document.src === 'string') {
          // Fetch the document with abort controller
          const response = await fetch(document.src, {
            signal: abortControllerRef.current?.signal,
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch document: ${response.status}`);
          }

          const fetchedBlob = await response.blob();
          blob = new Blob([fetchedBlob], { type: fetchedBlob.type });
        } else {
          // No valid document source, set error and stop loading
          if (isMountedRef.current && currentDocumentRef.current === document.src) {
            clearTimeout(timeoutId);
            setDocumentLoadError('No valid document source');
            setIsDocumentLoading(false);
            if (onDocumentLoad) {
              onDocumentLoad();
            }
          }
          return;
        }

        // Check if component is still mounted and document hasn't changed
        if (isMountedRef.current && currentDocumentRef.current === document.src && blob) {
          // Validate blob before setting
          if (blob.size === 0) {
            console.warn('Empty blob received, skipping');
            clearTimeout(timeoutId);
            setDocumentLoadError('Empty document received');
            setIsDocumentLoading(false);
            if (onDocumentLoad) {
              onDocumentLoad();
            }
            return;
          }

          // For PDFs, validate the blob structure
          if (contentType === 'pdf') {
            try {
              // Create a small test to validate PDF structure
              const reader = new FileReader();
              reader.onload = () => {
                if (isMountedRef.current && currentDocumentRef.current === document.src) {
                  const arrayBuffer = reader.result as ArrayBuffer;
                  const uint8Array = new Uint8Array(arrayBuffer, 0, Math.min(1024, arrayBuffer.byteLength));
                  const header = String.fromCharCode.apply(null, Array.from(uint8Array.slice(0, 4)));

                  if (header === '%PDF') {
                    clearTimeout(timeoutId);
                    setFileBlob(blob);
                    setIsPdfReady(true);
                    setIsDocumentLoading(false);
                    if (onDocumentLoad) {
                      onDocumentLoad();
                    }
                  } else {
                    console.warn('Invalid PDF header, falling back to image');
                    clearTimeout(timeoutId);
                    setFallback('image');
                    setFileBlob(blob);
                    setIsDocumentLoading(false);
                    if (onDocumentLoad) {
                      onDocumentLoad();
                    }
                  }
                }
              };
              reader.readAsArrayBuffer(blob.slice(0, 1024));
            } catch (error) {
              console.error('Error validating PDF:', error);
              clearTimeout(timeoutId);
              setFallback('image');
              setFileBlob(blob);
              setIsDocumentLoading(false);
              if (onDocumentLoad) {
                onDocumentLoad();
              }
            }
          } else {
            clearTimeout(timeoutId);
            setFileBlob(blob);
            setIsDocumentLoading(false);
            if (onDocumentLoad) {
              onDocumentLoad();
            }
          }

          if (contentType === 'txt') {
            const fileReader = new FileReader();
            fileReader.readAsText(blob);
            fileReader.onload = () => {
              if (fileReader.result && isMountedRef.current && currentDocumentRef.current === document.src) {
                clearTimeout(timeoutId);
                setText(fileReader.result.toString());
                setIsDocumentLoading(false);
                if (onDocumentLoad) {
                  onDocumentLoad();
                }
              }
            };
          }
        }
      } catch (error) {
        if (
          error &&
          typeof error === 'object' &&
          error.constructor &&
          error.constructor.name === 'Error' &&
          'name' in error &&
          (error as any).name === 'AbortError'
        ) {
          // Request was cancelled, ignore
          return;
        }

        console.error('Error loading document:', error);
        if (isMountedRef.current && currentDocumentRef.current === document.src) {
          clearTimeout(timeoutId);
          setDocumentLoadError('Failed to load document');
          setFallback('none');
          setIsDocumentLoading(false);
          if (onDocumentLoad) {
            onDocumentLoad();
          }
        }
      }
    };

    loadDocument();
  }, [document.src, contentType, onFetchDocumentData]);

  React.useEffect(() => {
    if (setAttachmentBlob && isMountedRef.current && fileBlob) {
      setAttachmentBlob(fileBlob);
    }
  }, [fileBlob, setAttachmentBlob]);

  // Cleanup blob URLs when component unmounts or fileBlob changes
  React.useEffect(() => {
    return () => {
      // Cleanup any blob URLs that might have been created
      if (fileBlob && typeof fileBlob === 'object' && fileBlob.constructor && fileBlob.constructor.name === 'Blob') {
        // Note: We don't revoke here as the blob might still be in use
        // The browser will handle cleanup when the blob is no longer referenced
      }
    };
  }, [fileBlob]);

  // Additional cleanup for PDF components
  React.useEffect(() => {
    return () => {
      // Reset PDF state when component unmounts
      setIsPdfReady(false);
      setNumPages(0);
    };
  }, []);

  // Show loading screen while document is being fetched/rendered
  if (isDocumentLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <Text>Loading document...</Text>
      </div>
    );
  }

  // Show error screen with download option if there was an error loading the document
  if (documentLoadError) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          textAlign: 'center',
          minHeight: '200px',
        }}
      >
        {/* <Text appearance="destructive" size="regular" style={{ marginBottom: '8px' }}>
          {documentLoadError}
        </Text> */}
        <Text size="small" appearance="subtle" style={{ marginBottom: '16px' }}>
          Unable to load document preview
        </Text>
        <Button
          icon="get_app"
          iconAlign="left"
          disabled={!document.src}
          onClick={() => {
            if (typeof document.src === 'string') {
              window.open(document.src, '_blank');
            }
          }}
          data-test="FilePreview--DownloadFallback"
        >
          Download to view locally
        </Button>
      </div>
    );
  }

  // Show fallback screen when loading is complete but no content is available
  if (!isDocumentLoading && !fileBlob && !text && !documentLoadError) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          textAlign: 'center',
          minHeight: '200px',
        }}
      >
        <Text size="regular" style={{ marginBottom: '16px' }}>
          Unable to load document preview
        </Text>
        <Button
          icon="get_app"
          iconAlign="left"
          disabled={!document.src}
          onClick={() => {
            if (typeof document.src === 'string') {
              window.open(document.src, '_blank');
            }
          }}
          data-test="FilePreview--DownloadFallback"
        >
          Download
        </Button>
      </div>
    );
  }

  if (contentType === 'link') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          textAlign: 'center',
          minHeight: '200px',
        }}
      >
        <Text style={{ marginBottom: '16px' }}>Preview is not supported. To view, please click below.</Text>
        <Button
          icon="open_in_new"
          iconAlign="right"
          onClick={() => {
            let url = typeof document.src === 'string' ? document.src : '';
            if (url.indexOf('^_^') !== -1) {
              url = url.split('^_^')[0];
            }
            window.open(url, '_blank');
          }}
          data-test="FilePreview--OpenLink"
        >
          Open
        </Button>
      </div>
    );
  }

  if (contentType === 'txt' && text) {
    const normalizedZoom = zoom / 100;

    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            style={{
              width: '70%',
              height: 'fit-content',
              backgroundColor: 'white',
              padding: '20px',
              transformOrigin: '20% 0',
              transform: `scale(${normalizedZoom})`,
              transition: 'transform 0.5s',
              textAlign: 'initial',
            }}
          >
            {text.split('\\n').map((line, key) => (
              <span key={key} style={{ whiteSpace: 'pre-wrap' }}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>

        {showZoomControls && (
          <ZoomControls
            zoom={zoom}
            onZoomChange={onZoomChange}
            minZoom={minZoom}
            maxZoom={maxZoom}
            position={zoomControlsPosition}
          />
        )}
      </>
    );
  }

  if (contentType === 'pdf') {
    if (!fallback && fileBlob && isPdfReady) {
      const normalizedZoom = zoom / 100;

      return (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <div
              style={{
                transform: `scale(${normalizedZoom})`,
                transformOrigin: normalizedZoom < 1 ? `${50 - normalizedZoom * 5}% 0` : '28% 0',
                transition: 'transform 0.5s',
              }}
            >
              <React.Suspense fallback={<Text>Loading PDF...</Text>}>
                <LazyDocument
                  key={`pdf-document-${pdfKey}-${document.src}`} // More unique key including document source
                  file={fileBlob}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onPdfError}
                  options={{
                    cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
                    cMapPacked: true,
                    disableWorker: false,
                    disableAutoFetch: true,
                    disableStream: true,
                    maxImageSize: 1024 * 1024, // 1MB limit
                    isEvalSupported: false,
                    useSystemFonts: false,
                  }}
                  loading={<Text>Loading PDF...</Text>}
                  error={<Text>Failed to load PDF</Text>}
                >
                  {numPages > 0 &&
                    Array.from(new Array(numPages), (el, index) => (
                      <LazyPage
                        key={`page_${index + 1}_${pdfKey}_${document.src}_${el}`} // Include document source in page keys
                        pageNumber={index + 1}
                        loading={<Text>{`Loading page ${String(index + 1)}...`}</Text>}
                        error={<Text>{`Failed to load page ${String(index + 1)}`}</Text>}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    ))}
                </LazyDocument>
              </React.Suspense>
            </div>
          </div>

          {showZoomControls && isMountedRef.current && (
            <ZoomControls
              zoom={zoom}
              onZoomChange={onZoomChange}
              minZoom={minZoom}
              maxZoom={maxZoom}
              position={zoomControlsPosition}
            />
          )}
        </>
      );
    } else if (!fallback && fileBlob && !isPdfReady) {
      // Show loading state while PDF is being prepared
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <Text>Preparing PDF...</Text>
        </div>
      );
    }
  }

  if ((contentType === 'image' || fallback === 'image') && fileBlob) {
    const normalizedZoom = zoom / 100;
    const urlCreator = window.URL || (window as any).webkitURL;
    const imageUrl = urlCreator.createObjectURL(fileBlob);

    return (
      <>
        <img
          src={imageUrl}
          alt={document.title}
          style={{
            padding: '16px',
            transform: `scale(${normalizedZoom})`,
            transformOrigin: '0 0',
            transition: 'transform 0.5s',
            maxWidth: '100%',
            height: 'auto',
          }}
          onError={onImageError}
          data-test="FilePreview--Image"
        />

        {showZoomControls && (
          <ZoomControls
            zoom={zoom}
            onZoomChange={onZoomChange}
            minZoom={minZoom}
            maxZoom={maxZoom}
            position={zoomControlsPosition}
          />
        )}
      </>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        minHeight: '200px',
      }}
    >
      <Text size="regular" style={{ marginBottom: '16px' }}>
        Please download the file to view its contents.
      </Text>
      <Button
        icon="get_app"
        iconAlign="left"
        disabled={!document.src}
        onClick={() => {
          if (typeof document.src === 'string') {
            window.open(document.src, '_blank');
          }
        }}
        data-test="FilePreview--DownloadFallback"
      >
        Download
      </Button>
    </div>
  );
};

FilePreview.displayName = 'FilePreview';

export default FilePreview;
