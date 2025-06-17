import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface AvatarImageProps extends BaseProps {
    children?: React.ReactNode;
    src?: string;
}
export declare const AvatarImage: (props: AvatarImageProps) => React.JSX.Element;
export default AvatarImage;
