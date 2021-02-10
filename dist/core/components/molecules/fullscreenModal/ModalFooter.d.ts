import { BaseProps } from "../../../utils/types";
import { ButtonProps } from "../../../index.type";
export interface ModalFooterProps extends BaseProps {
    open?: boolean;
    actions: ButtonProps[];
}
export declare const ModalFooter: {
    (props: ModalFooterProps): JSX.Element;
    defaultProps: {
        actions: never[];
    };
    displayName: string;
};
export default ModalFooter;
