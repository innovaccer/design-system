import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
export type ActionCardProps = {
    children: React.ReactNode;
    disabled?: boolean;
    zIndex?: number;
    onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent) => void;
} & BaseProps & BaseHtmlProps<HTMLDivElement>;
export declare const ActionCard: {
    (props: ActionCardProps): React.JSX.Element;
    displayName: string;
};
export default ActionCard;
