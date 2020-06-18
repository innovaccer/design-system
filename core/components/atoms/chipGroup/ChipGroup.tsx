import * as React from 'react';
import Chip, { ChipProps, Name } from '../chip/Chip';
export interface ChipGroupProps {
  onClose?: (name: Name) => void;
  onClick?: (name: Name) => void;
  list: ChipProps[];
}

export const ChipGroup = (props: ChipGroupProps) => {
  const { list, onClick, onClose } = props;

  const onClickHandler = (name: Name) => {
    if (onClick) onClick(name);

  };
  const onCloseHandler = (name: Name) => {
    if (onClose) onClose(name);
  };
  return (
    <>
      {list.map(({ label = '', icon, type, disabled, selected, clearbutton, name }, ind) => {
        return (
          <div key={ind} className="ChipGroup">
            <Chip
              name={name}
              label={label}
              selected={selected}
              icon={icon}
              disabled={disabled}
              clearbutton={clearbutton}
              type={type}
              onClick={onClickHandler}
              onClose={onCloseHandler}
            />
          </div>
        );
      })}
    </>
  );
};
ChipGroup.displayName = 'ChipGroup';
export default ChipGroup;
