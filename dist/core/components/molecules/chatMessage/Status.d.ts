import { BaseProps } from "../../../utils/types";
export declare type StatusType = 'failed' | 'sending' | 'sent' | 'read' | 'urgent';
export interface StatusProps extends BaseProps {
    type: StatusType;
    time?: string | number;
    readText?: string;
    failedText?: string;
    sendingText?: string;
}
export declare const Status: {
    (props: StatusProps): JSX.Element | null;
    displayName: string;
};
export default Status;
