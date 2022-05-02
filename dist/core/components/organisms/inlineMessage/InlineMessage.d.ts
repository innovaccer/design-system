import { BaseProps } from "../../../utils/types";
import { MessageAppearance } from "../../../common.type";
export interface InlineMessageProps extends BaseProps {
    appearance: MessageAppearance;
    description: string;
}
export declare const InlineMessage: {
    (props: InlineMessageProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        description: string;
    };
};
export default InlineMessage;
