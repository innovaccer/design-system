import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface ModalHeaderProps extends BaseProps {
    icon?: string;
    heading?: string;
    onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    subHeading?: string;
}
export declare const ModalHeader: {
    (props: ModalHeaderProps): JSX.Element;
    displayName: string;
};
export default ModalHeader;
