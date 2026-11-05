import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface ModalHeaderProps extends BaseProps {
    heading?: string;
    onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    subHeading?: string;
    seperator?: boolean;
    backIcon?: boolean;
    backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    headingId?: string;
    headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const ModalHeader: {
    (props: ModalHeaderProps): React.JSX.Element;
    displayName: string;
};
export default ModalHeader;
