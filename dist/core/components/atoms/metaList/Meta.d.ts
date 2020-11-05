/// <reference types="react" />
import { IconProps, TextProps } from "../../../index.type";
export interface MetaProps {
    label: string;
    icon?: string;
    iconAppearance?: IconProps['appearance'];
    labelAppearance?: TextProps['appearance'];
}
export declare const Meta: {
    (props: MetaProps): JSX.Element;
    displayName: string;
};
export default Meta;
