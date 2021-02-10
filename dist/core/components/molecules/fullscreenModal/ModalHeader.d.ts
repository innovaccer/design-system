import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface ModalHeaderProps extends BaseProps {
    heading?: string;
    subHeading?: string;
    backButton?: boolean;
    backButtonCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const ModalHeader: {
    (props: ModalHeaderProps): JSX.Element;
    displayName: string;
};
export default ModalHeader;
