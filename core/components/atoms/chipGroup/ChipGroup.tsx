import * as React from 'react';
import Chip, { ChipProps } from '../chip/Chip';

export interface ChipGroupProps {
  onClose?: (name: any) => void;
  onClick?: (name: any) => void;
  list: ChipProps[];
}

export const ChipGroup = (props: ChipGroupProps) => {
  const { list, onClick, onClose } = props;
  const style = {
    display: 'flex',
    width: 'fit-content',
    justifyContent: 'center',
    margin: 0,
    paddingTop: 8,
    paddingBottom: 8,
    alignitems: 'center',
    paddingLeft: '5px',
  };

  const innerStyle = {
    marginRight: '5px',
  };
  return (
    <div style={style}>
      {list.map(({ label = '', icon, type, disabled, selected, clearbutton, name }, ind) => {
        return (
          <div key={ind} style={innerStyle}>
            <Chip
              name={name}
              label={label}
              selected={selected}
              icon={icon}
              disabled={disabled}
              clearbutton={clearbutton}
              type={type}
              onClick={onClick}
              onClose={onClose}
            />
          </div>
        );
      })}
    </div>
  );
};
ChipGroup.displayName = 'ChipGroup';
export default ChipGroup;
