import * as React from 'react';
import { Text, Icon } from '@/index';
import { DropzoneProps } from '@/index.type';
import classNames from 'classnames';

export interface DropzoneErrorProps {
  error: string;
  type: DropzoneProps['type'];
}

export const DropzoneError = (props: DropzoneErrorProps) => {
  const { type, error } = props;

  const IconClass = classNames({
    ['Dropzone-stateIcon']: true,
    [`Dropzone-stateIcon--${type}`]: type,
  });

  return (
    <React.Fragment>
      {type !== 'tight' && <Icon name="error" size={64} appearance="alert" className={IconClass} />}
      <Text appearance="destructive" size="large" weight="strong">
        {error}
      </Text>
    </React.Fragment>
  );
};

DropzoneError.displayName = 'DropzoneError';

export default DropzoneError;
