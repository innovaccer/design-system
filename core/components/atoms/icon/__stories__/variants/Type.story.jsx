import * as React from 'react';
import { Icon, Text } from '@/index';

// CSF format story
export const type = () => {
  const types = ['outlined', 'rounded'];

  const name = 'alarm';
  return (
    <div className="d-flex">
      {types.map((IconShape, ind) => {
        return (
          <div key={ind} className="mr-10">
            <Icon type={IconShape} size={48} name={name} />
            <br />
            <Text weight="strong">{IconShape.charAt(0).toUpperCase() + IconShape.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Icon/Variants/Type',
  component: Icon,
  parameters: {
    docs: {
      docPage: {
        title: 'Icon',
      },
    },
  },
};
