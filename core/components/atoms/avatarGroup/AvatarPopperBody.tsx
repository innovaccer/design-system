import * as React from 'react';
import { Text, Listbox, Tooltip } from '@/index';
import classNames from 'classnames';
import { AvatarData } from './AvatarGroup';

interface AvatarPopperProps {
  popperRenderer?: (names: AvatarData[]) => JSX.Element;
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number | string;
  popperClassName?: string;
  hiddenAvatarList: AvatarData[];
}

const AvatarPopperBody = (props: AvatarPopperProps) => {
  const { hiddenAvatarList, popperRenderer, maxHeight, minHeight, width, popperClassName } = props;

  if (popperRenderer) {
    return popperRenderer(hiddenAvatarList);
  }

  const popperClass = classNames(
    {
      ['AvatarGroup-Popper py-3']: true,
    },
    popperClassName
  );

  return (
    <div style={{ width, minHeight, maxHeight }} className={popperClass} data-test="DesignSystem-AvatarGroup--Popover">
      <Listbox
        showDivider={false}
        type="description"
        size="compressed"
        tagName="ul"
        data-test="DesignSystem-AvatarGroup--List"
      >
        {hiddenAvatarList.map((item: AvatarData, index: number) => {
          const { firstName = '', lastName = '', tooltipSuffix = '', disabled } = item;
          const name = `${firstName} ${lastName} ${tooltipSuffix}`;
          const elementRef = React.useRef(null);

          return (
            <Tooltip key={index} showOnTruncation={true} tooltip={name} elementRef={elementRef}>
              <Listbox.Item
                disabled={disabled}
                className="cursor-default"
                tagName="li"
                data-test="DesignSystem-AvatarGroup--Item"
              >
                <Text ref={elementRef} data-test="DesignSystem-AvatarGroup--Text" className="ellipsis--noWrap">
                  {name}
                </Text>
              </Listbox.Item>
            </Tooltip>
          );
        })}
      </Listbox>
    </div>
  );
};

export default AvatarPopperBody;
