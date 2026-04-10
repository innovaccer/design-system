import * as React from 'react';
import { Text } from '@/index';
import { SelectContext } from './SelectContext';
import { BaseProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';

interface SelectEmptyTemplateProps extends BaseProps {
  /**
   * Heading of `EmptyState`
   */
  title?: string;
  /**
   * Description of `EmptyState`
   */
  description?: string;
  /**
   * Button / ButtonGroups to be added inside `EmptyState`
   */
  children?: React.ReactNode;
}

export const SelectEmptyTemplate = (props: SelectEmptyTemplateProps) => {
  const contextProp = React.useContext(SelectContext);

  const { maxHeight, withSearch } = contextProp;

  const { title, description, children, ...rest } = props;

  const searchInputHeight = 33;

  const wrapperStyle = {
    minHeight: withSearch ? maxHeight! - searchInputHeight : maxHeight,
  };

  const titleId = React.useMemo(() => `empty-title-${uidGenerator()}`, []);
  const descId = React.useMemo(() => `empty-desc-${uidGenerator()}`, []);

  return (
    <div
      className="px-7 d-flex justify-content-center align-items-center"
      style={wrapperStyle}
      data-test="DesignSystem-Select-EmptyState--wrapper"
      aria-live="polite"
      role="status"
      {...rest}
    >
      <div
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descId : undefined}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        {title && (
          <Text id={titleId} role="heading" aria-level={2} className="text-align-center mb-3" weight="strong">
            {title}
          </Text>
        )}
        {description && (
          <Text id={descId} className="text-align-center mb-6" weight="medium" size="small" appearance="subtle">
            {description}
          </Text>
        )}
        {children && children}
      </div>
    </div>
  );
};

export default SelectEmptyTemplate;
