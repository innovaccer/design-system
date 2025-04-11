import * as React from 'react';
import classNames from 'classnames';
import { TIconPosition, TSize2Hierarchy } from '../common.type';
import SaraIconDefault from './icons/SaraIconDefault';
import SaraIconDisabled from './icons/SaraIconDisabled';
import styles from '@css/ai-components/iconButton.module.css';

interface SaraIconProp {
  size: TSize2Hierarchy;
  position: TIconPosition;
  disabled?: boolean;
}

export const SaraIcon = (props: SaraIconProp) => {
  const { size, position, disabled } = props;

  const AIIconClassNames = classNames({
    [styles['AIIconButton-AIIcon']]: true,
    [styles['AIIconButton-AIIcon--largeTop']]: position === 'top' && size === 'large',
    [styles['AIIconButton-AIIcon--regularTop']]: position === 'top' && size === 'regular',
    [styles['AIIconButton-AIIcon--regularBottom']]: position === 'bottom' && size === 'regular',
    [styles['AIIconButton-AIIcon--largeBottom']]: position === 'bottom' && size === 'large',
  });

  if (disabled) {
    return <SaraIconDisabled className={AIIconClassNames} />;
  }

  return <SaraIconDefault className={AIIconClassNames} />;
};

SaraIcon.defaultProps = {
  size: 'regular',
  position: 'top',
};

export default SaraIcon;
