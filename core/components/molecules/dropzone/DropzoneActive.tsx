import * as React from 'react';
import { Text } from '@/index';
import { DropzoneProps } from '@/index.type';
import DropzoneIcon from './DropzoneIcon';

export interface DropzoneActiveProps {
  type: DropzoneProps['type'];
}

export const DropzoneActive = (props: DropzoneActiveProps) => {
  const { type } = props;

  return (
    <React.Fragment>
      {type !== 'tight' && <DropzoneIcon name="active" type={type} />}
      <Text appearance="link" size="large" weight="strong">
        Drop your files here
      </Text>
    </React.Fragment>
  );
};

DropzoneActive.displayName = 'DropzoneActive';

export default DropzoneActive;
