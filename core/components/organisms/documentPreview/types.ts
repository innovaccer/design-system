import * as React from 'react';
import { BaseProps } from '@/utils/types';

export type PreviewContentType = 'image' | 'pdf' | 'txt' | 'xlsx' | 'xls' | 'tiff' | 'link' | 'auto';

export type DocumentPreviewDimension = 'regular' | 'large';

export interface PreviewDocument {
  src: string | Blob;
  title: string;
  subtitle?: string;
  contentType?: PreviewContentType;
  filePath?: string;
  fileType?: string;
  encounterType?: string;
  uploadDate?: string;
  programSourceId?: string;
  attachmentName?: string;
  attachmentFilepath?: string;
}

export interface DetailViewSchema {
  name: string;
  displayName: string;
  type?: string;
  template?: string;
  info?: {
    date: string;
    by: string;
  };
}

export interface DetailViewAttachmentInfo {
  data?: Record<string, any>;
  generalInfoSchema?: DetailViewSchema[];
  fileInfoSchema?: DetailViewSchema[];
  loading?: boolean;
  error?: string;
  updateStatus?: string;
}

export interface DetailViewAttachmentTypes {
  data?: Array<{ label: string; value: string }>;
  loading?: boolean;
  error?: string;
}

export interface DocumentPreviewProps extends BaseProps {
  open: boolean;
  onClose: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;

  documents?: PreviewDocument[];

  documentUrls?: string[];
  initialDocumentIndex?: number;
  onDocumentChange?: (index: number) => void;

  initialZoom?: number;
  minZoom?: number;
  maxZoom?: number;
  onZoomChange?: (zoom: number) => void;

  disablePrint?: boolean;
  disableDownload?: boolean;
  disableFullscreen?: boolean;

  showFullscreenSidebar?: boolean;
  showNavigation?: boolean;
  showZoomControls?: boolean;
  showBackNavigation?: boolean;

  onFullscreen?: () => void;

  onFetchDocumentData?: (document: PreviewDocument, callback: (blob: Blob) => void) => void;

  expandedMode?: boolean;
  setExpandedMode?: (expandedMode: boolean) => void;

  loading?: boolean;
  error?: string;

  dimension?: DocumentPreviewDimension;
  backdropClose?: boolean;
  closeOnEscape?: boolean;

  programSourceComponent?: React.ComponentType<{ sourceType: string; sourceId: string; showBullet?: boolean }>;

  attachmentInfo?: DetailViewAttachmentInfo;

  attachmentTypes?: DetailViewAttachmentTypes;
}

export interface FilePreviewProps {
  document: PreviewDocument;
  loading?: boolean;
  error?: string;
  zoom: number;
  onZoomChange?: (zoom: number) => void;
  minZoom: number;
  maxZoom: number;
  showZoomControls: boolean;
  zoomControlsPosition?: 'sidesheet' | 'detail';
  onFetchDocumentData?: (document: PreviewDocument, callback: (blob: Blob) => void) => void;
  setAttachmentBlob?: (blob: Blob | undefined) => void;
  onDocumentLoad?: () => void;
}

export interface DocumentDetailViewProps {
  document: PreviewDocument;
  documentIndex: number;
  totalDocuments: number;
  subHeading: string;
  loading?: boolean;
  error?: string;
  onClose: () => void;
  onDocumentChange?: (index: number) => void;
  onFetchDocumentData?: (document: PreviewDocument, callback: (blob: Blob) => void) => void;
  programSourceComponent?: React.ComponentType<{ sourceType: string; sourceId: string; showBullet?: boolean }>;
  disablePrint?: boolean;
  disableDownload?: boolean;
  onPrint?: () => void;
  onDownload?: () => void;
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  onZoomChange?: (zoom: number) => void;
  showZoomControls?: boolean;
  attachmentInfo?: DetailViewAttachmentInfo;
  attachmentTypes?: DetailViewAttachmentTypes;
  onDocumentLoad?: () => void;
}

export interface ZoomControlsProps {
  zoom: number;
  onZoomChange?: (zoom: number) => void;
  minZoom: number;
  maxZoom: number;
  position?: 'sidesheet' | 'detail';
  disabled?: boolean;
}

export interface NavigationButtonsProps {
  currentIndex: number;
  totalDocuments: number;
  onPrevious: () => void;
  onNext: () => void;
  position?: 'sidesheet' | 'detail';
  showAriaLabels?: boolean;
}

export interface DocumentSaveData {
  attachmentName: string;
  attachmentType: string;
  practiceName: string;
  fileDescription: string;
  filePath: string;
}

export interface DocumentInfoPanelProps {
  document: PreviewDocument;
  attachmentInfo?: DetailViewAttachmentInfo;
  attachmentTypes?: DetailViewAttachmentTypes;
  onClose: () => void;
  loading?: boolean;
  onSaveChanges?: (data: DocumentSaveData) => void;
}
