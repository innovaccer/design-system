import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface ModalFooterProps extends BaseProps {
    children: React.ReactElement[];
}
export declare const ModalFooter: {
    (props: ModalFooterProps): JSX.Element;
    displayName: string;
};
export default ModalFooter;
