import { MetaSize } from "./MetaList";
export interface MetaProps {
    label: string;
    icon?: string;
    size?: MetaSize;
}
export declare const Meta: {
    (props: MetaProps): JSX.Element;
    displayName: string;
};
export default Meta;
