import * as React from 'react';
import { OptionTypeProps } from './index';
import { Icon, Text } from '@/index';
import classNames from 'classnames';

const IconWithMetaOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    renderSubInfo,
    onClickHandler,
    optionData,
    onUpdateActiveOption,
    appearance,
    dataTest,
  } = props;

  const { subInfo, label, icon, disabled } = optionData;

  const OptionClass = classNames({
    [`${className}`]: true,
    ['Option--icon']: icon,
  });

  return (
    // TODO(a11y): fix accessibility
    /* eslint-disable */
    <div
      className={OptionClass}
      onClick={onClickHandler}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
      data-disabled={disabled}
    >
      {/* eslint-enable  */}
      {icon && (
        <Icon data-test={`${dataTest}--Icon`} className="Option-icon mr-4" name={icon} appearance={appearance} />
      )}
      <div className={'Option-label'}>
        <Text className={textClassName} appearance={appearance}>
          {label}
        </Text>
        {subInfo && renderSubInfo(subInfo)}
      </div>
    </div>
  );
};

export default IconWithMetaOption;
