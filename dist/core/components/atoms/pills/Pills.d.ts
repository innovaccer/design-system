/// <reference types="react" />
import { BaseProps } from '@/utils/types';
export declare type Appearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';
export interface PillsProps extends BaseProps {
    appearance?: Appearance;
    subtle?: boolean;
    children: string;
}
export declare const Pills: {
    (props: PillsProps): JSX.Element;
    displayName: string;
};
export default Pills;
