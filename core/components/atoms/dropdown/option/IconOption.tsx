import * as React from 'react';
import { OptionTypeProps } from './index';
import { Text, Icon } from '@/index';
import classNames from 'classnames';

const IconOption = (props: OptionTypeProps) => {
  const { className, textClassName, onClickHandler, optionData, onUpdateActiveOption, appearance, dataTest } = props;

  const { label, icon, disabled } = optionData;

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
        <Icon className="Option-icon mr-4" data-test={`${dataTest}--Icon`} name={icon} appearance={appearance} />
      )}
      <div className={'Option-label'}>
        <Text className={textClassName} appearance={appearance}>
          {label}
        </Text>
      </div>
    </div>
  );
};

export default IconOption;
