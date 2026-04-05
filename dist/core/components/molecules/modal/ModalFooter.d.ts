import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface ModalFooterProps extends BaseProps {
    open?: boolean;
    children: React.ReactNode;
    stickToBottom?: boolean;
    seperator?: boolean;
    inSidesheet?: boolean;
}
export declare const ModalFooter: {
    (props: ModalFooterProps): React.JSX.Element;
    displayName: string;
};
export default ModalFooter;
