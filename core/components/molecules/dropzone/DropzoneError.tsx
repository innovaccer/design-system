import { Fragment } from 'react';
import { Text } from '@/index';
import { DropzoneProps } from '@/index.type';
import DropzoneIcon from './DropzoneIcon';

export interface DropzoneErrorProps {
  error: string;
  type: DropzoneProps['type'];
}

export const DropzoneError = (props: DropzoneErrorProps) => {
  const { type, error } = props;

  return (
    <Fragment>
      {type !== 'tight' && <DropzoneIcon type={type} name="error" />}
      <Text appearance="destructive" size="large" weight="strong">
        {error}
      </Text>
    </Fragment>
  );
};

DropzoneError.displayName = 'DropzoneError';

export default DropzoneError;
