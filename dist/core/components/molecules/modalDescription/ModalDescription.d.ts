import { BaseProps } from "../../../utils/types";
export interface ModalDescriptionProps extends BaseProps {
    title?: string;
    description?: string;
    removePadding?: boolean;
}
export declare const ModalDescription: {
    (props: ModalDescriptionProps): JSX.Element;
    displayName: string;
};
export default ModalDescription;
