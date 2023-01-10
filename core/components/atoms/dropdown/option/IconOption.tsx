import * as React from 'react';
import { OptionTypeProps } from './index';
import { Text, Icon } from '@/index';
import classNames from 'classnames';

const IconOption = (props: OptionTypeProps) => {
  const { className, textClassName, onClickHandler, optionData, onUpdateActiveOption, color, dataTest } = props;

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
      {icon && <Icon className="Option-icon mr-4" data-test={`${dataTest}--Icon`} name={icon} />}
      <div className={'Option-label'}>
        <Text className={textClassName} color={color}>
          {label}
        </Text>
      </div>
    </div>
  );
};

export default IconOption;
