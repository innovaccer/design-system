import * as React from 'react';
import { Text } from '@/index';
import classNames from 'classnames';

const AvatarPopperBody = (props: any) => {
  const { hiddenAvatarList, popperRenderer, maxHeight, dark } = props;

  if (popperRenderer) {
    return popperRenderer(hiddenAvatarList);
  }

  return (
    <div className="py-6 pr-4 pl-6">
      <div className="AvatarGroup-TextWrapper" style={{ maxHeight }}>
        {hiddenAvatarList.map((item: any, ind: any) => {
          const { firstName = '', lastName = '' } = item;
          const name = `${firstName} ${lastName}`;
          const AvatarTextClass = classNames({
            [`mb-5`]: ind < hiddenAvatarList.length - 1,
          });
          return (
            <Text
              key={ind}
              appearance={dark ? 'white' : 'default'}
              className={AvatarTextClass}
              data-test="DesignSystem-AvatarGroup--Text"
            >
              {name}
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export default AvatarPopperBody;
