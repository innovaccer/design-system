import * as React from 'react';
import { TSaraSparkleStates, TBaseHtmlProps } from '../common.type';
export interface SaraSparkleProps extends TBaseHtmlProps<HTMLDivElement> {
    size?: number;
    state?: TSaraSparkleStates;
    alt?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    'data-test'?: string;
}
export declare const SaraSparkle: {
    (props: SaraSparkleProps): React.JSX.Element;
    defaultProps: {
        size: number;
        state: string;
    };
};
export default SaraSparkle;
