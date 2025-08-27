import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type UnreadMessageProps = {
    text: string;
} & BaseProps;
declare const UnreadMessage: React.FC<UnreadMessageProps>;
export default UnreadMessage;
