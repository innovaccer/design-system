import React from 'react';

const isSpaceKey = (e: React.KeyboardEvent) => {
  const key = e.key;
  return key === ' ' || key === 'Space' || key === 'Spacebar';
};

export default isSpaceKey;
