import * as React from 'react';
import Placeholder from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';

export const Rectangle = () => {
  const withImage = false;
  const round =  false;

  return (
    <Placeholder withImage={withImage} round={round}>
      <PlaceholderParagraph length="medium" />
    </Placeholder>
  );
};

const customCode=`() => {
    const withImage = false;
    const round =  false;
    return (
        <Placeholder withImage={withImage} round={round}>
        <PlaceholderParagraph length="medium" />
        </Placeholder>
    );
}`;

export default {
  title: 'Components/Loaders/Placeholder/Rectangle',
  component: Placeholder,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }

};
