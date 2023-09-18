import { MetaSize } from "./MetaList";
import { FontVariationType } from "../../../common.type";
export interface MetaProps {
    label: string;
    icon?: string;
    size?: MetaSize;
    iconVariations?: FontVariationType;
}
export declare const Meta: {
    (props: MetaProps): JSX.Element;
    displayName: string;
};
export default Meta;
