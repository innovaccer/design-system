import * as React from 'react';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import Placeholder from '@/components/molecules/placeholder';
import { PlaceholderParagraphProps } from '@/index.type';
import styles from './dropdown.module.css';

const Loading = (props: any) => {
  const { loadingType, optionIndex } = props;
  const placeholderSizes: PlaceholderParagraphProps['length'][] = ['medium', 'large'];
  const size = placeholderSizes[(optionIndex + 2) % 2];

  switch (loadingType) {
    case 'DEFAULT':
      return (
        <PlaceholderParagraph
          length={size}
          data-test="DesignSystem-Dropdown--PlaceholderParagraph"
          className={styles.placeholderParagraph}
        />
      );
    case 'WITH_ICON':
      return (
        <Placeholder
          withImage={true}
          round={true}
          data-test="DesignSystem-Dropdown--Placeholder"
          className={styles.placeholder}
        >
          <PlaceholderParagraph length="large" className={styles.placeholderParagraph} />
        </Placeholder>
      );
    case 'WITH_META':
      return (
        <Placeholder withImage={false} data-test="DesignSystem-Dropdown--Placeholder" className={styles.placeholder}>
          <PlaceholderParagraph
            length="large"
            data-test="DesignSystem-Dropdown--PlaceholderParagraph"
            className={styles.placeholderParagraph}
          />
          <PlaceholderParagraph
            length="medium"
            size="xxs"
            data-test="DesignSystem-Dropdown--PlaceholderParagraph"
            className={styles.placeholderParagraph}
          />
        </Placeholder>
      );
    case 'WITH_CHECKBOX':
      return (
        <Placeholder withImage={true} data-test="DesignSystem-Dropdown--Placeholder" className={styles.placeholder}>
          <PlaceholderParagraph length="large" className={styles.placeholderParagraph} />
        </Placeholder>
      );
    case 'ICON_WITH_META':
      return (
        <Placeholder
          withImage={true}
          round={true}
          imageSize={'medium'}
          data-test="DesignSystem-Dropdown--Placeholder"
          className={styles.placeholder}
        >
          <PlaceholderParagraph
            length="large"
            data-test="DesignSystem-Dropdown--PlaceholderParagraph"
            className={styles.placeholderParagraph}
          />
          <PlaceholderParagraph
            length="medium"
            size="xxs"
            data-test="DesignSystem-Dropdown--PlaceholderParagraph"
            className={styles.placeholderParagraph}
          />
        </Placeholder>
      );
  }
  return null;
};

export default Loading;
