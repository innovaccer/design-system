import { IconProps, TextProps } from "../../../index.type";
import { MetaSize } from "./MetaList";
export interface MetaProps {
    label: string;
    icon?: string;
    iconAppearance?: IconProps['appearance'];
    labelAppearance?: TextProps['appearance'];
    size?: MetaSize;
}
export declare const Meta: {
    (props: MetaProps): JSX.Element;
    displayName: string;
};
export default Meta;
