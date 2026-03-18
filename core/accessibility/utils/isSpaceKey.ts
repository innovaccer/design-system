import React from 'react';

const isSpaceKey = (e: React.KeyboardEvent) => e.key === ' ' || e.key === 'Space' || e.key === 'Spacebar';

export default isSpaceKey;
