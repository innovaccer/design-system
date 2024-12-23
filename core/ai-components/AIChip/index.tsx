import * as React from 'react';
import classNames from 'classnames';
import styles from '@css/ai-components/chip.module.css';

export interface AIChipProps extends React.ComponentProps<'button'> {
  /**
   * Label of `Chip`
   */
  label: string;
  /**
   * Defines name of Icon to be displayed inside `Chip`
   */
  icon: string;
  /**
   * Disables the `Chip`
   */
  disabled?: boolean;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `Chip`
   */
  className?: string;
}

export const AIChip = (props: AIChipProps) => {
  const { label, icon, disabled, name, className, ...rest } = props;

  const ChipClassNames = classNames(
    {
      [styles.AIChip]: true,
      [styles['AIChip--disabled']]: disabled,
    },
    className
  );

  const IconClassNames = classNames({
    [styles['AIChip-icon']]: true,
    [styles['AIChip-icon--disabled']]: disabled,
    ['material-symbols']: true,
    ['material-symbols-rounded']: true,
  });

  const TextClassNames = classNames({
    [styles['AIChip-text']]: true,
    [styles['AIChip-text--disabled']]: disabled,
  });

  return (
    <button type="button" data-test="DesignSystem-AI-Chip" className={ChipClassNames} disabled={disabled} {...rest}>
      <i data-test="DesignSystem-AI-Chip-Icon" className={IconClassNames}>
        {icon}
      </i>

      <span data-test="DesignSystem-AI-Chip-Text" className={TextClassNames}>
        {label}
      </span>
    </button>
  );
};

export default AIChip;
