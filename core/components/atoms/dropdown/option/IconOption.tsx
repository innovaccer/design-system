import * as React from 'react';
import { OptionTypeProps } from './index';
import Icon from '@/components/atoms/icon';
import classNames from 'classnames';

const IconOption = (props: OptionTypeProps) => {
  const {
    className,
    textClassName,
    selected,
    onClickHandler,
    optionData,
    onUpdateActiveOption,
    menu,
    dataTest,
  } = props;

  const { label, icon } = optionData;

  const OptionClass = classNames({
    [`${className}`]: true,
    ['Option--icon']: icon,
  });

  return (
    <div
      className={OptionClass}
      onClick={onClickHandler}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
    >
      {icon && (
        <Icon className="Option-icon mr-4" name={icon} appearance={selected && !menu ? 'white' : 'default'} />
      )}
      <div className={'Option-label'}>
        <div className={textClassName}>{label}</div>
      </div>
    </div>
  );
};

export default IconOption;
