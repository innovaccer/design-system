import { BaseProps } from "../../../utils/types";
export interface HelpTextProps extends BaseProps {
    message?: string;
    error?: boolean;
}
export declare const HelpText: {
    (props: HelpTextProps): JSX.Element | null;
    displayName: string;
};
export default HelpText;
