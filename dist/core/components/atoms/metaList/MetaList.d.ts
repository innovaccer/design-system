import { MetaProps } from "./Meta";
import { IconProps, TextProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
export declare type MetaSize = 'small' | 'regular';
export interface MetaListProps extends BaseProps {
    list: MetaProps[];
    seperator?: boolean;
    seperatorAppearance: IconProps['appearance'];
    iconAppearance: IconProps['appearance'];
    labelAppearance: TextProps['appearance'];
    size?: MetaSize;
}
export declare const MetaList: {
    (props: MetaListProps): JSX.Element;
    displayName: string;
    defaultProps: {
        seperatorAppearance: string;
        iconAppearance: string;
        labelAppearance: string;
        size: string;
    };
};
export default MetaList;
