/// <reference types="react" />
import { MetaProps } from "./Meta";
import { IconProps, TextProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
export interface MetaListProps extends BaseProps {
    list: MetaProps[];
    seperator?: boolean;
    seperatorAppearance: IconProps['appearance'];
    iconAppearance: IconProps['appearance'];
    labelAppearance: TextProps['appearance'];
}
export declare const MetaList: {
    (props: MetaListProps): JSX.Element;
    displayName: string;
    defaultProps: {
        seperatorAppearance: string;
        iconAppearance: string;
        labelAppearance: string;
    };
};
export default MetaList;
