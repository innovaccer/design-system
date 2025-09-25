import * as React from 'react';
import { Button, Text } from '@/index';
import { ZoomControlsProps } from './types';

/**
 * Utility function to clean up any orphaned zoom control containers
 * This is now a no-op function to maintain compatibility while avoiding direct DOM manipulation
 * React will handle proper cleanup through its own reconciliation process
 */
export const cleanupZoomControls = () => {
  // No-op: Let React handle DOM cleanup to avoid insertBefore conflicts
};

/**
 * ZoomControls component provides zoom in/out functionality with percentage display
 * Enhanced with proper React lifecycle management for fixed-positioned elements
 */
const ZoomControls: React.FC<ZoomControlsProps> = ({
  zoom,
  onZoomChange,
  minZoom,
  maxZoom,
  position = 'sidesheet',
  disabled = false,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const normalizedZoom = zoom / 100;

  const handleZoomOut = React.useCallback(() => {
    if (onZoomChange && normalizedZoom > minZoom / 100) {
      onZoomChange(Math.max((normalizedZoom - 0.1) * 100, minZoom));
    }
  }, [normalizedZoom, minZoom, onZoomChange]);

  const handleZoomIn = React.useCallback(() => {
    if (onZoomChange && normalizedZoom < maxZoom / 100) {
      onZoomChange(Math.min((normalizedZoom + 0.1) * 100, maxZoom));
    }
  }, [normalizedZoom, maxZoom, onZoomChange]);

  const getRightPosition = () => {
    switch (position) {
      case 'detail':
        return 'var(--spacing-60)';
      case 'sidesheet':
      default:
        return '10%';
    }
  };

  if (disabled) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        bottom: 'var(--spacing-60)',
        right: getRightPosition(),
        zIndex: 9999,
        backgroundColor: 'var(--inverse)',
        borderRadius: 'var(--border-radius-10)',
        padding: '0 var(--spacing-30)',
        opacity: 0.9,
      }}
      data-test="ZoomControls"
      data-zoom-controls={position}
    >
      <Button
        appearance="transparent"
        size="regular"
        icon="zoom_out"
        disabled={normalizedZoom <= minZoom / 100}
        onClick={handleZoomOut}
        style={{
          padding: 'var(--spacing-20)',
          height: 'auto',
          color: 'var(--white)',
        }}
        data-test="ZoomControls--ZoomOut"
        title="Zoom out"
      />

      <Text size="small" style={{ color: 'var(--white)', margin: '0 var(--spacing-20)' }}>
        {`${(normalizedZoom * 100).toFixed(0)}%`}
      </Text>

      <Button
        appearance="transparent"
        size="regular"
        icon="zoom_in"
        disabled={normalizedZoom >= maxZoom / 100}
        onClick={handleZoomIn}
        style={{
          padding: 'var(--spacing-20)',
          height: 'auto',
          color: 'var(--white)',
        }}
        data-test="ZoomControls--ZoomIn"
        title="Zoom in"
      />
    </div>
  );
};

ZoomControls.displayName = 'ZoomControls';

export default ZoomControls;
