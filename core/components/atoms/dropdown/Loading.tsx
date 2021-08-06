import React from 'react';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import Placeholder from '@/components/molecules/placeholder';

const Loading = (props: any) => {
  const { loadingType } = props;

  switch (loadingType) {
    case 'DEFAULT':
      return <PlaceholderParagraph length={'large'} />;
    case 'WITH_ICON':
      return (
        <Placeholder withImage={true} round={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
      );
    case 'WITH_META':
      return (
        <Placeholder withImage={false}>
          <PlaceholderParagraph length="large" />
          <PlaceholderParagraph length="medium" size="xxs" />
        </Placeholder>
      );
    case 'WITH_CHECKBOX':
      return (
        <Placeholder withImage={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
      );
    case 'ICON_WITH_META':
      return (
        <Placeholder withImage={true} round={true} imageSize={'medium'}>
          <PlaceholderParagraph length="large" />
          <PlaceholderParagraph length="medium" size="xxs" />
        </Placeholder>
      );
  }
  return null;
};

export default Loading;
