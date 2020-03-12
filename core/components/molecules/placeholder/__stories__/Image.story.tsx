import * as React from 'react';
import Placeholder, { } from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import Text from '@/components/atoms/text';

export const image = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', marginRight: '5%' }}>
        <Placeholder withImage={true}>
          <PlaceholderParagraph length="large" />
          <br />
          <Text weight="strong">With Image</Text>
        </Placeholder>
      </div>
      <div>
        <Placeholder withImage={false}>
          <PlaceholderParagraph length="large" />
          <br />
          <Text weight="strong">Without Image</Text>
        </Placeholder>
      </div>
    </div>
  );
};

export default { title: 'Loaders/Placeholder' };
