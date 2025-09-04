import * as React from 'react';
import { Button } from '@/index';
import { NavigationButtonsProps } from './types';

/**
 * NavigationButtons component provides left/right navigation for multi-document scenarios
 */
const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentIndex,
  totalDocuments,
  onPrevious,
  onNext,
  position = 'sidesheet',
  showAriaLabels = true,
}) => {
  const getLeftPosition = () => {
    switch (position) {
      case 'detail':
        return 'var(--spacing-40)';
      case 'sidesheet':
      default:
        return 'var(--spacing-40)';
    }
  };

  const getRightPosition = () => {
    switch (position) {
      case 'detail':
        return 'var(--spacing-40)';
      case 'sidesheet':
      default:
        return 'var(--spacing-40)';
    }
  };

  const getTopPosition = () => {
    switch (position) {
      case 'detail':
        return '50%';
      case 'sidesheet':
      default:
        return '50%';
    }
  };

  if (totalDocuments <= 1) {
    return null;
  }

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: getLeftPosition(),
          top: getTopPosition(),
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}
      >
        <Button
          size="large"
          icon="chevron_left"
          disabled={currentIndex <= 0}
          onClick={onPrevious}
          data-test="NavigationButtons--Previous"
          aria-label={
            showAriaLabels ? `Previous document (${currentIndex} of ${totalDocuments}) - Use left arrow key` : undefined
          }
          title="Previous document (Left arrow key)"
        />
      </div>

      <div
        style={{
          position: 'absolute',
          right: getRightPosition(),
          top: getTopPosition(),
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}
      >
        <Button
          size="large"
          icon="chevron_right"
          disabled={currentIndex >= totalDocuments - 1}
          onClick={onNext}
          data-test="NavigationButtons--Next"
          aria-label={
            showAriaLabels
              ? `Next document (${currentIndex + 2} of ${totalDocuments}) - Use right arrow key`
              : undefined
          }
          title="Next document (Right arrow key)"
        />
      </div>
    </>
  );
};

NavigationButtons.displayName = 'NavigationButtons';

export default NavigationButtons;
