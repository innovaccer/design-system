import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type CardFooterProps = {
    children: React.ReactNode;
    withSeperator?: boolean;
} & BaseProps;
export declare const CardFooter: {
    (props: CardFooterProps): React.JSX.Element;
    displayName: string;
};
export default CardFooter;
