import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface ModalHeaderProps extends BaseProps {
    heading: string;
    onClose: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    subHeading?: string;
    seperator?: boolean;
    backIcon?: boolean;
    backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const ModalHeader: {
    (props: ModalHeaderProps): JSX.Element;
    displayName: string;
};
export default ModalHeader;
