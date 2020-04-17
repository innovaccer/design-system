import * as React from 'react';
import { Size } from '@/components/atoms/placeholderImage';
export interface PlaceholderProps {
    withImage?: boolean;
    round?: boolean;
    imageSize?: Size;
    style?: React.CSSProperties;
}
export declare const Placeholder: React.FunctionComponent<PlaceholderProps>;
export default Placeholder;
