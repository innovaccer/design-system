import * as React from 'react';
import { OptionTypeProps } from './index';
import Icon from '@/components/atoms/icon';
import classNames from 'classnames';

const IconOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    selected,
    onClick,
    optionData,
  } = props;

  const { label, icon } = optionData;

  const OptionClass = classNames({
    [`${className}`]: true,
    ['Option--icon']: icon,
  });

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <div className={OptionClass} onClick={onClickHandler}>
      {icon && (
        <div className={'Option-icon'}>
          <Icon className="mr-4" name={icon} appearance={selected ? 'white' : 'default'} />
        </div>
      )}
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
      </div>
    </div>
  );
};

export default IconOption;
