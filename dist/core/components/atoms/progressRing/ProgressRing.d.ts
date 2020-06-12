/// <reference types="react" />
export declare type Size = 'small' | 'regular';
export interface ProgressRingProps {
    size?: Size;
    value: number;
    onChange?: (value: number) => void;
}
export declare const useIsMount: () => boolean;
export declare const ProgressRing: {
    (props: ProgressRingProps): JSX.Element;
    displayName: string;
};
export default ProgressRing;
