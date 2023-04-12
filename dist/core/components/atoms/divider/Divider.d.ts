import { BaseProps } from "../../../utils/types";
declare type DividerType = 'basic' | 'header';
export interface DividerProps extends BaseProps {
    vertical: boolean;
    appearance: DividerType;
}
export declare const Divider: {
    (props: DividerProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        vertical: boolean;
    };
};
export default Divider;
