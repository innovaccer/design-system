import * as React from 'react';
import { Icon, Text } from '@/index';

// CSF format story
export const type = () => {
  const types = ['filled', 'outlined', 'round', 'two-tone', 'sharp'];

  const name = 'assignment';
  return (
    <div className="d-flex justify-content-between">
      {types.map((IconShape, ind) => {
        return (
          <div key={ind}>
            <Icon type={IconShape} size={50} name={name} />
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
