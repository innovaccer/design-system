import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface UnreadMessageProps extends BaseProps {
    text: string;
}
declare const UnreadMessage: React.FC<UnreadMessageProps>;
export default UnreadMessage;
