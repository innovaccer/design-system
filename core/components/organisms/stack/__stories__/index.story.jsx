import * as React from 'react';

import Stack from '../Stack';
import StackItem from '../StackItem';

export const all = () => {
  return (
    <div>
      <Stack>
        {[1, 2, 3].map((item, key) => {
          return (
            <StackItem key={key} showDivider={key === 2 ? false : true}>
              list {item}
            </StackItem>
          );
        })}
      </Stack>
    </div>
  );
};

export default {
  title: 'Components/Stack/All',
  component: Stack,
  subcomponents: { StackItem },
};
