import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { Size } from '@/components/atoms/placeholderImage';
import { PlaceholderParagraphProps } from '@/components/atoms/placeholderParagraph';
export interface PlaceholderProps extends BaseProps {
    withImage?: boolean;
    round?: boolean;
    imageSize?: Size;
    children?: React.ReactElement<PlaceholderParagraphProps> | React.ReactElement<PlaceholderParagraphProps>[];
}
export declare const Placeholder: {
    (props: PlaceholderProps): JSX.Element;
    defaultProps: {
        withImage: boolean;
        imageSize: string;
    };
    displayName: string;
};
export default Placeholder;
