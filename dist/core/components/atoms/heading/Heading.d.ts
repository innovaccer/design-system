/// <reference types="react" />
import { BaseProps } from '@/utils/types';
export declare type Size = 's' | 'm' | 'l' | 'xl' | 'xxl';
export declare type Appearance = 'default' | 'subtle' | 'disabled' | 'white';
export interface HeadingProps extends BaseProps {
    children: string;
    appearance?: Appearance;
    size?: Size;
}
export declare const Heading: {
    (props: HeadingProps): JSX.Element;
    defaultProps: {
        appearance: string;
        size: string;
    };
    displayName: string;
};
export default Heading;
