/// <reference types="react" />
import { MetaProps } from "./Meta";
import { BaseProps } from "../../../utils/types";
export interface MetaListProps extends BaseProps {
    list: MetaProps[];
    seperator?: boolean;
}
export declare const MetaList: {
    (props: MetaListProps): JSX.Element;
    displayName: string;
};
export default MetaList;
