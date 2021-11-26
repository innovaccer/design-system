import * as React from 'react';
import { isEnterKey } from '@/accessibility/utils';

interface IProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  role?: React.AriaRole;
  'aria-label'?: React.AriaAttributes['aria-label'];
}

const useAccessibilityProps = ({ onClick, onKeyDown, role, ...rest }: IProps) => {
  return {
    ...(onClick
      ? {
          onClick: onClick,
          role: role || 'button',
          tabIndex: 0,
          'aria-label': rest['aria-label'],
          onKeyDown: (e: React.SyntheticEvent<HTMLElement>) => {
            if (onKeyDown) {
              onKeyDown(e as React.KeyboardEvent<HTMLElement>);
              return;
            }
            if (isEnterKey(e as React.KeyboardEvent<HTMLElement>) && onClick) {
              onClick(e as React.MouseEvent<HTMLElement>);
            }
          },
        }
      : { role, 'aria-label': rest['aria-label'] }),
  };
};

export default useAccessibilityProps;
