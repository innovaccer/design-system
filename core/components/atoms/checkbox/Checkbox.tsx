import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';
import { BaseProps, OmitNativeProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';
export type Size = 'regular' | 'tiny';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface CheckboxProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
  /**
   * Size of the `Checkbox`
   * @default "regular"
   */
  size?: Size;
  /**
   * Default value of checked (Used in case of uncontrolled `Checkbox`)
   */
  defaultChecked?: boolean;
  /**
   * Denotes Selection (Used in case of controlled `Checkbox`)
   */
  checked?: boolean;
  /**
   * Used in case of nested `Checkbox`, overwrites checked if true
   */
  indeterminate?: boolean;
  /**
   * Disables the `Checkbox`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Describes Label of the `Checkbox`
   */
  label?: string;
  /**
   * Name of the `Checkbox`
   */
  name?: string;
  /**
   * Value of the `Checkbox`
   */
  value?: string | number;
  /**
   * Specifies tab index of `Checkbox`
   * @default 0
   */
  tabIndex?: number;
  /**
   * Callback function called when user the selects an option
   */
  onChange?: (event: ChangeEvent) => void;
}

/**
 * ######Checkbox has two types:
 *  - [Controlled Checkbox](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled Checkbox](https://reactjs.org/docs/uncontrolled-components.html)
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    tabIndex = 0,
    defaultChecked,
    indeterminate,
    label,
    disabled,
    onChange,
    name,
    value,
    className,
    checked: checkedProp,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  const [checked, setChecked] = React.useState(props.checked === undefined ? defaultChecked : props.checked);

  React.useEffect(() => {
    setIndeterminate(indeterminate);
  }, [indeterminate]);

  React.useEffect(() => {
    if (props.checked !== undefined) {
      setChecked(props.checked);
    }
  }, [props.checked]);

  const CheckboxClass = classNames({
    ['Checkbox']: true,
    ['Checkbox--disabled']: disabled,
  }, className);

  const CheckboxOuterWrapper = classNames({
    ['Checkbox-outerWrapper']: true,
    [`Checkbox-outerWrapper--${size}`]: size,
  });

  const CheckboxTextClass = classNames({
    ['Checkbox-label']: true,
  });

  const CheckboxInputWrapper = classNames({
    ['Checkbox-input']: true,
    ['Checkbox-input--checked']: checked,
    ['Checkbox-input--indeterminate']: props.indeterminate
  });

  const CheckboxWrapper = classNames({
    ['Checkbox-wrapper']: true,
  });

  const setIndeterminate = (indeterminateValue: any) => {
    ref.current!.indeterminate = indeterminateValue;
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.checked === undefined) {
      setChecked(e.target.checked);
      setIndeterminate(e.target.indeterminate);
    }
    if (onChange) onChange(e);
  };
  const id = `${name}-${label}-${uidGenerator()}`;
  const IconName = (indeterminate) ? 'remove' : ((checked) ? 'check' : '');
  const IconSize = (size) === 'tiny' ? 12 : 16;

  return (
    <div className={CheckboxClass}>
      <div className={CheckboxOuterWrapper}>
        <input
          {...rest}
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={onChangeHandler}
          checked={checked}
          disabled={disabled}
          ref={ref}
          name={name}
          value={value}
          className={CheckboxInputWrapper}
          tabIndex={tabIndex}
          id={id}
        />
        <span className={CheckboxWrapper}>
          {(IconName) && <Icon name={IconName} size={IconSize} appearance={'white'} />}
        </span>
      </div>
      {label && label.trim() && (
        <label htmlFor={id} className={CheckboxTextClass}>
          <Text
            size={size === 'tiny' ? 'small' : 'regular'}
            appearance={disabled ? 'disabled' : 'default'}
          >
            {label.trim()}
          </Text>
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
