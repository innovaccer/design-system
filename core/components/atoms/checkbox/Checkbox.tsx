import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import Icon from '../icon';

export type Size = 'regular' | 'tiny';

export interface ICheckboxProps {
  size?: Size;
  checked?: boolean;
  intermediate?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    label,
    disabled,
    onChange,
    name,
    value,
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  const [checked, setChecked] = React.useState(props.checked);

  React.useEffect(() => {
    setIntermediate(props.intermediate);
  }, [props.intermediate]);

  React.useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const CheckboxClass = classNames({
    ['Checkbox']: true,
    ['Checkbox--disabled']: disabled,
    [`Checkbox--${size}`]: size,
  });

  const CheckboxWrapper = classNames({
    ['Checkbox-wrapper']: true,
    [`Checkbox-wrapper--${size}`]: size,
    ['Checkbox-wrapper--checked']: checked,
    ['Checkbox-wrapper--intermediate']: props.intermediate,
  });

  const setIntermediate = (intermediate: any) => {
    ref.current!.indeterminate = intermediate;
  };

  const onChangeHandler = () => {
    const checkedValue = (props.intermediate) ? true : !checked;
    setChecked(checkedValue);
    setIntermediate(false);
    if (onChange) onChange(checkedValue);
  };

  const IconName = (props.intermediate) ? 'remove' : ((checked) ? 'check' : '');
  const IconSize = (size) === 'tiny' ? 8 : 16;

  return (
    <div className={CheckboxClass}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        ref={ref}
        name={name}
        value={value}
        className={'Checkbox-input'}
      />
      <span onClick={onChangeHandler} className={CheckboxWrapper}>
        {(IconName) && <Icon name={IconName} size={IconSize} appearance={'white'} />}
      </span>
      {label && <Text small={size === 'tiny'}>{label}</Text>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
