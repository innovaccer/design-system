import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type ValueElementProps = {
    children?: React.ReactNode;
    value?: string | number;
} & BaseProps;
export declare const ValueElement: (props: ValueElementProps) => React.JSX.Element;
export default ValueElement;
