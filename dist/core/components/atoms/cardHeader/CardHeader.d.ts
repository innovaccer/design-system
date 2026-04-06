import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type CardHeaderProps = {
    children: React.ReactNode;
} & BaseProps;
export declare const CardHeader: {
    (props: CardHeaderProps): React.JSX.Element;
    displayName: string;
};
export default CardHeader;
