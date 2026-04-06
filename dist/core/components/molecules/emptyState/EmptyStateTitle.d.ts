import React from 'react';
import { BaseProps } from '@/utils/types';
export type EmptyTitleProps = {
    children: string | number;
} & BaseProps;
declare const EmptyStateTitle: (props: EmptyTitleProps) => React.JSX.Element;
export default EmptyStateTitle;
