import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps, extractBaseProps } from '@/utils/types';

export interface LabelProps extends BaseProps, BaseHtmlProps<HTMLLabelElement> {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Disables the `Label`
   */
  disabled?: boolean;
  /**
   * Shows the user that this field id required
   */
  required?: boolean;
  /**
   * Adds default bottom margin of 4px
   */
  withInput?: boolean;
}

/**
 * *NOTE: Extends props with HTMLProps<HTMLLabelElement>*
 */
export const Label = (props: LabelProps) => {
  const {
    required,
    withInput,
    disabled,
    children,
    className,
    ...rest
  } = props;

  const baseProps = extractBaseProps(props);

  const LabelClass = classNames({
    Label: true,
    ['Label--withInput']: withInput,
    [`${className}`]: className
  });

  const classes = classNames({
    'Label-label': true,
    'Label--disabled': disabled
  });

  return (
    <div data-test="DesignSystem-Label" {...baseProps} className={LabelClass}>
      <GenericText className={classes} componentType="label" {...rest}>
        {children}
      </GenericText>
      {required && <span className="Label-requiredIndicator" data-test="DesignSystem-Label--RequiredIndicator"/>}
    </div>
  );
};

Label.displayName = 'Label';

export default Label;
