import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type NewMessageProps = {
    text: string;
} & BaseProps;
declare const NewMessage: React.FC<NewMessageProps>;
export default NewMessage;
