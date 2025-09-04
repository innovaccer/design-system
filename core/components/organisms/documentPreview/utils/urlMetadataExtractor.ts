/**
 * Extracts metadata from URLs including S3 links
 */
export interface ExtractedMetadata {
  title: string;
  fileType: string;
  fileName: string;
  filePath?: string;
  encounterType?: string;
  contentType: 'image' | 'pdf' | 'txt' | 'xlsx' | 'xls' | 'tiff' | 'link' | 'auto';
}

export const extractMetadataFromUrl = (url: string): ExtractedMetadata => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    const fileName = pathname.split('/').pop() || 'document';

    const fileExtension = fileName.includes('.') ? fileName.split('.').pop()?.toLowerCase() : undefined;

    const fileType = getFileTypeFromExtension(fileExtension);
    const contentType = getContentTypeFromExtension(fileExtension);

    const title = generateTitleFromFileName(fileName);

    const encounterType = determineEncounterType(url, pathname);

    return {
      title,
      fileType,
      fileName,
      filePath: pathname,
      encounterType,
      contentType,
    };
  } catch (error) {
    return {
      title: 'Document',
      fileType: 'unknown',
      fileName: 'document',
      contentType: 'auto',
    };
  }
};

const getFileTypeFromExtension = (extension?: string): string => {
  if (!extension) return 'unknown';

  const extensionMap: Record<string, string> = {
    pdf: 'pdf',
    jpg: 'image',
    jpeg: 'image',
    png: 'image',
    gif: 'image',
    webp: 'image',
    svg: 'image',
    txt: 'txt',
    xlsx: 'xlsx',
    xls: 'xls',
    tiff: 'tiff',
    tif: 'tiff',
    doc: 'doc',
    docx: 'docx',
  };

  return extensionMap[extension] || 'unknown';
};

const getContentTypeFromExtension = (
  extension?: string
): 'image' | 'pdf' | 'txt' | 'xlsx' | 'xls' | 'tiff' | 'link' | 'auto' => {
  if (!extension) return 'auto';

  const extensionMap: Record<string, 'image' | 'pdf' | 'txt' | 'xlsx' | 'xls' | 'tiff' | 'link' | 'auto'> = {
    pdf: 'pdf',
    jpg: 'image',
    jpeg: 'image',
    png: 'image',
    gif: 'image',
    webp: 'image',
    svg: 'image',
    txt: 'txt',
    xlsx: 'xlsx',
    xls: 'xls',
    tiff: 'tiff',
    tif: 'tiff',
  };

  return extensionMap[extension] || 'auto';
};

const generateTitleFromFileName = (fileName: string): string => {
  const nameWithoutExt = fileName.includes('.') ? fileName.substring(0, fileName.lastIndexOf('.')) : fileName;

  const formattedName = nameWithoutExt.replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim();

  return formattedName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const determineEncounterType = (url: string, pathname: string): string => {
  const lowerUrl = url.toLowerCase();
  const lowerPath = pathname.toLowerCase();

  if (lowerUrl.includes('s3.amazonaws.com') || lowerUrl.includes('.s3.')) {
    if (lowerPath.includes('/medical/') || lowerPath.includes('/health/')) {
      return 'Medical Document';
    }
    if (lowerPath.includes('/legal/') || lowerPath.includes('/contracts/')) {
      return 'Legal Document';
    }
    if (lowerPath.includes('/financial/') || lowerPath.includes('/billing/')) {
      return 'Financial Document';
    }
    if (lowerPath.includes('/research/') || lowerPath.includes('/academic/')) {
      return 'Research Document';
    }
    return 'Business Document';
  }

  if (lowerPath.includes('/medical/') || lowerPath.includes('/health/')) {
    return 'Medical Document';
  }
  if (lowerPath.includes('/legal/') || lowerPath.includes('/contracts/')) {
    return 'Legal Document';
  }
  if (lowerPath.includes('/financial/') || lowerPath.includes('/billing/')) {
    return 'Financial Document';
  }
  if (lowerPath.includes('/research/') || lowerPath.includes('/academic/')) {
    return 'Research Document';
  }
  if (lowerPath.includes('/images/') || lowerPath.includes('/photos/')) {
    return 'Image Document';
  }

  const fileExt = pathname.split('.').pop()?.toLowerCase();
  if (fileExt === 'pdf') return 'PDF Document';
  if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExt || '')) return 'Image Document';

  return 'Document';
};
