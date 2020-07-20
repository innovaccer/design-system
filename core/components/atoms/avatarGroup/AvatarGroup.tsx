import * as React from 'react';
import { Avatar, Appearance } from '../avatar/Avatar';
import { BaseProps, extractBaseProps } from '@/utils/types';
import Popover from '@/components/molecules/popover';
import Text from '@/components/atoms/text';

export interface AvatarList {
  firstName?: string;
  lastName?: string;
  appearance: Appearance;
}

export interface AvatarGroupProps extends BaseProps {
  /**
   * List of Avatars
   */
  list: AvatarList[];
  /**
   * Max avatars to show before +x.
   * @default 2
   */
  max: number;
}

export const AvatarGroup = (props: AvatarGroupProps) => {

  const { list, max = 2 } = props;

  const baseProps = extractBaseProps(props);

  const extraAvatars = (list.length > max ? list.length - max : 0).toString();

  const trigger = (<Avatar appearance="alert" children={`${'+'}${extraAvatars}`} />);

  const text =
    (
      <div className="flex-column d-flex align-items-end">
        {
          list.slice(max, list.length).map((listItem, ind) => {
            const children = (`${listItem.firstName ? listItem.firstName : ''}
            ${listItem.lastName ? listItem.lastName : ''}`);

            return (
              <Text key={ind} appearance="white">{children}</Text>
            );
          })
        }
      </div>
    );

  return (
    <div {...baseProps} className="d-inline-flex ">
      {
        list.slice(0, max + 1).map((item, ind) => {

          const { appearance, firstName, lastName } = item;

          const child = ind >= max ? text : (`${firstName ? firstName : ''}
           ${lastName ? lastName : ''}`);

          const Trigger = ind >= max ? trigger :
            (
              <Avatar
                appearance={appearance}
                firstName={firstName}
                lastName={lastName}
              />
            );

          return (
            <div className="AvatarGroup-item" key={ind}>
              <Popover trigger={Trigger} on="hover" dark={true} className="customStyle">
                {child}
              </Popover>
            </div>
          );
        })
      }
    </div>
  );
};
AvatarGroup.displayName = 'AvatarGroup';
export default AvatarGroup;
