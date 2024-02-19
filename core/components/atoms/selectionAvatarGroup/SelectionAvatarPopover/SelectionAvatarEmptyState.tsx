import * as React from 'react';
import { Text } from '@/index';

export const SelectionAvatarEmptyState = (props: any) => {
  const { height, title, description } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height }}>
      <Text className="text-align-center mb-3" weight="strong">
        {title}
      </Text>
      <Text className="text-align-center mb-6" weight="medium" size="small" appearance="subtle">
        {description}
      </Text>
    </div>
  );
};

export default SelectionAvatarEmptyState;
