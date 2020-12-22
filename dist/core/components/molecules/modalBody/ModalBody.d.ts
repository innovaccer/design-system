import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface ModalBodyProps extends BaseProps {
    children: React.ReactNode;
    stickFooter: boolean;
}
export declare const ModalBody: {
    (props: ModalBodyProps): JSX.Element;
    defaultProps: {
        stickFooter: boolean;
    };
    displayName: string;
};
export default ModalBody;
