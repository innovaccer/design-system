import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { PlaceholderImageSize } from '@/components/atoms/placeholderImage';
import { PlaceholderParagraphProps } from '@/components/atoms/placeholderParagraph';
export type PlaceholderProps = {
    withImage?: boolean;
    round?: boolean;
    imageSize?: PlaceholderImageSize;
    children?: React.ReactElement<PlaceholderParagraphProps> | React.ReactElement<PlaceholderParagraphProps>[];
} & BaseProps;
export declare const Placeholder: {
    (props: PlaceholderProps): React.JSX.Element;
    displayName: string;
};
export default Placeholder;
