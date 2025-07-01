import * as React from 'react';
import { Text } from '@/index';
import { BaseProps } from '@/utils/types';
import classNames from 'classnames';

export interface DateSeparatorProps extends BaseProps {
  /**
   * Specifies the date to be displayed
   */
  date: string | number;
}

const DateSeparator: React.FC<DateSeparatorProps> = (props) => {
  const { date, className, ...rest } = props;
  return (
    <Text
      appearance="subtle"
      className={classNames('pt-7 pb-6 d-flex justify-content-center', className)}
      role="separator"
      aria-label={String(date)}
      data-test="DesignSystem-Chat-DateSeparator"
      {...rest}
    >
      {date}
    </Text>
  );
};

export default DateSeparator;
