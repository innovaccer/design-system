import * as React from 'react';

type AriaRoleType = React.AriaRole;
type KeyboardEventKeyType = KeyboardEvent['key'];

interface IProps extends React.AriaAttributes {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  role?: AriaRoleType;
  tabIndex?: number;
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

const useAccessibilityProps = ({ onClick, onKeyDown, role = 'button', tabIndex, ...ariaProps }: IProps) => {
  // Only add interactive props when onClick is provided.
  if (!onClick) {
    return { ...ariaProps };
  }
  return {
    onClick: onClick,
    role: role,
    tabIndex: tabIndex ?? 0,
    ...ariaProps,
    onKeyDown: (e: React.SyntheticEvent<HTMLElement>) => {
      if (onKeyDown) {
        onKeyDown(e as React.KeyboardEvent<HTMLElement>);
        return;
      }
      const key = (e as React.KeyboardEvent<HTMLElement>).key;
      if (isKeyboardInteractionAllowed(role, key)) {
        e.preventDefault();
        onClick(e as React.MouseEvent<HTMLElement>);
      }
    },
  };
};

export default useAccessibilityProps;
