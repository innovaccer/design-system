import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type ModalDescriptionProps = {
    title?: string;
    description?: string;
} & BaseProps;
export declare const ModalDescription: {
    (props: ModalDescriptionProps): React.JSX.Element;
    displayName: string;
};
export default ModalDescription;
