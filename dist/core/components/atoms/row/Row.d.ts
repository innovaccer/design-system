import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface RowProps extends BaseProps {
    children?: React.ReactNode;
}
export declare const Row: {
    (props: RowProps): JSX.Element;
    displayName: string;
};
export default Row;
