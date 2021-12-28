import * as React from 'react';
import { Avatar } from '@/index';

const Avatars = (props: any) => {
  const { avatarList, avatarStyle, tooltipPosition } = props;
  const avatars = avatarList.map((item: any, index: any) => {
    const { appearance, firstName, lastName } = item;
    return (
      <div data-test="DesignSystem-AvatarGroup--Avatar" className="AvatarGroup-item" style={avatarStyle} key={index}>
        <Avatar
          appearance={appearance}
          firstName={firstName}
          lastName={lastName}
          withTooltip={true}
          tooltipPosition={tooltipPosition}
        />
      </div>
    );
  });
  return avatars;
};

export default Avatars;
