import { Placement } from '@floating-ui/react';
import { PositionType as Position } from '@/common.type';

export const mapPositionToPlacement = (position: Position): Placement => {
  const positionMap: Record<Position, Placement> = {
    auto: 'bottom',
    'auto-start': 'bottom-start',
    'auto-end': 'bottom-end',
    'top-start': 'top-start',
    top: 'top',
    'top-end': 'top-end',
    'right-start': 'right-start',
    right: 'right',
    'right-end': 'right-end',
    'bottom-end': 'bottom-end',
    bottom: 'bottom',
    'bottom-start': 'bottom-start',
    'left-end': 'left-end',
    left: 'left',
    'left-start': 'left-start',
  };

  return positionMap[position] || 'bottom';
};
