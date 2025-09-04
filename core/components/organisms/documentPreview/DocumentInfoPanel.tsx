import * as React from 'react';
import { Button, Text } from '@/index';
import { DocumentInfoPanelProps, DetailViewSchema } from './types';

/**
 * DocumentInfoPanel component handles the document information sidebar in detail view
 */
const DocumentInfoPanel: React.FC<DocumentInfoPanelProps> = ({
  document,
  attachmentInfo,
  attachmentTypes: _attachmentTypes, // eslint-disable-line @typescript-eslint/no-unused-vars
  onClose,
  onSaveChanges,
  loading = false,
}) => {
  const formatDateBy = React.useCallback((schema: DetailViewSchema, data: Record<string, any>): string => {
    if (schema.template === 'dateby' && schema.info) {
      const date = data[schema.info.date];
      const by = data[schema.info.by];
      return `${date ? new Date(date).toLocaleDateString() : ''} ${date && by ? 'by' : ''} ${by || ''}`;
    }
    return '';
  }, []);

  const formatFileSize = React.useCallback((bytes: number): string => {
    if (!bytes) return '-';
    const k = 1000;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }, []);

  const getTemplateValue = React.useCallback(
    (schema: DetailViewSchema, data: Record<string, any>): string => {
      switch (schema.template) {
        case 'linkedTo': {
          const links = data[schema.name] || [];
          if (!links.length) return '-';
          return links.map((link: any) => link.display_name).join(', ');
        }
        case 'dateby':
          return formatDateBy(schema, data);
        case 'fileSize':
          return formatFileSize(data[schema.name]);
        default:
          return data[schema.name] || '-';
      }
    },
    [formatDateBy, formatFileSize]
  );

  const getStringValue = React.useCallback(
    (schema: DetailViewSchema, data: Record<string, any>): string => {
      if (!data) return '-';

      if (schema.template === 'dateby' && schema.info) {
        return formatDateBy(schema, data);
      }

      if (schema.type === 'date') {
        const date = data[schema.name];
        return date ? new Date(date).toLocaleDateString() : '-';
      }

      if (schema.template === 'fileSize') {
        return formatFileSize(data[schema.name]);
      }

      if (schema.displayName.toLowerCase() === 'extension' && data[schema.name] === 'link') {
        return 'URL';
      }

      return data[schema.name] || '-';
    },
    [formatDateBy, formatFileSize]
  );

  return (
    <div
      style={{
        width: '300px',
        backgroundColor: 'var(--white)',
        borderLeft: 'var(--border-width-2-5) solid var(--secondary-light)',
        padding: 'var(--spacing-40)',
        overflow: 'auto',
        flexShrink: 0,
      }}
    >
      {loading && (
        <div style={{ padding: 'var(--spacing-80)', textAlign: 'center' }}>
          <Text>Loading document information...</Text>
        </div>
      )}

      {!loading && (
        <>
          {attachmentInfo?.generalInfoSchema && (
            <div style={{ marginBottom: 'var(--spacing-60)' }}>
              <Text
                size="large"
                appearance="default"
                style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-40)', display: 'block' }}
              >
                General Info
              </Text>

              {false && (
                  <div>
                    <div style={{ marginBottom: 'var(--spacing-40)' }}>
                      <div style={{ marginBottom: 'var(--spacing-10)' }}>
                        <Text size="small" appearance="subtle">
                          Name
                        </Text>
                        <span style={{ color: 'var(--alert)', marginLeft: 'var(--spacing-10)' }}>*</span>
                      </div>
                      <div
                        style={{
                          padding: 'var(--spacing-20) var(--spacing-30)',
                          border: 'var(--border-width-2-5) solid var(--secondary-light)',
                          borderRadius: 'var(--border-radius-10)',
                          backgroundColor: 'var(--secondary-lightest)',
                        }}
                      >
                        <Text size="small">{attachmentInfo?.data?.attachment_name || document.title}</Text>
                      </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-40)' }}>
                      <div style={{ marginBottom: 'var(--spacing-10)' }}>
                        <Text size="small" appearance="subtle">
                          Category
                        </Text>
                        <span style={{ color: 'var(--alert)', marginLeft: 'var(--spacing-10)' }}>*</span>
                      </div>
                      <div
                        style={{
                          padding: 'var(--spacing-20) var(--spacing-30)',
                          border: 'var(--border-width-2-5) solid var(--secondary-light)',
                          borderRadius: 'var(--border-radius-10)',
                          backgroundColor: 'var(--white)',
                        }}
                      >
                        <Text size="small">{attachmentInfo?.data?.attachment_type || '-'}</Text>
                      </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-40)' }}>
                      <Text
                        size="small"
                        appearance="subtle"
                        style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}
                      >
                        Linked to
                      </Text>
                      <div
                        style={{
                          padding: 'var(--spacing-20) var(--spacing-30)',
                          border: 'var(--border-width-2-5) solid var(--secondary-light)',
                          borderRadius: 'var(--border-radius-10)',
                          backgroundColor: 'var(--white)',
                        }}
                      >
                        <Text size="small">
                          {attachmentInfo?.data?.attachment_pathurl?.map((link: any) => link.display_name).join(', ') ||
                            '-'}
                        </Text>
                      </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-40)' }}>
                      <Text
                        size="small"
                        appearance="subtle"
                        style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}
                      >
                        Facility
                      </Text>
                      <div
                        style={{
                          padding: 'var(--spacing-20) var(--spacing-30)',
                          border: 'var(--border-width-2-5) solid var(--secondary-light)',
                          borderRadius: 'var(--border-radius-10)',
                          backgroundColor: 'var(--white)',
                        }}
                      >
                        <Text size="small">{attachmentInfo?.data?.practice_name || '-'}</Text>
                      </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-40)' }}>
                      <Text
                        size="small"
                        appearance="subtle"
                        style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}
                      >
                        Description
                      </Text>
                      <textarea
                        style={{
                          width: '100%',
                          padding: 'var(--spacing-20) var(--spacing-30)',
                          border: 'var(--border-width-2-5) solid var(--secondary-light)',
                          borderRadius: 'var(--border-radius-10)',
                          backgroundColor: 'var(--white)',
                          resize: 'vertical',
                          minHeight: '80px',
                          fontFamily: 'var(--font-family)',
                          fontSize: 'var(--font-size)',
                        }}
                        placeholder="Description"
                        defaultValue={attachmentInfo?.data?.file_description || ''}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--spacing-20)', marginTop: 'var(--spacing-80)' }}>
                      <Button
                        appearance="primary"
                        size="regular"
                        data-test="DocumentInfoPanel--SaveEdit"
                        onClick={() => {
                          if (onSaveChanges) {
                            onSaveChanges({
                              attachmentName: attachmentInfo?.data?.attachment_name || document.title,
                              attachmentType: attachmentInfo?.data?.attachment_type || '',
                              practiceName: attachmentInfo?.data?.practice_name || '',
                              fileDescription: attachmentInfo?.data?.file_description || '',
                              filePath: attachmentInfo?.data?.attachment_filepath || document.filePath || '',
                            });
                          }
                        }}
                      >
                        Save Changes
                      </Button>
                      <Button
                        appearance="basic"
                        size="regular"
                        onClick={onClose}
                        data-test="DocumentInfoPanel--CancelEdit"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) && (
                  <div>
                    {attachmentInfo?.generalInfoSchema?.map((schema: DetailViewSchema, index: number) => (
                      <div key={index} style={{ marginBottom: 'var(--spacing-30)' }}>
                        <Text
                          size="small"
                          appearance="subtle"
                          style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}
                        >
                          {schema.displayName}
                        </Text>
                        <Text size="small">
                          {attachmentInfo?.data ? getTemplateValue(schema, attachmentInfo.data) : '-'}
                        </Text>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}

          {attachmentInfo?.fileInfoSchema && (
            <div style={{ marginBottom: 'var(--spacing-60)' }}>
              <Text
                size="large"
                appearance="default"
                style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-40)', display: 'block' }}
              >
                File Info
              </Text>

              {attachmentInfo.fileInfoSchema.map((schema: DetailViewSchema, index: number) => (
                <div key={index} style={{ marginBottom: 'var(--spacing-30)' }}>
                  <Text
                    size="small"
                    appearance="subtle"
                    style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}
                  >
                    {schema.displayName}
                  </Text>
                  <Text size="small">{attachmentInfo.data ? getStringValue(schema, attachmentInfo.data) : '-'}</Text>
                </div>
              ))}
            </div>
          )}

          {!attachmentInfo?.generalInfoSchema && !attachmentInfo?.fileInfoSchema && (
            <div style={{ marginBottom: 'var(--spacing-60)' }}>
              <Text
                size="large"
                appearance="default"
                style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-40)', display: 'block' }}
              >
                Document Information
              </Text>

              <div style={{ marginBottom: 'var(--spacing-30)' }}>
                <Text size="small" appearance="subtle" style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}>
                  File Name
                </Text>
                <Text size="small">{document.title}</Text>
              </div>

              <div style={{ marginBottom: 'var(--spacing-30)' }}>
                <Text size="small" appearance="subtle" style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}>
                  File Type
                </Text>
                <Text size="small">{document.fileType?.toUpperCase() || 'Unknown'}</Text>
              </div>

              {document.uploadDate && (
                <div style={{ marginBottom: 'var(--spacing-30)' }}>
                  <Text
                    size="small"
                    appearance="subtle"
                    style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}
                  >
                    Upload Date
                  </Text>
                  <Text size="small">{document.uploadDate}</Text>
                </div>
              )}

              {document.encounterType && (
                <div style={{ marginBottom: 'var(--spacing-30)' }}>
                  <Text
                    size="small"
                    appearance="subtle"
                    style={{ display: 'block', marginBottom: 'var(--spacing-10)' }}
                  >
                    Encounter Type
                  </Text>
                  <Text size="small">{document.encounterType}</Text>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

DocumentInfoPanel.displayName = 'DocumentInfoPanel';

export default DocumentInfoPanel;
