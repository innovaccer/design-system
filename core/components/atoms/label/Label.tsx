import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { Text, Icon, Tooltip } from '@/index';
import { BaseHtmlProps, BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/label.module.css';

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
   * Shows the user that this field is required
   */
  required?: boolean;
  /**
   * Shows the user that this field is optional
   */
  optional?: boolean;
  /**
   * Adds default bottom margin of 4px
   */
  withInput?: boolean;
  /**
   * Text to show inside tooltip when hover on **info** icon
   */
  info?: string;
}

/**
 * *NOTE: Extends props with HTMLProps<HTMLLabelElement>*
 */
export const Label = (props: LabelProps) => {
  const { required, optional, withInput, disabled, children, className, info, ...rest } = props;

  const baseProps = extractBaseProps(props);

  const LabelClass = classNames(
    {
      [styles.Label]: true,
      [styles['Label--withInput']]: withInput,
      [styles['Label--optional']]: optional,
    },
    className
  );

  const classes = classNames({
    [styles['Label-text']]: true,
    [styles['Label--disabled']]: disabled,
  });

  const renderInfo = (isRequired = false, isOptional?: boolean) => {
    if (isRequired) {
      return <span className={styles['Label-requiredIndicator']} data-test="DesignSystem-Label--RequiredIndicator" />;
    }

    if (isOptional) {
      return (
        <Text data-test="DesignSystem-Label--OptionalText" appearance="subtle" className={styles['Label-optionalText']}>
          (optional)
        </Text>
      );
    }
    return null;
  };

  const renderIndicator = (info: string) => {
    return (
      <Tooltip tooltip={info}>
        <Icon
          data-test="DesignSystem-Label--Info"
          name="info"
          size={12}
          appearance="subtle"
          className="ml-3 cursor-pointer d-flex align-items-center"
        />
      </Tooltip>
    );
  };

  return (
    <div data-test="DesignSystem-Label" {...baseProps} className={LabelClass}>
      <GenericText data-test="DesignSystem-Label--Text" className={classes} componentType="label" {...rest}>
        {children}
        {renderInfo(required, optional)}
        {info && renderIndicator(info)}
      </GenericText>
    </div>
  );
};

Label.displayName = 'Label';

export default Label;
