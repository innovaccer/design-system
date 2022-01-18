import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { Text, Icon } from '@/index';

// CSF format story
export const type = () => {
  const types = ['filled', 'outlined', 'round', 'two-tone', 'sharp'];

  const name = text('Name', 'assignment');
  return (
    <div className="d-flex">
      {types.map((IconShape, ind) => {
        return (
          <div key={ind} className="mr-9">
            <div>
              <Icon type={IconShape} size={50} name={name} />
            </div>
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
