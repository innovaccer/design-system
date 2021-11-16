import * as React from 'react';
import { isEnterKey } from '@/accessibility/utils';

interface IProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  role?: React.AriaRole;
}

const useAccessibilityProps = ({ onClick, onKeyDown, role }: IProps) => {
  return {
    ...(onClick
      ? {
          onClick: onClick,
          role: role || 'button',
          tabIndex: 0,
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
      : { role }),
  };
};

export default useAccessibilityProps;
