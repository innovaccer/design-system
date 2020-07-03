import * as React from 'react';
import Chip, { ChipProps, Name } from '../chip/Chip';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface ChipGroupProps extends BaseProps {
  /**
   * Handler to be called when Chip is closed
   */
  onClose?: (name: Name) => void;
  /**
   * Handler to be called when Chip is clicked
   */
  onClick?: (name: Name) => void;
  /**
   * List of chips
   */
  list: ChipProps[];
}

export const ChipGroup = (props: ChipGroupProps) => {

  const { list, onClick, onClose, className } = props;
  const baseProps = extractBaseProps(props);

  const onClickHandler = (name: Name) => {
    if (onClick) onClick(name);

  };
  const onCloseHandler = (name: Name) => {
    if (onClose) onClose(name);
  };

  const ChipGroupClass = classNames({
    ['ChipGroup']: true,
  }, className);

  return (
    <div {...baseProps} className={ChipGroupClass}>
      {list.map(({ label = '', icon, type, disabled, selected, clearButton, name }, ind) => {
        return (
          <span key={ind} className="ChipGroup-item">
            <Chip
              name={name}
              label={label}
              selected={selected}
              icon={icon}
              disabled={disabled}
              clearButton={clearButton}
              type={type}
              onClick={onClickHandler}
              onClose={onCloseHandler}
            />
          </span>
        );
      })}
    </div>
  );
};
ChipGroup.displayName = 'ChipGroup';
export default ChipGroup;
