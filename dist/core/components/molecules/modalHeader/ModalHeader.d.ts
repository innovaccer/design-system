import * as React from 'react';
export interface ModalHeaderProps {
    icon?: string;
    heading?: string;
    onClose: (reason?: string, event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    subHeading?: string;
}
export declare const ModalHeader: {
    (props: ModalHeaderProps): JSX.Element;
    displayName: string;
};
export default ModalHeader;
