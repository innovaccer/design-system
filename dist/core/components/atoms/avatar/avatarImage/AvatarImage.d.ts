import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type AvatarImageProps = {
    children?: React.ReactNode;
    src?: string;
} & BaseProps;
export declare const AvatarImage: (props: AvatarImageProps) => React.JSX.Element;
export default AvatarImage;
