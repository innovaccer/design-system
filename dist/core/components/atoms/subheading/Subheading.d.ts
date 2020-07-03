/// <reference types="react" />
import { BaseProps } from '@/utils/types';
export declare type Appearance = 'default' | 'subtle' | 'disabled' | 'white';
export interface SubheadingProps extends BaseProps {
    children: string;
    appearance?: Appearance;
}
export declare const Subheading: {
    (props: SubheadingProps): JSX.Element;
    displayName: string;
};
export default Subheading;
