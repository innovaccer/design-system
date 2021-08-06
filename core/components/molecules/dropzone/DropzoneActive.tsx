import * as React from 'react';
import { Text, Icon } from '@/index';
import { DropzoneProps } from '@/index.type';
import classNames from 'classnames';

export interface DropzoneActiveProps {
  type: DropzoneProps['type'];
}

export const DropzoneActive = (props: DropzoneActiveProps) => {
  const { type } = props;

  const IconClass = classNames({
    ['Dropzone-stateIcon']: true,
    [`Dropzone-stateIcon--${type}`]: type,
  });

  return (
    <React.Fragment>
      {type !== 'tight' && <Icon name="archive" size={64} appearance="info" className={IconClass} />}
      <Text appearance="link" size="large" weight="strong">
        Drop your files here
      </Text>
    </React.Fragment>
  );
};

DropzoneActive.displayName = 'DropzoneActive';

export default DropzoneActive;
