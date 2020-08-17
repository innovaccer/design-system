/// <reference types="react" />
import { BaseProps } from "../../../utils/types";
export interface MetaProps extends BaseProps {
    label: string;
    icon?: string;
}
export declare const Meta: {
    (props: MetaProps): JSX.Element;
    displayName: string;
};
export default Meta;
