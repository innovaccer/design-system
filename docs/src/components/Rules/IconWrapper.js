import React from 'react';
import { Icon } from '@innovaccer/design-system';

const IconWrapper = ({ children, iconType = 'success' }) => {
  return (
    <div className="d-flex">
      {iconType === 'error' ? (
        <Icon className="mr-4 mt-2" appearance="alert" name="cancel" size={14} />
      ) : (
        <Icon className="mr-4 mt-2" appearance="success" name="check_circle" size={14} />
      )}
      {children}
    </div>
  );
};

export default IconWrapper;
