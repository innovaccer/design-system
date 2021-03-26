import * as React from 'react';
import Placeholder from '../../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import PlaceholderImage from '@/components/atoms/placeholderImage';
import Text from '@/components/atoms/text';

export const image = () => {
  return (
    <div className="d-flex">
      <div className="w-25 mr-8">
        <Placeholder withImage={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">With Image</Text>
      </div>
      <div className="w-25">
        <Placeholder withImage={false}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">Without Image</Text>
      </div>
    </div>
  );
};

const customCode = `() => (
  <div className='d-flex'>
      <div className='w-25 mr-8'>
        <Placeholder withImage={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">With Image</Text>
      </div>
      <div className='w-25'>
        <Placeholder withImage={false}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">Without Image</Text>
      </div>
    </div>
)`;

export default {
  title: 'Components/Loaders/Placeholder/Variants/Image',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph },
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
