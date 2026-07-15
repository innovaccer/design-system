import React from 'react';
import { BaseProps } from '@/utils/types';
export type EmptyDescriptionProps = {
    children: string | number;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & BaseProps;
declare const EmptyStateTitle: (props: EmptyDescriptionProps) => React.JSX.Element;
export default EmptyStateTitle;
