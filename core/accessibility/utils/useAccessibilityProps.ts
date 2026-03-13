import * as React from 'react';

type AriaRoleType = React.AriaRole;
type KeyboardEventKeyType = KeyboardEvent['key'];

interface IProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  role?: AriaRoleType;
  tabIndex?: number;
  'aria-label'?: React.AriaAttributes['aria-label'];
  'aria-hidden'?: React.AriaAttributes['aria-hidden'];
}

const allowed: Record<string, Set<KeyboardEventKeyType>> = {
  button: new Set(['Enter', 'Space', 'Spacebar', ' ']),
  link: new Set(['Enter']),
  // onChange handles everything, no need for extra keyboard interaction
  checkbox: new Set([]),
  radio: new Set([]),
};

// Refer for keyboard interactions: https://webaim.org/techniques/keyboard/#testing
const isKeyboardInteractionAllowed = (role: AriaRoleType, key: KeyboardEventKeyType) => {
  if (!allowed[role]) {
    return false;
  }

  const allowedKeys = allowed[role];
  return allowedKeys.has(key);
};

const useAccessibilityProps = ({ onClick, onKeyDown, role, tabIndex, ...rest }: IProps) => {
  const ariaHidden = rest['aria-hidden'];
  const isHidden = ariaHidden === true || ariaHidden === 'true';

  if (isHidden) {
    return {
      'aria-hidden': true as const,
      ...(onClick ? { onClick } : {}),
      ...(onKeyDown ? { onKeyDown } : {}),
    };
  }

  const effectiveRole = onClick ? role || 'button' : role;

  return {
    ...(onClick
      ? {
          onClick: onClick,
          role: effectiveRole,
          tabIndex: tabIndex || 0,
          'aria-label': rest['aria-label'],
          onKeyDown: (e: React.SyntheticEvent<HTMLElement>) => {
            if (onKeyDown) {
              onKeyDown(e as React.KeyboardEvent<HTMLElement>);
              return;
            }
            const key = (e as React.KeyboardEvent<HTMLElement>).key;
            if (isKeyboardInteractionAllowed(effectiveRole!, key)) {
              if (onClick) {
                e.preventDefault();
                onClick(e as React.MouseEvent<HTMLElement>);
              }
            }
          },
        }
      : { role: effectiveRole, tabIndex, 'aria-label': rest['aria-label'] }),
  };
};

export default useAccessibilityProps;
