import * as React from 'react';
import { BaseProps } from "../../../../utils/types";
export interface NewMessageProps extends BaseProps {
    text: string;
}
declare const NewMessage: React.FC<NewMessageProps>;
export default NewMessage;
