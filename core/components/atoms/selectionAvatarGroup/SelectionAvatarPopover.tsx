import * as React from 'react';
import { Listbox, Checkbox } from '@/index';
// import classNames from 'classnames';
import { AvatarData } from './SelectionAvatarGroup';

const SelectionAvatarPopover = (props: any) => {
  const { hiddenAvatarList, popperRenderer, withSearch } = props;

  if (popperRenderer) {
    return popperRenderer(hiddenAvatarList);
  }

  // return (
  //   <div className="py-6 pr-4 pl-6">
  //     <div className="AvatarGroup-TextWrapper" style={{ maxHeight }}>
  //       {hiddenAvatarList.map((item: any, ind: any) => {
  //         const { firstName = '', lastName = '' } = item;
  //         const name = `${firstName} ${lastName}`;
  //         const AvatarTextClass = classNames({
  //           [`mb-5`]: ind < hiddenAvatarList.length - 1,
  //         });
  //         return (
  //           <Text
  //             key={ind}
  //             appearance={dark ? 'white' : 'default'}
  //             className={AvatarTextClass}
  //             data-test="DesignSystem-AvatarGroup--Text"
  //           >
  //             {name}
  //           </Text>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  return (
    <div className="py-3">
      {withSearch && <div></div>}
      <Listbox showDivider={false} type="option" size="compressed">
        {hiddenAvatarList.map((avatarData: AvatarData, index: any) => {
          const { firstName = '', lastName = '' } = avatarData;
          const name = `${firstName} ${lastName}`;
          return (
            <Listbox.Item key={index}>
              <Checkbox label={name} onChange={function () {}} size="regular" />
            </Listbox.Item>
          );
        })}
      </Listbox>
    </div>
  );
};

export default SelectionAvatarPopover;
