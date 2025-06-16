import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import { BaseProps, OmitNativeProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';
import { ChangeEvent } from '@/common.type';
import CheckboxIcon from './CheckboxIcon';
import styles from '@css/components/checkbox.module.css';
import dropdownStyles from '@css/components/dropdown.module.css';
import gridStyles from '@css/components/grid.module.css';

export type CheckBoxSize = 'regular' | 'tiny';

export interface CheckboxProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
  /**
   * Size of the `Checkbox`
   * @default "regular"
   */
  size?: CheckBoxSize;
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
   * Describes Help Text of the `Checkbox`
   */
  helpText?: string;
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
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * htmlFor label id for checkbox
   */
  id?: string;
  /**
   * Pass ref to the checkbox text
   */
  labelRef?: React.Ref<HTMLSpanElement>;
  /**
   *  Wrap checkbox label to the next line
   */
  wrapLabel?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    tabIndex = 0,
    defaultChecked,
    indeterminate,
    label,
    error,
    disabled,
    onChange,
    name,
    value,
    className,
    checked: checkedProp,
    helpText,
    id = `${name}-${label}-${uidGenerator()}`,
    labelRef,
    wrapLabel,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  const [checked, setChecked] = React.useState(checkedProp === undefined ? defaultChecked : checkedProp);

  React.useEffect(() => {
    setIndeterminate(indeterminate);
  }, [indeterminate]);

  React.useEffect(() => {
    if (checkedProp !== undefined) {
      setChecked(checkedProp);
    }
  }, [checkedProp]);

  const CheckboxClass = classNames(
    {
      [styles['Checkbox']]: true,
      [styles['Checkbox--disabled']]: disabled,
    },
    className
  );

  const CheckboxOuterWrapper = classNames({
    [styles['Checkbox-outerWrapper']]: true,
    [dropdownStyles['Checkbox-outerWrapper']]: true,
    [styles[`Checkbox-outerWrapper--${size}`]]: size,
  });

  const CheckboxInputWrapper = classNames({
    [styles['Checkbox-input']]: true,
    [styles['Checkbox-input--checked']]: checked,
    [styles['Checkbox-input--indeterminate']]: props.indeterminate,
  });

  const CheckboxWrapper = classNames({
    [styles['Checkbox-wrapper']]: true,
    [gridStyles['Checkbox-wrapper']]: true,
    [styles['Checkbox-wrapper--default']]: !error,
    [styles['Checkbox-wrapper--error']]: error,
  });

  const CheckboxLabelClass = classNames({
    [styles['Checkbox-label']]: true,
    [dropdownStyles['Checkbox-label']]: true,
    [styles['Checkbox-label--tiny']]: size === 'tiny',
  });

  const LabelTextClass = classNames({
    ['mw-100']: true,
    ['ellipsis--noWrap']: wrapLabel !== true,
    ['ellipsis']: wrapLabel,
  });

  const setIndeterminate = (indeterminateValue: any) => {
    ref.current!.indeterminate = indeterminateValue;
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checkedProp === undefined) {
      setChecked(e.target.checked);
      setIndeterminate(e.target.indeterminate);
    }
    if (onChange) onChange(e);
  };

  const IconMapper = classNames({
    ['checked--regular']: checked && size === 'regular',
    ['checked--tiny']: checked && size === 'tiny',
    ['indeterminate--regular']: indeterminate && size === 'regular',
    ['indeterminate--tiny']: indeterminate && size === 'tiny',
  });

  return (
    <>
      <div data-test="DesignSystem-Checkbox" className={CheckboxClass}>
        <div data-test="DesignSystem-Checkbox-OuterWrapper" className={CheckboxOuterWrapper}>
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
            data-test="DesignSystem-Checkbox-InputBox"
          />
          <span className={CheckboxWrapper} data-test="DesignSystem-Checkbox-Icon">
            {IconMapper && <CheckboxIcon name={IconMapper} />}
          </span>
        </div>
        {(label || helpText) && (
          <div className={styles['Checkbox-labelWrapper']}>
            {label && label.trim() && (
              <label htmlFor={id} className={CheckboxLabelClass} data-test="DesignSystem-Checkbox-Label">
                <Text
                  size={size === 'tiny' ? 'small' : 'regular'}
                  appearance={disabled ? 'disabled' : 'default'}
                  className={LabelTextClass}
                  ref={labelRef}
                >
                  {label.trim()}
                </Text>
              </label>
            )}
            {helpText && (
              <Text
                data-test="DesignSystem-Checkbox-HelpText"
                size="small"
                appearance={disabled ? 'disabled' : 'subtle'}
              >
                {helpText.trim()}
              </Text>
            )}
          </div>
        )}
      </div>
    </>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
