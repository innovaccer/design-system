import { BaseProps } from "../../../utils/types";
import { MessageAppearance } from "../../../common.type";
export declare type MessageSize = 'regular' | 'small';
export interface InlineMessageProps extends BaseProps {
    appearance: MessageAppearance;
    description: string;
    size: MessageSize;
}
export declare const InlineMessage: {
    (props: InlineMessageProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        description: string;
        size: string;
    };
};
export default InlineMessage;
