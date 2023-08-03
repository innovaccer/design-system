import * as React from 'react';

export const InteractiveCard = (props: any) => {
  const { children, type, id, name, checked } = props;

  return (
    <label htmlFor={id} className="selected-label">
      <input type={type} name={name} id={id} checked={checked} />
      <div className="selected-content">{children}</div>
    </label>
  );
};

InteractiveCard.displayName = 'InteractiveCard';

export default InteractiveCard;
