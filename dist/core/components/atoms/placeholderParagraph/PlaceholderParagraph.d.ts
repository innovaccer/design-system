import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type Length = 'small' | 'medium' | 'large';
export type PlaceholderParagraphSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
export type PlaceholderParagraphProps = {
    length?: Length;
    size?: PlaceholderParagraphSize;
} & BaseProps;
export declare const PlaceholderParagraph: {
    (props: PlaceholderParagraphProps): React.JSX.Element;
    displayName: string;
};
export default PlaceholderParagraph;
