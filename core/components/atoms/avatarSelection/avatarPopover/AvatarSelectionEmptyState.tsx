import * as React from 'react';
import { Text } from '@/index';

export interface AvatarEmptyStateProps {
  /**
   * Specify height for empty state content
   */
  height?: number;
  /**
   * Describe title for empty state
   */
  title?: string | number;
  /**
   * Specify description for empty state
   */
  description?: string;
}

export const AvatarSelectionEmptyState = (props: AvatarEmptyStateProps) => {
  const { height, title, description } = props;
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: height ? height - 4 : '' }}
      data-test="DesignSystem-AvatarSelection--EmptyState"
    >
      {title && (
        <Text className="text-align-center mb-3" weight="strong">
          {title}
        </Text>
      )}
      {description && (
        <Text className="text-align-center mb-6" weight="medium" size="small" appearance="subtle">
          {description}
        </Text>
      )}
    </div>
  );
};

export default AvatarSelectionEmptyState;
