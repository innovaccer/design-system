import * as React from 'react';
import { Text } from '@/index';
import { BaseProps } from '@/utils/types';

export interface DateSeparatorProps extends BaseProps {
  date: React.ReactText;
}

const DateSeparator: React.FC<DateSeparatorProps> = ({ date }) => {
  return (
    <Text
      appearance="subtle"
      className="pt-7 pb-6 d-flex justify-content-center"
      role="separator"
      aria-label={String(date)}
    >
      {date}
    </Text>
  );
};

export default DateSeparator;
