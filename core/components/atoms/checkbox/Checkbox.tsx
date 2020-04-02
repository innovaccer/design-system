import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';

export type Size = 'regular' | 'tiny';

export interface ICheckboxProps {
  size?: Size;
  checked?: boolean;
  indeterminate?: boolean;
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
    setIndeterminate(props.indeterminate);
  }, [props.indeterminate]);

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
    ['Checkbox-wrapper--indeterminate']: props.indeterminate,
  });

  const setIndeterminate = (indeterminate: any) => {
    ref.current!.indeterminate = indeterminate;
  };

  const onChangeHandler = () => {
    const checkedValue = (props.indeterminate) ? true : !checked;
    setChecked(checkedValue);
    setIndeterminate(false);
    if (onChange) onChange(checkedValue);
  };

  const IconName = (props.indeterminate) ? 'remove' : ((checked) ? 'check' : '');
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
