import * as React from 'react';
import { Size } from '@/components/atoms/placeholderImage';
export interface PlaceholderProps {
    withImage?: boolean;
    round?: boolean;
    imageSize?: Size;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare const Placeholder: {
    (props: PlaceholderProps): JSX.Element;
    displayName: string;
};
export default Placeholder;
