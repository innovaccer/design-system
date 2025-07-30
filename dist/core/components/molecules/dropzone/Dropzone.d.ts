import * as React from 'react';
import { DropzoneBaseProps } from './DropzoneBase';
import { BaseProps } from '@/utils/types';
export type DropZoneType = 'standard' | 'compressed' | 'tight';
export type DropzoneProps = {
    formatLabel?: string;
    type?: DropZoneType;
    sizeLabel?: string;
    sampleFileLink?: React.ReactNode;
} & BaseProps & DropzoneBaseProps;
export declare const Dropzone: {
    (props: DropzoneProps): React.JSX.Element;
    displayName: string;
};
export default Dropzone;
