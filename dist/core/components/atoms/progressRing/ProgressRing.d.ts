/// <reference types="react" />
export declare type Size = 'small' | 'regular';
export interface ProgressRingProps {
    size?: Size;
    value: number;
    max?: number;
}
export declare const ProgressRing: {
    (props: ProgressRingProps): JSX.Element;
    displayName: string;
};
export default ProgressRing;
