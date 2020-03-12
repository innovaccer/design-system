import * as React from 'react';
import Placeholder, { } from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import Text from '@/components/atoms/text';

export const imageShape = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', marginRight: '5%' }}>
        <Placeholder withImage={true} round={true}>
          <PlaceholderParagraph length="large" />
          <br />
          <Text weight="strong">Round</Text>
        </Placeholder>
      </div>
      <div>
        <Placeholder withImage={true}>
          <PlaceholderParagraph length="large" />
          <br />
          <Text weight="strong">Square</Text>
        </Placeholder>
      </div>
    </div>
  );
};

export default { title: 'Loaders/Placeholder' };
