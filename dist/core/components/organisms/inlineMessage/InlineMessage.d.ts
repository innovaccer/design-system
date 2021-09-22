import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
export interface InlineMessageProps extends BaseProps {
    appearance: Appearance;
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
