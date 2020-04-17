import * as React from 'react';
export interface ModalHeaderProps {
    icon?: string;
    heading?: string;
    onClose: (reason?: string, event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    subHeading?: string;
}
export declare const ModalHeader: React.FunctionComponent<ModalHeaderProps>;
export default ModalHeader;
