import * as React from 'react';
import { TSaraStates, TBaseHtmlProps } from '../common.type';
export interface SaraProps extends TBaseHtmlProps<HTMLDivElement> {
    size?: number;
    state?: TSaraStates;
    alt?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    'data-test'?: string;
}
export declare const Sara: (props: SaraProps) => React.JSX.Element;
export default Sara;
