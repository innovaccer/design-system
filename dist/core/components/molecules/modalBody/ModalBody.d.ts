import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface ModalBodyProps extends BaseProps {
    children: React.ReactNode;
}
export declare const ModalBody: {
    (props: ModalBodyProps): JSX.Element;
    displayName: string;
};
export default ModalBody;
