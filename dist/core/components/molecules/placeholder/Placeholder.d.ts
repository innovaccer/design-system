import * as React from 'react';
import { Size } from '@/components/atoms/placeholderImage';
import { PlaceholderParagraphProps } from '@/components/atoms/placeholderParagraph';
export interface PlaceholderProps {
    withImage?: boolean;
    round?: boolean;
    imageSize?: Size;
    style?: React.CSSProperties;
    children?: React.ReactElement<PlaceholderParagraphProps> | React.ReactElement<PlaceholderParagraphProps>[];
}
export declare const Placeholder: {
    (props: PlaceholderProps): JSX.Element;
    displayName: string;
};
export default Placeholder;
